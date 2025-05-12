"use client";
import React, { useState } from "react";
import Container from "@/components/Container";
import axios from "axios";
import Cookie from "js-cookie";
import { redirect } from "next/navigation";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    //   const data = axios({
    //     method: "POST",
    //     url: "/login",
    //     data: {
    //       username: userName,
    //       password: password,
    //     },
    //   });
    const respons = {
      token: "dd",
      expire: 7,
    };
    Cookie.set("token", respons.token, { expires: respons.expire });
    redirect("/dashboard");
  };

  return (
    <Container>
      <div className="flex flex-col rounded-md mx-auto w-[400px] h-96 p-8 my-[100px] shadow-lg">
        <input
          onChange={(e) => setUserName(e.target.value)}
          type="text"
          placeholder="user name"
          className="p-2 my-2 border-1 rounded"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="password"
          className="p-2 my-2 border-1 rounded"
        />
        <button
          onClick={handleLogin}
          className="py-1 px-4 bg-sky-500 my-4 rounded-lg"
        >
          Login
        </button>
      </div>
    </Container>
  );
}

export default Login;
