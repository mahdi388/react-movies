import React, { Component } from 'react';

class Movie extends Component { 
    render() {
        var {img,title,director,year,genre}=this.props
        return (
            <div>
                <img src={img} alt={title} />
                <div>
                    <h3>{title}</h3>
                    <div>
                        <span>{director}</span>
                        <span>{year}</span>
                    </div>
                    <span>{genre}</span>
                </div>
            </div>
        );
    }
}
 
export default Movie;