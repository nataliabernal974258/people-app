import results from "../mocks/Users.json"
import HeaderImage from '../assets/Header-removebg-preview.png';
import IconBell from '../assets/icons/bell.png';
import IconProfile from '../assets/icons/profile.png';

var UserName = 'Natalia Bernal';

export default function Header() {
    console.log(results)
    return (
        <>
            <div className="header">
                <div className="header-title">
                    <button>
                        <img src={HeaderImage} alt="Header" />
                    </button>
                    <a href="/">Bienvenidos</a>
                </div>
                <div className="profile">
                    <button className="profile-picture">
                        <img src={IconProfile} alt="Profile" />
                    </button>
                    <a href="" className="user-name">{UserName}</a>                   
                </div>
                <button className="notification-bell">
                    <img src={IconBell} alt="Bell" />
                </button>
            </div>
        </>
    )
}