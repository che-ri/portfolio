import React from "react";
import images from "src/asset/image";

export default function Home() {
    return (
        <div style={{ position: "relative", background: "#000000", height: "200vh" }}>
            <div style={{ width: "100vw", height: "100vh" }}>
                <img src={images.section1} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div
                style={{
                    position: "absolute",
                    top: "80vh",
                    width: "100vw",
                }}
            >
                <img src={images.section2} style={{ width: "100%", height: "120vh", objectFit: "cover" }} />
            </div>
        </div>
    );
}
