import React from 'react';

const Autocomplete = ({pokemons,searchInput,changee}) => {
    return (
        <ul style={{display:"flex",flexDirection:"column",background:"none",height:"5.7rem",overflow:"auto"}}>
            {pokemons.map(poke=>{
                
            if(searchInput&&poke.name.includes(searchInput)) 
            return(
                <li onClick={()=>changee(poke.name)} style={{cursor:"pointer"}} key={poke.id}>
                    {poke.name}
                </li>
            )
            })}
        </ul>
    );
};

export default Autocomplete;