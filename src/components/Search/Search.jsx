import React, { useState } from 'react'
import './Search.css'
import { useForm} from 'react-hook-form'

// mirar porque renderiza cuando esta vacio y se manda


export const Search = () => {

const {register, handleSubmit, formState: {errors}} = useForm();
const [error, setError] = useState(null);
const [characterFiltered, setCharacterFiltered] = useState([]);

const onSearch = async (data) => {
  setError(null);
  if(!data.name){
    return console.log("Error finding  character", error); 
  }  
  try{
    const response = await fetch(`https://thronesapi.com/api/v2/Characters`);
    if(!response.ok){
      throw new Error('coud not find an image', error);
    }
    const res = await response.json(); 
    console.log(res);
    if(res){
      setCharacterFiltered(res); 
    } 
     const characterSearch = res.filter(c => c.fullName.toLowerCase().includes(data.name.toLowerCase()));
     setCharacterFiltered(characterSearch);
      
  }catch(err){
    throw new Error('something gone wrong', err);
  }
  }  
  
  return (
    <div className='search'>
      <form
       onSubmit={handleSubmit(onSearch)}
      >
      <input {...register("name", {required: true})} placeholder='Type the name' minLength ={1} maxLength={50}/>
      {errors.name && <p><span>This field is required</span></p>}
      <input type='submit' className='btn'/>

      </form>
      <div className='character-container'>
      {characterFiltered.length ===0 ?(
        errors.name && <h3 className='character-filtered'><span>There is no character with this name</span></h3>
      )
        : (characterFiltered.map(cf =>(
        <div className='character-info'
           key = {cf.id}
        >         
          <img src={cf.imageUrl} className='character-image' alt='character'/>
          <h1>{cf.title}</h1>
          <h2>{cf.fullName}</h2>
          <h5>{cf.family}</h5>
        </div>
        ))
    
        )}
        </div>
   </div>

)
}

