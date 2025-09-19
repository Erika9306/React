import React, { useState } from 'react'
import './Search.css'
import { useForm} from 'react-hook-form'

// mirar porque renderiza cuando esta vacio y se manda


export const Search = () => {
const [character, setCharacter] = useState([]);
const {register, handleSubmit, formState: {errors}} = useForm();

const onSearch = async (data) => {
  if(!data.name){
    return console.log("Error finding  character"); 
  }

try{
  const response = await fetch(`https://thronesapi.com/api/v2/Characters`);
  if(!response.ok){
    throw new Error('coud not find an image');
  }
  const res = await response.json(); 
  console.log(res);
  if(res){
    setCharacter(res); 
  } 
    
}catch(err){
  throw new Error('something gone wrong', err);
}
}

  return (
    <div className='search'>
      <form
       onSubmit={handleSubmit(onSearch)}
      >
      <input {...register("name", {required: true})} placeholder='Type the name'/>
      {errors.name && <p><span>This field is required</span></p>}
      <input type='submit' className='btn'/>

      </form>

      {/* mirar porque no sale el personaje , sale todos, no uno*/}
      
      {character ===0 ?
        errors.name && <p><span>There is no character with this name</span></p>
        : character.map((c) =>(
        <div className='character-info'
           key = {c.id}
        >       
          <img src={c.imageUrl} className='character-image' alt='character'/>
          <h1>{c.title}</h1>
          <h2>{c.fullName}</h2>
          <h5>{c.family}</h5>
          </div>
        ))}
   </div>
  )
}
