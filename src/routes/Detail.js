import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetails from "../components/MovieDetails";
function Detail() {
    const [loading, setLoading] = useState(true);
    const [detail, setDetail] = useState();
    const { id } = useParams();
    const getDetail = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        console.log(json)
        setDetail(json.data.movie);
        setLoading(false);
    };
    useEffect(() => {
        getDetail();
    }, []);

    return (
        <div>
            {loading ? <h1>Loading...</h1> : (
                <div>
                    <MovieDetails
                        key={detail.id}
                        id={detail.id}
                        coverImg={detail.medium_cover_image}
                        title={detail.title}
                        summary={detail.summary}
                        genres={detail.genres} />

                </div>
            )}
        </div>
    )
}
export default Detail;