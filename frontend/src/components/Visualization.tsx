import React, { useRef, useEffect } from "react";
import * as echarts from "echarts";
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
                            value: data_original,
                            name: "Original"
                        },
                        {
                            value: data_professional,
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
    }, [data_original, data_professional]);

    return <div ref={chartRef} style={{ width: "100%", height: "350px" }} />;
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
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        }}>

            <RadarChart data_original={radarChartData.data_original} data_professional={radarChartData.data_professional} />
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