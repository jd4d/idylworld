import React from "react";

// components
import Navbar from "../navbar";
import { GreyFullscreen } from "./styled";
import Footer from "../footer";
import { Carousel } from "antd";

export default () => {
    return (
        <>
            <Navbar />
            <GreyFullscreen>
                <div style={{ color: "grey", fontFamily: "Work Sans", fontSize: "40px", marginBottom: "50px" }}>
                    Our Exceptional Community
                </div>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Carousel autoplay style={{ width: "800px", borderRadius: "5px", overflow: "hidden" }}>
                        <img
                            src="https://idylworld-static.sgp1.digitaloceanspaces.com/master%20plan%20satellite.png"
                            alt="master plan satellite"
                            style={{ width: "800px", borderRadius: "5px" }}
                        />
                        <img
                            src="https://idylworld-static.sgp1.digitaloceanspaces.com/master%20plan.png"
                            alt="master plan"
                            style={{ width: "800px", borderRadius: "5px" }}
                        />
                    </Carousel>
                </div>
            </GreyFullscreen>
            <Footer />
        </>
    );
};
