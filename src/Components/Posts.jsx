import React,{useState} from 'react'
import '../Css_files/Posts.css';
import Avatar from '@mui/material/Avatar';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { hover } from '@testing-library/user-event/dist/hover';
import { useSelector } from "react-redux";
import { selectUser } from "../User";

const Posts = ({ name, description, message, photoURL }) => {
    const user = useSelector(selectUser);

    const [likeClicked, setlikeClicked] = useState(false);

    const handleClicklike = () => {
        setlikeClicked(!likeClicked);
    };

    const [saveClicked, setsaveClicked] = useState(false);

    const handleClicksave = () => {
        setsaveClicked(!saveClicked);
    };


    return (
        <> 
            <div className='posts'>
                <div className='post_header'>
                    <div className='post_headerleft'>
                        <Avatar src={photoURL} />
                        <div className='profile_details'>
                            <h3 className='font-semibold text-base ml-3'>{name}</h3>
                            <h3 className='text-sm text-gray-500 ml-3'>{description}</h3>
                        </div>
                    </div>
                    <MoreVertIcon style={{ cursor: "pointer" }} />
                </div>
                <div className='post_body'>
                    <p className='ml-2 mb-7 mt-5'>{message}</p>
                </div>
                <div className='post_footer'>
                    <ThumbUpOffAltIcon onClick={handleClicklike} style={{ color: likeClicked ? 'rgb(13, 0, 255)' : 'inherit'}} className='like'/>
                    <ChatOutlinedIcon   className='like'/>
                    <ShareOutlinedIcon className='like'/>
                    <BookmarkBorderIcon onClick={handleClicksave} style={{ color: saveClicked ? 'rgb(53, 216, 74)' : 'inherit', cursor: 'pointer' }}  className='like'/>
                </div>
            </div>
        </>
    )
}

export default Posts
