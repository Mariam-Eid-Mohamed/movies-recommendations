import { Link } from "react-router-dom";
import { imgPath } from "../../../constant/imgPath";

export default function MovieCard({ movie }) {
  return (
    <div className="col-md-2">
      <Link to={`/movie/${movie.id}`}>
        {/* <Link to={`/movie/${movie.id}` }  > */}
        <div className="w-100">
          <img
            src={imgPath(movie.poster_path)}
            className="w-100"
            alt={movie.original_title}
          />
          <h4
            className="text-truncate text-center"
            data-toggle="tooltip"
            data-placement="top"
            title={movie.title}
          >
            {movie.title}
          </h4>
        </div>
      </Link>
    </div>
  );
}
