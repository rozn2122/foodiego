"use client";


import {
useRestaurantStore
}
from "@/store/restaurant";



export function useRestaurants(){


const {
setRestaurants,
setLoading
}=useRestaurantStore();



async function fetchRestaurants(

lat:number,

lng:number,

keyword="restaurant"

){


try{


setLoading(true);



const response =
await fetch(
`/api/restaurants?lat=${lat}&lng=${lng}&keyword=${keyword}`
);



const data =
await response.json();



setRestaurants(data);



}

catch(error){

console.log(error);

}


finally{

setLoading(false);

}


}


return {

fetchRestaurants

};


}