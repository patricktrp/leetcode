import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

const data = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

const data2 = [
    {
        subject: 'Zivilrecht',

        B: 110,
        fullMark: 150,
    },
    {
        subject: 'Chinese',
        B: 130,
        fullMark: 150,
    },
    {
        subject: 'English',
        B: 130,
        fullMark: 150,
    },
    {
        subject: 'Geography',
        B: 100,
        fullMark: 150,
    },
    {
        subject: 'Physics',
        B: 90,
        fullMark: 150,
    },
    {
        subject: 'History',
        B: 159,
        fullMark: 150,
    },
];

const Dashboard = () => {
    return (
        <div className=" h-[25vh] w-[30vw]">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <XAxis />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>

            <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data2}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" />
                    {/* <PolarRadiusAxis angle={30} domain={[0, 150]} /> */}
                    <Radar name="Lily" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                    {/* <Legend /> */}
                </RadarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Dashboard