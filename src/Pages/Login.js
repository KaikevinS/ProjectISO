import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import LoginImg from ".././Assets/loginimage.png";
import { setUserSession } from "../Utils/Common";
import { MdOutlineEmail } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { RiArrowLeftLine } from "react-icons/ri";
import Spinner from "../Components/Spinner";

// fauliarahma05@gmail.com
// 12345678

function Login() {
  const [mode, setMode] = useState("selection");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    setError(null);
    setLoading(true);
    if (email && password) {
      axios
        .post("https://people.api.zainzo.com/api/login", {
          email: email,
          password: password,
        })
        .then((res) => {
          setUserSession(res.data.token.original.access_token, res.data.user);
          navigate(`/`, {
            state: {
              closed: false,
            },
          });
          // localStorage.setItem("token", res.data.token.original.access_token);
        })
        .catch((error) => {
          if (error.response.status === 401) {
            setError(error.response.data.Message);
          } else {
            setError("something went wrong. try again later");
          }
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  return (
    <div className="min-h-screen py-10 px-4 flex items-center justify-center">
      <div className={`max-w-[760px] w-full flex lg:bg-white rounded-3xl overflow-hidden lg:shadow-[0px_20px_40px_rgba(0,0,0,0.1)] 
      ${error != null ? 'min-h-[420px]' : 'lg:h-[420px] h-[560px]'}`
      }>
        <div className="flex-1">
          <div className="px-8 py-[50px] flex flex-col">
            <img src={process.env.PUBLIC_URL + '/people.svg'} className="w-[48px] md:w-[64px] mx-auto mt-12 lg:hidden block mb-6" />
            <div className="flex mb-[10px] items-center">
              {mode !== "selection" && (
                <button className="lg:flex hidden items-center hover:text-red-main transition-all mr-2" onClick={() => setMode("selection")}>
                  <RiArrowLeftLine size={24} />
                </button>
              )}
              <h3 className="text-xl mx-auto lg:mx-0">Masuk</h3>
            </div>
            <p className="mb-8 text-sm text-center lg:text-left">Untuk mengakses Zainzo People</p>
            {mode === "selection" && (
              <div>
                <button type="button" className="bg-white h-14 border border-gray-300 text-gray-900 rounded-2xl focus:ring-blue-500 focus:border-blue-500 w-full lg:px-8 px-3 py-4 flex items-center gap-5 mb-5">
                  <FcGoogle size={20} />
                  <span className="text-sm leading-tight">Masuk lewat Google</span>
                </button>
                <button type="button" className="bg-white h-14 border border-gray-300 text-gray-900 rounded-2xl focus:ring-blue-500 focus:border-blue-500 w-full lg:px-8 px-3 py-4 flex items-center gap-5" onClick={() => setMode("email")}>
                  <MdOutlineEmail size={20} className="text-red-main" />
                  <span className="text-sm leading-tight">Masuk lewat Email</span>
                </button>
              </div>
            )}
            {mode === "email" && (
              <form className="flex flex-col gap-4 justify-center" onSubmit={handleLogin}>
                <div>
                  <input
                    type="text"
                    id="first_name"
                    placeholder="Email"
                    className="bg-white border border-gray-300 h-14 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 focus:outline-blue-500 block w-full py-4 px-8"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                {/* {error && <div className="text-red-600 text-sm">{error}</div>} */}
                <div>
                  <input
                    type="password"
                    id="Password"
                    placeholder="Password"
                    className="bg-white border border-gray-300 h-14 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 focus:outline-blue-500 block w-full py-4 px-8"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                {error && <div className="text-red-600 text-sm">*{error}</div>}
                <button type="submit" className="bg-redColor w-full p-2.5 rounded-[15px] text-white flex items-center justify-center h-[60px]" disabled={loading}>
                  {loading && <Spinner />}
                  <span>Login</span>
                </button>
              </form>
            )}
            <p className="mt-10 text-sm flex justify-center items-center whitespace-pre">
              <span>Belum punya akun? </span>
              <Link to={"/register"} className="text-redColor">
                Daftar
              </Link>
            </p>
          </div>
        </div>
        <div style={{ backgroundImage: `url('${LoginImg}')` }} className="lg:block hidden flex-1 bg-cover bg-center" />
      </div>
    </div>
  );
}

export default Login;
