import React from "react";

// components
import Navbar from "../navbar";
import { Player } from "video-react";
import { OrangeFullscreen } from "./styled";
import { ControlBar } from "video-react";
import Footer from "../footer";

export default () => {
    return (
        <>
            <Navbar />
            <OrangeFullscreen>
                <div style={{ color: "grey", fontFamily: "Work Sans", fontSize: "40px", marginBottom: "50px" }}>
                    Our Exceptional Microclimate & Seclusion
                </div>

                <div
                    style={{
                        display: "flex",
                        width: "100%",
                        justifyContent: "center",
                        alignItems: "center",
                        maxWidth: "900px",
                    }}
                >
                    <Player
                        fluid={false}
                        playsInline
                        width={900}
                        muted
                        autoPlay
                        loop={true}
                        src="https://idylworld-static.sgp1.digitaloceanspaces.com/idylworld%20monsoon.mp4"
                    >
                        <ControlBar autoHide={true} disableCompletely={true} />
                    </Player>
                </div>
            </OrangeFullscreen>
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
                        color: "grey",
                        fontFamily: "Montserrat",
                        fontSize: "18px",
                        letterSpacing: "1px",
                        width: "45%",
                        lineHeight: "130%",
                        marginBottom: "50px",
                    }}
                >
                    - North facing & open to the west (optimal sun protection and wind-flow) <br />
                    <br />
                    - Flanked by the Western Ghats and 7000 acres of NDA forest, the region is verdant with water bodies
                    like Khadakwasla Dam in the vicinity. <br />
                    <br />- Reserved afforestation zones around the area translate into a lower density of development
                    and <b>purer air</b>. <br />
                    <br />- Set back 1.5 km distance from and beginning 100 meters above the State Hwy with amazing{" "}
                    <b>tree cover</b>. Serene privacy from the chaos.
                </div>
            </div>
            <div
                style={{
                    width: "100%",
                    background: "#f5f5f5",
                    padding: "100px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <div style={{ color: "grey", fontFamily: "Work Sans", fontSize: "40px", marginBottom: "10px" }}>
                    We Believe in Sustainable Forest Management,
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
                    which is described as, “The stewardship and use of forests in a way, and at a rate, that maintains
                    their biodiversity, productivity, regeneration capacity, vitality and their potential to fulfill,
                    now and in the future, relevant ecological, economic and social functions, at local, national, and
                    global levels, and that does not cause damage to other ecosystems.”
                </div>
                <div
                    style={{
                        display: "flex",
                        width: "100%",
                        justifyContent: "center",
                        alignItems: "center",
                        maxWidth: "900px",
                    }}
                >
                    <img
                        src="https://idylworld-static.sgp1.digitaloceanspaces.com/abundance.png"
                        alt="our natural timeline"
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
                    alignItems: "center",
                }}
            >
                <div style={{ color: "grey", fontFamily: "Work Sans", fontSize: "40px", marginBottom: "50px" }}>
                    Sustainable Forest Management To-Do List
                </div>
                <div
                    style={{
                        color: "grey",
                        fontFamily: "Montserrat",
                        fontSize: "18px",
                        letterSpacing: "1px",
                        width: "45%",
                        lineHeight: "130%",
                        marginBottom: "50px",
                    }}
                >
                    - Sustainability begins with a detailed survey of the micro-climate and understanding land
                    flora-fauna etc.
                    <br />
                    <br />- The attainment of balance between society and the preservation of forest health and
                    diversity. This balance is critical to the survival of forests.
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
                        Our Natural Timeline
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
                        - Prior to purchase in 2006, the forest at Idylworld was under serious attack by tree poachers
                        and grazing activities.
                        <br />
                        <br />
                        - Since taking possession of Idylworld in 2007, the landowners have protected, preserved and
                        propagated the natural flora at the site.
                        <br />
                        <br />
                        - Idylworld’s reforestation is nearly complete, and sustainable forest management practices are
                        used in design & execution of infrastructure works.
                        <br />
                        <br />- Out of the total area of a plot, 80% should be conserved for forest and the remainder
                        for personal use (farmhouse, courtyard, private garden, tents, etc).
                    </div>
                </div>
                <div>
                    <img
                        src="https://idylworld-static.sgp1.digitaloceanspaces.com/ournaturalhistory.png"
                        alt="our natural timeline"
                        style={{ height: "500px", borderRadius: "5px" }}
                    />
                </div>
            </div>
            <Footer />
        </>
    );
};
