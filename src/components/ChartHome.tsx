import ChartMe from '../../../ChartMe/src/ChartMe'
import {useEffect, useRef} from 'react'
// import chartdata from'../data/chartdata.json'


function ChartReact() {
    const containerRef = useRef<HTMLDivElement>(null);
    const hasRun = useRef(false)
    useEffect(() => {
        if (hasRun.current) return;
        hasRun.current = true
        const run = async () => {
            if (!containerRef.current) return
            const chart = new ChartMe({})
            await chart.loadFile('/data/chartdata.json')
            console.log(`this.processed: ${chart.processed}, this.width: ${chart.width}, this.height: ${chart.height}`)
            chart.graph({container: containerRef.current, height: 190, width: 120})//height and width define size of chart
        }
        run();
        }, []);
    return <div ref={containerRef} />
}
export default ChartReact