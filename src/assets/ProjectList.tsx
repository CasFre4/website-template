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
const formattedData = (dtype: string = "None", newFirst: boolean = true) => {
    let sortData: Project[] = jsonData
    if (newFirst) {
        sortData.reverse()
    } if (dtype !== "None") {
        sortData = sortData.filter( project => project.projectType === dtype)
    } else {
        sortData = jsonData
    }

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