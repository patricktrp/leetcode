import { useLoaderData } from "react-router-dom"
import WorkspaceNavbar from "@/components/WorkspaceNavbar"
import { useAuth0 } from "@auth0/auth0-react"
import { useState } from "react"
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels"
import { GripVerticalIcon, GripHorizontalIcon } from "lucide-react"
import EditorPanel from "@/components/EditorPanel"
import DescriptionPanel from "@/components/DescriptionPanel"
import TestCasePanel from "@/components/TestCasePanel"
import { QueryClient, useQuery } from '@tanstack/react-query'
import { CodeRunResult, Problem, getProblemById, runCode } from "@/services/api/problems"
import { ToastContainer, toast } from 'react-toastify';
import { CheckCheck, XCircle } from "lucide-react"
import 'react-toastify/dist/ReactToastify.css';
import { getDrafts } from "@/services/api/drafts"
import { useAccessToken } from "@/hooks/useAccessToken"

const problemDetailQuery = (problemId: string) => ({
    queryKey: ['problems', problemId],
    queryFn: async () => getProblemById(problemId)
});

const draftQuery = (token: string, problemId: string, programmingLanguage: string) => ({
    queryKey: ['problems', problemId, 'drafts', programmingLanguage],
    queryFn: async () => getDrafts(problemId, token, programmingLanguage),
    enabled: !!token
});

// eslint-disable-next-line react-refresh/only-export-components
export const loader = (queryClient: QueryClient) => async ({ params }: ProblemWorkspaceParams) => {
    const query = problemDetailQuery(params.problemId);
    return queryClient.getQueryData(query.queryKey) ?? (await queryClient.fetchQuery(query))
}

export type ProgrammingLanguage = "python" | "javascript" | "go"
export type Draft = 1 | 2 | 3

type ProblemWorkspaceParams = {
    params: {
        problemId: string
    }
}

const ProblemWorkspace = () => {
    const { user, logout, getAccessTokenSilently, loginWithRedirect, isAuthenticated } = useAuth0();
    const [programmingLanguage, setProgrammingLanguage] = useState<ProgrammingLanguage>("python")
    const problem = useLoaderData() as Problem
    const [codeIsRunning, setCodeIsRunning] = useState<boolean>(false)
    const [codeRunResult, setCodeRunResult] = useState<CodeRunResult>()
    const { accessToken } = useAccessToken()
    const { data: drafts } = useQuery(draftQuery(accessToken, problem.problemId, programmingLanguage));
    const [code, setCode] = useState<string>("")

    const runCodeHandler = async () => {
        setCodeIsRunning(true)
        const token = await getAccessTokenSilently()
        try {
            const res = await runCode(problem.problemId, code, programmingLanguage, token)
            setCodeRunResult(res)
            return res
        } catch (error) {
            console.log(error)
        } finally {
            setCodeIsRunning(false)
        }
    }

    const toastifyRunCodeHandler = () => toast.promise(runCodeHandler, {
        pending: "Running your code...",
        error: "Something went wrong",
        success: {
            render({ data }) {
                return data?.totalTestCases === data?.passedTestCases
                    ? <div className="flex items-center"><CheckCheck className="mr-2 text-primary" />{"Passed all test cases!"}</div>
                    : <div className="flex items-center"><XCircle className="mr-2 text-hard" />{"Failed some tests.."}</div>
            },
            icon: false,
            autoClose: 2000,
        }
    });

    const handleProgrammingLanguageChange = (newLanguage) => {
        setProgrammingLanguage(newLanguage as ProgrammingLanguage)
        setCodeRunResult()
    }

    return (
        <div className="flex flex-col">
            <WorkspaceNavbar user={user} onLogout={logout} isAuthenticated={isAuthenticated} login={loginWithRedirect} />

            <main className="h-[calc(94vh-1rem)] mx-4 mb-4 box-border">
                <PanelGroup direction="horizontal">
                    <Panel className="rounded-lg bg-card" minSize={25}>
                        <DescriptionPanel problem={problem} />
                    </Panel>
                    <PanelResizeHandle className="w-3 flex items-center justify-center"><GripVerticalIcon className="w-3 h-3" /></PanelResizeHandle>
                    <Panel minSize={25}>
                        <PanelGroup direction="vertical">
                            <Panel className="bg-card rounded-lg" defaultSize={60} minSize={30}>
                                <EditorPanel
                                    drafts={drafts}
                                    code={code}
                                    onCodeChange={(newCode: string) => setCode(newCode)}
                                    runCode={isAuthenticated ? toastifyRunCodeHandler : loginWithRedirect}
                                    codeIsRunning={codeIsRunning}
                                    initialCode={problem.placeHolderCode}
                                    programmingLanguage={programmingLanguage}
                                    onChangeProgrammingLanguage={handleProgrammingLanguageChange} />
                            </Panel>
                            <PanelResizeHandle className="h-3 flex items-center justify-center"><GripHorizontalIcon className="h-3 w-3" /></PanelResizeHandle>
                            <Panel className="bg-card rounded-lg" defaultSize={40} minSize={20}>
                                <TestCasePanel results={codeRunResult} />
                            </Panel>
                        </PanelGroup>
                    </Panel>
                </PanelGroup>
                <ToastContainer position="bottom-right" theme="dark" />
            </main>
        </div >
    )
}

export default ProblemWorkspace