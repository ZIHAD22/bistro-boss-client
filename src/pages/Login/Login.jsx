import { useEffect, useState } from "react";
import loginBgImg from "../../assets/others/authentication.png";
import loginHeroImg from "../../assets/others/authentication2.png";
import { useForm } from "react-hook-form";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";

const Login = () => {
  const [captchaError, setCaptchaError] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = ({ email, password, captcha }) => {
    if (validateCaptcha(captcha)) {
      console.log({ email, password });
      reset();
      setCaptchaError(false);
    } else {
      setCaptchaError(true);
    }
  };

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  return (
    <div
      className="hero min-h-screen bg-base-200"
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
          <div className="card w-[400px] shadow-2xl bg-base-100">
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
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  {...register("password")}
                  type="password"
                  placeholder="Password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-3">
                <LoadCanvasTemplate />
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
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Login
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
