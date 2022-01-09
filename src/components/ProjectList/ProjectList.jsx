import React, { useContext } from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import './ProjectList.css';
import { ThemeContext } from "../../context";


const ProjectList = () => {

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode; 

    return (
        <div className='project-list' style={{backgroundColor:darkMode ? 'var(--primary)':'var(--darkprimary)', color:darkMode ? 'var(--darkprimary)' : 'white'}}>
            <h2 className='project-list-heading'>Latest Projects</h2>
            <hr className='project-list-hr' />
            <div className='project-list-wrapper'>
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
        </div>
    )
}

export default ProjectList;
