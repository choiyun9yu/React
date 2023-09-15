# Rechart

[doc](https://recharts.org/en-US)
[chart collection](https://recharts.org/en-US/examples)

    $ npx create-react-app [appname]
    $ cd [appname]
    $ npm install recharts

#### @/src/components/LineGraph.js

    import { LineChart, Line, XAxis, YAxis } from 'recharts';
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

## 공통

#### 너비 맞추기

-   < ResponsiveContainer width='100%' height={150} >컴포넌트를 임포트해서 감싸준다.

## Line

#### LineChart : 선 그래프

-   width, height : 그래프의 넓이 및 높이
-   data : 그래프에 나타낼 데이터
-   margin : 그래프의 margin

#### CartesianGrid : 그래프 보조선

-   strokeDasharray : 링크 참고

#### XAxis : X축

-   dataKey : 표시할 value의 data map key
    ####YAxis : Y축
-   dataKey : 표시할 value의 data map key

#### Legend : 선의 설명을 나타내는 지표

#### Line : 선

-   type : 'basis' | 'basisClosed' | 'basisOpen' | 'linear' | 'linearClosed' | 'natural' | 'monotoneX' | 'monotoneY' | 'monotone' | 'step' | 'stepBefore' | 'stepAfter' | Function... DEFAULT: 'linear'
-   dataKey : 표시할 value의 data map key
-   stroke : 선의 색상
-   activeDot : 그래프에 마우스를 올릴 시 원의 스타일 설정
