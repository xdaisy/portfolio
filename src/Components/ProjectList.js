import React, {Component} from "react";
import "./ProjectList.css"
import data from './../Resources/projects.json';
import Project from './Project';

class ProjectList extends Component{
    render() {
        let project = this.props.isProfessional ? data.profesional : data.personal;
        let projectKeys = this.props.isProfessional ?
            Object.keys(data.profesional) : Object.keys(data.personal);
        let projects = projectKeys.map(key => {
            return <Project data={project[key]} key={key}/>
        });

        return (
            <div className={"projectlist-container"} key={this.props.isProfessional}>
                <ul className={"projectlist-container"}>{projects}</ul>
            </div>
        );
    }
}

export default ProjectList;