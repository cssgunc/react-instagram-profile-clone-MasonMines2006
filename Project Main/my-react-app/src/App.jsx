import React, { useState } from "react";
import Sidebar from "./components/Sidebar.jsx";
import './App.css'
import Post from "./components/Post.jsx"
import Top_Bit from "./components/Top_Bit.jsx";
import Footer from "./components/Footer.jsx";
import FollowButton from "./components/FollowButton.jsx";

function App() {
    const [followers, setFollowers] = useState(423);
    const [isFollowing, setIsFollowing] = useState(false);

    const toggleFollow = () => {
        setIsFollowing(prevState => {
            const newState = !prevState;
            setFollowers(prevFollowers => newState ? prevFollowers + 1 : prevFollowers - 1);
            return newState;
        });
    };

    return (
        <>
            <Sidebar />
            <div className="profile">
                <Top_Bit followers={followers} />
                <div className="button-container">
                    <FollowButton onFollow={toggleFollow} isFollowing={isFollowing} />
                </div>
                <div className="posts-container">
                    <Post imageSrc={"src/assets/img1.jpg"} />
                    <Post imageSrc={"src/assets/img2.jpg"} />
                    <Post imageSrc={"src/assets/img3.jpg"} />
                    <Post imageSrc={"src/assets/img4.jpg"} />
                    <Post imageSrc={"src/assets/img5.jpg"} />
                    <Post imageSrc={"src/assets/img6.jpg"} />
                </div>
                <Footer />
            </div>
        </>
    );
}

export default App;
