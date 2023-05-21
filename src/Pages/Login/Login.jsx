import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";

const Login = () => {
  const { signIn, googleLogin, githubLogin } = useContext(AuthContext);
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  useTitle("Login");

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    if ((email, password)) {
      signIn(email, password)
        .then((data) => {
          console.log(data.user);
          Swal.fire({
            icon: "success",
            title: "success",
            text: "SignIn successfully",
          });
          navigate(from, { replace: true });
          setError("");
        })
        .catch((error) => {
          setError(error.message);
        });
    }
  };

  const handleGoogle = () => {
    googleLogin()
      .then((data) => {
        console.log(data.user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGithub = () => {
    githubLogin()
      .then((data) => {
        console.log(data.user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="hero min-h-screen bg-slate-700">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center h-full w-full">
          <h1 className="lg:text-3xl text-xl font-bold mb-2 text-white">
            LOG IN TO YOUR ACCOUNT
          </h1>
          <img
            src="https://t4.ftcdn.net/jpg/04/60/71/01/360_F_460710131_YkD6NsivdyYsHupNvO3Y8MPEwxTAhORh.jpg"
            alt=""
            className="h-full"
          />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleLogin}>
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
                  <a
                    href="#"
                    className="label-text-alt link link-hover text-red-500"
                  >
                    {error}
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
                <button
                  onClick={handleGoogle}
                  className="btn bg-amber-900 w-full mb-4"
                >
                  Login In With Google
                </button>
                <br />
                <button
                  onClick={handleGithub}
                  className="btn bg-amber-900 w-full"
                >
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
