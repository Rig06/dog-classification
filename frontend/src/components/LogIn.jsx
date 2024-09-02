import { useRef, useState, useEffect, useContext } from "react";
import AuthContext from "../context/AuthProvider";
import axios from "../api/axios";
const LOGIN_URL = "/api/basicuser";
import Logo from "./appLogoCard/Logo";

const inputFieldStyle =
  "block w-full p-2 text-xs bg-gray-50 border  rounded-md focus:ring-blue-500 focus:border-blue-500  dark:bg-slate-50- dark:border-gray-600 dark:placeholder-gray-400 dark:text-slate-900 dark:focus:ring-blue-500 dark:focus:border-blue-500 autofill:shadow-[inset_0_0_0px_1000px_rgb(249,250,251)]";
const inputFieldLabelStyle = "block mb-1 text-xs font-sm dark:text-white";
const buttonStyle =
  "w-full text-gray-800 font-medium rounded-md text-sm py-1.5 text-center dark:bg-yellow-400 dark:hover:bg-yellow-200";

const LogIn = () => {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef(null);
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const [isLoggedIn, setLogin] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, password]);

  const onChangeUser = (e) => {
    const user = e.target.value;
    setUser(user);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleOnSubmit = async (e) => {
    console.log("You are in the login axios block" + user);
    e.preventDefault();

    try {
      const response = await axios.post(
        `${LOGIN_URL}/login`,
        JSON.stringify({ user, password }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      console.log(JSON.stringify(response?.data));
      setUser("");
      setPassword("");
      setSuccess(true);
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <>
      <Logo />

      <>
        {/* <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p> */}

        {success ? (
          <section className="bg-indigo-500 p-6 rounded-lg">
            <h1>You are logged in!</h1>
            <br />
            <p>
              <a href="#">Go to the Home Page</a>
            </p>
          </section>
        ) : (
          <section className="bg-indigo-500 p-6 rounded-lg">
            <div className="max-w-sm m-auto p-4 rounded-md border text-white">
              <h1 className="pb-5 text-center">Log In</h1>
              <form onSubmit={handleOnSubmit}>
                <div className="mb-5">
                  <label className={inputFieldLabelStyle}>Your Email</label>
                  <input
                    ref={userRef}
                    type="text"
                    id="user"
                    className={inputFieldStyle}
                    placeholder="name@flowbite.com"
                    onChange={onChangeUser}
                    value={user}
                    autoComplete="off"
                    required
                  />
                </div>
                <div className="mb-5">
                  <label className={inputFieldLabelStyle}>Your Password</label>
                  <input
                    type="password"
                    id="password"
                    className={inputFieldStyle}
                    placeholder="*******"
                    onChange={onChangePassword}
                    value={password}
                    required
                  />
                  {errMsg && (
                    <div className="text-red-700 font-medium text-xs pt-1 px-2">
                      Failed to Login, try again.{" "}
                    </div>
                  )}
                </div>
                <div>
                  <button
                    disabled={isLoggedIn}
                    type="submit"
                    className={buttonStyle}
                  >
                    {isLoggedIn ? "Signing In..." : "Sign In"}
                  </button>
                </div>
              </form>

              <div className="py-2 mt-4 w-full text-center text-sm grid justify-stretch color-white ">
                <p>
                  Need an Account? </p>
                  <span />
                  <a className={buttonStyle} href="#">
                    Sign Up
                  </a>
                
              </div>
            </div>
          </section>
        )}
      </>
    </>
  );
};

export default LogIn;
