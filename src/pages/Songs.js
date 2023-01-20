import useFetch from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";
const url = process.env.REACT_APP_API_URL;

function Songs() {
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
                onClick={() => navigate(`${song.id}`)}
                className="cursor-pointer hover:text-indigo-500 duration-150 transition ease-in-out delay-100 "
              >
                <th>{i + 1}</th>
                <td>{song.name}</td>
                <td>{song.artist}</td>
                <td> {song.album}</td>
                <td>{song.time}</td>
                <td>{song.is_favorite + ""}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Songs;
