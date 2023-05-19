import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="hero min-h-screen bg-slate-700">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center">
          <h1 className="lg:text-3xl text-xl font-bold mb-2 text-white">
            LOG IN TO YOUR ACCOUNT
          </h1>
          <img
            src="https://i.ibb.co/X4YzhGk/websecurity.jpg"
            alt=""
            className="h-full w-full"
          />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Login"
                  className="btn btn-primary"
                />
              </div>
              <p className="py-2">
                No account? Create one{" "}
                <Link to="/register" className="text-red-500">
                  Here
                </Link>
              </p>
              <div className="divider divide-red-500">OR</div>
              <div>
                <button className="btn bg-amber-900 w-full mb-4">
                  Login In With Google
                </button>
                <br />
                <button className="btn bg-amber-900 w-full">
                  Login In With Github
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
