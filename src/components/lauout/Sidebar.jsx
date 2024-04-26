import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { PanelLeftInactive } from "lucide-react";

import { Button } from "@/components/ui/button";

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
                Project
              </Button>
              <Button variant="outline" className="my-5 mx-2 md:hidden block">
                <PanelLeftInactive />
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                      shadcn/ui
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Beautifully designed components that you can copy and
                      paste into your apps. Accessible. Customizable. Open
                      Source.
                    </p>
                  </a>
                </li>
              </ul>
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
                <PanelLeftInactive />
              </Button>
            </PopoverTrigger>
            <PopoverContent>Place content for the popover here.</PopoverContent>
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
                <PanelLeftInactive />
              </Button>
            </PopoverTrigger>
            <PopoverContent>Place content for the popover here.</PopoverContent>
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
                <PanelLeftInactive />
              </Button>
            </PopoverTrigger>
            <PopoverContent>Place content for the popover here.</PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger>
              <Button
                variant="outline"
                className="my-5 mx-10 w-36 md:block hidden"
              >
                Community
              </Button>
              <Button variant="outline" className="my-5 mx-2 md:hidden block">
                <PanelLeftInactive />
              </Button>
            </PopoverTrigger>
          </Popover>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
