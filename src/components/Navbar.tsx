"use client";
import React, { useEffect, useState } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "../components/ui/navbar-menu";
import { cn } from "../../utils/cn";
import { useTheme } from "next-themes";
import Image from "next/image";
import axios from "axios";
import { SunOutlined, MoonOutlined } from '@ant-design/icons';
import { useRouter } from "next/router";
import Link from "next/link";

export function NavbarDemo() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <>
      <Link href={"/"} className="hidden md:block absolute z-50 mt-4 ml-4" onClick={(e) => e.preventDefault()}>
        <Image
          src={"/images/logo.png"}
          alt="logo"
          width={100}
          height={10}
          className="dark:hidden"
        />
        <Image
          src={"/images/logoWhite.png"}
          alt="logo"
          width={100}
          height={10}
          className="hidden dark:flex"
        />
      </Link>
      <div className="relative top-8 w-full flex items-center justify-center">
        <Navbar />
      </div>
    </>
  );
}
interface Blog {
  _id: string;
  title: string;
  subtitle: string;
  url: string;
  image: string;
  description: string;
}
function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const { theme, setTheme } = useTheme();
  const [blogs, setBlogs] = React.useState<Blog[]>([]);
  React.useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API}/api/v1/blogs`);
    setBlogs(res?.data?.data);
  };
  return (
    <>
      <div
        className={cn(
          "hidden md:block flex-row fixed inset-x-0 w-full mx-auto z-40",
          className
        )}
      >
        <Menu setActive={setActive}>
          <MenuItem setActive={setActive} active={active} item="Home" href="/">
            {/* <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/">Home</HoveredLink>
              <HoveredLink href="/#why-guideline">Why Guideline</HoveredLink>
              <HoveredLink href="/#about">About Us</HoveredLink>
              <HoveredLink href="/blogs">Blogs</HoveredLink>
              <HoveredLink href="/#contact">Contact Us</HoveredLink>
              <HoveredLink
                href="#"
                onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                  e.preventDefault();
                  setTheme(theme === "light" ? "dark" : "light");
                }}
              >
                Theme {theme}
              </HoveredLink>
            </div> */}
          </MenuItem>
          <MenuItem
            setActive={setActive}
            active={active}
            item="WhyGuideline"
            href="/#why-guideline"
          ></MenuItem>
          <MenuItem
            setActive={setActive}
            active={active}
            item="OurService"
            href="/#about"
          ></MenuItem>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Blogs"
            href="/blogs"
          >
            <div className="  text-sm grid grid-cols-2 gap-10 p-4">
              {blogs?.slice(0, 4)?.map((item, idx) => (
                <ProductItem
                  key={idx}
                  title={item?.title?.substring(0, 20) + "..."}
                  href={`/blogs/${item?._id}`}
                  src={`${process.env.NEXT_PUBLIC_API}/uploads/${item.image}`}
                  description={item?.subtitle?.substring(0, 100) + "..."}
                />
              ))}
            </div>
          </MenuItem>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Contact"
            href="/#contact"
          >
          </MenuItem>
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className=" bg-gray-100 dark:bg-gray-800 dark:text-white text-black rounded-full w-7 "
          >
            {theme === 'dark' ? <SunOutlined /> : <MoonOutlined />}
          </button>
        </Menu>
      </div>
      <div
        className={cn(
          "md:hidden fixed inset-x-0 max-w-2xl mx-auto z-50",
          className
        )}
      >
        <Menu setActive={setActive}>
          <MenuItem setActive={setActive} active={active} item="menu" href="#">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/">Home</HoveredLink>
              <HoveredLink href="/#why-guideline">Why Guideline</HoveredLink>
              <HoveredLink href="/#about">About Us</HoveredLink>
              <HoveredLink href="/blogs">Blogs</HoveredLink>
              <HoveredLink href="/blogs">Blogs</HoveredLink>
              <HoveredLink href="/#contact">Contact Us</HoveredLink>

              <HoveredLink
                href="#"
                onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                  e.preventDefault();
                  setTheme(theme === "light" ? "dark" : "light");
                }}
              >
                Theme {theme}
              </HoveredLink>
            </div>
          </MenuItem>

        </Menu>
      </div>
    </>
  );
}
