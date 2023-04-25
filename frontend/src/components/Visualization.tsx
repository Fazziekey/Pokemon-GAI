// import React from "react";
import React, { useRef, useEffect } from "react";
import * as echarts from "echarts";
// import CalendarHeatmap from "react-calendar-heatmap";
// // import "react-calendar-heatmap/dist/styles.css";
// import { ActivityCalendar } from "activity-calendar-react";
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
                text: "Basic Radar Chart"
            },
            legend: {
                data: ["Allocated Budget", "Actual Spending"]
            },
            radar: {
                // shape: "circle",
                indicator: [
                    { name: "Sales", max: 6500 },
                    { name: "Administration", max: 16000 },
                    { name: "Information Technology", max: 30000 },
                    { name: "Customer Support", max: 38000 },
                    { name: "Development", max: 52000 },
                    { name: "Marketing", max: 25000 }
                ]
            },
            series: [
                {
                    name: "Budget vs spending",
                    type: "radar",
                    data: [
                        {
                            value: [4200, 3000, 20000, 35000, 50000, 18000],
                            name: "Allocated Budget"
                        },
                        {
                            value: [5000, 14000, 28000, 26000, 42000, 21000],
                            name: "Actual Spending"
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

    return <div ref={chartRef} style={{ width: "100%", height: "300px" }} />;
};


const Visualization = () => {
    return <div
        id="main"
        style={{
            width: "100%",
            height: "100%"
        }}>
        <RadarChart data={[]} />
        <div
            style={{
                width: "100%",
                height: "100%"
            }}
        >
            <Heatmap
                colour={["#ebedf0", "#c6e48b", "#40c463", "#30a14e", "#216e39"]}
                squareNumber={5}
                count={[3, 2, 20, 1, 14]}
                squareGap="4px"
                squareSize="15px"
            />
        </div>

    </div>;
};


export default Visualization;