import Link from "next/link";
import React from "react";

function Dashboard() {
  return (
    <>
      <main>
        <div className="mainCont">
          <section className="dashboardIntro">
            <h1>Dashboard</h1>

            <p>This is the Dashboard...</p>
          </section>

          <section className="userProfile">
            <div>
              <div className="userImg">Something</div>

              <div className="userInfo">
                <h2>Username</h2>

                <h3>Some name</h3>

                <p>Age: 20</p>

                <p className="status">😀 hey, This is totally made up!</p>
              </div>
            </div>
          </section>

          <section className="markdown">
            <div>
              <h1>This is a markdown</h1>

              <h2>Header one</h2>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita distinctio veritatis hic quis, dolores neque molestiae
                dolor ullam, nesciunt perferendis fugiat corporis obcaecati
                accusantium itaque ad ipsam laboriosam! Tempore, explicabo?
              </p>

              <h2>Header two</h2>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita distinctio veritatis hic quis, dolores neque molestiae
                dolor ullam, nesciunt perferendis fugiat corporis obcaecati
                accusantium itaque ad ipsam laboriosam! Tempore, explicabo?
              </p>

              <h2>Header three</h2>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita distinctio veritatis hic quis, dolores neque molestiae
                dolor ullam, nesciunt perferendis fugiat corporis obcaecati
                accusantium itaque ad ipsam laboriosam! Tempore, explicabo?
              </p>

              <div>
                <ul>
                  <li>
                    <a href="#one" target="_self" rel="noopener noreferrer">
                      Header One
                    </a>
                  </li>
                  <li>
                    <a href="#two" target="_self" rel="noopener noreferrer">
                      Header Two
                    </a>
                  </li>
                  <li>
                    <a href="#three" target="_self" rel="noopener noreferrer">
                      Header Three
                    </a>
                  </li>
                  <li>
                    <Link href="/">
                      Go back Home
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default Dashboard;
