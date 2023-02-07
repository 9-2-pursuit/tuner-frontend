import { useNavigate } from "react-router-dom";
import { HeartIcon } from "@heroicons/react/24/solid";

function Table({ songs }) {
  const navigate = useNavigate();
  return (
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
            className="duration-150 transition ease-in-out delay-100 "
          >
            <th>{i + 1}</th>
            <td
              onClick={() => navigate(`/songs/${song.id}`)}
              className="hover:text-indigo-500 hover:underline"
            >
              {song.name}
            </td>
            <td
              onClick={() => navigate(`/artists/${song.artist_id}`)}
              className="hover:text-indigo-500 hover:underline"
            >
              {song.artist}
            </td>
            <td
              onClick={() => navigate(`/albums/${song.album_id}`)}
              className="hover:text-indigo-500 hover:underline"
            >
              {song.album}
            </td>
            <td>{Math.trunc(song.time / 60) + ":" + (song.time % 60)}</td>
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
  );
}

export default Table;
