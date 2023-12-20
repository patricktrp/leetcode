import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Select, SelectValue, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select"
import { Draft, ProgrammingLanguage } from "@/pages/ProblemWorkspace"
import { Editor, loader } from "@monaco-editor/react"
import { Skeleton } from "@/components/ui/skeleton"


loader.init().then((monaco) => {
    monaco.editor.defineTheme('customTheme', {
        base: 'vs-dark',
        inherit: true,
        rules: [],
        colors: {
            'editor.background': '#1c1917',
        },
    });
});

export type EditorPanelProps = {
    programmingLanguage: ProgrammingLanguage,
    onChangeProgrammingLanguage: (newLanguage: string) => void,
    initialCode: {
        PYTHON: string,
        JAVASCRIPT: string
    },
    codeIsRunning: boolean,
    runCode: () => Promise<string>,
    code: string,
    onCodeChange: (newCode: string | undefined) => void,
    drafts: Draft[]
}

const EditorPanel: React.FC<EditorPanelProps> = ({ programmingLanguage, onChangeProgrammingLanguage, initialCode, codeIsRunning, runCode, code, onCodeChange, drafts }) => {
    console.log(drafts)
    console.log(initialCode)
    return (
        <>
            <div className="bg-secondary flex items-center justify-between h-14 px-2">
                <Select defaultValue={programmingLanguage} onValueChange={onChangeProgrammingLanguage}>
                    <SelectTrigger className="w-[180px] bg-card">
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-card">
                        <SelectItem value="python">Python</SelectItem>
                        <SelectItem value="javascript">JavaScript</SelectItem>
                    </SelectContent>
                </Select>
                <Tabs defaultValue="1" onValueChange={(v) => console.log(v)}>
                    <TabsList className="bg-secondary">
                        <TabsTrigger value="1">Solution 1</TabsTrigger>
                        <TabsTrigger value="2">Solution 2</TabsTrigger>
                        <TabsTrigger value="3">Solution 3</TabsTrigger>
                    </TabsList>
                </Tabs>
                <Button size="sm" disabled={codeIsRunning} onClick={runCode}>Run</Button>
            </div>
            <div className="h-full w-full py-5 px-1">
                <Editor height={"85%"}
                    theme="customTheme"
                    onChange={onCodeChange}
                    value={code}
                    // value={drafts && drafts.length !== 0 ? drafts[0].code : initialCode[programmingLanguage.toLocaleUpperCase()]}
                    language={programmingLanguage.toLocaleLowerCase()}
                    loading={
                        <div className="w-full h-full mx-14">
                            <div className="space-y-2">
                                <Skeleton className="h-4 w-[280px] " />
                                <Skeleton className="ml-8 h-4 w-[200px] " />
                                <Skeleton className="ml-8 h-4 w-[50px] " />
                                <Skeleton className="ml-8 h-4 w-[120px] " />
                                <Skeleton className="ml-8 h-4 w-[70px] " />
                            </div>
                        </div>
                    }
                    options={
                        {
                            scrollBeyondLastLine: false,
                            fontSize: 18,
                            minimap: {
                                enabled: false,
                            },
                            contextmenu: false,
                            folding: false,
                        }
                    }
                />
            </div>
        </>
    )
}

export default EditorPanel