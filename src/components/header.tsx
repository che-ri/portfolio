import React from "react";

enum HeaderType {
    Home,
    Resume,
}

export default function header() {
    const HeaderList = Object.keys(HeaderType);
    return (
        <div style={{ width: "100vw", display: "flex" }}>
            {HeaderList.map((k) => (
                <span key={`header-${k}`}>{k}</span>
            ))}
        </div>
    );
}
