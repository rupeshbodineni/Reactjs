const MovieCard = ({ title, actor, image }) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>Hero: {actor}</p>
    </div>
  );
};

export default MovieCard;