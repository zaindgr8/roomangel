"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import Image from "next/image";

export default function Header() {
  const [hasLogo, setHasLogo] = useState(false);

  return (
    <>
      {/* Start Topbar */}
      <div className="d-none d-lg-block topbar-bg bg-[#1f5453] text-white">
        <div className="container pb-4">
          <div className="row align-items-center">
            <div className="col-md-4 col-lg-3 col-xl-4">
              <Link href="/" className="headerLogo">
                <Image
                  width={200}
                  height={150}
                  src="/assets/img/logo/logo_white.svg"
                  alt=""
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* /.End Topbar */}
      {/* Start Navbar */}
      <div>
        <div className="container-lg nav-container position-relative">
          <nav className="custom-navbar navbar navbar-expand-lg">
            <Link
              className=" border-end navbar-brand pe-3 pe-sm-4 py-0"
              href="/"
            >
              <img className="logo-dark" src="assets/img/us1.png" alt="" />
              <img className="logo-white" src="assets/img/us1.png" alt="" />
            </Link>

            <div className="navbar-collapse">
              <div className=" justify-between  md:hidden lg:hidden   flex">
                <div className="">
                  <Link href="/">
                    <Image
                      width={95}
                      height={60}
                      src="/assets/img/logo/logo.svg"
                      alt=""
                    />
                  </Link>
                </div>
                <div className=" flex p-2 gap-3">
                  <Link href="/signin" className="cart-button">
                    <span className=" text-[#1f5453] text-md">Sign In</span>
                  </Link>
                  <Link href="/signup" className="cart-button">
                    <span className=" text-[#1f5453] text-md">Register</span>
                  </Link>
                </div>
              </div>

              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link
                    href="/signup"
                    className="align-items-center btn cart-button d-none d-xl-flex ms-2 ms-lg-0"
                  >
                    <span className="ms-2 text-[#1f5453] text-md">
                      Register
                    </span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    href="/signin"
                    className="align-items-center btn cart-button d-none d-xl-flex ms-2 ms-lg-0"
                  >
                    <span className="ms-2 text-[#1f5453] text-md">Sign In</span>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
