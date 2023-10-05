import React, { useState } from 'react'
import axios from 'axios';

import Spinner from './Spinner';
import useGif from '../hooks/useGif';

 const api = 'Ci50J0HREvtV1VRsmeJFTEYdXHSWSxrt'


const Tag = () => {
  const [tag, setTag] = useState('car');

  const {gif, loading, fetchData} = useGif(tag);


  return (
    <div className=' w-[60%] md:w-[30%] lg:w-[30%] mx-auto items-center bg-[#e792bb] rounded-lg border border-black
    flex flex-col md:items-center gap-y-5 mt-[15px]   '>

      <h1 className='mt-[15px] text-2xl underline uppercase font-bold'> Random {tag} Gif</h1>

    {
        loading ? (<Spinner/>) : (<img src= {gif} width="450" />)
    }

      <input 
        className='w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center'
        onChange={(event) =>  setTag(event.target.value)}
        value={tag}
      />
      

      <button onClick={() => fetchData(tag)}
      className="w-10/12  bg-slate-300 text-lg py-2 rounded-lg mb-[20px] bn5">

       Generate

      </button>

    </div>
  )
}

export default Tag
