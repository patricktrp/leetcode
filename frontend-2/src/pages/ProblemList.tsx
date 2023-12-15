import { getProblems } from "@/services/api/problems";
import { QueryClient } from "@tanstack/react-query";
import { useLoaderData } from "react-router-dom";
import { ProblemOverview } from "@/services/api/problems";

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
        <div className="grid grid-cols-3 gap-4">
            {difficulties.map(difficulty => {
                return (
                    <div key={difficulty}>
                        <h4>{difficulty}</h4>
                        {problems.filter(problem => problem.difficulty === difficulty).map(problem => <div key={problem.problemId}>{problem.problemName}</div>)}
                    </div>
                )
            })}
        </div>
    )
}

export default ProblemList