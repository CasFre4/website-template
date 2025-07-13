"use client"
import React from 'react'
import styles from'../css/Projects.module.css'
import ProjectList from '../assets/ProjectList'
import ReactMarkdown from 'react-markdown'



// type ProjectsProps = {
//     children: React.ReactNode
// }
// const Projects: React.FC<ProjectsProps> = ({children}) => {
//     const childArray: React.ReactNode[] = React.Children.toArray(children)
//     return (
//         <>
//             {childArray.map((child, key: number) => (
//                 <div key={key} className={styles.project}>
//                     {child}
//                 </div>
//             ))}
//         </>
//     )
// }
// export default Projects


const Projects: React.FC = () => {
    // const [projectList, setProjectList] = useState(projectListRaw)
    
    const projectList = ProjectList()
    // console.log(`End project List ${projectList}`)
    return (
        <>
            {projectList.map((project, key: number) => (
                <a href={project.link} key={key} className={styles.defaultLink} target="_blank" rel="noopener noreferrer">
                    <div className={styles.project}>
                        <div className='col'>
                            <div className='row'>
                                <div className='row' style={{'--text-align-row': 'center'} as React.CSSProperties}>
                                        <h1>{project.title}</h1>
                                </div>
                                <div className='row'>
                                    <div className='col' style={{'--col-width': '.33', '--justify-col': 'flex-start'} as React.CSSProperties}>
                                        <img src={project.image} />
                                    </div>
                                    <div className='col' style={{paddingLeft: '20px', '--justify-col': 'flex-start', '--align-col': 'left'} as React.CSSProperties}>
                                        <p className={styles.summary}>{project.summary}</p>
                                        <div className={styles.features}><ReactMarkdown>{project.features}</ReactMarkdown></div>
                                    </div>
                                </div>
                            </div>
                            <div className='fixed-row'>
                                <div className={styles.skills}>
                                    {project.skills.map((skill, index) => (
                                        <p key={`${key}&${index}`}>{skill}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            ))}
        </>
    )
}
export default Projects