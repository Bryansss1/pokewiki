import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { changeState } from '../store/slices/login.slices';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const HomeUser = () => {
    const navigatezz=useNavigate()
    const userState=useSelector(state=>state.Login)
    const dispatch=useDispatch()
    const [Login,setLogin]=useState("")

const submintgo=()=>{

    dispatch(changeState(Login))
     
    if(Login!==""){
        navigatezz("/characters") 
        
    }else{
        alert("no hay usuario")
        navigatezz("/")
    } 
}   

useEffect(()=>{
let data=localStorage.getItem("login")
if(data){
    dispatch(changeState(data))
}
},[])

    return (
        <div className='home-inicio'>
        <section className='home'>
                <div className='user'>
                        {userState===""?(<>
                        <h2>Welcome Trainer how is your name?</h2>
                        <img className='pika' src='https://images.wikidexcdn.net/mwuploads/wikidex/thumb/7/77/latest/20150621181250/Pikachu.png/1200px-Pikachu.png'/>
                        </>
                        )
                        :(<>
                        <h2>Welcome Trainer "{userState}"do you need to change your name?</h2>
                        <img className='pika' src='https://images.wikidexcdn.net/mwuploads/wikidex/thumb/7/77/latest/20150621181250/Pikachu.png/1200px-Pikachu.png'/>
                        </>
                        )}

                </div>
                <form action="" onSubmit={submintgo}>
                    <input type="text" value={Login} onChange={(e)=>setLogin(e.target.value)}/>
                    {userState!==""? <button type='button'><Link className='nochangeName' to="/characters">NO,chill</Link> </button>:""}
                    <button>Ready?</button>
                </form>
        </section>
        </div>
    );
};

export default HomeUser;