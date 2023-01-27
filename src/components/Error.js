function Error() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <div className="card w-96 bg-base-200 shadow-xl text-red-400">
        <div className="card-body">
          <h2 className="card-title text-5xl mb-5">Error</h2>
          <p>Something went wrong!</p>
          <div className="card-actions justify-end">
            {/* <button className="btn btn-primary">Buy Now</button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Error;
