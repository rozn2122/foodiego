import { create } from "zustand";


interface RestaurantStore {

  restaurants:any[];

  loading:boolean;

  setRestaurants:
  (restaurants:any[])=>void;


  setLoading:
  (loading:boolean)=>void;

}



export const useRestaurantStore =
create<RestaurantStore>((set)=>({

restaurants:[],

loading:false,


setRestaurants:(restaurants)=>
set({
restaurants
}),



setLoading:(loading)=>
set({
loading
}),


}));
