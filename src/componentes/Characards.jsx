import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changePoke } from '../store/slices/pokeselect.slices';

const Characards = ({url,darkmode}) => {

const dispatchzz=useDispatch()
const [chara,setCh]=useState({})
const pokeselec=useSelector(state=>state.pokeselect)
const navigateez=useNavigate()

useEffect(()=>{
axios.get(url)
.then(res=>setCh(res.data))
},[])

const Select=(data)=>{
    dispatchzz(changePoke(data))
    navigateez(`/characters/${data}`)
}

console.log(pokeselec)
console.log(chara)
    return (
        <ul className='card-poke' style={{border:`${darkmode?"4px solid black":""}`}}>
            <li>
                <h3>{chara.name} <span className='ids'>ID:</span>{chara.id}</h3>
                <p>Pokemon type:{chara.types?.[0].type.name} {chara.types?.[1]?.type.name}</p>
                <p>Experience Base:{chara.base_experience}</p>

                <div>
                <img src={chara.sprites?.front_default}/>
                <ul>
                <li>Height:{chara.height} Decimetres</li>
                <li>weight:{chara.weight} Hectograms</li>
                </ul>
                </div>
                <button onClick={()=>Select(chara.name)}>More details</button>
            </li>
        </ul>
    );
};

export default Characards;