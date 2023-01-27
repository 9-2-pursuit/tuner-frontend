import { useParams } from "react-router-dom";
import { Hero, Table, Loading, Error } from "../components/Imports";
import useFetch from "../hooks/useFetch";

const URL = process.env.REACT_APP_API_URL;

export default function Albums() {
  const { id } = useParams();
  const newUrl = URL + "albums/" + id;
  const { data: songs, error, loading } = useFetch(newUrl);
  console.log("this is data", songs);

  return (
    <>
      {songs && (
        <div className="min-h-screen">
          <Hero heading={songs[0]?.album} />
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
