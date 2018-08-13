import React, { Component } from 'react';
import Movies from './movies'
import movies from './1989.json'



class movieList extends Component {
  render() {
    return (
      <section className="MovieList">
        <ul>
          {movies.results.map((movie, idx) => {
            return <Movies name={movie.title} image={movie.poster_path} overviewMovie={movie.overview} key={idx} />
          })}
        </ul>
      </section>
    );
  }
}

export default movieList;
