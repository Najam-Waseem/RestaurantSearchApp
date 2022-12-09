import React, {useState, useEffect} from "react";
import { View, Text, StyleSheet, FlatList, Image} from "react-native";
import yelp from "../api/yelp";


 const ResultShowScreen =({navigation}) =>{
    const [result, setResult]=useState(null);
    const id = navigation.getParam('id');

    const getResult= async(id)=>{
       const response = await yelp.get(`/${id}`);
       setResult(response.data);     
    };
    useEffect(()=>{
        getResult(id);
    }, []);
    
    if(!result){
        return null;
    }
    return<View>
    <Text style={{fontWeight:"bold"}}>{result.name}</Text>
    <FlatList style={{marginTop: 20 }}
    data={result.photos}
    keyExtractor={(photo)=>photo}
    renderItem={({item})=>{
        return <Image style={styles.image} source={{uri: item}}
        /> 
    }} />
</View>
 }

 const styles = StyleSheet.create({
    image:{
        height: 200,
        width: 200,
        marginLeft: 70,
        marginBottom: 10
    }
 });

 export default ResultShowScreen;