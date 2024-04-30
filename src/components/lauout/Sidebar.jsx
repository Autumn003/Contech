import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  PanelLeftInactive,
  ReceiptText,
  BrainCircuit,
  BriefcaseBusiness,
  Users,
  FilePlus2,
  FileStack,
  Files,
  FileCheck2,
  BookCheck,
  Plus,
  ScanSearch,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="p-4 w-1/5  flex flex-col items-center h-full sticky top-12 left-0">
        <div className="rounded-md bg-gradient-to-b from-muted/0 to-muted py-4">
          <Popover>
            <PopoverTrigger>
              <Button
                variant="outline"
                className="my-5 mx-10 w-36 md:block hidden"
              >
                Projects
              </Button>
              <Button variant="outline" className="my-5 mx-2 md:hidden block">
                <PanelLeftInactive />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="flex flex-col w-full gap-2 ml-2 items-center">
              <Link to="/allprojects">
                <Button variant="outline" className="my-3">
                  All Projects <FileStack className="mx-2 size-5" />
                </Button>
              </Link>
              <Link to="/addproject">
                <Button variant="outline" className="my-3">
                  Add project <FilePlus2 className="mx-2 size-5" />
                </Button>
              </Link>
              <Link to="/yourprojects">
                <Button variant="outline" className="my-3">
                  Your Projects <Files className="mx-2 size-5" />
                </Button>
              </Link>
            </PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger>
              <Button
                variant="outline"
                className="my-5 mx-10 w-36 md:block hidden"
              >
                Resume ATS
              </Button>
              <Button variant="outline" className="my-5 mx-2 md:hidden block">
                <ReceiptText />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="flex flex-col w-60 gap-2 ml-2 items-center">
              <Link to="/resumeATS/jd">
                <Button variant="outline" className="my-3">
                  Review by Job description
                </Button>
              </Link>
              <Link to="/resumeATS/job">
                <Button variant="outline" className="my-3">
                  Review by Job post
                </Button>
              </Link>
            </PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger>
              <Button
                variant="outline"
                className="my-5 mx-10 w-36 md:block hidden"
              >
                Interview Prep
              </Button>
              <Button variant="outline" className="my-5 mx-2 md:hidden block">
                <BrainCircuit />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="flex flex-col w-60 gap-2 ml-2 items-center">
              <Link to="/interviewprep/resume">
                <Button variant="outline" className="my-3">
                  Resume based prep <FileCheck2 className="mx-2 size-5" />
                </Button>
              </Link>
              <Link to="/interviewprep/topics">
                <Button variant="outline" className="my-3">
                  Topic based prep <BookCheck className="mx-2 size-5" />
                </Button>
              </Link>
            </PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger>
              <Button
                variant="outline"
                className="my-5 mx-10 w-36 md:block hidden"
              >
                Jobs
              </Button>
              <Button variant="outline" className="my-5 mx-2 md:hidden block">
                <BriefcaseBusiness />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="flex flex-col w-60 gap-2 ml-2 items-center">
              <Link to="/interviewprep/resume">
                <Button variant="outline" className="my-3">
                  Find a job <ScanSearch className="mx-2 size-5" />
                </Button>
              </Link>
              <Link to="/interviewprep/topics">
                <Button variant="outline" className="my-3">
                  Publish a job <Plus className="mx-2 size-5" />
                </Button>
              </Link>
            </PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger>
              <Link to="/community">
                <Button
                  variant="outline"
                  className="my-5 mx-10 w-36 md:block hidden"
                >
                  Community
                </Button>
              </Link>
              <Link to="/community">
                <Button variant="outline" className="my-5 mx-2 md:hidden block">
                  <Users />
                </Button>
              </Link>
            </PopoverTrigger>
          </Popover>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
