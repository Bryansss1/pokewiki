import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setLoading } from '../store/slices/isLoading.slice';
import Swal from 'sweetalert2';
const CharaDetails = () => {

    const userState=useSelector(state=>state.Login)
    const {id}=useParams()
    const[detailChara,setCharade]=useState({})
    const dispatchzz=useDispatch()


useEffect(()=>{

dispatchzz(setLoading(true))
axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
.then(res=>setCharade(res.data))
.finally(()=>dispatchzz(setLoading(false)))

},[])

const mostrarName=()=>{
    Swal.fire({
        imageUrl:"https://www.wallpaperflare.com/static/364/185/316/pok%C3%A9mon-pok%C3%A9-balls-artwork-pokeball-wallpaper.jpg",
        imageHeight:200,
        html:`Welcome to the pokeapi <b>"${userState}"</b> this includes all pokemon , creator by bryansss :3 <a href="https://github.com/Bryansss1?tab=repositories" target="_blank" ><i class='bx bxl-github bx-md'></i></a>`,
        confirmButtonColor:"green",
    })
}


console.log(detailChara)
    return (
        <section className='details-father'>

             <nav className='link-nav'>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/characters">Characters</Link></li>
                        <li><Link onClick={mostrarName}>About us</Link></li>
                    </ul>
              </nav> 

            <img className='title-details' src="https://www.freepnglogos.com/uploads/gotta-catch-em-all-transparent-pokemon-logo-11.png"/>
            <article className='details'>

                <div className='name-moves'>
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
                    <li>{detailChara?.abilities?.[0]?.ability.name}</li>
                    <li>{detailChara?.abilities?.[1]?.ability.name}</li>
                </ul>
                    </div>
                    
                    </div>

            </article>
        </section>
    );
};

export default CharaDetails;