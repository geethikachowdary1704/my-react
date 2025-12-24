import React from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import "./Login.css";

type LoginFormInputs = {
  email: string;
  password: string;
};

const Login: React.FC = () => {
  const { register, handleSubmit } = useForm<LoginFormInputs>({
    
  });

  const onSubmit: SubmitHandler<LoginFormInputs> = (data) => {
    console.log(data); 
  };

  return (
    <div className="container">
      <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
        <h2>Login</h2>

        <input
          type="email"
          placeholder="Email"
          {...register("email")}
        />

        <input
          type="password"
          placeholder="Password"
          {...register("password")}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
