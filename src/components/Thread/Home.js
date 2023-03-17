import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import Likes from "./Likes";
import Comments from "./Comment";
import './Thread.css';
const Home = () => {
    const [thread, setThread] = useState("");
    const navigate = useNavigate();
    const {user} = useAuthContext();
    const [threadList, setThreadList] = useState([]);
   // console.log(user.user._id);
    //👇🏻 The useEffect Hook
    useEffect(() => {
        const checkUser = () => {
            if (!localStorage.getItem("user")) {
                navigate("/");
            } else {
                fetch("http://localhost:5000/api/all/threads")
                .then((res) => res.json())
                .then((data) => setThreadList(data.threads))
                .catch((err) => console.error(err));

            }
        };
        checkUser();
    }, [navigate]);
   
    const createThread = async() => {
        await fetch("http://localhost:5000/api/create/thread", {
            method: "POST",
            body: JSON.stringify({
                thread,
                userId: user.user._id,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                alert(data.message);
                setThreadList(data.threads);
            })
            .catch((err) => console.error(err));
    };
    
    //👇🏻 Triggered when the form is submitted
    const handleSubmit = (e) => {
        e.preventDefault();
        //👇🏻 Calls the function
        createThread();
        setThread("");
    };



    return (
        <>
            <main className='home'>
            <h2 className='homeTitle'>Create a Thread</h2>
            <form className='homeForm' onSubmit={handleSubmit}>
            <div className='home__container'>
                        <label htmlFor='thread'>Title / Description</label>
                        <input
                            type='text'
                            name='thread'
                            required
                            value={thread}
                            onChange={(e) => setThread(e.target.value)}
                        />
                    </div>
                    <button className='homeBtn'>CREATE THREAD</button>
            </form>

            <div className='thread__container'>
                {threadList.map((thread) => (
                    <div className='thread__item' key={thread._id}>
                        <p>{thread.title}</p>
                        <div className='react__container'>
                            <Likes numberOfLikes={thread.likes.length} threadId={thread._id} />
                            <Comments
                                numberOfComments={thread.replies.length}
                                threadId={thread._id}
                                title={thread.title}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </main>
        </>
    );
};

export default Home;