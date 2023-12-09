import HeatMap from '@uiw/react-heat-map';

const Dashboard = () => {
    const value = [
        { date: '2023/01/11', count: 2 },
        { date: '2023/01/12', count: 20 },
        { date: '2023/01/13', count: 10 },
        { date: '2023/04/11', count: 2 },
        { date: '2023/05/01', count: 5 },
        { date: '2023/05/02', count: 5 },
        { date: '2023/05/04', count: 11 },
    ]

    return (
        <HeatMap value={value} startDate={new Date('2023/01/01')} endDate={new Date('2023/12/12')} />
    )
}

export default Dashboard;