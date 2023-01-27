import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home w-full h-screen  mx-auto  border-violet-900 border-t">
      <div
        className="hero h-full "
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1603850121303-d4ade9e5ba65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-xl">
            <h1
              className="mb-5  font-bold bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 fill-transparent	bg-clip-text text-focus-in"
              style={{ fontSize: "5rem" }}
              id="welcome-text"
            >
              Welcome to Tuner App
            </h1>
            <p className="mb-5 text-lg">
              Unleash the power of music with our app.
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
