import { useLoaderData } from "react-router-dom"
import WorkspaceNavbar from "@/components/WorkspaceNavbar"
import { useAuth0 } from "@auth0/auth0-react"
import { useState } from "react"
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels"
import { GripVerticalIcon, GripHorizontalIcon } from "lucide-react"
import EditorPanel from "@/components/EditorPanel"
import DescriptionPanel from "@/components/DescriptionPanel"
import TestCasePanel from "@/components/TestCasePanel"
import { QueryClient } from '@tanstack/react-query'
import { Problem, getProblemById } from "@/services/api/problems"

const problemDetailQuery = (problemId: string) => ({
    queryKey: ['problems', problemId],
    queryFn: async () => getProblemById(problemId)
});

// eslint-disable-next-line react-refresh/only-export-components
export const loader = (queryClient: QueryClient) => async ({ params }: ProblemWorkspaceParams) => {
    const query = problemDetailQuery(params.problemId);
    return queryClient.getQueryData(query.queryKey) ?? (await queryClient.fetchQuery(query))
}

export type ProgrammingLanguage = "python" | "javascript"
export type Draft = 1 | 2 | 3

type ProblemWorkspaceParams = {
    params: {
        problemId: string
    }
}

const ProblemWorkspace = () => {
    const { user, logout } = useAuth0();
    const [programmingLanguage, setProgrammingLanguage] = useState<ProgrammingLanguage>("python")
    const problem = useLoaderData() as Problem

    return (
        <div className="flex flex-col">
            <WorkspaceNavbar user={user} onLogout={logout} />

            <main className="h-[calc(94vh-1rem)] mx-4 mb-4 box-border">
                <PanelGroup direction="horizontal">
                    <Panel className="rounded-lg bg-card" minSize={25}>
                        <DescriptionPanel problem={problem} />
                    </Panel>
                    <PanelResizeHandle className="w-3 flex items-center justify-center"><GripVerticalIcon className="w-3 h-3" /></PanelResizeHandle>
                    <Panel minSize={25}>
                        <PanelGroup direction="vertical">
                            <Panel className="bg-card rounded-lg" defaultSize={60} minSize={30}>
                                <EditorPanel initialCode={problem.placeHolderCode} programmingLanguage={programmingLanguage} onChangeProgrammingLanguage={(newLanguage) => setProgrammingLanguage(newLanguage as ProgrammingLanguage)} />
                            </Panel>
                            <PanelResizeHandle className="h-3 flex items-center justify-center"><GripHorizontalIcon className="h-3 w-3" /></PanelResizeHandle>
                            <Panel className="bg-card rounded-lg" defaultSize={40} minSize={20}>
                                <TestCasePanel results={{}} />
                            </Panel>
                        </PanelGroup>
                    </Panel>
                </PanelGroup>
            </main>
        </div>
    )
}

export default ProblemWorkspace