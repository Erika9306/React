import React, {useEffect, useState} from 'react'
import './Home.css'


export const Home = () => {
const [character, setCharacter] = useState([]);
const [activeId, setActiveId] = useState(null);
const [error, setError] = useState(null);


useEffect(()=>{
  const onHome = async () => {
    
    setError(null);
    // realizamos la patición a la API
    // para conseguir todos los personajes de GOT  
  
  try{
    const response = await fetch(`https://thronesapi.com/api/v2/Characters`);
    if(!response.ok){
      throw new Error('could not find an image', error);
    }
    const res = await response.json(); 
    console.log(res);
    if(res){
      setCharacter(res); 
    } 
      
  }catch(err){
    throw new Error('something gone wrong', err);
  }
 
  };
  onHome();
},[]);

const clickCharacter = (id) =>{
  console.log('se ha pulsado el personaje', id);
  setActiveId(activeId === id? null: id);
  
}

  return (
    <div className='home'>     
      {character === 0 ?
        error.name && <p><span>There is no character with this name</span></p>
        : character.map((c) =>(
          
        <div className='character'
           key = {c.id}
           onClick={()=> clickCharacter(c.id)}
        >       
          <img
           src={c.imageUrl} 
           className='home-character-image' 
           alt='character'/>

          {activeId === c.id &&           
            <h1>{c.fullName}</h1>
          }
     
          
          </div>
        ))}
   </div>
  )
}
