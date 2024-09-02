import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "../../api/axios";
const SIGNUP_URL = "/api/basicuser/signup";

const inputFieldStyle =
  "block w-full p-2 text-xs bg-gray-50 border  rounded-md focus:ring-blue-500 focus:border-blue-500  dark:bg-slate-50- dark:border-gray-600 dark:placeholder-gray-400 dark:text-slate-900 dark:focus:ring-blue-500 dark:focus:border-blue-500 autofill:shadow-[inset_0_0_0px_1000px_rgb(249,250,251)]";
const inputFieldLabelStyle =
  "block mb-1 text-xs font-sm dark:text-white";
const warningLabel = "text-xs font-medium text-red-900";
const buttonStyle =
  "w-full text-gray-800 font-medium rounded-md text-md py-1.5 text-center dark:bg-yellow-400	 dark:hover:bg-amber-500";

  // User schema
  const validationSchema = yup
  .object({
    name: yup.string().required("Name is required"),
    userName: yup.string().required("Missing username"),
    email: yup.string().required("Missing email").email("Invalid email format"),
    password: yup.string().required("Missing password").min(8).max(16),
  })
  .required();
// Create Register Object
const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors, isSubmitting },
    setError,
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      name: "",
      userName: "",
      email: "",
      password: "",
    },
  });

  console.log("errors", errors);
  // Handles onSubmit
  const onSubmit = async (data) => {

    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
    console.log("data...",  JSON.stringify({ data }));

    axios
      .post(SIGNUP_URL, data)
      .then((response) => {
        console.log("succ", response);
      })
      .catch((err) => {
        console.log("err", err);
        if (err.response.data.errors.email) {
          setError("email", {
            type: "server",
            message: "This email " + err.response.data.errors.email[0],
          });
        }
        if (err.response.data.errors.userName) {
          setError("userName", {
            type: "server",
            message: "This user name " + err.response.data.errors.userName[0],
          });
        }
        if (err.response.data.errors.password) {
          setError("password", {
            type: "server",
            message: err.response.data.errors.password[0],
          });
        }
      });
  };
// Update form after a successful register
  React.useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({
        name: "",
        userName: "",
        email: "",
        password: "",
      });
    }
  }, [formState, reset]);

  return (
    <div className="bg-indigo-500  justify-center items-center p-6 rounded-lg">

    <form className="max-w-sm m-auto p-4 rounded-md border" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-5">
        <label className={inputFieldLabelStyle}>Name</label>
        <input
        className={inputFieldStyle}
          {...register("name")}
          type="text"
          id="name"
        />
        {errors.name && (
          <span className={warningLabel}>{errors.name.message}</span>
        )}
      </div>

      <div className="mb-5">
        <label className={inputFieldLabelStyle} >Username</label>
        <input
          {...register("userName")}
          type="text"
          id="userName"
          className={inputFieldStyle}
        />
        {errors.userName && (
          <span className={warningLabel}>{errors.userName.message}</span>
        )}
      </div>
      <div className="mb-5">
        <label className={inputFieldLabelStyle}>Your email</label>
        <input
          {...register("email")}
          type="email"
          id="email"
          className={inputFieldStyle}
          placeholder="name@flowbite.com"
        />
        {errors.email && (
          <span className={warningLabel}>{errors.email.message}</span>
        )}
      </div>
      <div className="mb-5">
        <label className={inputFieldLabelStyle}>Your password</label>
        <input
          {...register("password")}
          type="password"
          id="password"
          className={inputFieldStyle}
          placeholder="*******"
        />
        {errors.password && (
          <span className={warningLabel}>{errors.password.message}</span>
        )}
      </div>
      <div>
        <button disabled={isSubmitting} type="submit" className={buttonStyle}>
          {isSubmitting ? "Registering..." : "Register"}
        </button>
      </div>
    </form>
    </div>
  );
};
export default Register;
