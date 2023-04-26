// import React from "react";
import React, { useRef, useEffect } from "react";
import * as echarts from "echarts";
// import CalendarHeatmap from "react-calendar-heatmap";
// // import "react-calendar-heatmap/dist/styles.css";
// import { ActivityCalendar } from "activity-calendar-react";
import { Heatmap } from "contribution-heatmap";
import { USE_MOCK_DATA } from "../config";
import { mock_participation_record, mock_performance_data } from "../data/profile";


const userMockData = USE_MOCK_DATA;


interface RadarChartProps {
    data_original: number[];
    data_professional: number[];
}


const RadarChart: React.FC<RadarChartProps> = ({ data_original, data_professional }) => {
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
<<<<<<< Updated upstream
                            value: [4200, 3000, 20000, 35000, 50000, 18000],
                            name: "Allocated Budget"
                        },
                        {
                            value: [5000, 14000, 28000, 26000, 42000, 21000],
                            name: "Actual Spending"
=======
                            value: data_original,
                            name: "Original"
                        },
                        {
                            value: data_professional,
                            name: "Performance"
>>>>>>> Stashed changes
                        }
                    ]
                }
            ]
        };

        chart.setOption(option);

        return () => {
            chart.dispose();
        };
    }, [data_original, data_professional]);

    return <div ref={chartRef} style={{ width: "100%", height: "300px" }} />;
};


const Visualization = () => {
    const [radarChartData, setRadarChartData] = React.useState({ data_original: [], data_professional: []});
    const [participationRecord, setParticipationRecord] = React.useState([]);

    useEffect(() => {
        if (userMockData) {
            setRadarChartData(mock_performance_data);
            setParticipationRecord(mock_participation_record);
            return;
        }
    }, []);

    return <div
        id="main"
        style={{
            width: "100%",
            height: "100%"
        }}>
<<<<<<< Updated upstream
        <RadarChart data={[]} />
=======
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        }}>
            <RadarChart data_original={radarChartData.data_original} data_professional={radarChartData.data_professional} />
        </div>
>>>>>>> Stashed changes
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