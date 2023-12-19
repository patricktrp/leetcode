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
                <div className="p-5">
                    {!results && <div className="flex h-full items-center justify-center text-muted-foreground"><h4>Run or Submit Code to view Results</h4></div>}
                    {results && activeTab === "2" &&
                        <div className="mb-16">{results.testResults.map((x, idx) =>
                            <div className="mb-4">
                                <h3 className={`text-${x.passed ? 'easy' : 'hard'}`}>Test Case {idx + 1}</h3>
                                <div className="w-full p-4 bg-secondary rounded-lg mt-2 min-h-[55px]">
                                    {x.rawOutput.split("\n").map(xx => <div>{xx}</div>)}
                                </div>
                            </div>
                        )}
                        </div>
                    }
                    {results && activeTab === "1" &&
                        <div className="mb-16">{results.testResults.map((x, idx) =>
                            <div className="mb-4">
                                <h3 className={`text-${x.passed ? 'easy' : 'hard'}`}>Test Case {idx + 1}</h3>
                                <div className="w-full p-4 bg-secondary rounded-lg mt-2">
                                    <div key={Math.random()}>
                                        <div>Input {JSON.stringify(x.input)}</div>
                                        <div>Expected: {JSON.stringify(x.expectedOutput)}</div>
                                        <div>Actual: {JSON.stringify(x.actualOutput)}</div>
                                    </div>
                                </div>
                            </div>
                        )}
                        </div>
                    }
                    {/* {JSON.stringify(results)} */}
                </div>
            </ScrollArea >
        </>
    )
}

export default TestCasePanel