import {createSlice} from  '@reduxjs/toolkit';
import Page1 from "../../mock_data/CONTENTLISTINGPAGE-PAGE1.json";
import Page2 from "../../mock_data/CONTENTLISTINGPAGE-PAGE2.json";
import Page3 from "../../mock_data/CONTENTLISTINGPAGE-PAGE3.json";

export const initialState ={
    movies:[],
    status:""
    
}

export const homeSlice = createSlice({
    name:"Home",
    initialState,
    reducers:{
       moviesRequest:(state) =>{
           state.status="Request"
       },
       moviesSuccess:(state,{payload})=>{
           state.status="Success"
           state.movies=payload
       },
       moviesError:(state)=>{
           state.status="Error"
       }
    }
})

export const {
    moviesRequest,moviesSuccess,moviesError}=homeSlice.actions

const home=homeSlice.reducer;
export default home;
export function pageData(page){
    return dispatch =>{
        dispatch(moviesRequest());
        if(page===1){
        
        return  dispatch(moviesSuccess(Page1))
        }
        if(page===2){
           return  dispatch(moviesSuccess(Page2))
        }
        if(page===3){
           return dispatch(moviesSuccess(Page3))
        }
    }
    
}