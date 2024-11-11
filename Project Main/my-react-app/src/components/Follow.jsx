import React, { useState } from "react";
import "./Follow.css";

function FollowButton() {
    const [isFollowing, setIsFollowing] = useState(false);

    const toggleFollow = () => {
        setIsFollowing(prevState => !prevState);
    };

    return (
        <button onClick={toggleFollow} className={`follow-btn ${isFollowing ? 'following' : ''}`}>
            {isFollowing ? "Unfollow" : "Follow"}
        </button>
    );
}

export default FollowButton;
