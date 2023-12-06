import styled from "@emotion/styled";
import { getProblemById } from "../api/problems";
import { QueryClient, useQuery } from '@tanstack/react-query'
import { useParams } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { useState } from 'react';
import Editor from '@monaco-editor/react';

const Navbar = styled.nav`
    width: 100%;
    height: 5vh;
    background-color: #121212;
`

const problemDetailQuery = (problemId: string) => ({
    queryKey: ['problems', problemId],
    queryFn: async () => getProblemById(problemId)
})

export const loader = (queryClient: QueryClient) => async ({ params }) => {
    const query = problemDetailQuery(params.problemId);

    return queryClient.getQueryData(query.queryKey) ?? (await queryClient.fetchQuery(query))
}

const ProblemDetail = () => {
    const params = useParams();
    const { data: problem } = useQuery(problemDetailQuery(params.problemId));
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    const [programmingLanguage, setProgrammingLanguage] = useState("PYTHON");

    return (
        <div>
            <Navbar>

            </Navbar>
            <PanelGroup autoSaveId="example" direction="horizontal">
                <Panel defaultSizePercentage={50} style={{ backgroundColor: '#1e1e1e', color: '#fdfdfd', height: '800px', margin: '0 10px 0 20px', padding: '20px', borderRadius: '15px' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <h2 style={{ marginRight: '15px' }}>{problem?.problemName}</h2>
                        <div style={{ height: '25px', width: '25px', borderRadius: '8px', backgroundColor: 'lightgreen' }}></div>
                    </div>
                    <p>{problem?.description}</p>
                    <code style={{ display: 'block' }}>{problem?.sampleInput}</code>
                    <code style={{ display: 'block' }}>{problem?.sampleOutput}</code>
                    <h3>Hints:</h3>
                    <div>{problem?.hints.map(hint => <p>{hint}</p>)}</div>
                    <code>{problem?.optimalComplexity}</code>
                </Panel>
                <PanelResizeHandle />
                <Panel defaultSizePercentage={50} style={{ backgroundColor: '#1e1e1e', height: '800px', color: '#fdfdfd', margin: '0 20px 0 10px', padding: '20px', borderRadius: '15px' }}>
                    <Editor height="80%"
                        // defaultLanguage={problem?.placeHolderCode[programmingLanguage].toLowerCase()}
                        theme="vs-dark"
                        language={programmingLanguage.toLowerCase()}
                        value={problem?.placeHolderCode[programmingLanguage]}
                        onChange={(e) => console.log(e)}
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
            </PanelGroup>;
            <button onClick={() => setProgrammingLanguage("JAVASCRIPT")}>Javascript</button>
            <button onClick={() => setProgrammingLanguage("PYTHON")}>Python</button>
            <button onClick={() => isAuthenticated ? console.log("RUN CODE") : loginWithRedirect()}>Run Code</button>
            {/* <button onClick={() => setCode(problem.placeHolderCode[programmingLanguage])}>Reset</button> */}
        </div>
    )
}

export default ProblemDetail;