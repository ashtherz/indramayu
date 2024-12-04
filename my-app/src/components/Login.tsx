import React from "react";
import logo from "../images/logo.svg"; // Update the path to the correct logo file

interface LoginProps {
  onLogin: (email: string, password: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    onLogin(email, password);
  };

  return (
    <div className="Login w-screen h-screen bg-[#01347c] flex justify-center items-center relative">
      {/* Logo */}
      <div className="absolute top-10 left-10">
        <img
          src={logo}
          alt="Logo Kabupaten Indramayu"
          className="w-[350px] h-auto"
        />
      </div>

      {/* Login Form */}
      <div className="w-[652px] bg-white rounded-2xl shadow p-6">
        <h1 className="text-3xl font-bold text-[#01347c] text-center">Masuk Akun</h1>
        <form onSubmit={handleSubmit} className="mt-6 space-y-6">
          <div>
            <label htmlFor="email" className="block text-[#344054] text-sm font-medium">
              E-mail
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="yourmum@gmail.com"
              className="w-full mt-2 p-2 border border-[#dedede] rounded focus:outline-none"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-[#344054] text-sm font-medium">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="password yum >:)"
              className="w-full mt-2 p-2 border border-[#dedede] rounded focus:outline-none"
              required
            />
          </div>
          <div className="text-right">
            <a href="#" className="text-[#7e71ff] text-sm">
              Lupa password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-[#1f3e81] text-white font-bold py-2 rounded"
          >
            Masuk
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
