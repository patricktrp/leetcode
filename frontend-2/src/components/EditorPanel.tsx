import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export type EditorPanelProps = {
    programmingLanguage: string
}

const EditorPanel: React.FC<EditorPanelProps> = ({ programmingLanguage }) => {
    return (
        <div>
            <div className="">
                <Tabs defaultValue="1" onValueChange={(v) => console.log(v)}>
                    <TabsList>
                        <TabsTrigger value="1">Solution 1</TabsTrigger>
                        <TabsTrigger value="2">Solution 2</TabsTrigger>
                        <TabsTrigger value="3">Solution 3</TabsTrigger>
                    </TabsList>
                </Tabs>
            </div>
            <div>{programmingLanguage}</div>
        </div>
    )
}

export default EditorPanel