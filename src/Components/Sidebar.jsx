import React from 'react'
import '../Css_files/Sidebar.css';
import Avatar from '@mui/material/Avatar';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { useSelector } from "react-redux";
import { selectUser } from "../User";

const Sidebar = () => {
    const user = useSelector(selectUser);
    const hashes = ["FrontEnd", "BackEnd", "Blockchain", " Java", "Hiring", "Jobs"];
    
    return (
        <>
            <div className='sidebar'>
                <div className='sidebar_profile'>
                    <img src="https://images.unsplash.com/photo-1614850523296-d8c1af93d400?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MH
                    xwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
                    <div className='sidebar_details'>
                        <Avatar className='profile_pic' src={user.photoURL}/>
                        <h3 className='text-lg mt-5 font-semibold'>{user.displayName}</h3>
                        <p className='text-sm mt-2 text-gray-500 '>Web developer</p>
                    </div>
                    <div className='sidebar_stats'>
                        <span>Who viewed your profile</span>
                        <span >40</span>
                    </div>
                    <div className='sidebar_stats'>
                        <span>People want to connect</span>
                        <span>10</span>
                    </div>
                </div>
                <div className='sidebar_recent'>
                    <span className='text-base font-semibold ml-3 understyle'>Recent</span>
                    <div className='Recent_stats text-gray-500'>
                        {
                            hashes.map((hash, index) => {
                                return (
                                    <p key={index} className="mt-2">
                                        <span>$ </span>{hash}
                                    </p>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar
