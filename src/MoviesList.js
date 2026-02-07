

export default function MoviesList(props) {
   return <div>
            <ul>
                {props.movies.map(movie => <li key={movie.id}>{movie.title} ({movie.year})

                        <button
                            onClick={() => props.onRemoveMovie(movie.id)}
                            style={{ marginLeft: "10px" }}
                        >
                            Usuń
                        </button>
                
                </li>)}
                
            </ul> 
         </div>;


} 



