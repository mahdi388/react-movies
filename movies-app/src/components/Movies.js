import React, { Component } from 'react';
import '../styles/movies.scss'
import Movie from './Movie'

class Movies extends Component {
    constructor(props) {
        super(props);
        this.state={
            allMovies:[],
            genres:[],
            search:'',
            filters:[],
            movies:[]
        }
        var genres=[]
        fetch('/movies.json')
        .then(res=>res.json())
        .then(movies=>{
            for (const movie of movies) {
                let movieGenres=movie.Genre.split(', ')
                for (const genre of movieGenres) {
                    if(!genres.includes(genre)){
                        genres.push(genre)
                    }
                }
            }
            return movies
        }).then(movies=>this.setState({allMovies:movies,movies:movies,genres:genres}))
    }

    filterMovies=(search)=>{
        let tempMovies1=[]
        for (let movie of this.state.allMovies) {
            if(movie.Title.toLowerCase().includes(search.toLowerCase())){
                tempMovies1.push(movie)
            }
        }
        let tempMovies2=[]
        for (let movie of tempMovies1) {
            for (const i of this.state.filters) {
                if(movie.Genre.includes(i)){
                    tempMovies2.push(movie)
                    break
                }
            }
        }
        if(this.state.filters.length==0){
            tempMovies2=tempMovies1
        }
        this.setState({movies:tempMovies2})
    }

    searchHandler=event=>{
        this.setState({search:event.target.value})
        this.filterMovies(event.target.value)
    }

    genreFilterHandler=event=>{
        let genre=event.target.id
        let promise=new Promise((resolve,reject)=>{
            if(this.state.filters.includes(genre)){
                let filters=[]
                for (const i of this.state.filters) {
                    if(i!=genre){
                        filters.push(i)
                    }
                }
                this.setState({filters:filters})
            }else{
                this.setState(prevState=>{
                    prevState.filters.push(genre)
                    return {filters:prevState.filters}
                })
            }
            resolve()
        })
        promise.then(res=>this.filterMovies(this.state.search))
    }

    render() {
        var {movies,genres,search,filters}=this.state
        return (
        <div className='container'>
            <div className="movies">
                {movies.map(movie=>
                    <Movie 
                    key={movie.Id}
                    img={movie.Poster}
                    title={movie.Title}
                    director={movie.Director}
                    year={movie.Year}
                    genre={movie.Genre}
                    />
                )}
            </div>
            <div className="filter">
                <input type="text" placeholder='search' value={search} onChange={this.searchHandler}/>
                {genres.map(genre=><button key={genre} id={genre} onClick={this.genreFilterHandler} style={filters.includes(genre) ? {background:'#ccc'}:{}}>{genre}</button>)}
            </div>
        </div>
        );
    }
}
export default Movies;