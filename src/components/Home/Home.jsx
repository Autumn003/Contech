import React, { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";
import Sidebar from "../lauout/Sidebar.jsx";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Home = () => {
  const messageRef = useRef();
  const ref = collection(db, "messages");
  const [showFullDescription, setShowFullDescription] = useState(false);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   let data = {
  //     message: messageRef.current.value,
  //   };
  //   try {
  //     addDoc(ref, data);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  const description =
    "Post description Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos explicabo cum voluptatum debitis deserunt accusamus suscipit molestias alias qui ut quam aut aspernatur vel, doloremque voluptatibus repellendus enim laudantium assumenda ratione voluptates dignissimos saepe corporis reprehenderit cupiditate. Possimus, natus vel.";

  // Function to count words in a string
  const countWords = (str) => {
    return str.trim().split(/\s+/).length;
  };

  // Function to handle "Read More" button click
  const handleReadMoreClick = () => {
    setShowFullDescription(true);
  };

  const wordsInDescription = countWords(description);
  const truncatedDescription =
    wordsInDescription > 30
      ? description.split(" ").slice(0, 10).join(" ") + "..."
      : description;

  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col items-center w-full gap-3">
          <div className="post">
            <Card className="md:w-[34rem] w-[19rem]">
              <CardHeader>
                <div className=" flex items-center">
                  <img src="/Profile.png" alt="user" className="h-16" />
                  <div className="mx-2">
                    <p className="font-semibold">John Wick</p>
                    <p className="text-muted-foreground">user's tag line</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle>Post Title</CardTitle>
                <CardDescription>
                  {showFullDescription ? description : truncatedDescription}
                  {wordsInDescription > 30 && !showFullDescription && (
                    <Button
                      variant="link"
                      className="p-1"
                      onClick={handleReadMoreClick}
                    >
                      Read More
                    </Button>
                  )}
                </CardDescription>
              </CardContent>
              <CardContent>
                <img
                  src="/testImg1.jpg"
                  alt=""
                  className="md:w-[32rem] md:h-[24rem] h-40 rounded-md object-cover"
                />
              </CardContent>

              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
          </div>
          <div className="post">
            <Card className="md:w-[34rem] w-[19rem]">
              <CardHeader>
                <div className=" flex items-center">
                  <img src="/Profile.png" alt="user" className="h-16" />
                  <div className="mx-2">
                    <p className="font-semibold">John Wick</p>
                    <p className="text-muted-foreground">user's tag line</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle>Post Title</CardTitle>
                <CardDescription>
                  {showFullDescription ? description : truncatedDescription}
                  {wordsInDescription > 30 && !showFullDescription && (
                    <Button
                      variant="link"
                      className="p-1"
                      onClick={handleReadMoreClick}
                    >
                      Read More
                    </Button>
                  )}
                </CardDescription>
              </CardContent>
              <CardContent>
                <img
                  src="/testImg1.jpg"
                  alt=""
                  className="md:w-[32rem] md:h-[24rem] h-40 rounded-md object-cover"
                />
              </CardContent>

              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
          </div>
          <div className="post">
            <Card className="md:w-[34rem] w-[19rem]">
              <CardHeader>
                <div className=" flex items-center">
                  <img src="/Profile.png" alt="user" className="h-16" />
                  <div className="mx-2">
                    <p className="font-semibold">John Wick</p>
                    <p className="text-muted-foreground">user's tag line</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle>Post Title</CardTitle>
                <CardDescription>
                  {showFullDescription ? description : truncatedDescription}
                  {wordsInDescription > 30 && !showFullDescription && (
                    <Button
                      variant="link"
                      className="p-1"
                      onClick={handleReadMoreClick}
                    >
                      Read More
                    </Button>
                  )}
                </CardDescription>
              </CardContent>
              <CardContent>
                <img
                  src="/testImg1.jpg"
                  alt=""
                  className="md:w-[32rem] md:h-[24rem] h-40 rounded-md object-cover"
                />
              </CardContent>

              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
          </div>
          <div className="post">
            <Card className="md:w-[34rem] w-[19rem]">
              <CardHeader>
                <div className=" flex items-center">
                  <img src="/Profile.png" alt="user" className="h-16" />
                  <div className="mx-2">
                    <p className="font-semibold">John Wick</p>
                    <p className="text-muted-foreground">user's tag line</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle>Post Title</CardTitle>
                <CardDescription>
                  {showFullDescription ? description : truncatedDescription}
                  {wordsInDescription > 30 && !showFullDescription && (
                    <Button
                      variant="link"
                      className="p-1"
                      onClick={handleReadMoreClick}
                    >
                      Read More
                    </Button>
                  )}
                </CardDescription>
              </CardContent>
              <CardContent>
                <img
                  src="/testImg1.jpg"
                  alt=""
                  className="md:w-[32rem] md:h-[24rem] h-40 rounded-md object-cover"
                />
              </CardContent>

              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
          </div>
        </div>
        <div className="w-54 lg:flex flex-col hidden  mx-3 relative right-0">
          <a
            className="flex h-fit flex-col rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md sticky right-0 top-24"
            href="/resumeATS/jd"
          >
            <div className="mb-2 mt-4 text-lg font-medium">Resume ATS</div>
            <p className="text-sm leading-tight text-muted-foreground">
              Unlock your resume's full potential. Our tool not only scores your
              resume but also suggests missing keywords tailored to job
              descriptions.
            </p>
          </a>
          <a
            className="flex h-fit flex-col rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md sticky right-0 top-[16.5rem]"
            href="/interviewprep/resume"
          >
            <div className="mb-2 mt-4 text-lg font-medium">
              Interview Prepration
            </div>
            <p className="text-sm leading-tight text-muted-foreground">
              Supercharge your interview preparation with our AI-driven
              platform. Personalized feedback and insights to help you excel in
              any interview.
            </p>
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
