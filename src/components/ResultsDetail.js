import React from "react";
import {View, Image, Text, StyleSheet} from 'react-native';
import ResultsList from "./ResultsList";

const ResultsDetail = ({show}) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: show.image_url}} />
            <Text style={styles.name}>{show.name}</Text>
            <Text>{show.rating} Stars, {show.review_count} Reviews</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 15
    },
    image: {
        width: 250,
        height: 120,
        borderRadius: 4,
        marginBottom: 5
    },
    name: {
        fontWeight: 'bold',
        fontSize: 16
    }
});

export default ResultsDetail;