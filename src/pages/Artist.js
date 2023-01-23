import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { HeartIcon } from "@heroicons/react/24/solid";

const URL = process.env.REACT_APP_API_URL;

function Artist() {
  const { id } = useParams();
  const [songs, setSongs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(URL + "artist/" + id)
      .then((res) => res.json())
      .then((data) => setSongs(data))
      .catch(console.error);
  }, [id]);

  return (
    <div className="min-h-screen">
      <div
        className="hero h-64"
        style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          xmlnsSvgjs="http://svgjs.dev/svgjs"
          viewBox="0 0 1422 800"
          className="h-full"
        >
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="oooscillate-grad"
            >
              <stop
                stop-color="hsl(206, 75%, 49%)"
                stop-opacity="1"
                offset="0%"
              ></stop>
              <stop
                stop-color="hsl(331, 90%, 56%)"
                stop-opacity="1"
                offset="100%"
              ></stop>
            </linearGradient>
          </defs>
          <g
            stroke-width="2"
            stroke="url(#oooscillate-grad)"
            fill="none"
            stroke-linecap="round"
          >
            <path
              d="M 0 572 Q 355.5 -100 711 400 Q 1066.5 900 1422 572"
              opacity="0.98"
            ></path>
            <path
              d="M 0 550 Q 355.5 -100 711 400 Q 1066.5 900 1422 550"
              opacity="0.17"
            ></path>
            <path
              d="M 0 528 Q 355.5 -100 711 400 Q 1066.5 900 1422 528"
              opacity="0.39"
            ></path>
            <path
              d="M 0 506 Q 355.5 -100 711 400 Q 1066.5 900 1422 506"
              opacity="0.21"
            ></path>
            <path
              d="M 0 484 Q 355.5 -100 711 400 Q 1066.5 900 1422 484"
              opacity="0.16"
            ></path>
            <path
              d="M 0 462 Q 355.5 -100 711 400 Q 1066.5 900 1422 462"
              opacity="0.41"
            ></path>
            <path
              d="M 0 440 Q 355.5 -100 711 400 Q 1066.5 900 1422 440"
              opacity="0.86"
            ></path>
            <path
              d="M 0 418 Q 355.5 -100 711 400 Q 1066.5 900 1422 418"
              opacity="0.41"
            ></path>
            <path
              d="M 0 396 Q 355.5 -100 711 400 Q 1066.5 900 1422 396"
              opacity="0.17"
            ></path>
            <path
              d="M 0 374 Q 355.5 -100 711 400 Q 1066.5 900 1422 374"
              opacity="0.09"
            ></path>
            <path
              d="M 0 352 Q 355.5 -100 711 400 Q 1066.5 900 1422 352"
              opacity="0.65"
            ></path>
            <path
              d="M 0 330 Q 355.5 -100 711 400 Q 1066.5 900 1422 330"
              opacity="0.90"
            ></path>
            <path
              d="M 0 308 Q 355.5 -100 711 400 Q 1066.5 900 1422 308"
              opacity="0.90"
            ></path>
            <path
              d="M 0 286 Q 355.5 -100 711 400 Q 1066.5 900 1422 286"
              opacity="0.66"
            ></path>
            <path
              d="M 0 264 Q 355.5 -100 711 400 Q 1066.5 900 1422 264"
              opacity="0.55"
            ></path>
            <path
              d="M 0 242 Q 355.5 -100 711 400 Q 1066.5 900 1422 242"
              opacity="0.88"
            ></path>
            <path
              d="M 0 220 Q 355.5 -100 711 400 Q 1066.5 900 1422 220"
              opacity="0.47"
            ></path>
            <path
              d="M 0 198 Q 355.5 -100 711 400 Q 1066.5 900 1422 198"
              opacity="0.91"
            ></path>
            <path
              d="M 0 176 Q 355.5 -100 711 400 Q 1066.5 900 1422 176"
              opacity="0.18"
            ></path>
            <path
              d="M 0 154 Q 355.5 -100 711 400 Q 1066.5 900 1422 154"
              opacity="0.84"
            ></path>
            <path
              d="M 0 132 Q 355.5 -100 711 400 Q 1066.5 900 1422 132"
              opacity="0.53"
            ></path>
            <path
              d="M 0 110 Q 355.5 -100 711 400 Q 1066.5 900 1422 110"
              opacity="0.14"
            ></path>
            <path
              d="M 0 88 Q 355.5 -100 711 400 Q 1066.5 900 1422 88"
              opacity="0.23"
            ></path>
            <path
              d="M 0 66 Q 355.5 -100 711 400 Q 1066.5 900 1422 66"
              opacity="0.80"
            ></path>
            <path
              d="M 0 44 Q 355.5 -100 711 400 Q 1066.5 900 1422 44"
              opacity="0.76"
            ></path>
          </g>
        </svg>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-white">
              {songs[0]?.artist}
            </h1>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Artist</th>
              <th>Album</th>
              <th>Time</th>
              <th>Favorite</th>
            </tr>
          </thead>
          <tbody>
            {songs.map((song, i) => (
              <tr>
                <th>{i + 1}</th>
                <td
                  onClick={() => navigate(`/songs/${song.id}`)}
                  className="cursor-pointer hover:text-violet-500"
                >
                  {song.name}
                </td>
                <td>{song.artist}</td>
                <td
                  onClick={() => navigate(`/albums/${song.id}`)}
                  className="cursor-pointer hover:text-violet-500"
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

export default Artist;
