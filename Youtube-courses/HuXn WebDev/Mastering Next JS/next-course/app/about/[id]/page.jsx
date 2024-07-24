import React from "react";
import { redirect } from "next/navigation";

function About({ params }) {
  console.log(params);

  if (params.id == 4) {
    redirect("/login");
  }

  return (
    <>
      <div>
        <h1>{params.id} Page</h1>

        {/* <button onClick={() => redirect("https://github.com/lucsasl")}>
          Click Here to see my profile
        </button> */}
      </div>
    </>
  );
}

export default About;
