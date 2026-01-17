import './App.css';
import { useState } from "react";
import "milligram";
import MovieForm from "./MovieForm";
import MoviesList from "./MoviesList";


function App() {

    const [movies, setMovies] = useState([]);
    const [showForm, setShowForm] = useState(false);
    



    return (
        <div className="container">
            <h1>My favourite movies to watch</h1>
            <h2>Titles</h2>
            <MovieForm onMovieSubmit={(movie) => setMovies([...movies, movie])} />
            <button onClick={() => setShowForm(!showForm)}>
                {showForm ? "Ukryj formularz" : "Dodaj film"}
            
            </button>
            <MoviesList movies={movies} />  
        </div>
    );
}



export default App; 



 