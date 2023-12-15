import { Problem } from "@/services/api/problems"
import md5 from 'md5';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { ScrollArea } from "@/components/ui/scroll-area"


type DescriptionPanelProps = {
    problem: Problem
}

const DescriptionPanel: React.FC<DescriptionPanelProps> = ({ problem }) => {
    return (
        <>
            <div className="bg-secondary flex items-center h-14 px-4">
                <h4>{problem.problemName}</h4>
                <div>{problem.difficulty}</div>
            </div>
            <ScrollArea className="h-full">
                <div className="p-9 flex flex-col">
                    {problem.description.map(paragraph => <p key={md5(paragraph)}>{paragraph}</p>)}

                    <h4 className="mt-6 mb-4">Sample Input</h4>
                    <div className="bg-secondary w-full p-4 rounded">
                        {problem.sampleInput}
                    </div>
                    <h4 className="mt-6 mb-4">Sample Ouput</h4>
                    <div className="bg-secondary w-full p-4 rounded">
                        {problem.sampleOutput}
                    </div>
                    <h4 className="mt-6 mb-4">Hints</h4>
                    <Accordion type="multiple">
                        {problem.hints.map((hint, idx) =>
                            <div className="bg-secondary w-full px-4 rounded mb-4">
                                <AccordionItem value={(idx + 1).toString()}>
                                    <AccordionTrigger className="hover:no-underline">Hint {idx + 1}</AccordionTrigger>
                                    <AccordionContent>
                                        <p>{hint}</p>
                                    </AccordionContent>
                                </AccordionItem>
                            </div>
                        )}
                        <div className="bg-secondary w-full px-4 rounded mb-10">
                            <AccordionItem value="complexity">
                                <AccordionTrigger className="hover:no-underline">Optimal Time and Space Complexity</AccordionTrigger>
                                <AccordionContent>
                                    <p>{problem.optimalComplexity}</p>
                                </AccordionContent>
                            </AccordionItem>
                        </div>
                    </Accordion >
                </div >
            </ScrollArea>
        </>
    )
}

export default DescriptionPanel