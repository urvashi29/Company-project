import React from "react";
import bgImg from "../../assets/img1.png";
import "./Login.css";
import { useForm } from "react-hook-form";
import { CiUser } from "react-icons/ci";

export default function Login() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <section className="page">
      <div className="register">
        <div className="col-1">
          <h2 className="signintext">Sign In</h2>
          <CiUser size="4rem" color="#EF4815" />
          <form
            id="form"
            className="flex flex-col"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              className="input-box"
              type="text"
              {...register("username")}
              placeholder="UserId"
            />
            <input
              className="input-box"
              type="password"
              {...register("password")}
              placeholder="Password"
            />
            <button className="btn">Sign In</button>
          </form>
        </div>
        <div className="col-2">
          <img src={bgImg} alt="" />
        </div>
      </div>
    </section>
  );
}
