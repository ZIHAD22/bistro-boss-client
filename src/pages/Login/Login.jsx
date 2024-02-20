import { useContext, useEffect, useState } from "react";
import { BiShow } from "react-icons/bi";
import { FaRegEyeSlash } from "react-icons/fa";
import loginBgImg from "../../assets/others/authentication.png";
import loginHeroImg from "../../assets/others/authentication2.png";
import { useForm } from "react-hook-form";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {
  const navigator = useNavigate();
  const { signInUser } = useContext(AuthContext);
  const [showPass, setShowPass] = useState(false);
  const [captchaError, setCaptchaError] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async ({ email, password, captcha }) => {
    if (validateCaptcha(captcha)) {
      const user = await signInUser(email, password);
      if (user.uid) {
        navigator("/");
      }
      reset();
      setCaptchaError(false);
    } else {
      setCaptchaError(true);
    }
  };
  const handleShowPass = () => {
    setShowPass((pre) => !pre);
  };

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url("${loginBgImg}")`,
      }}
    >
      <div
        className="hero-content flex-col lg:flex-row justify-between p-10 rounded-lg"
        style={{ boxShadow: "1px 2px 45px -19px" }}
      >
        <div className="text-center lg:text-left">
          <img src={loginHeroImg} alt="" />
        </div>
        <div className="">
          <h1 className="text-center text-4xl py-4 font-bold">Login</h1>
          <div className="card w-[400px]">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email")}
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mb-[23px]">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="">
                  <div className="absolute w-[336px]">
                    <input
                      {...register("password")}
                      type={showPass ? "text" : "password"}
                      placeholder="Password"
                      className="input input-bordered w-full"
                      required
                    />
                  </div>
                  <div
                    className="relative left-[305px] top-[12px]  w-[30px]"
                    onClick={handleShowPass}
                  >
                    {showPass ? (
                      <FaRegEyeSlash size="25" />
                    ) : (
                      <BiShow size="25px" />
                    )}
                  </div>
                </div>
              </div>
              <div className="form-control mt-3">
                <div>
                  <LoadCanvasTemplate />
                </div>
              </div>
              <div className="form-control">
                <input
                  type="text"
                  {...register("captcha")}
                  placeholder="Type Here"
                  className={`input input-bordered ${
                    captchaError ? "input-error" : ""
                  }`}
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
              <div>
                <p className="text-[#D1A054]">
                  <span>New here?</span>
                  <Link to="/signup" className="font-bold pl-2">
                    Create a New Account
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
