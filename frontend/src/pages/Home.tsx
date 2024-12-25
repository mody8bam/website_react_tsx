import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Description from "../components/Description";
import Footer from "../components/Footer";

 function Home() {
    let hideDescription = true;
    let hideFooter = "k";
    return (
        <>
        <main className="flex flex-col items-center justify-center h-screen ">
            <p style={{ color: "red", fontSize: "2rem", backgroundColor: "gray" }}>
              main in app.tsx
            </p>
            <Header />
            <div>
              <Link to="/about"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">About</button></Link>
            </div>
            {hideDescription && <Description text="Main Heading" subtext="Optional Subheading" />}
            <div className="flex flex-col items-center justify-center h-screen">
              {hideFooter ? <Footer /> : null}
            </div>
          </main>
          </>
    );
}

export default Home;