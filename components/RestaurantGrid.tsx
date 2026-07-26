"use client";


import {
useEffect
} from "react";


import RestaurantCard from "./RestaurantCard";

import {
useLocation
} from "@/hooks/useLocation";


import {
useRestaurants
} from "@/hooks/useRestaurants";


import {
useRestaurantStore
}
from "@/store/restaurant";



export default function RestaurantGrid(){


const {
getLocation
}=useLocation();



const {
fetchRestaurants
}=useRestaurants();



const {
restaurants,
loading
}=useRestaurantStore();




useEffect(()=>{


async function load(){


const coords:any =
await getLocation();



fetchRestaurants(

coords.lat,

coords.lng

);


}


load();


},[]);





return (

<section className="
mx-auto
max-w-7xl
px-6
py-14
">


<h2 className="
mb-8
text-3xl
font-bold
">

Restaurants Near You

</h2>



{
loading &&

<p>
Searching restaurants...
</p>

}



<div className="
grid
gap-8
md:grid-cols-2
xl:grid-cols-4
">


{
restaurants.map((restaurant:any)=>(

<RestaurantCard

key={restaurant.id}

restaurant={restaurant}

/>

))

}


</div>


</section>

);

}