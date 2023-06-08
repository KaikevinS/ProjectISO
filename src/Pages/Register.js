import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import LoginImg from ".././Assets/loginimage.png";
import { setUserSession } from "../Utils/Common";
import { MdOutlineEmail } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { RiArrowLeftLine } from "react-icons/ri";
import Spinner from "../Components/Spinner";

function Register() {
  const [mode, setMode] = useState("selection");
  const [fullname, setFullname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    setError(null);
    setLoading(true);
    axios
      .post("https://people.api.zainzo.com/api/registerAdmin", {
        employee_fullname: fullname,
        employee_phone_number: phoneNumber,
        email: email,
        password: password,
      })
      .then((res) => {
        setLoading(false);
        setUserSession(res.data.token.original.access_token, res.data);
        navigate("/onboarding");
        console.log(res);
      })
      .catch((error) => {
        setLoading(false);
        // if (error.response.status === 401 || error.response.status === 400) {
        setError(error.response.data.error);
        // } else {
        // setError("something went wrong. try again later");
        // }
      });
    setPassword("");
    console.log(error);
  };

  return (
    <div className="min-h-screen py-10 px-4 flex items-center justify-center">
      <div className="w-[760px] min-h-[420px] flex lg:bg-white rounded-3xl overflow-hidden lg:shadow-[0px_20px_40px_rgba(0,0,0,0.1)]">
        <div className="flex-1">
          <div className="px-8 py-[50px]">

            <img src={process.env.PUBLIC_URL + '/people.svg'} className="lg:hidden block w-[48px] md:w-[64px] mx-auto mt-12 mb-6" />
            <div className="flex items-center mb-[10px]">
              {mode !== "selection" && (
                <button className="lg:block hidden items-center hover:text-red-main transition-all mr-2" onClick={() => setMode("selection")}>
                  <RiArrowLeftLine size={24} />
                </button>
              )}
              <h3 className="text-xl mx-auto lg:mx-0">Daftar</h3>
            </div>
            <p className="text-sm mb-8 text-center lg:text-left">Untuk mengakses Zainzo People</p>

            {mode === "selection" && (
              <div>
                <button type="button" className="bg-white border border-gray-300 text-gray-900 rounded-2xl focus:ring-blue-500 focus:border-blue-500 w-full lg:px-8 px-3 py-4 flex items-center gap-5 mb-5">
                  <FcGoogle size={20} />
                  <span className="text-sm leading-tight">Daftar lewat Google</span>
                </button>
                <button type="button" className="bg-white border border-gray-300 text-gray-900 rounded-2xl focus:ring-blue-500 focus:border-blue-500 w-full lg:px-8 px-3 py-4 flex items-center gap-5" onClick={() => setMode("email")}>
                  <MdOutlineEmail size={20} className="text-red-main" />
                  <span className="text-sm leading-tight">Daftar lewat Email</span>
                </button>
              </div>
            )}
            {mode === "email" && (
              <form className="flex flex-col gap-5 justify-center" onSubmit={handleSubmit}>
                <div>
                  <input
                    type="text"
                    id="nama-lengkap"
                    placeholder="Nama Lengkap"
                    className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full lg:px-8 px-3 py-4"
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
                    required
                  />
                  {error && <div className="text-red-600 text-sm">{error.employee_fullname && error.employee_fullname}</div>}
                </div>
                <div>
                  <input
                    type="text"
                    id="nomor-ponsel"
                    placeholder="Nomor Ponsel"
                    className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full lg:px-8 px-3 py-4"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                  />
                  {error && <div className="text-red-600 text-sm">{error.employee_phone_number ? error.employee_phone_number : error}</div>}
                </div>
                <div>
                  <input
                    type="text"
                    id="email"
                    placeholder="Email"
                    className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full lg:px-8 px-3 py-4"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  {error && <div className="text-red-600 text-sm">{error.email ? error.email : error}</div>}
                </div>
                <div>
                  <input
                    type="password"
                    id="Password"
                    placeholder="Password"
                    className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full lg:px-8 px-3 py-4"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  {error && <div className="text-red-600 text-sm">{error.password && error.password}</div>}
                </div>
                <button type="submit" className="bg-redColor block w-full p-2.5 rounded-[15px] text-white text-center h-[60px]">
                  {loading && <Spinner />}
                  <span>Daftar</span>
                </button>
              </form>
            )}
            <p className="mt-10 text-sm flex justify-center items-center whitespace-pre">
              <span>Sudah punya akun? </span>
              <Link to={"/login"} className="text-redColor">
                Login
              </Link>
            </p>
          </div>
        </div>

        <div style={{ backgroundImage: `url('${LoginImg}')` }} className="flex-1 bg-cover bg-center lg:block hidden" />
      </div>
    </div>
  );
}

export default Register;