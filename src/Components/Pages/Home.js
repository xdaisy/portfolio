import React, {Component} from "react";
import "./Home.css"
import data from './../../Resources/experience.json';
import Company from './../Company'

class Home extends Component{
    constructor(props)
    {
        super(props);
        this.state = {
            showExperience: false
        };
    }
    render() {
        let experienceKeys = Object.keys(data);
        let experiences = experienceKeys.map(key => {
            return <Company data={data[key]} key={key}/>
        });

        return (
            <div className={'home-container'}>
                <h1>Daisy Xu</h1>
                <div className={'home-about-container'}>
                    <p>I am a Software Engineer with years of experience working in the Gaming industry. I've worked on both AAA and mobile titles. I have expertise in gameplay and UI programming.</p>
                    <p>I have experience in many aspect of programming, from testing to tools to gameplay. As a result, I am a very strong generalist and am able to jump into any systems. I enjoy working with designers to flesh out and implement their systems. In my free time, I enjoy doing arts and crafts, finding new food to try, and going out to find cool new places.</p>
                    <p>Most Recent Title: Wonder Woman (cancelled)</p>
                </div>
                <div className={'home-experience-container'}>
                    <h2>Experience</h2>
                    {experiences}
                </div>
            </div>
        );
    }
};

export default Home;