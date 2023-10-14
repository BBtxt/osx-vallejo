import React from "react";
import Image from "next/image";
const Login = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-[url('/public/osx_wave.jpeg')]">
      <div className="border-2">
        <Image
          src="/avatar.png"
          alt="it's a me brando"
          width={100}
          height={100}
        />
      </div>
      <div>Brandon Baker</div>
      <div>
        <form action="Login">
          <input
            aria-label="fake password"
            type="text"
            placeholder="Password"
            className="rounded-lg border-2 border-gray-300 p-2 "
          />
        </form>
      </div>
      <div> 
      </div>
    </div>
  );
};

export default Login;
