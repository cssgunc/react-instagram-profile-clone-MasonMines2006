import "./Sidebar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faBell, faUser, faEnvelope, faCamera, faComment, faSmile} from '@fortawesome/free-solid-svg-icons';

function Sidebar() {
    return (
        <>
            <div className="sidebar">
                <div className="logo">
                    <img src="src/assets/logo.jpg" alt="Logo"/>
                </div>
                <h2><FontAwesomeIcon icon={faHome} /> Home</h2>
                <h2><FontAwesomeIcon icon={faSearch} /> Search</h2>
                <h2><FontAwesomeIcon icon={faComment} /> Explore</h2>
                <h2><FontAwesomeIcon icon={faSmile} /> Reels</h2>
                <h2><FontAwesomeIcon icon={faEnvelope} /> Messages</h2>
                <h2><FontAwesomeIcon icon={faBell} /> Notifications</h2>
                <h2><FontAwesomeIcon icon={faCamera} /> Create</h2>
                <h2><FontAwesomeIcon icon={faUser} /> Profile</h2>
            </div>
        </>
    )
}

export default Sidebar