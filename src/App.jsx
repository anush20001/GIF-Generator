import Random from "./components/Random"
import Tag from "./components/Tag"




export default function App() {
  return (


    <div className="w-full h-full flex flex-col   background relative  items-center  ">

      <h1 className=" text-white text-3xl font-bold sm:mt-2   bn55 font-serif  border-animation  animate-bounce rounded-lg w-[30%] text-center mt-[40px]  justify-center " >Random GIF</h1>



      <div className=" flex  flex-col md:flex-row w-full h-full lg:flex-row  md:items-center lg:items-center justify-center md:justify-center gap-x-1 gap-y-20 md:gap-x-40 lg:gap-x-42 md:gap-y-10 lg:gap-y-12 mt-16">


        <Random />

        <Tag />


      </div>
  <div className="w-full h-full flex  mb-48  background ">

  </div>

    </div>


  )


}
