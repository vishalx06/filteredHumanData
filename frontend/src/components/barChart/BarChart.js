import { useEffect, useState } from 'react';
import { XYPlot, HorizontalGridLines, XAxis, YAxis, VerticalBarSeries, LabelSeries } from 'react-vis';
import dayjs from 'dayjs';

import { sampleData } from '../../data/sample';

const getTimeStamp = (timeStamp)=>{
    return dayjs(timeStamp).format('{YYYY} MM-DDTHH:mm:ss A')
}

const transformDataForCount = (data) => {
    return data.map((record)=>{
        return {y:record.instances.length,x:getTimeStamp(record.timeStamp)}
    });
}

const transformDataForAvgXpos = (data) => {
    const transformedData =  data.map((record)=>{
        const instances = record.instances;
        return {y:instances.reduce((prev,cur)=>prev+cur.pos_x,0)/instances.length,x:getTimeStamp(record.timeStamp)};
    });
    console.log({transformedData});
    return transformedData;
}
const BarChart = ({data,selectOption}) => {
    const [chartData, setChartData] = useState([]);
    const chartHeight = 500;
    const chartWidth = 600;
    useEffect(() => {
        if(selectOption==='number_of_humans'){
            setChartData(transformDataForCount(data));
        }
        else if(selectOption==='avg_x_pos'){
            setChartData(transformDataForAvgXpos(data))
        }else{
            setChartData(transformDataForCount(data));
        }
    },[selectOption, data])
    return (
        <div className='container text-center'>
            <div className='row'>
                <div className='d-flex justify-content-center'>
                    <XYPlot
                        xType='ordinal'
                        width={chartWidth}
                        height={chartHeight}>
                        <HorizontalGridLines />
                        <XAxis />
                        <YAxis />
                        <VerticalBarSeries
                        barWidth={0.4}
                            data={chartData}
                        />
                    </XYPlot>
                </div>
            </div>
        </div>

    )
}
export default BarChart;