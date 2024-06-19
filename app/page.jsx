"use client";

import useSWR from "swr";
import Input from "./components/input";
import axios from "./lib/axios";

export default function Home() {
  async function doSubmitting(evt) {
    evt.preventDefault();
    try {
      await axios.get("/sanctum/csrf-cookie");
      const loginRes = await axios.post("/login", {
        email: "dogunfx@gmail.com",
        password: "12345678",
      });
      console.log(loginRes);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <main>
      <div className="shadow-md rounded-sm p-4 w-1/2 m-auto mt-10">
        <h3 className="text-slate-500 text-2xl text-center">Login Here</h3>
        <form onSubmit={doSubmitting}>
          <Input placeholder="Enter Email" type="email" />
          <Input placeholder="Enter Password" type="password" />
          <div className="p-2 my-2">
            <button className="bg-black border text-white px-4 py-1 hover:text-black hover:bg-transparent">
              Submit
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
