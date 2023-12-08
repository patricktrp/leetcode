import { QueryClient, useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { getProblems } from '../api/problems';

const problemQuery = () => ({
    queryKey: ['problems'],
    queryFn: async () => getProblems()
})

export const loader = (queryClient: QueryClient) => async () => {
    const query = problemQuery();

    return queryClient.getQueryData(query.queryKey) ?? (await queryClient.fetchQuery(query))
}

const Problems = () => {
    const { data: problems } = useQuery(problemQuery())
    return (
        <ul>
            {problems.map(problem => <Link to={problem.problemId} key={problem.problemId}>{problem.problemName} {problem.difficulty}</Link>)}
        </ul>
    )
}

export default Problems;