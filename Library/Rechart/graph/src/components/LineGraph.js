import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';
const data = [
    { name: 'A', uv: 11, pv: 12, amt: 2400 },
    { name: 'B', uv: 12, pv: 13, amt: 2400 },
    { name: 'C', uv: 4, pv: 10, amt: 2400 },
    { name: 'D', uv: 0, pv: 8, amt: 2400 },
    { name: 'E', uv: 20, pv: 20, amt: 2400 },
    { name: 'F', uv: 40, pv: 23, amt: 2400 },
    { name: 'G', uv: 25, pv: 20, amt: 2400 },
    { name: 'H', uv: 20, pv: 15, amt: 2400 },
    { name: 'I', uv: 25, pv: 20, amt: 2400 },
    { name: 'J', uv: 40, pv: 35, amt: 2400 },
    { name: 'K', uv: 30, pv: 32, amt: 2400 },
    { name: 'L', uv: 35, pv: 38, amt: 2400 },
];

function LineGraph() {
    return (
        <LineChart width={730} height={250} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            {/* <CartesianGrid strokeDasharray="3 3" /> 격자 */}
            <XAxis
                dataKey="name" // dataKey에 X축의 이름을 넣는다.
            />
            <YAxis />
            {/* <Legend /> 범례*/}
            <Tooltip />
            <Line
                type="monotone"
                dataKey="pv" // dataKey에 Y축 값을 넣는다.
                stroke="#64CFF6"
            />
            <Line type="monotone" dataKey="uv" stroke="#8FE388" />
        </LineChart>
    );
}

export default LineGraph;
