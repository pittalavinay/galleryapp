import React,{useState} from 'react'
import "./App.css"
import axios from 'axios'
import Card from './Card';
import { Link } from 'react-router-dom';
const Navbar = () => {
const[data,setdata]=useState([]);
const[datas,setdatae]=useState("");
const submitHandler=e=>
{
    e.preventDefault();

    axios.get(`https://pixabay.com/api/?key=29312725-95553b9218fa64532b2940df6&q=${datas}&image_type=photo&pretty=true`).then(response=>setdata(response.data.hits))
}
  return (
    <div>
        <div className='hero'>
        <div className='pixa'>
            pixabay
        </div>
        <div>
            <button className='btn btn-success'>
                Login
            </button>
            <button className='btn btn-success'>Signup</button>
        </div>
        </div>
    <center>   <div className='text'>
        <h1>Stunning free images &amp; royalty free stock</h1><br/>
        Over 2.6 million+ high quality stock images, videos and music shared by our talented community.<br/><br/>
           <form onSubmit={submitHandler}> 
            <input type="text" className='search' vlaue={data} onChange={(e)=>setdatae(e.target.value)}></input><br/><br/>
            <input type="submit" value="search" className='btn btn-info'></input>
           </form>
        </div>
        </center>
        <Card data={data}/>
    </div>
  )
}

export default Navbar