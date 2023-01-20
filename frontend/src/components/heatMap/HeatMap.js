import { useEffect, useState } from 'react';
import { XYPlot, HorizontalGridLines, XAxis, YAxis,HeatmapSeries } from 'react-vis';

const transformDataForCount = (data) => {
    const transformedData = [];
    data.forEach((record)=>{
        record.instances.forEach((ele)=>{
            transformedData.push({x:ele.pos_x,y:ele.pos_y, color:1});
        })
    })
    console.log({transformedData});
    return transformedData;
}

const HeatMap = ({data}) => {
    const [heatmapData, setHeatmapData] = useState([]);
    const chartHeight = 500;
    const chartWidth = 600;
    useEffect(() => {
        setHeatmapData(transformDataForCount(data));
    },[data])
    return (
        <div className='container text-center'>
            <div className='row'>
                <div className='d-flex justify-content-center'>
                    <XYPlot
                        width={chartWidth}
                        height={chartHeight}>
                        <HorizontalGridLines />
                        <XAxis />
                        <YAxis />
                        <HeatmapSeries
                            data={heatmapData}
                        />
                    </XYPlot>
                </div>
            </div>
        </div>

    )
}
export default HeatMap;