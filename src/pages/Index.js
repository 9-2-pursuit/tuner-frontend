import useFetch from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import { HeartIcon } from "@heroicons/react/24/solid";

function Songs() {
  const url = process.env.REACT_APP_API_URL + "songs";
  const { data: songs, error, loading } = useFetch(url);
  const navigate = useNavigate();
  console.log(songs, error, loading);
  return (
    <div className="container max-w-screen-xl mx-auto mt-5">
      <div className="overflow-x-auto  ">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Artist</th>
              <th>Album </th>
              <th>Time</th>
              <th>Favorite</th>
            </tr>
          </thead>
          <tbody>
            {songs.map((song, i) => (
              <tr
                key={song.id}
                // onClick={() => navigate(`${song.id}`)}
                className="duration-150 transition ease-in-out delay-100 "
              >
                <th>{i + 1}</th>
                <td
                  onClick={() => navigate(`${song.id}`)}
                  className="hover:text-indigo-500 hover:underline"
                >
                  {song.name}
                </td>
                <td
                  onClick={() => navigate(`/artist/${song.artist_id}`)}
                  className="hover:text-indigo-500 hover:underline"
                >
                  {song.artist}
                </td>
                <td
                  onClick={() => navigate(`/album/${song.album}`)}
                  className="hover:text-indigo-500 hover:underline"
                >
                  {song.album}
                </td>
                <td>{song.time}</td>
                <td>
                  {song.is_favorite ? (
                    <HeartIcon className="w-4 text-violet-500" />
                  ) : (
                    <HeartIcon className="w-4" />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Songs;
