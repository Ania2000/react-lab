import './App.css';
import { useState } from "react";
import "milligram";
import MovieForm from "./MovieForm";
import MoviesList from "./MoviesList";


function App() {

    const [movies, setMovies] = useState([]);
    const [showForm, setShowForm] = useState(false);

    const removeMovie = (idToRemove) => {
        setMovies((prev) => prev.filter((m) => m.id !== idToRemove));
    };


    return (
        <div className="container">
            <h1>My favourite movies to watch</h1>
            <h2>Titles</h2>
            <MovieForm onMovieSubmit={(movie) => setMovies([...movies, { ...movie, id: Date.now() }])} />
            <button onClick={() => setShowForm(!showForm)}>
                {showForm ? "Ukryj formularz" : "Dodaj film"}

            </button>

            {showForm && (
                <MovieForm
                    onMovieSubmit={(movie) =>
                        setMovies((prev) => [...prev, { ...movie, id: Date.now() }])
                    }
                />
            )}


            <MoviesList
                movies={movies}
                onRemoveMovie={removeMovie}
            />

        </div>
    );
}



export default App;



