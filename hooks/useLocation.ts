"use client";

import { useState } from "react";


export function useLocation(){

const [location,setLocation] = useState<{
lat:number;
lng:number;
}|null>(null);



function getLocation(){

return new Promise((resolve,reject)=>{


navigator.geolocation.getCurrentPosition(

(position)=>{


const coords={

lat:position.coords.latitude,

lng:position.coords.longitude

};


setLocation(coords);


resolve(coords);


},


(error)=>{

reject(error);

}


);


});


}



return {

location,

getLocation

};


}