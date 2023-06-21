import React, { Component } from 'react';
import '../styles/about-us.scss'
import img from '../images/my-image.jpg'

class AboutUs extends Component {
    render() { 
        return (
            <div className="container">
                <img src={img} alt="Mohammad Mahdi Ahangari" />
                <div>
                    Hello. I am Mohammad Mahdi Ahangari. I am a web developer from Hamedan. I'm 13 years old. My birthday is on March 13, 2010.
                    I like programming, watching movies, watching football and gaming. I am a student from elmi school.
                    My favorite football team is Real Madrid and my favorite football player is Ronaldo. I can programming with Python, Django, HTML, CSS, JavaScript and React.
                </div>
            </div>
        );
    }
}

export default AboutUs;