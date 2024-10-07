import { useState } from "react";
import RegisterForm from "../components/RegisterForm";
import LoginForm from "../components/LoginForm";
import { useAuth } from "../context/AuthContext";
import { EmblaCarousel } from "../components/Carousel/EmblaCarousel";

function LoginRegisterpage() {
  const [isLogin, setIsLogin] = useState(true);
  const { errors } = useAuth();

  const handleSetIsLogin = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="flex">
      <div className="w-full lg:w-2/4 h-screen flex flex-col justify-center gap-4 overflow-hidden">
        <div className="text-center">
          <h1 className="text-4xl font-semibold">
            Productive<span className="text-violet-main">Life</span>
          </h1>
          <span className="text-xl font-semibold">Bienvenido</span>
        </div>
        {errors.map((error, i) => (
          <p className="text-center bg-red-500" key={i}>
            {error}
          </p>
        ))}
        <div
          className={`grid grid-cols-[100vw_100vw] lg:grid-cols-[50vw_50vw] justify-items-center transition-transform duration-500 ${
            isLogin ? "" : "translate-x-[-100%]"
          }`}
        >
          <LoginForm handleSetIsLogin={handleSetIsLogin} />
          <RegisterForm handleSetIsLogin={handleSetIsLogin} />
        </div>
      </div>
      <div className="hidden lg:flex w-2/4 h-screen bg-violet-main lg:items-center lg:justify-center ">
        <EmblaCarousel />
      </div>
    </div>
  );
}

export default LoginRegisterpage;
