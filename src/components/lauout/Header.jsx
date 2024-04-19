import React, { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
  Moon,
  Sun,
  Menu,
  X,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useTheme } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
// import { Icons } from "@/components/icons";

const Header = () => {
  const [menuVisible, setMenuvisible] = useState(false);

  const toggleMenu = () => {
    setMenuvisible((prevState) => !prevState);
  };
  const navigationMenuTriggerStyle = () => {};

  const user = {
    role: "recruiter",
  };

  const { setTheme } = useTheme();
  return (
    <>
      <div className="p-4 flex items-center backdrop-blur-sm sticky top-0 ">
        <div className="md:w-full flex md:flex-row flex-col items-center absolute md:static top-0 left-0 backdrop-blur-sm px-12  md:p-0">
          <Menu
            className={`md:hidden top-0 left-0 absolute m-4 size-8 ${
              menuVisible ? "hidden" : "block"
            }`}
            style={{
              backgroundColor: "var(--background)",
              color: "var(--foreground)",
              // Add more styles as needed
            }}
            onClick={toggleMenu}
          />
          <X
            className={`md:hidden top-0 left-0 absolute m-4 size-8 ${
              menuVisible ? "block" : "hidden"
            }`}
            style={{
              backgroundColor: "var(--background)",
              color: "var(--foreground)",
              // Add more styles as needed
            }}
            onClick={toggleMenu}
          />
          <div
            id="menubar"
            className={`md:flex ${menuVisible ? "block" : "hidden"}`}
          >
            <p className="text-2xl font-bold mx-4 my-4">Contech.</p>
            <NavigationMenu>
              <NavigationMenuList className="md:gap-0 gap-5 md:flex-row flex-col md:h-auto  justify-evenly">
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Projects flex</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 w-[300px] md:w-[500px] lg:grid-cols-[.75fr_1fr] md:h-auto max-h-[300px] md:overflow-y-hidden overflow-y-scroll ">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            href="/"
                          >
                            <h1 className="text-xl font-semibold">ConTech</h1>
                            <div className="mb-2 mt-4 text-lg font-medium">
                              Contech/flex
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Welcome to the world of Contech. <br /> Flex you
                              project here and get in touch with recruiters.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <ListItem href="/project/new" title="New project">
                        Flex your new project here.
                      </ListItem>
                      <ListItem href="/projects" title="Your projects">
                        Get overiew and Costomize your projects here.
                      </ListItem>
                      <ListItem href="/projects/new/guide" title="Guide">
                        Learn, how to flex a new project on ConTech.
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Jobs</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="w-[300px] gap-3 p-4 md:w-[400px] lg:w-[500px] md:h-auto max-h-[300px] md:overflow-y-hidden overflow-y-scroll ">
                      <ListItem href="/jobs/tech" title="Tech Jobs">
                        ○Frontend Developer ○Backend Developer ○Fullstack
                        Developer ○Data Scientist ○Data Engineer ○Machine
                        Learning Engineer ○DevOps Engineer...
                      </ListItem>
                      <ListItem href="/jobs/nontech" title="Non-Tech Jobs">
                        ○Data analyst ○Business Analyst ○Business Development
                        Manager ○Business Development Executive ○Business
                        Development Associate...
                      </ListItem>
                      {user.role === "recruiter" && (
                        <ListItem href="/jobs/new" title="Post a job">
                          Post a new job for your company.
                        </ListItem>
                      )}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Interview Prep</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[300px] md:h-auto max-h-[300px] gap-3 p-4 md:w-[500px] md:grid-cols-2 md:overflow-y-hidden overflow-y-scroll ">
                      <ListItem href="/jobs/tech" title="Prep with Resume">
                        {/* Upload your resume and get a detailed analysis of your
                      resume. */}
                        Upload your resume and give interview accordingly.
                      </ListItem>
                      <ListItem href="/jobs/nontech" title="Prep By Topic">
                        interview prepration by your choosen topics.
                      </ListItem>
                      <ListItem
                        href="/jobs/nontech"
                        title="Prep for a Job-Role"
                      >
                        interview prepration according to your job role.
                      </ListItem>
                      <ListItem href="/jobs/nontech" title="Prep in neish">
                        Interview prepration in neish.
                      </ListItem>
                      {user.role === "recruiter" && (
                        <ListItem href="/jobs/new" title="Post a job">
                          Post a new job for your company.
                        </ListItem>
                      )}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/docs" legacyBehavior passHref>
                    <NavigationMenuLink>
                      <Link to="/community">Community</Link>
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
        <div className="w-full flex justify-end px-5">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="mx-4">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/*  */}

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="size-9 cursor-pointer">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <Link to="/profile">Profile</Link>
                  <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <CreditCard className="mr-2 h-4 w-4" />
                  <span>Billing</span>
                  <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                  <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Keyboard className="mr-2 h-4 w-4" />
                  <span>Keyboard shortcuts</span>
                  <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <Users className="mr-2 h-4 w-4" />
                  <span>Team</span>
                </DropdownMenuItem>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>
                    <UserPlus className="mr-2 h-4 w-4" />
                    <span>Invite users</span>
                  </DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent>
                      <DropdownMenuItem>
                        <Mail className="mr-2 h-4 w-4" />
                        <span>Email</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <MessageSquare className="mr-2 h-4 w-4" />
                        <span>Message</span>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <PlusCircle className="mr-2 h-4 w-4" />
                        <span>More...</span>
                      </DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
                <DropdownMenuItem>
                  <Plus className="mr-2 h-4 w-4" />
                  <span>New Team</span>
                  <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Github className="mr-2 h-4 w-4" />
                <span>GitHub</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <LifeBuoy className="mr-2 h-4 w-4" />
                <span>Support</span>
              </DropdownMenuItem>
              <DropdownMenuItem disabled>
                <Cloud className="mr-2 h-4 w-4" />
                <span>API</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
                <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </>
  );
};

const ListItem = React.forwardRef(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";

export default Header;
