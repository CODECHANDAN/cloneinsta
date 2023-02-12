import { useState } from 'react';
import './postform.css';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'


const PostForm=()=>{
    
    const navigate=useNavigate()
    const [formdata,setFormdata]=useState({name:'',description:'',location:'',PostImage:null,filename:''})


  const handleform=async(e)=>{
    e.preventDefault()
    let verify=formdata.name.length && formdata.description.length && formdata.location.length
    try{
    if(verify)
    {
        let formData = new FormData()
        formData.append('avatar', formdata.PostImage)
        formData.append('name', formdata.name)
        formData.append('location', formdata.location)
        formData.append('description', formdata.description)

        let data=await axios.post('https://mini-instaclone.onrender.com/posts',formData)
        if(data)
        {
            setFormdata({name:'',description:'',location:'',PostImage:null})
            navigate('/postview')
        }
    }
}
catch(err){
    alert(err.message)
}
  }



   return(<>
    <form className='form' method='POST' encType='multipart/form-data'>
        <div className='part-1'>
            <input placeholder={formdata.filename} className='upload padd'/>
            <label htmlFor='file' className='browse'>Browse</label>
            <input className='file' name={formdata.filename} onChange={e=>setFormdata({...formdata,PostImage:e.target.files[0],filename:e.target.files[0].name})} id='file' type="file"/>

        </div>
        <div className='part'>
          <input placeholder="Author" name={formdata.name} className='padd mx' onChange={e=>{setFormdata({...formdata,name:e.target.value})}}/>
          <input placeholder="Location" name={formdata.location} className='padd' onChange={e=>{setFormdata({...formdata,location:e.target.value})}}/>
        </div>
        <div className='part'>
            <input placeholder="Description" name={formdata.description} className='padd wd' onChange={e=>{setFormdata({...formdata,description:e.target.value})}}/>
        </div>  
        <button onClick={e=>handleform(e)}>Post</button>
    </form>
   </>) 
}

export default PostForm