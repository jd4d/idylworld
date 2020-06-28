import React from "react";

// components
import Navbar from "../navbar";
import { BlueFullscreen } from "./styled";
import { Carousel } from "antd";
import { CarouselImage1, CarouselImage2, CarouselImage3 } from "./styled";
import Footer from "../footer";
import ConnectedCarousel1 from "../../assets/connected-carousel-1/map-carousel-1.png";
import ConnectedCarousel2 from "../../assets/connected-carousel-1/map-carousel-2.png";
import ConnectedCarousel3 from "../../assets/connected-carousel-1/map-carousel-3.png";

export default () => {
    return (
        <>
            <Navbar />
            <BlueFullscreen>
                <div style={{ color: "grey", fontFamily: "Work Sans", fontSize: "40px", marginBottom: "10px" }}>
                    Our Exceptional Pune West Location
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
                        marginBottom: "50px",
                    }}
                >
                    Idylworld finds itself on the western side of Pune (IN) off the Pune-Lavasa road in Botharwadi
                    village. The site is sprawled across 320 acres. Geographically , this region straddles the beginning
                    of the Western Ghats outside Pune City.
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
                    <div style={{ width: "100%", overflow: "hidden", height: "100%" }}>
                        <Carousel autoplay style={{ height: "100%" }}>
                            <CarouselImage1 />
                            <CarouselImage3 />
                            <CarouselImage2 />
                        </Carousel>
                    </div>
                </div>
            </BlueFullscreen>
            <div
                style={{
                    width: "100%",
                    background: "#f5f5f5",
                    padding: "100px",
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <div
                    style={{
                        fontFamily: "Montserrat",
                        fontSize: "18px",
                        letterSpacing: "1px",
                        marginRight: "50px",
                        width: "45%",
                        lineHeight: "130%",
                        color: "grey",
                    }}
                >
                    <div
                        style={{
                            marginBottom: "50px",
                        }}
                    >
                        <div
                            style={{
                                fontFamily: "Work Sans",
                                fontSize: "24px",
                                marginBottom: "0px",
                                paddingBottom: "0px",
                                letterSpacing: "0px",
                            }}
                        >
                            Idylworld is accessible via 4 routes:
                        </div>
                        <br />- Hinjawadi
                        <br />- Chandani Chowk
                        <br />- Khadakwasla
                        <br />- Mulshi
                    </div>
                    <div>
                        <div
                            style={{
                                fontFamily: "Work Sans",
                                fontSize: "24px",
                                marginBottom: "0px",
                                paddingBottom: "0px",
                                letterSpacing: "0px",
                            }}
                        >
                            Idylworld is located:{" "}
                        </div>
                        <br />- <b>10 Minutes</b> from National Highway (Paud to Raigad) & Pirangut Industrial Hub
                        <br />- <b>20 Minutes</b> from Ring Road (14-Lane) & Pune Ring Road Metro (Passing through
                        Bhugaon)
                        <br />- <b>30 Minutes</b> from Chandani Chowk & NH4 (Mumbai-Bangalore Highway)
                        <br />- <b>30 Minutes</b> from Hinjawadi IT Park
                    </div>
                </div>
            </div>
            <div
                style={{
                    width: "100%",
                    background: "#f5f5f5",
                    padding: "100px",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                }}
            >
                <div
                    style={{
                        marginRight: "50px",
                        width: "500px",
                    }}
                >
                    <div
                        style={{
                            color: "grey",
                            fontFamily: "Work Sans",
                            fontSize: "40px",
                            marginBottom: "10px",
                            textAlign: "center",
                        }}
                    >
                        The City of Pune
                    </div>
                    <div
                        style={{
                            fontFamily: "Montserrat",
                            fontSize: "18px",
                            letterSpacing: "1px",
                            lineHeight: "130%",
                            color: "grey",
                        }}
                    >
                        - Ranked #1 amongst India metros in Mercer’s 2019 Quality of Living Index. <br />
                        <br />
                        - Among India’s Top 5 real estate destinations. <br />
                        <br />
                        - Pune records a positive growth in business turnover, second only to Bengaluru. <br />
                        <br />
                        - India’s seventh largest metropolitan economy with its sixth highest per capita income. <br />
                        <br />
                        - Historically famous as an educational hub, the city has witnessed a significant growth in the
                        IT/ITeS, industrial and hospitality sectors. <br />
                        <br />- 40% of its area is under green cover, pleasant climate, a booming job market and a
                        cosmopolitan vibe.
                    </div>
                </div>
                <div>
                    <img
                        src="https://sgp1.digitaloceanspaces.com/idylworld-static/cityofpuneimage.png"
                        alt="city of pune"
                        style={{ height: "500px", borderRadius: "5px" }}
                    />
                </div>
            </div>
            <div
                style={{
                    width: "100%",
                    background: "#f5f5f5",
                    padding: "100px",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                }}
            >
                <div>
                    <img
                        src="https://sgp1.digitaloceanspaces.com/idylworld-static/puneisgoingwestimage.png"
                        alt="pune is going west"
                        style={{ height: "500px", borderRadius: "5px" }}
                    />
                </div>
                <div
                    style={{
                        marginLeft: "50px",
                        width: "500px",
                    }}
                >
                    <div
                        style={{
                            color: "grey",
                            fontFamily: "Work Sans",
                            fontSize: "40px",
                            marginBottom: "10px",
                            textAlign: "center",
                        }}
                    >
                        Pune is Going West
                    </div>
                    <div
                        style={{
                            fontFamily: "Montserrat",
                            fontSize: "18px",
                            letterSpacing: "1px",
                            lineHeight: "130%",
                            color: "grey",
                            textAlign: "center",
                        }}
                    >
                        Closer and better connected to Mumbai (India’s commercial capital), Western Pune is growing much
                        faster than its saturated Eastern counterpart.
                        <br />
                        <br />
                        IT/ITeS
                        <br />
                        <br />
                        Automobiles
                        <br />
                        <br />
                        Education
                        <br />
                        <br />
                        Hospitality
                        <br />
                        <br />
                        Manufacturing
                        <br />
                        <br />
                        Infrastructure
                    </div>
                </div>
            </div>
            <div
                style={{
                    width: "100%",
                    background: "#f5f5f5",
                    padding: "100px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <div>
                    <div
                        style={{
                            color: "grey",
                            fontFamily: "Work Sans",
                            fontSize: "40px",
                            marginBottom: "10px",
                            textAlign: "center",
                        }}
                    >
                        Hospitals near Idylworld
                    </div>
                    <img
                        src="https://sgp1.digitaloceanspaces.com/idylworld-static/idylworldhospitalsimage.png"
                        style={{ width: "800px", borderRadius: "5px" }}
                    />
                </div>
            </div>
            <div
                style={{
                    width: "100%",
                    background: "#f5f5f5",
                    padding: "100px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <div>
                    <div
                        style={{
                            color: "grey",
                            fontFamily: "Work Sans",
                            fontSize: "40px",
                            marginBottom: "10px",
                            textAlign: "center",
                        }}
                    >
                        Schools near Idylworld
                    </div>
                    <img
                        src="https://sgp1.digitaloceanspaces.com/idylworld-static/idylworldschoolsimage.png"
                        style={{ width: "800px", borderRadius: "5px" }}
                    />
                </div>
            </div>
            <div
                style={{
                    width: "100%",
                    background: "#f5f5f5",
                    padding: "100px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <div>
                    <div
                        style={{
                            color: "grey",
                            fontFamily: "Work Sans",
                            fontSize: "40px",
                            marginBottom: "10px",
                            textAlign: "center",
                        }}
                    >
                        Colleges near Idylworld
                    </div>
                    <img
                        src="https://sgp1.digitaloceanspaces.com/idylworld-static/idylworldcollegesimage.png"
                        style={{ width: "800px", borderRadius: "5px" }}
                    />
                </div>
            </div>
            <Footer />
        </>
    );
};
