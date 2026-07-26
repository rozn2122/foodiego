"use client";

import {
  Search,
  MapPin
} from "lucide-react";

import {
  useState
} from "react";

import {
  useLocation
} from "@/hooks/useLocation";

import {
  useRestaurants
} from "@/hooks/useRestaurants";


export default function SearchBar() {

  const [keyword, setKeyword] = useState("");

  const {
    getLocation
  } = useLocation();


  const {
    fetchRestaurants
  } = useRestaurants();



  async function search() {

    const coords: any = await getLocation();

    fetchRestaurants(
      coords.lat,
      coords.lng,
      keyword || "restaurant"
    );

  }



  return (

    <div className="
      mx-auto
      flex
      max-w-4xl
      items-center
      gap-3
      rounded-2xl
      bg-white
      p-3
      shadow-xl
    ">


      <div className="
        flex
        flex-1
        items-center
        gap-3
        rounded-xl
        border
        px-4
        py-3
      ">


        <Search
          size={20}
          className="text-gray-400"
        />


        <input

          value={keyword}

          onChange={(e)=>
            setKeyword(e.target.value)
          }

          placeholder="Search pizza, burgers, sushi..."

          className="
            w-full
            bg-transparent
            text-gray-900
            placeholder:text-gray-400
            outline-none
          "

        />


      </div>



      <button

        onClick={search}

        className="
          flex
          items-center
          gap-2
          rounded-xl
          bg-orange-500
          px-6
          py-3
          font-semibold
          text-white
          transition
          hover:bg-orange-600
        "

      >

        <Search size={18}/>

        Search

      </button>



      <button

        onClick={()=>{

          setKeyword("");

          search();

        }}

        className="
          flex
          items-center
          gap-2
          rounded-xl
          border
          px-5
          py-3
          text-gray-700
          hover:bg-gray-100
        "

      >

        <MapPin size={18}/>

        Near Me

      </button>


    </div>

  );
}