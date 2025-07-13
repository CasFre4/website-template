// import sampleImage from '/logo/imwatching.jpg'
import jsonData from "../data/projects.json"

type Project = {
    title: string;
    summary: string;
    features: string;
    image: string;
    link: string;
    skills: string[];
    projectType: string;
  };
// function noEmptys ()
const formattedData = (dtype: (string | undefined ) = undefined, newFirst: boolean = true) => {
    const data: Project[] = jsonData
    let sortData: (Project[] | undefined) = undefined 
    
    if (newFirst) {
        // console.log(sortData)
        sortData = [...data].reverse()
        // console.log([...sortData])
        // console.log(sortData)
        
    } if (dtype !== undefined) {
        sortData = data.filter( project => project.projectType === dtype)
    } 
    if (sortData===undefined) {
        sortData = data
    }
    // console.log(sortData)
    return sortData
}
export default formattedData


// "title": "",
// "summary": "",
// "features": "",
// "image": "",
// "link": "",
// "skills": [],
// "projectType": ""