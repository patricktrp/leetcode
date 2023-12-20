import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CodeRunResult } from "@/services/api/problems"
import { useState } from "react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"

export type TestCasePanelProps = {
    results?: CodeRunResult
}

const TestCasePanel: React.FC<TestCasePanelProps> = ({ results }) => {
    const [activeTab, setActiveTab] = useState<string>("1")
    return (
        <>
            <div className="bg-secondary flex items-center justify-center h-14 px-4">
                <Tabs defaultValue={activeTab} onValueChange={(tab) => setActiveTab(tab)}>
                    <TabsList className="bg-secondary">
                        <TabsTrigger value="1">Custom Output</TabsTrigger>
                        <TabsTrigger value="2">Raw Output</TabsTrigger>
                    </TabsList>
                </Tabs>
            </div>
            <ScrollArea className="h-full">
                <div className="p-9">
                    {!results && <div className="flex h-full w-full items-center justify-center text-muted-foreground"><h4>Run or Submit Code to view Results</h4></div>}
                    {results && activeTab === "1" &&
                        <div className="mb-16">{results.testResults.map((x, idx) =>
                            <div className="mb-4">
                                <div className="flex items-center">
                                    <div className={cn('mr-2 w-3 h-3 rounded-full bg-hard', { 'bg-easy': x.passed })}></div>
                                    <h3 className="mr-2">Test Case {idx + 1}</h3>
                                </div>
                                <div className="w-full p-4 bg-secondary rounded-lg mt-2 min-h-[55px]">
                                    <div className="flex items-center justify-between w-1/2 mb-2">
                                        <span>Input</span>
                                        <div className="bg-card p-2 rounded-lg">{JSON.stringify(x.input, null, 2)}</div>
                                    </div>
                                    <div className="flex items-center justify-between w-1/2 mb-2">
                                        <span>Expected Output</span>
                                        <div className="bg-card p-2 rounded-lg">{JSON.stringify(x.expectedOutput, null, 2)}</div>
                                    </div>
                                    <div className="flex items-center justify-between w-1/2 mb-2">
                                        <span>Actual Output</span>
                                        <div className="bg-card p-2 rounded-lg">{JSON.stringify(x.actualOutput, null, 2)}</div>
                                    </div>
                                </div>
                            </div>
                        )}
                        </div>
                    }
                    {results && activeTab === "2" &&
                        <div className="mb-16">{results.testResults.map((x, idx) =>
                            <div className="mb-4">
                                <div className="flex items-center">
                                    <div className={cn('mr-2 w-3 h-3 rounded-full bg-hard', { 'bg-easy': x.passed })}></div>
                                    <h3 className="mr-2">Test Case {idx + 1}</h3>
                                </div>
                                <div className="w-full p-4 bg-secondary rounded-lg mt-2 min-h-[55px]">
                                    {x.rawOutput.split("\n").map(xx => <div>{xx}</div>)}
                                </div>
                            </div>
                        )}
                        </div>
                    }
                </div>
            </ScrollArea >
        </>
    )
}

export default TestCasePanel