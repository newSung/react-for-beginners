function MovieDetails({ id, coverImg, title, summary, genres }) {
    return (
        <div>
            <img src={coverImg} alt={title} />
            <h2>
                {title}
            </h2>
            <p>{summary}</p>
            <ul>
                {genres.map(g => <li key={g}>{g}</li>)}
            </ul>
            <hr />
        </div>
    )
}
export default MovieDetails;