import React, { useState } from 'react'
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom' 
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"; 
import { auth, db } from './firebase'
import userIMG from '../assets/userImage.jpg'

function Register() {
    const [fName, setFName] = useState('')
    const [lName, setLName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const img = userIMG
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            // Create user with email and password
            const auth = getAuth();
            const userCredential = await createUserWithEmailAndPassword(auth, email, password)
            const user = userCredential.user

            // Store user information in Firestore
            if (user) {
                await setDoc(doc(db, "user", user.uid), {
                    email: email,
                    firstName: fName,
                    lastName: lName,
                    photo: img,
                    pass:password
                })
                console.log("User Registered and Data Stored Successfully!")
                navigate('/')
            }
        } catch (error) {
            console.log(error.message)
        }
    }

    const gotoLog = () => {
        navigate('/')
    }

    return (
        <>
            <div className='justify ml-[580px] mt-32'>
                <div className='absolute h-[350px] w-[350px] rounded-lg bg-opacity-40'>
                    <div className='flex flex-col h-[350px] -mt-3'>
                        <center>
                            <input
                                placeholder='  First Name'
                                className='border rounded-lg bg-black h-10 w-60 justify-center items-center'
                                type="text"
                                onChange={(e) => setFName(e.target.value)}
                            />
                        </center>
                        <center>
                            <input
                                placeholder='  Last Name'
                                className='border rounded-lg bg-black h-10 w-60 justify-center items-center mt-6'
                                type="text"
                                onChange={(e) => setLName(e.target.value)}
                            />
                        </center>
                        <center>
                            <input
                                placeholder='  email'
                                className='border rounded-lg bg-black h-10 w-60 justify-center items-center mt-6'
                                type="mail"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </center>
                        <center>
                            <input
                                placeholder='  Password'
                                className='border rounded-lg bg-black h-10 w-60 justify-center items-center mt-6'
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </center>
                        <center>
                            <button
                                type="submit"
                                className='rounded-full mt-5 bg-customRed bg-opacity-45 w-24 text-center'
                                onClick={handleSubmit}
                            >
                                Submit
                            </button>
                        </center>
                        <center>
                            <button onClick={gotoLog}>
                                <span className='text-gray-500 opacity-90 text-center'>Already a User?</span>
                            </button>
                        </center>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register
