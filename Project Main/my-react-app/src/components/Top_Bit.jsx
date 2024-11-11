import React from "react";
import "./Top_Bit.css";

function Top_Bit({ followers }) {
    return (
        <div className="top-bit-container">
            <div className="pfp">
                <img className="top_bit_img" src="src/assets/pfp.jpg" alt="PFP" />
            </div>
            <div className="description">
                <h2>ooga_beluga_</h2>
                <div className="count_description">
                    <div className="statistic">
                        <h2>52</h2>
                        <h3>Likes</h3>
                    </div>
                    <div className="statistic">
                        <h2>{followers}</h2>
                        <h3>Followers</h3>
                    </div>
                    <div className="statistic">
                        <h2>482</h2>
                        <h3>Following</h3>
                    </div>
                </div>
                <div className="short_description">
                    <p><strong>Mason Mines</strong></p>
                    <p>Figuring it out?</p>
                    <p>UNC Chapel Hill '28</p>
                </div>
            </div>
        </div>
    );
}

export default Top_Bit;
