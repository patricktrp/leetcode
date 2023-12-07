import styled from "@emotion/styled";
import { getDrafts, getProblemById, updateDraft } from "../api/problems";
import { QueryClient, useQuery, useQueryClient } from '@tanstack/react-query'
import { useParams } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { useState } from 'react';
import Editor from '@monaco-editor/react';
import ProblemNavbar from "../components/ProblemNavbar";
import { debounce } from "lodash";
import useAccessToken from '../hooks/useAccessToken'
import ProblemDescription from "../components/ProblemDescription";

export type ProblemDetailParams = {
    problemId: string
}

const problemDetailQuery = (problemId: string) => ({
    queryKey: ['problems', problemId],
    queryFn: async () => getProblemById(problemId)
});

const draftQuery = (token: string, problemId: string, programmingLanguage: string) => ({
    queryKey: ['problems', problemId, 'drafts', programmingLanguage],
    queryFn: async () => getDrafts(token, problemId, programmingLanguage),
    enabled: !!token
});

export const loader = (queryClient: QueryClient) => async ({ params }) => {
    const query = problemDetailQuery(params.problemId);

    return queryClient.getQueryData(query.queryKey) ?? (await queryClient.fetchQuery(query))
}

const ProblemDetail = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    const { accessToken } = useAccessToken();
    const { problemId } = useParams<ProblemDetailParams>();

    const [activeDraft, setActiveDraft] = useState(1);

    const [programmingLanguage, setProgrammingLanguage] = useState("PYTHON");

    const { data: problem } = useQuery(problemDetailQuery(problemId));
    const { data: drafts } = useQuery(draftQuery(accessToken, problemId, programmingLanguage));
    const client = useQueryClient();

    const handleUpdate = async (updatedCode: string) => {
        await updateDraft(accessToken, problemId, programmingLanguage, activeDraft, updatedCode);
        await client.invalidateQueries({ queryKey: ['problems', problemId, 'drafts', programmingLanguage] })
    }
    const debouncedHandleUpdate = debounce(handleUpdate, 500);

    const resetCodeHandler = async () => {
        await handleUpdate(problem.placeHolderCode[programmingLanguage]);
        await client.invalidateQueries({ queryKey: ['problems', problemId, 'drafts', programmingLanguage] })
    }

    return (
        <div>
            <ProblemNavbar />
            <PanelGroup autoSaveId="example" direction="horizontal">
                <Panel defaultSizePercentage={50} style={{ backgroundColor: '#1e1e1e', color: '#fdfdfd', height: '800px', margin: '0 10px 0 20px', borderRadius: '15px' }}>
                    <ProblemDescription problem={problem} />
                </Panel>
                <PanelResizeHandle />
                <Panel defaultSizePercentage={50} style={{ backgroundColor: '#1e1e1e', height: '800px', color: '#fdfdfd', margin: '0 20px 0 10px', borderRadius: '15px' }}>
                    <div style={{ height: '50px', width: '100%', backgroundColor: '#333', marginBottom: '50px' }}>
                        <button onClick={() => resetCodeHandler()}>Reset</button>
                        <button onClick={() => setProgrammingLanguage("JAVASCRIPT")}>Javascript</button>
                        <button onClick={() => setProgrammingLanguage("PYTHON")}>Python</button>
                        <button onClick={() => isAuthenticated ? console.log("RUN CODE") : loginWithRedirect()}>Run Code</button>
                        <button onClick={() => setActiveDraft(1)}>1</button>
                        <button onClick={() => setActiveDraft(2)}>2</button>
                        <button onClick={() => setActiveDraft(3)}>3</button>
                    </div>
                    <Editor height="80%"
                        // defaultLanguage={problem?.placeHolderCode[programmingLanguage].toLowerCase()}
                        theme="vs-dark"
                        language={programmingLanguage.toLowerCase()}
                        value={drafts && drafts[activeDraft - 1] ? drafts[activeDraft - 1].code : problem?.placeHolderCode[programmingLanguage]}
                        onChange={debouncedHandleUpdate}
                        options={
                            {
                                scrollBeyondLastLine: false,
                                fontSize: 18,
                                minimap: {
                                    enabled: false
                                },
                            }
                        }

                    />
                </Panel>
            </PanelGroup>
        </div>
    )
}

export default ProblemDetail;