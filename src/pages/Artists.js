import { useParams } from "react-router-dom";
import { Hero, Table, Loading, Error } from "../components/Imports";
import useFetch from "../hooks/useFetch";

const URL = process.env.REACT_APP_API_URL;

function Artists() {
  const { id } = useParams();
  const newUrl = URL + "artists/" + id;
  const { data: songs, error, loading } = useFetch(newUrl);

  return (
    <>
      {songs && (
        <div className="min-h-screen">
          <Hero heading={songs[0]?.artist} />
          <div className="overflow-x-auto">
            <Table songs={songs} />
          </div>
        </div>
      )}

      {loading && <Loading />}
      {error && <Error />}
    </>
  );
}

export default Artists;
