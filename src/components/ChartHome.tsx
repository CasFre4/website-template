import ChartMe from '../../../ChartMe/src/ChartMe'
import {useEffect, useRef} from 'react'
import chartdata from'../data/chartdata.json'


function ChartReact() {
    const containerRef = useRef<HTMLDivElement>(null);
    const hasRun = useRef(false)
    useEffect(() => {
        if (hasRun.current) return;
        hasRun.current = true
        if (!containerRef.current) return
        const chart = new ChartMe({})
        chart.loadJSON(chartdata)
        // console.log(`this.processed: ${chart.processed}, this.width: ${chart.width}, this.height: ${chart.height}`)
        chart.graph({container: containerRef.current, height: 400 - 20 - 40, width: 288 - 20 - 40})//height and width define size of chart
        
   
        }, []);
    return <div ref={containerRef} />
}
export default ChartReact