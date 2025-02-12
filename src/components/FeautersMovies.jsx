import React from 'react'
import FeautersMoviesCard from './FeautersMoviesCard';

export default function FeautersMovies({allmovies}) {
   
  return (
    <div className='my-12'>
        <h3 className='bg-red-600 rounded inline-block p-4 my-8 text-white'>FeautersMovies</h3>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                allmovies.map(allMovieData=>{
                     return <FeautersMoviesCard key={allMovieData._id} allMovieData={allMovieData}/>
                })
            }
        </div>
    </div>
  )
}

