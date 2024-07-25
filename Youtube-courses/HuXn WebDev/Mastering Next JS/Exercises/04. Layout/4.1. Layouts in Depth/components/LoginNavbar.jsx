"use client";

// Next Imports
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function LoginNavbar() {
  const pathName = usePathname();

  return (
    <>
      <div>
        <ul className="login-menu border bg-green-600">
          {pathName === "/login/loginadmin" ? (
            <li>
              <Link href="/login">Login Main</Link>
            </li>
          ) : (
            <>
              <li>
                <Link href="/login/loginuser">Login Regular User</Link>
              </li>
              <li>
                <Link href="/login/loginadmin">Login Admin</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </>
  );
}

export default LoginNavbar;
