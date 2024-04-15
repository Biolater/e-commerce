"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
export default function Navbar() {
  const { data: session } = useSession();

  return (
    <header className="header z-10 shadow-2xl flex items-center justify-center bg-primary/80 backdrop-blur-lg fixed w-full top-0">
      <div className="container h-full px-4 py-2 mx-auto">
        <div className="navbar__mobile w-full h-full flex items-center justify-between md:hidden">
          <button className="hamburger__btn flex flex-col gap-[3px]">
            <span className="w-[18px] rounded-[10px] h-[3px] bg-white"></span>
            <span className="w-[18px] rounded-[10px] h-[3px] bg-white"></span>
            <span className="w-[18px] rounded-[10px] h-[3px] bg-white"></span>
          </button>
          {!session ? (
            <div className="auth__buttons text-white font-semibold flex items-center gap-2">
              <Link
                href="/api/auth/signin"
                className="bg-secondary active:scale-90  border-2 border-[#2D4263] hover:bg-transparent button-transition rounded-[5px] px-[10px] py-[5px]"
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="bg-tertiary active:scale-90 border-2 border-[#C84B31] hover:bg-transparent button-transition rounded-[5px] px-[10px] py-[5px]"
              >
                Sign up
              </Link>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              
              <button className="bg-secondary p-2 rounded-xl text-white" onClick={() => signOut()}>Sign out</button>
              <div className="size-12 rounded-full bg-white"></div>
            </div>
          )}
        </div>
        <nav className="navbar hidden md:flex">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
