import React from "react";

// components
import Navbar from "../navbar";
import { GreyFullscreen } from "./styled";
import Footer from "../footer";

export default () => {
    return (
        <>
            <Navbar />
            <GreyFullscreen>
                <div style={{ color: "grey", fontFamily: "Work Sans", fontSize: "40px", marginBottom: "10px" }}>
                    Our Exceptional Self-Sufficiency
                </div>
                <div
                    style={{
                        color: "grey",
                        fontFamily: "Montserrat",
                        fontSize: "18px",
                        letterSpacing: "1px",
                        maxWidth: "800px",
                        textAlign: "center",
                        lineHeight: "130%",
                        marginBottom: "30px",
                    }}
                >
                    One acre is more than adequate land to grow the family’s fruits & veggies, house a large solar array
                    for energy, a windmill, use the height differential to store excess wind/solar as hydroelectric in
                    case of battery failure, create rain water storage to fulfill all your needs, enough trees in your
                    plot to provide wood for emergency repairs or to use as fuel, a house or two with food storage areas
                    and room for animals, and still have enough left over for private walking trails, fresh air, and
                    exercise!
                </div>
                <div
                    style={{
                        display: "flex",
                        width: "100%",
                        justifyContent: "center",
                        alignItems: "center",
                        maxWidth: "800px",
                    }}
                >
                    <img
                        src="https://idylworld-static.sgp1.digitaloceanspaces.com/house.png"
                        alt="orchard house"
                        style={{ width: "800px", borderRadius: "5px" }}
                    />
                </div>
            </GreyFullscreen>
            <Footer />
        </>
    );
};
