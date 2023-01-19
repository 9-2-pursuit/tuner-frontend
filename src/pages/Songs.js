import useFetch from "../hooks/useFetch";
const url = process.env.REACT_APP_API_URL;

function Songs() {
  const { data, error, loading } = useFetch(url);
  console.log(data, error, loading);
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
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr>
            <tr>
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
            </tr>
            <tr>
              <th>3</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Songs;
