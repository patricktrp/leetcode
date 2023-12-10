import { useAuth0 } from "@auth0/auth0-react";
import { Editor } from '@monaco-editor/react';
import { QueryClient, useQuery, useQueryClient } from '@tanstack/react-query';
import { debounce } from "lodash";
import { useState } from 'react';
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getDrafts, getProblemById, runSolution, updateDraft } from "../api/problems";
import ProblemDescription from "../components/ProblemDescription";
import ProblemNavbar from "../components/ProblemNavbar";
import useAccessToken from '../hooks/useAccessToken';
import { FaArrowRotateLeft } from 'react-icons/fa6';

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

    const runSolutionHandler = async () => {
        return runSolution(accessToken, problemId, programmingLanguage, drafts[activeDraft - 1]?.code);
        // return result;
    }

    const toastifiedSolutionHandler = async () => {
        if (!isAuthenticated) {
            loginWithRedirect()
        }
        await toast.promise(runSolutionHandler, { "pending": "Running your code...", success: "All tests passed!", error: "hmm.." })
    }

    return (
        <div>
            <ProblemNavbar isAuthenticated={isAuthenticated} login={loginWithRedirect} />
            <PanelGroup autoSaveId="example" direction="horizontal" style={{ height: "94vh" }}>
                <Panel defaultSizePercentage={50} style={{ backgroundColor: '#1e1e1e', color: '#fdfdfd', margin: '0 8px 20px 15px', borderRadius: '7px' }}>
                    <ProblemDescription problem={problem} />
                </Panel>
                <PanelResizeHandle />
                <Panel defaultSizePercentage={50}>
                    <PanelGroup autoSaveId="example2" direction="vertical">
                        <Panel defaultSizePercentage={55} style={{ backgroundColor: '#1e1e1e', color: '#fdfdfd', margin: '0 15px 8px 8px', borderRadius: '7px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '50px', width: '100%', backgroundColor: '#333', marginBottom: '15px' }}>
                                <button style={{ backgroundColor: '#1e1e1e', border: 'none', padding: '10px', borderRadius: '3px', color: 'white', cursor: 'pointer' }} onClick={() => resetCodeHandler()}><FaArrowRotateLeft />
                                </button>
                                <button style={{ backgroundColor: '#1e1e1e', border: 'none', padding: '10px', borderRadius: '3px', color: 'white', cursor: 'pointer' }} onClick={toastifiedSolutionHandler}>Run Code</button>
                                {/* <button onClick={() => setActiveDraft(1)}>1</button>
                                <button onClick={() => setActiveDraft(2)}>2</button>
                                <button onClick={() => setActiveDraft(3)}>3</button> */}
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
                        <PanelResizeHandle />
                        <Panel defaultSizePercentage={45} style={{ backgroundColor: '#1e1e1e', color: '#fdfdfd', margin: '8px 15px 20px 8px', borderRadius: '7px' }}>
                            test cases go here
                        </Panel>
                    </PanelGroup>
                </Panel>
            </PanelGroup>
            <ToastContainer
                position="bottom-right"
                theme="dark"
            />
        </div >
    )
}

export default ProblemDetail;