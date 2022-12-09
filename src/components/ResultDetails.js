import react from "react";
import { Text, View, StyleSheet, Image  } from "react-native";

const ResultDetails = ({result})=>{ // 2 curly braces in line 6 are {{}} outer: refer to JS expression, inner: actual object we want to pass
return<View style={style.container}>
    <Image style={style.image} source={{ uri: result.image_url} }/>  
    <Text style={style.name}> {result.name}</Text>
    <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
</View>
};

const style= StyleSheet.create({
    image: {
        width: 250,
        borderRadius: 4,
        height: 120,
        marginBottom: 5,
    },
    name:{
        fontWeight:'bold',
    },
    container:{
        marginLeft: 15,
    }
});

export default ResultDetails;