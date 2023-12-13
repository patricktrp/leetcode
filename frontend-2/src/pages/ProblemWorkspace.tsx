import { useParams } from "react-router-dom"
import WorkspaceNavbar from "@/components/WorkspaceNavbar"
import { useAuth0 } from "@auth0/auth0-react"
import { useState } from "react"
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels"
import { GripVerticalIcon, GripHorizontalIcon } from "lucide-react"
import EditorPanel from "@/components/EditorPanel"
import DescriptionPanel from "@/components/DescriptionPanel"
import TestCasePanel from "@/components/TestCasePanel"

type ProblemWorkspaceParams = {
    problemId: string
}

export type ProgrammingLanguage = "python" | "javascript"

type Draft = 1 | 2 | 3

const ProblemWorkspace = () => {
    const { problemId } = useParams<ProblemWorkspaceParams>();
    const { user } = useAuth0();
    const [programmingLanguage, setProgrammingLanguage] = useState<ProgrammingLanguage>("python")
    const [activeDraft, setActiveDraft] = useState<Draft>(1)

    return (
        <div className="h-screen flex flex-col">
            <WorkspaceNavbar user={user} />
            {/* <div>{problemId}</div>
            <div>{programmingLanguage}</div> */}

            {/* <Select defaultValue={programmingLanguage} onValueChange={(language) => setProgrammingLanguage(language as ProgrammingLanguage)} >
                <SelectTrigger className="w-[180px]" >
                    <SelectValue />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="python">Python</SelectItem>
                    <SelectItem value="javascript">JavaScript</SelectItem>
                </SelectContent>
            </Select>

            <Separator />
            <div className="flex">

                <Tabs defaultValue="1" onValueChange={(v) => setActiveDraft(parseInt(v) as Draft)} className="m-8">
                    <TabsList>
                        <TabsTrigger value="1">Solution 1</TabsTrigger>
                        <TabsTrigger value="2">Solution 2</TabsTrigger>
                        <TabsTrigger value="3">Solution 3</TabsTrigger>
                    </TabsList>
                </Tabs>
                <Separator orientation="vertical" />
                <Button variant="secondary">Run</Button >
            </div> */}
            <main className=" mx-5 mb-5 h-full">
                <PanelGroup direction="horizontal">
                    <Panel className="rounded bg-card" minSize={25}>
                        <DescriptionPanel />
                    </Panel>
                    <PanelResizeHandle className="w-3 flex items-center justify-center"><GripVerticalIcon className="w-3 h-3" /></PanelResizeHandle>
                    <Panel minSize={25}>
                        <PanelGroup direction="vertical">
                            <Panel className="bg-card rounded" defaultSize={60} minSize={30}>
                                <EditorPanel programmingLanguage={programmingLanguage} onChangeProgrammingLanguage={(newLanguage) => setProgrammingLanguage(newLanguage)} />
                            </Panel>
                            <PanelResizeHandle className="h-2 flex items-center justify-center"><GripHorizontalIcon className="h-3 w-3" /></PanelResizeHandle>
                            <Panel className="bg-card rounded" defaultSize={40} minSize={20}>
                                <TestCasePanel />
                            </Panel>
                        </PanelGroup>
                    </Panel>
                </PanelGroup>
            </main>
        </div>
    )
}

export default ProblemWorkspace