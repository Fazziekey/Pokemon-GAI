import React, { useRef, useEffect } from "react";
import * as echarts from "echarts";
import { Heatmap } from "contribution-heatmap";


interface RadarChartProps {
    data: number[];
}

const RadarChart: React.FC<RadarChartProps> = ({ data }) => {
    const chartRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const chart = echarts.init(chartRef.current);

        const option = {
            title: {
                text: "Display"
            },
            legend: {
                data: ["Original", "Performance"]
            },
            radar: {
                indicator: [
                    { name: "HP", max: 6500 },
                    { name: "Attack", max: 16000 },
                    { name: "Intelligence", max: 30000 },
                    { name: "Speed", max: 38000 },
                    { name: "Power", max: 52000 },
                    { name: "Characteristic", max: 25000 }
                ]
            },
            series: [
                {
                    name: "Original & Performance",
                    type: "radar",
                    data: [
                        {
                            value: [4200, 3000, 20000, 35000, 50000, 18000],
                            name: "Original"
                        },
                        {
                            value: [5000, 14000, 28000, 26000, 42000, 21000],
                            name: "Performance"
                        }
                    ]
                }
            ]
        };

        chart.setOption(option);

        return () => {
            chart.dispose();
        };
    }, [data]);

    return <div ref={chartRef} style={{ width: "100%", height: "350px" }} />;
};


const participationRecord = [
    0, 5, 7, 3, 3, 0, 3, 20, 0, 5, 5, 10, 8, 5, 5, 9, 5, 1, 1, 5, 8, 20, 15, 0, 2, 7, 0, 0, 0, 0, 12, 0, 1, 6, 8, 6, 4, 9, 2, 0, 6, 20, 17, 4, 6, 4, 6, 14, 4, 4, 1, 4, 4, 3, 9, 4, 6, 19, 20, 2, 1, 1,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 5, 20, 10, 20, 3, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 20, 20, 4, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5
];


const Visualization = () => {
    return <div
        id="main"
        style={{
            width: "100%",
            height: "100%"
        }}>
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        }}>
        <RadarChart data={[]} />
        </div>
        <div
            style={{
                width: "100%",
                height: "100%",
                marginLeft: "-50px",
                marginTop: "-30px",
            }}
        >
            <Heatmap
                colour={["#FCF7DF", "#F8B678", "#ED9111", "#C9760A", "#865505"]}
                squareNumber={participationRecord.length}
                count={participationRecord}
                squareGap="4px"
                squareSize="15px"
            />
        </div>

    </div>;
};


export default Visualization;