import React, { useState} from 'react'
import { useDispatch } from "react-redux";
import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword } from "firebase/auth";
import { login} from "../User";
import { doc, setDoc} from "firebase/firestore";
import db from "./firebase"

const Login = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [photoURL, setPhotoURL] = useState("");
    
   

    const auth = getAuth();
    const dispatch = useDispatch();

    const register = async () => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const userAuth = userCredential.user;
    
            // Add user data to Firestore
            await setDoc(doc(db, "posts", userAuth.uid), {
                displayName: name,
                photoURL: photoURL,
                email:email,
                password:password
            });
    
            dispatch(
                login({
                    email: userAuth.email,
                    uid: userAuth.uid,
                    displayName: name,
                    photoURL: photoURL,
                })
            );
        } catch (error) {
            alert(error.message);
        }
    };
    const loginToApp = async (e) => {
        e.preventDefault();
        
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const userAuth = userCredential.user;

            dispatch(
                login({
                    email: userAuth.email,
                    uid: userAuth.uid,
                    displayName: userAuth.displayName,
                    photoURl: userAuth.photoURL,
                })
            );
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <>
            <div className='flex justify-center items-center text-white space-x-3 font-bold text-2xl bg-gray-900 '>
                <img
                    src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png"
                    alt="linkedin logo"
                    className='w-12 h-12 my-5'
                />
                <h1>LinkedIn</h1>
            </div>
                    <section className="bg-gray-900 -mt-14" >
                        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

                            <div className="w-full  rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 bg-gray-800">
                                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                        Sign in to your account
                                    </h1>
                                    <form className="space-y-4 md:space-y-6" >
                                        <div>
                                            <label for="name" className="block mb-2 text-sm font-medium text-white">Your Name</label>
                                            <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" value={name} onChange={e => setName(e.target.value)} />
                                        </div>
                                        <div>
                                            <label for="email" className="block mb-2 text-sm font-medium text-white">Your email</label>
                                            <input type="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" value={email} onChange={e => setEmail(e.target.value)} />
                                        </div>
                                        <div>
                                            <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                            <input type="password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" value={password} onChange={e => setPassword(e.target.value)} />
                                        </div>
                                        <div>
                                            <label for="photoURL" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">PhotoURL</label>
                                            <input type="url" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" value={photoURL} onChange={e => setPhotoURL(e.target.value)} />
                                        </div>
                                        <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 text-center " onClick={register}>SignIn</button>
                                       
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                    



        </>
    )
}

export default Login
