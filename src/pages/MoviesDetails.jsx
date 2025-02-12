import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom';
import MoviesDetailsCard from '../components/MoviesDetailsCard';

export default function MoviesDetails() {
    const singleData = useLoaderData()
    const [data, setData] = useState([singleData])
    
    
  return (
    <div>
        {
            data == 0 ? <div className='my-10 font-bold text-2xl text-red-600 text-center'>not show</div>:data.map(curData=>{
              
                return <MoviesDetailsCard setData={setData} curData={curData} key={curData._id}/>
            })
        }
    </div>
  )
}
