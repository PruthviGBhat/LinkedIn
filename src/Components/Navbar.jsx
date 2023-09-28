import React, { useEffect, useState } from 'react'
import '../Css_files/Navbar.css';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import {logout} from '../User'
import {auth} from "./firebase"
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import { selectUser } from "../User";


const Navbar = () => {
    const user = useSelector(selectUser);
    const [isActive, setIsActive] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const dispatch = useDispatch();

    const logoutOfApp = () => {
        dispatch(logout());
        auth.signOut();
    };

    useEffect(() => {
        const header = document.querySelector(".header");
        const sidebar = document.querySelector(".sidebar_body");

        const handleScroll = () => {
            if (window.scrollY > sidebar.offsetTop - header.offsetHeight + 15) {
                setIsActive(true);
            } else {
                setIsActive(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const icons = [HomeIcon, SupervisorAccountIcon, BusinessCenterIcon, MessageIcon, NotificationsIcon];
    const iconNames = ['Home', 'Connections', 'Jobs ', 'Message', 'Notifications'];

    const IconComponent = ({ Icon, label }) => (
        <div className='each_icon'>
            <Icon />
            <span>{label}</span>
        </div>
    );
    const handleSearchClick = () => {
        setIsSearchOpen(!isSearchOpen);
    };

    const handleCloseClick = () => {
        setIsSearchOpen(isSearchOpen);
    };

    return (
        <>
            <div className={isActive ? "header active" : "header"}>
                <div className="logo">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png"
                        alt="linkedin logo"
                    />
                    <div className={`searchbox ${isSearchOpen} ? 'active' : ''`}
                        style={{
                            width: isSearchOpen ? "360px" : "60px",
                        }}>
                        <div className='search' onClick={handleSearchClick}><SearchIcon /></div>
                        <div className='searchinput'>
                            <input type="text" placeholder='Search Here' />
                        </div>
                        <div className='close' onClick={handleCloseClick}><CloseIcon /></div>
                    </div>

                </div>
                <div className="icons">
                    <div className='icon_indentation'>
                        {icons.map((Icon, index) => (
                            <IconComponent key={index} Icon={Icon} label={iconNames[index]} />
                        ))}

                    </div>
                </div>
                <div className='avatar' onClick={logoutOfApp} >
                    <Avatar src={user.photoURL} />
                    <p>Logout</p>
                </div>
            </div>
        </>
    )
}

export default Navbar
