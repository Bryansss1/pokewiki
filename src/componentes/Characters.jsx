import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from "axios"
import Characards from './Characards';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { joinPaths } from '@remix-run/router';
import Swal from "sweetalert2"

const Characters = () => {
    const selectPoke=useSelector(state=>state.pokeselect)
    const [characterss,setChara]=useState([])
    const [searchPoke,setSerch]=useState("")
    const navigateee=useNavigate()
    const[type0,setType]=useState([])
    const [fullpoke,setPokefull]=useState([])
    const [darkmode,setdarkmode]=useState(true)
    const userState=useSelector(state=>state.Login)

    useEffect(()=>{
        axios.get("https://pokeapi.co/api/v2/pokemon/")
        .then(res=>setChara(res.data.results))
        axios.get("https://pokeapi.co/api/v2/type")
        .then(res=>setType(res.data.results))
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
        .then(res=>setPokefull(res.data.results))
        const darkk=localStorage.getItem("dark")
        if(darkk){
            setdarkmode(JSON.parse(darkk))
        }
},[])


const mostrarName=()=>{
    Swal.fire({
        imageUrl:"https://www.wallpaperflare.com/static/364/185/316/pok%C3%A9mon-pok%C3%A9-balls-artwork-pokeball-wallpaper.jpg",
        imageHeight:200,
        html:`Welcome to the pokeapi <b>"${userState}"</b> this includes all pokemon , creator by bryansss :3 <a href="https://github.com/Bryansss1?tab=repositories" target="_blank" ><i class='bx bxl-github bx-md'></i></a>`,
        confirmButtonColor:"green",
    })
}


useEffect(()=>{
localStorage.setItem("dark",JSON.stringify(darkmode))
},[darkmode])


const submint=()=>{
       if(fullpoke.some(chara=>chara.name==searchPoke)){
        navigateee(`/characters/${searchPoke}`)   
        }else{
        navigateee("/characters")
        setSerch("")
            }
}

const Typeselect=(e)=>{
    const valor=e.target.value
    axios.get(valor)
        .then(res=>setChara(res.data.pokemon?.map(poke=>poke.pokemon)))
}

const [page,setPages]=useState(1)
const pageAdva=8
const lastPage=page*pageAdva
const firstPage=lastPage-pageAdva
const pagess=characterss.slice(firstPage,lastPage)
const totalpage=Math.ceil(characterss?.length/pageAdva)
const pageNumber=[]

    for(let i=1;i<=totalpage;i++){
        pageNumber.push(i)
    }

const[pagebuttonzz,setbutton]=useState(1)
const pagebuttonPa=8
const lastbutton=pagebuttonzz*pagebuttonPa
const firstbutton=lastbutton-pagebuttonPa
const pageButton=pageNumber.slice(firstbutton,lastbutton)

    return (
        <div className='characters-pages' style={darkmode?{background:"rgb(221, 221, 221)"}:{background:"black"}}>
                <nav className='link-nav'>
                    <ul>
                        <li className='darkmode' onClick={()=>{setdarkmode(!darkmode)}}>{darkmode?<i className='bx bx-sun'></i>:<i className='bx bx-moon' ></i>}</li>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/characters">Characters</Link></li>
                        <li><Link onClick={mostrarName}>About us</Link></li>
                    </ul>

                    <article className='buscador-nav'>
                        <div className='pokebuss'>
                        <h2>Search Pokemon in Details</h2>
                        <img className='pokebus' src='http://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/0bf759ddc6e7fc9.png'/>
                        </div>
                    <form className='pokeform' action="" onSubmit={submint}>
                        <input type="text" value={searchPoke} onChange={(e)=>setSerch(e.target.value.toLocaleLowerCase())}/>
                        <button>Search</button>
                        <select onChange={Typeselect}>
                            {type0.map(type=>{
                                return(
                                    <option key={type.url} value={type.url}>{type.name}</option>
                                )
                            })}
                        </select>
                    </form>
                    </article>
                </nav>
                    
                <section>
                        <article className='box-cards'>
                                 {pagess.map(chara=>{
                                    return(
                                        <Characards key={chara.url} url={chara.url}/>
                                    )
                                 })}
                        </article>
                </section>
                <section className='buttons-pages'>
                    <div>
                    <button onClick={()=>setbutton(pagebuttonzz-1)} disabled={pagebuttonzz===1}><i className='bx bx-chevrons-left' ></i></button>
                    <button onClick={()=>setPages(page-1)} disabled={page===1}><i className='bx bx-left-arrow-alt' ></i></button>
                    </div>
                    <ul>
                        {pageButton.map(num=>{
                            return(
                                <li key={num}><button onClick={()=>setPages(num)} className='pages'>{num}</button></li>
                            )
                        })}
                    </ul>
                        <div>
                    <button onClick={()=>setPages(page+1)} disabled={page===pageNumber.length}><i className='bx bx-right-arrow-alt'></i></button>
                    <button onClick={()=>setbutton(pagebuttonzz+1)} disabled={pagess.length>pageButton.length}><i className='bx bx-chevrons-right' ></i></button>
                        </div>
                </section>
        </div>
    );
};

export default Characters;