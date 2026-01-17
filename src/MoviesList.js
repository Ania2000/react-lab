
import MovieForm from "./MovieForm";  


export default function MoviesList(props) {
   return <div>
            <ul>
                {props.movies.map(movie => <li key={movie.title}>{movie.title} ({movie.year})</li>)}
                
            </ul> 
         </div>;


}     

