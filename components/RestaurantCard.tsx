"use client";

import { Restaurant } from "@/types/restaurant";
import {
  Heart,
  Star,
  MapPin,
} from "lucide-react";


interface Props {
  restaurant: Restaurant;
}


export default function RestaurantCard({
  restaurant,
}: Props) {


const image =
restaurant.photos?.length
?
`https://places.googleapis.com/v1/${restaurant.photos[0].name}/media?maxWidthPx=800`
:
"https://images.unsplash.com/photo-1513104890138-7c749659a591";


return (

<div className="
overflow-hidden
rounded-3xl
bg-white
shadow-md
transition
hover:-translate-y-1
hover:shadow-xl
">


<img

src={image}

alt={restaurant.name}

className="
h-56
w-full
object-cover
"

/>



<div className="p-5 space-y-3">


<div className="
flex
items-center
justify-between
">


<h2 className="
text-xl
font-bold
">

{restaurant.name}

</h2>



<button>

<Heart size={20}/>

</button>


</div>



<div className="
flex
items-center
gap-2
text-gray-600
">

<Star
size={18}
className="
fill-yellow-400
text-yellow-400
"
/>

{restaurant.rating}

<span>
({restaurant.reviews})
</span>


</div>



<div className="
flex
items-center
gap-2
text-gray-500
text-sm
">

<MapPin size={16}/>

{restaurant.address}

</div>



<span
className={`
inline-block
rounded-full
px-3
py-1
text-sm
font-semibold

${
restaurant.open
?
"bg-green-100 text-green-700"
:
"bg-red-100 text-red-600"
}

`}
>

{
restaurant.open
?
"Open Now"
:
"Closed"
}


</span>



</div>


</div>

);

}