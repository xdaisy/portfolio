import React, {Component} from "react";
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
            <div key={this.props.isProfessional}>
                <ul>{projects}</ul>
            </div>
        )
    }
}

export default ProjectList;