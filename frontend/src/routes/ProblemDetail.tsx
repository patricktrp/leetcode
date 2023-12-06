import styled from "@emotion/styled";
import { getProblemById } from "../api/problems";
import { QueryClient, useQuery } from '@tanstack/react-query'
import { useParams } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { useState } from 'react';

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
            <Navbar></Navbar>
            <button onClick={() => isAuthenticated ? console.log("RUN CODE") : loginWithRedirect()}>Run Code</button>
            <PanelGroup autoSaveId="example" direction="horizontal">
                <Panel defaultSizePercentage={50} style={{ backgroundColor: '#1e1e1e', color: '#fdfdfd', height: '800px' }}>
                    <h1>{problem?.problemName}</h1>
                    <div>{problem?.difficulty}</div>
                    <div>{problem?.categories}</div>
                    <div>{problem?.description}</div>
                    <code>{problem?.sampleInput}</code>
                    <code>{problem?.sampleOutput}</code>
                    <h3>Hints:</h3>
                    <div>{problem?.hints.map(hint => <p>{hint}</p>)}</div>
                    <code>{problem?.optimalComplexity}</code>
                </Panel>
                <PanelResizeHandle />
                <Panel defaultSizePercentage={50} style={{ backgroundColor: '#1e1e1e', height: '800px', color: '#fdfdfd' }}>
                    <code>{problem?.placeHolderCode[programmingLanguage]}</code>
                </Panel>
            </PanelGroup>;
            <button onClick={() => setProgrammingLanguage("JAVASCRIPT")}>Javascript</button>
            <button onClick={() => setProgrammingLanguage("PYTHON")}>Python</button>
        </div>
    )
}

export default ProblemDetail;