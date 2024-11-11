import React from "react";
import "./Follow.css";

function FollowButton({ onFollow, isFollowing }) {
    return (
        <button onClick={onFollow} className={`follow-btn ${isFollowing ? 'following' : ''}`}>
            {isFollowing ? "Unfollow" : "Follow"}
        </button>
    );
}

export default FollowButton;
