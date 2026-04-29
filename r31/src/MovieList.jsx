import MovieCard from "./components/MovieCard";

const MovieList = () => {
  const movies = [
    {
      title: "Durandhar 2",
      actor: "Ranveer Singh",
      image: "https://via.placeholder.com/200"
    },
    {
      title: "Pushpa 2",
      actor: "Allu Arjun",
      image: "https://via.placeholder.com/200"
    },
    {
      title: "RRR",
      actor: "Ram Charan",
      image: "https://via.placeholder.com/200"
    }
  ];

  return (
    <div className="movie-container">
      {movies.map((movie, index) => (
        <MovieCard
          key={index}
          title={movie.title}
          actor={movie.actor}
          image={movie.image}
        />
      ))}
    </div>
  );
};

export default MovieList;