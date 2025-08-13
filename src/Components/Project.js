import React, {Component} from "react";

class Project extends Component{
    render() {
        return (
            <div key={this.props.data}>
                {this.props.data.link.length > 0 ? <a href={this.props.data.link}>{this.props.data.name}</a> : <h1>{this.props.data.name}</h1>}
                <div>Genre: {this.props.data.genre}</div>
                <div>Platform: {this.props.data.platform}</div>
                <div>Studio: {this.props.data.studio}</div>
                <div>Date: {this.props.data.date}</div>
                <div>Role: {this.props.data.role}</div>
                <div>Engine: {this.props.data.engine}</div>
                <p>{this.props.data.description}</p>
            </div>
        )
    }
}

export default Project;