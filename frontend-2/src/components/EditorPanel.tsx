import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Select, SelectValue, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select"
import { RotateCcw } from "lucide-react"

export type EditorPanelProps = {
    programmingLanguage: string
}

const EditorPanel: React.FC<EditorPanelProps> = ({ programmingLanguage }) => {
    return (
        <div>
            <div className="">
                <div className="bg-muted h-12 w-full flex items-center justify-between px-2">
                    <Select defaultValue={programmingLanguage} onValueChange={(language) => console.log(language)} >
                        <SelectTrigger className="w-[180px] h-9" >
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="python">Python</SelectItem>
                            <SelectItem value="javascript">JavaScript</SelectItem>
                        </SelectContent>
                    </Select>
                    <Tabs defaultValue="1" onValueChange={(v) => console.log(v)}>
                        <TabsList>
                            <TabsTrigger value="1">Solution 1</TabsTrigger>
                            <TabsTrigger value="2">Solution 2</TabsTrigger>
                            <TabsTrigger value="3">Solution 3</TabsTrigger>
                        </TabsList>
                    </Tabs>
                    <div>
                        {/* <Button size="sm" variant="outline"><RotateCcw className="h-4 w-4 p-0" /></Button> */}
                        <Button size="sm" variant="outline">Run</Button>
                    </div>
                </div>
            </div>
            <div className="p-5">{programmingLanguage}</div>
        </div>
    )
}

export default EditorPanel