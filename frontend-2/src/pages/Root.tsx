import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { RotateCcw } from 'lucide-react'

type Draft = "1" | "2" | "3"
type ProgrammingLanguage = "PYTHON" | "JAVASCRIPT"

const Root = () => {
    const [activeDraft, setActiveDraft] = useState<Draft>("1")
    const [programmingLanguage, setProgrammingLanguage] = useState<ProgrammingLanguage>("PYTHON")
    return (
        <div className="m-96">
            <Tabs defaultValue="1" onValueChange={(v) => setActiveDraft(v as Draft)} className="w-[400px]">
                <TabsList>
                    <TabsTrigger value="1">1</TabsTrigger>
                    <TabsTrigger value="2">2</TabsTrigger>
                    <TabsTrigger value="3">3</TabsTrigger>
                </TabsList>
            </Tabs>
            {activeDraft}
            <Select defaultValue={programmingLanguage} onValueChange={(language) => setProgrammingLanguage(language as ProgrammingLanguage)} >
                <SelectTrigger className="w-[180px]" >
                    <SelectValue />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="PYTHON">Python</SelectItem>
                    <SelectItem value="JAVASCRIPT">JavaScript</SelectItem>
                </SelectContent>
            </Select>
            {programmingLanguage}
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button className="m-4"><RotateCcw className="w-4 h-4" /></Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Reset Code</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger>
                        <Button className="m-4" variant="secondary">Run</Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Run against Test Cases</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
            <Button className="m-12" variant={"secondary"}>Run</Button>
            <Button className="m-12" variant={"ghost"}>Press</Button>
            <Button className="m-12" variant={"link"}>Press</Button>
            <Button className="m-12" variant={"outline"}>Press</Button>
            <Button className="m-12" variant={"destructive"}>Press</Button>
        </div>
    )
}

export default Root;