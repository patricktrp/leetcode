import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CodeRunResult } from "@/services/api/problems"
import { useState } from "react"
import { ScrollArea } from "@/components/ui/scroll-area"

export type TestCasePanelProps = {
    results?: CodeRunResult
}

const TestCasePanel: React.FC<TestCasePanelProps> = ({ results }) => {
    const [activeTab, setActiveTab] = useState<string>("1")
    return (
        <>
            <div className="bg-secondary flex items-center justify-between h-14 px-4">
                <div>Output</div>
                <div>
                    <Tabs defaultValue={activeTab} onValueChange={(tab) => setActiveTab(tab)}>
                        <TabsList>
                            <TabsTrigger value="1">Custom Output</TabsTrigger>
                            <TabsTrigger value="2">Raw Output</TabsTrigger>
                        </TabsList>
                    </Tabs>
                </div>
                <div></div>
            </div>
            <ScrollArea className="h-full">
                <div className="p-4">
                    {!results && <div className="flex h-full items-center justify-center text-muted-foreground"><h4>Run or Submit Code to view Results</h4></div>}
                    {results && activeTab === "2" && <div className={`text-${results.passedAll ? 'easy' : 'hard'}`}>{results.rawOutput.split("\n").map(x => <p key={Math.random()}>{x}</p>)}</div>}
                </div>
            </ScrollArea >
        </>
    )
}

export default TestCasePanel