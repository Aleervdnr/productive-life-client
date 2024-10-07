import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import InputForm from "./InputForm";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function RegisterForm({ handleSetIsLogin }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signup, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/home");
  }, [isAuthenticated]);

  const onSubmit = async (values) => {
    signup(values);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid gap-4 text-white w-full px-5 max-w-[350px]"
    >
      {errors.name && (
        <p className="text-xs text-red-600 bg-gray-600 p-1 w-fit rounded-md">
          username is required
        </p>
      )}
      <div className="grid gap-1">
        <label className="text-[13px] font-semibold">Nombre</label>
        <InputForm
          typeInput={"text"}
          placeholder={"Ingrese su nombre"}
          name={"name"}
          register={register}
        />
      </div>
      {errors.email && (
        <p className="text-xs text-red-600 bg-gray-600 p-1 w-fit rounded-md">
          email is required
        </p>
      )}
      <div className="grid gap-1">
        <label className="text-[13px] font-semibold">Email</label>
        <InputForm
          typeInput={"email"}
          placeholder={"Ingrese su email"}
          name={"email"}
          register={register}
        />
      </div>
      {errors.password && (
        <p className="text-xs text-red-600 bg-gray-600 p-1 w-fit rounded-md">
          Password is required
        </p>
      )}
      <div className="grid gap-1">
        <label className="text-[13px] font-semibold">Contraseña</label>
        <InputForm
          typeInput={"password"}
          placeholder={"Ingrese su contraseña"}
          name={"password"}
          register={register}
        />
      </div>

      <div className="flex justify-between items-center">
        <p className="text-xs font-semibold text-dark-100">
          Ya tenes cuenta?{" "}
          <span
            onClick={handleSetIsLogin}
            className="text-violet-main cursor-pointer"
          >
            Inicia Sesion
          </span>
        </p>
        <button className="bg-violet-main text-white text-sm px-4 py-[6px] rounded w-fit font-semibold">
          Registrar
        </button>
      </div>
    </form>
  );
}

export default RegisterForm;
