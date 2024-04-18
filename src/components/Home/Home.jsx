import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";

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
    <div>
      <form onSubmit={handleSubmit} className="flex gap-10">
        <Input type="text" ref={messageRef} />
        <Button type="submit">submit</Button>
      </form>
    </div>
  );
};

export default Home;
