import { getProblems } from "@/services/api/problems";
import { QueryClient } from "@tanstack/react-query";
import { useLoaderData } from "react-router-dom";
import { ProblemOverview } from "@/services/api/problems";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";

const problemListQuery = () => ({
    queryKey: ['problems'],
    queryFn: async () => getProblems()
});

// eslint-disable-next-line react-refresh/only-export-components
export const loader = (queryClient: QueryClient) => async () => {
    const query = problemListQuery();
    return queryClient.getQueryData(query.queryKey) ?? (await queryClient.fetchQuery(query))
}

const ProblemList = () => {
    const problems = useLoaderData() as ProblemOverview[]
    const difficulties = Array.from(new Set(problems.map(problem => problem.difficulty)))

    return (
        <div className="h-[94vh] w-full flex justify-center pt-16">
            <div className="grid grid-cols-3 gap-24">
                {difficulties.map(difficulty => {
                    return (
                        <div key={difficulty} className="flex flex-col items-center">
                            <h2>{difficulty.charAt(0).toUpperCase() + difficulty.slice(1).toLowerCase()}</h2>
                            {problems
                                .filter(problem => problem.difficulty === difficulty)
                                .map((problem, idx) =>
                                    <div key={problem.problemId} className="rounded-[5px] h-16 mt-6 w-72 bg-card flex justify-between items-center pl-5">
                                        <div className="flex items-center">
                                            <div className={cn("w-5 h-5 bg-secondary rounded-full mr-4", { "bg-easy": idx < 2 })}></div>
                                            <NavLink to={`/problems/${problem.problemId}`}>
                                                <span>{problem.problemName}</span>
                                            </NavLink>
                                        </div>
                                        <div className={`rounded-r-[5px] h-full w-7 bg-${difficulty.toLowerCase()} border-r-8 border-${difficulty.toLowerCase()}shade`}></div>
                                    </div>
                                )
                            }
                        </div>
                    )
                })}
            </div>
        </div >
    )
}

export default ProblemList