import React, { Component } from 'react';
import '../styles/home.scss'
import s1 from '../images/slider/s1.jpg'
import s2 from '../images/slider/s2.jpg'
import s3 from '../images/slider/s3.jpg'
import s4 from '../images/slider/s4.jpg'

const sliderImages=[
    [1,s1],
    [2,s2],
    [3,s3],
    [4,s4]
]
class Home extends Component {
    constructor(props){
        super(props)
        this.state={
            sliderNumber:1
        }
    }
    nextImage=()=>{
        // event.target.parentElement.style.transform='translate(-650px)'
        if(this.state.sliderNumber!=4){
            this.setState((prevState)=>({sliderNumber:prevState.sliderNumber+1}))
        }
    }
    prevImage=()=>{
        if(this.state.sliderNumber!=1){
            this.setState((prevState)=>({sliderNumber:prevState.sliderNumber-1}))
        }
    }
    render() {
        return (
            <div className='container'>
                <div className='slider'>
                    {sliderImages.map(img=>
                        <div key={img[0]} style={{backgroundImage:`url("${img[1]}")`,transform:`translate(${(this.state.sliderNumber-1)*-650}px)`}}>
                            <div onClick={this.prevImage}><i className="fa fa-angle-left"></i></div>
                            <div onClick={this.nextImage}><i className="fa fa-angle-right"></i></div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default Home;