// React and Next Imports
import React from "react";

// Components
import LoginNavbar from "@/components/LoginNavbar";
import LoginFooter from "@/components/LoginFooter";

function Layout({ children }) {
  return (
    <>
      <div>
        <LoginNavbar />
        {children}
        <LoginFooter />
      </div>
    </>
  );
}

export default Layout;
