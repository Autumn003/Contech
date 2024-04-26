import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";
import Sidebar from "../lauout/Sidebar.jsx";

const Home = () => {
  const messageRef = useRef();
  const ref = collection(db, "messages");

  const handleSubmit = async (e) => {
    e.preventDefault();

    let data = {
      message: messageRef.current.value,
    };
    try {
      addDoc(ref, data);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="  bg-red-200 h-[1000px]"></div>
      </div>
    </>
  );
};

export default Home;
