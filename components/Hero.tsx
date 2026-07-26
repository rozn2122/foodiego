"use client";

import { MapPin } from "lucide-react";
import SearchBar from "./SearchBar";


export default function Hero(){

return (

<section className="
bg-gradient-to-br
from-orange-500
to-orange-600
py-24
">


<div className="
mx-auto
max-w-7xl
px-6
text-center
text-white
">


<h1 className="
mb-6
text-5xl
font-black
md:text-7xl
">

Discover Amazing Food Nearby

</h1>


<p className="
mx-auto
mb-10
max-w-2xl
text-lg
text-orange-100
">

Search restaurants, explore cuisines,
and discover places near you.

</p>



<SearchBar />



<button className="
mt-6
inline-flex
items-center
gap-2
rounded-full
border
border-white/30
px-6
py-3
hover:bg-white
hover:text-orange-500
">

<MapPin size={18}/>

Use My Location

</button>



</div>


</section>

);

}