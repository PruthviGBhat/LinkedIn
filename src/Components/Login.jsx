import { Password } from '@mui/icons-material'
import React, { useState} from 'react'
import { useAuth } from './AuthContext';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {auth} from './firebase';


const Login = () => {
    const [signin, setSignin] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [photoURL, setPhotoURL] = useState("");

    const { login } = useAuth();
    


   

    const register = (e) => {
        e.preventDefault();

        setName("");
        setEmail("");
        setPassword("");
        setPhotoURL("");  

          if (email === "") {
        throw new Error("Email address is missing");
    }

        
        try {
            if (signin) {
              const userCredential =  signInWithEmailAndPassword(auth, email, password);
              const user = userCredential.user;
              login(user);
            } else {
              const userCredential =  createUserWithEmailAndPassword(auth, email, password);
              const user = userCredential.user;
              login(user);
            }
          } catch (error) {
            console.error(error.message);
          }
          window.location.href = "#";
    }

    



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
            {
                signin === true ? (
                    <section className="bg-gray-900 -mt-14" >
                        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

                            <div className="w-full  rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 bg-gray-800">
                                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                        Sign in to your account
                                    </h1>
                                    <form className="space-y-4 md:space-y-6" onSubmit={register}>
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
                                        <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Sign in</button>
                                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                            Already a member? <a href="#" className="font-medium text-white hover:underline" onClick={e => setSignin(false)}>Login</a>
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                ) : (
                    <section className="bg-gray-900 -mt-20" >
                        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

                            <div className="w-full  rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 bg-gray-800">
                                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                        Login to your account
                                    </h1>
                                    <form className="space-y-4 md:space-y-6" onSubmit={register}>
                                        <div>
                                            <label for="email" className="block mb-2 text-sm font-medium text-white">Your email</label>
                                            <input type="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" value={email} onChange={e => setEmail(e.target.value)} />
                                        </div>
                                        <div>
                                            <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                            <input type="password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" value={password} onChange={e => setPassword(e.target.value)} />
                                        </div>

                                        <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Login</button>
                                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                            Don’t have an account yet? <a href="#" className="font-medium text-white hover:underline " onClick={e => setSignin(true)}>Sign up</a>
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>)
            }



        </>
    )
}

export default Login
