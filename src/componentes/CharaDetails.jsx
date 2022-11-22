import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const CharaDetails = () => {
    const {id}=useParams()
    const[detailChara,setCharade]=useState({})

useEffect(()=>{
axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
.then(res=>setCharade(res.data))
},[])

console.log(detailChara)
    return (
        <section className='details-father'>
            <img className='title-details' src="https://www.freepnglogos.com/uploads/gotta-catch-em-all-transparent-pokemon-logo-11.png"/>
            <article className='details'>
                <div className='name-details'>
                <h3><i className='bx bxs-disc'></i>{detailChara.name} <span className='ids'>ID:</span>{detailChara.id}</h3>
                <p>Pokemon type:{detailChara.types?.[0].type.name} {detailChara.types?.[1]?.type.name}</p>
                <p>Experience Base:{detailChara.base_experience}</p>
                <img src={detailChara.sprites?.front_default}/>
                <ul>
                <li>Height:{detailChara.height} Decimetres</li>
                <li>weight:{detailChara.weight} Hectograms</li>
                </ul>
                </div>

                <div className='statsz'>

                <div className='stats'>
                    <h3>stats <i className='bx bx-dumbbell'></i></h3>
                    <ul>
                            <li>HP {detailChara.stats?.[0].base_stat}</li>
                            <li>Attack {detailChara.stats?.[1].base_stat}</li>
                            <li>Defense {detailChara.stats?.[2].base_stat}</li>
                            <li>Special-attack {detailChara.stats?.[3].base_stat}</li>
                            <li>Special-defense {detailChara.stats?.[4].base_stat}</li>
                            <li>Speed {detailChara.stats?.[5].base_stat}</li>
                    </ul>
                    </div>

                    <div className='hability'>
                <h3>Hability <i className='bx bx-sort-up'></i></h3>
                <ul >
                    <li>{detailChara.abilities?.[0].ability.name}</li>
                    <li>{detailChara.abilities?.[1].ability.name}</li>
                </ul>
                    </div>
                    
                    </div>

                <div className='moves'>
                <h3>ALL moves</h3>
                <ul>
                {detailChara.moves?.map((move,index)=>{
                    return(
                         <li key={index}>{move.move.name}</li>
                    )
                })}
                </ul>
                </div> 

            </article>
        </section>
    );
};

export default CharaDetails;