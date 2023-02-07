import useFetch from "../hooks/useFetch";
import { Error, Loading, Table } from "../components/Imports";

function Songs() {
  const url = process.env.REACT_APP_API_URL + "songs";
  const { data: songs, error, loading } = useFetch(url);
  console.log(songs, error, loading);

  return (
    <div className="container max-w-screen-xl mx-auto mt-5">
      {songs && (
        <div className="overflow-x-auto">
          <Table songs={songs} />
        </div>
      )}
      {loading && <Loading />}
      {error && <Error />}
    </div>
  );
}

export default Songs;
