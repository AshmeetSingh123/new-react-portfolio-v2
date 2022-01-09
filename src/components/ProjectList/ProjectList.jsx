import React, { useContext } from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import './ProjectList.css';
import { ThemeContext } from "../../context";
import { Projects } from './ProjectsData';


const ProjectList = () => {

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className='project-list' style={{backgroundColor:darkMode ? 'var(--primary)':'var(--darkprimary)', color:darkMode ? 'var(--darkprimary)' : 'white'}}>
            <h2 className='project-list-heading'>Latest Projects</h2>
            <hr className='project-list-hr' />
            <div className='project-list-wrapper'>
                {Projects.map(project => (
                    <ProjectCard key={project.id} name={project.name} link={project.link} description={project.description} images={project.images} />
                ))}
                {/* <ProjectCard /> */}
            </div>
        </div>
    )
}

export default ProjectList;
