import React, {useState} from "react"; //useEffect,t is a hook or a func that allows us to run some snipper of code one time when component is  first render to screen.
import {View, Text, StyleSheet, ScrollView} from "react-native";
import SearchBar from '../components/SearchBar';
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";
const SearchScreen =()=>{
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage]=useResults();
    const filterResultsByPrice =(price)=>{
        //price= '$' || "$$" || "$$$"
        return results.filter(results => {
            return results.price === price; 
        })
        
        
    }
    
    return<View style={{flex: 1}}>
        <SearchBar 
        term={term} 
        onTermChange={setTerm}
        onTermSubmit={()=> searchApi (term)} />
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        <ScrollView>
            <ResultsList 
            results={filterResultsByPrice('$')} 
            title="Cost Effective" />
            <ResultsList 
            results={filterResultsByPrice('$$')} 
            title="Bit Pricier"/>
            <ResultsList 
            results={filterResultsByPrice('$$$')} 
            title="Big Spender"/>
    
        </ScrollView>
        
    </View> 
};

const styles =StyleSheet.create({ 

});

export default SearchScreen;