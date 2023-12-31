import React, { useEffect, useState } from 'react'
import '../Css_files/Feed.css';
import Posts from './Posts';
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import EditIcon from '@mui/icons-material/Edit';
import { Avatar } from '@mui/material';
import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import db from "./firebase"
import { doc, setDoc, query, orderBy, onSnapshot } from "firebase/firestore";
import { selectUser } from "../User";
import { useSelector } from "react-redux";


const Feed = () => {
    const user = useSelector(selectUser);
    const [selectedFile, setSelectedFile] = useState(null);
    const [posts, setposts] = useState([]);
    const [input, setinput] = useState();
    
    const submitPost = async (e) => {
        e.preventDefault();
        const firestore = getFirestore();
        const postData = {
            name: user.displayName,
            message: input,
            photoURL: user.photoURL,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        };
        const getTimeasID = () => {
            return new Date().getTime().toString();
        };
        const id = String(getTimeasID());
        if (input !== null && input !== '') {
            await setDoc(doc(firestore, "posts", id), postData);
        }
        setinput("");
    };
    
  
    const onChange = (e) => {
        setinput(e.target.value);
    };

    useEffect(() => {
        const q = query(collection(db, "posts"), orderBy("timestamp", "desc"));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            setposts(snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data()
            })));
        });

        return () => {
            unsubscribe();
        };
    }, []);

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    const upload = () => {
        const fileInput = document.getElementById('file-input');
        if (fileInput) {
            fileInput.click();
        }
    };
    const icons = [ImageIcon, SubscriptionsIcon, EventNoteIcon, EditIcon];
    const iconNames = ["Photo", "Video", "Event", "Article"];

    const IconComponent = ({ Icon, label, className }) => (
        <div className={`icon-container ${className}`}>
            <input
                type="file"
                id="file-input"
                style={{ display: 'none' }}
                onChange={handleFileChange}
            />
            {selectedFile ? (
                <span>{selectedFile.name}</span>
            ) : (
                <>
                    <Icon onClick={upload} />
                    <span onClick={upload}>{label}</span>
                </>
            )}
        </div>
    );


    return (
        <>
            <div className='feed'>
                <div className='feed_input'>
                    <Avatar src={user.photoURL} />
                    <form onSubmit={submitPost}>
                        <input type="text" placeholder='Start to post' value={input} onChange={onChange} />
                        <input type="submit" />
                    </form>
                </div>
                <div className='feed_options'>
                    {icons.map((Icon, index) => (
                        <IconComponent key={index} Icon={Icon} label={iconNames[index]} className={`custom-icon-${index + 1}`} />
                    ))}
                </div>

                {
                    posts.map(({ id, data: { name, description, message, photoURL } }) => {
                        return <Posts key={id} name={name} description={description} message={message} photoURL={photoURL} />
                    })
                }
            </div>

        </>
    )
}

export default Feed
