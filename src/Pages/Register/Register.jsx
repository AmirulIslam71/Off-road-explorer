import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";

const Register = () => {
  const { createUser, googleLogin, githubLogin } = useContext(AuthContext);
  const [validation, setValidation] = useState("");
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    if (
      !/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{6,}$/.test(
        password
      )
    ) {
      setValidation(
        "Password should be 6 characters, at least a uppercase, special characters and number"
      );
    } else {
      setValidation("");
      Swal.fire({
        icon: "success",
        title: "success",
        text: "Account create successfully",
      });
    }
    createUser(email, password)
      .then((data) => {
        console.log(data);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleGoogle = () => {
    googleLogin()
      .then((data) => {
        console.log(data);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGithub = () => {
    githubLogin()
      .then((data) => {
        console.log(data);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="hero min-h-screen bg-slate-700">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center ml-10">
          <h1 className="lg:text-5xl text-2xl font-bold mb-2 text-white">
            CREATE AN ACCOUNT
          </h1>
          <img
            src="https://i.ibb.co/X4YzhGk/websecurity.jpg"
            alt=""
            className="h-full w-full"
          />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleRegister}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="name"
                  name="name"
                  placeholder="Enter your name"
                  className="input input-bordered"
                  required
                />
              </div>
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
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="photo"
                  name="photo"
                  placeholder="Enter your Photo url"
                  className="input input-bordered"
                  required
                />
              </div>
              <p className="text-red-500 py-2">{validation}</p>
              <p className="text-red-500 py-2">{error}</p>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Register"
                  className="btn btn-primary"
                />
              </div>
              <p className="py-2">
                Have an account? Comes to Login{" "}
                <Link to="/login" className="text-red-500">
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

export default Register;
