import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../redux/apiRequest";
import { useDispatch } from "react-redux";
import Footer from "../Footer/Footer";
export default function Register() {
  const [email, setEmail] = useState("");
  const [username, setUSer] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const newUser = {
      email: email,
      username: username,
      password: password,
    };
    registerUser(newUser, dispatch, navigate);
  };
  return (
    <div className="background_Register">
      <div className="snowflakes" aria-hidden="true">
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
      </div>

      <div className="max-w-7xl  mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-5 py-3 lg:py-2 lg:pr-10">
          <div className="lg:col-span-2 mb-12 lg:col-start-4">
            <div>
              <img className="img_Christmas" alt="" />
            </div>
            <form
              onSubmit={handleRegister}
              className="p-3 register_Form bg-white shadow-sm"
            >
              <div className="text-2xl text-center registerFont">
                <button>Đăng ký</button>
              </div>
              <i className="far fa-user"></i>
              <div>
                <label>Email</label>
                <input
                  type="text"
                  placeholder="Enter your username"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label className="">USERNAME</label>
                <input
                  type="text"
                  placeholder="Enter your password"
                  onChange={(e) => setUSer(e.target.value)}
                />
              </div>

              <div>
                <label className="">PASSWORD</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="mt-8 text-center">
                <button type="submit" className="button">
                  Đăng ký
                </button>
                <div className="block items-center">
                  <span className="text-slay-400 text-red-600">
                    Bạn Đã Có Tài Khoản?
                  </span>
                  <Link className="text ml-3 text-orange" to={"/Login"}>
                    Login
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
