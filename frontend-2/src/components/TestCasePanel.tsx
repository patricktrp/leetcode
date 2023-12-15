import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export type TestCasePanelProps = {
    results: object
}

const TestCasePanel: React.FC<TestCasePanelProps> = ({ results }) => {
    return (
        <>
            <div className="bg-secondary flex items-center justify-between h-14 px-4">
                <div>Output</div>
                <div>
                    <Tabs defaultValue="1" onValueChange={(v) => console.log(v)}>
                        <TabsList>
                            <TabsTrigger value="1">Custom Output</TabsTrigger>
                            <TabsTrigger value="2">Raw Output</TabsTrigger>
                        </TabsList>
                    </Tabs>
                </div>
                <div></div>
            </div>
            {!results && <div className="flex h-full items-center justify-center text-muted-foreground"><h4>Run or Submit Code to view Results</h4></div>}
        </>
    )
}

export default TestCasePanel