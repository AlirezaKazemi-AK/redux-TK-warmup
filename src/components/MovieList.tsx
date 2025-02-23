import { useDispatch, useSelector } from "react-redux";
import { removeMovie } from "../movieSlice";

const MovieList = () => {
	const dispatch = useDispatch();
	const movies = useSelector(
		(state: { movies: { movies: any[] } }) => state.movies.movies
	);
	const handleRemove = (id: number) => {
		dispatch(removeMovie(id));
	};
	return (
		<div>
			<h1>Movies List</h1>
			{movies.map((movie) => (
				<div key={movie.id}>
					{movie.name}
					<button onClick={() => handleRemove(movie.id)}>Delete</button>
				</div>
			))}
		</div>
	);
};

export default MovieList;
