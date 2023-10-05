import React, { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

//  const api = 'Ci50J0HREvtV1VRsmeJFTEYdXHSWSxrt'


const Random = () => {


  const {gif, loading, fetchData} = useGif();


  return (
    <div className=' w-[60%] mx-auto md:w-[30%] lg:w-[30%] bg-green-500 rounded-lg border border-black
    flex flex-col items-center gap-y-5 mt-[15px]'>

      <h1 className='mt-[15px]  md:w-[60%]  items-center flex justify-center text-2xl underline uppercase font-bold'> A Random Gif</h1>

    {
        loading ? (<Spinner/>) : (<img src= {gif} width="450" />)
    }

      

      <button onClick={() => fetchData()}
      className="w-10/12  bg-slate-300 text-lg py-2 rounded-lg mb-[20px] bn5">

       Generate

      </button>

    </div>
  )
}

export default Random
