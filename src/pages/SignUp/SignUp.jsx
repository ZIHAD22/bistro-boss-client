import { useForm } from "react-hook-form";
import { BiShow } from "react-icons/bi";
import { FaRegEyeSlash } from "react-icons/fa";
import loginBgImg from "../../assets/others/authentication.png";
import loginHeroImg from "../../assets/others/authentication2.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const SignUp = () => {
  const [showPass, setShowPass] = useState(false);
  console.log(showPass);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = ({ name, email, password: pass }) => {
    console.log({ name, email, pass });
    reset();
  };

  const handleShowPass = () => {
    setShowPass((pre) => !pre);
  };

  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url("${loginBgImg}")`,
      }}
    >
      <div
        className="hero-content flex-col lg:flex-row-reverse justify-between p-10 rounded-lg"
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
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name")}
                  placeholder="Name"
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
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Sign Up
                </button>
              </div>
              <div>
                <p className="text-[#D1A054]">
                  <span>Already registered?</span>
                  <Link to="/login" className="font-bold pl-2">
                    Go to Log In
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

export default SignUp;
