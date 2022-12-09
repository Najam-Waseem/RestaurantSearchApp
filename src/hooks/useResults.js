import { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default ()=>{
    const [results, setResults]=useState([])  
    const [errorMessage, setErrorMessage]=useState('');
    
    const searchApi = async searchTerm=>{ 
        try{
            console.log('Hi There!')
        const response = await yelp.get('/search',{
            params: { // use to customize the search in api req
                limit:50, 
                term: searchTerm,
                location: 'san jose'

            }
        });
        setResults(response.data.businesses);
    }  catch(err){

        setErrorMessage('Something Went Wrong');
    } 

    }
    useEffect(() => { //using useEffect hook of we want to run our code 1 time or multiple time depending upon the 2nd argument i.e: [] 
        searchApi('pasta');
    },[]);
    return [searchApi, results, errorMessage ]
}