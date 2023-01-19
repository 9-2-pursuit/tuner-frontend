import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="home  mx-auto">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1603850121303-d4ade9e5ba65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-lg">
            <h1 className="mb-5 text-5xl font-bold">Welcome to Tuner App</h1>
            <p className="mb-5 text-lg">
              "Unleash the power of music with our app."
            </p>
            <Link to="/songs">
              <button className="btn btn-primary">Get Started</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
