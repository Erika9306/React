import React, { useState } from 'react'
import './Search.css'
import { useForm} from 'react-hook-form'

// mirar porque renderiza cuando esta vacio y se manda


export const Search = () => {
const [character, setCharacter] = useState('');
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
      {errors.name && <span>This field is required</span>}
      <input type='submit'/>

      </form>

      {/* mirar porque no sale el personaje , sale todos, no uno*/}
      {character && (
        <div className='character-info'>
          <img src={character.image} className='character-image' alt='character'/>
          <h1>{character.title}</h1>
          <h2>{character.fullName}</h2>
          <h5>{character.family}</h5>

        </div>
      )}
      </div>
  )
}
