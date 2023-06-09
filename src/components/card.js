import React from 'react'
import { TextInput, Button, Avatar, Card, Text } from "react-native-paper"
import { StyleSheet, } from 'react-native';
export default function Carte({ id, link, name, date }) {
    return (
        <Card style={styles.cardStyle}>
            {console.log(id)}
            <Card.Title title={name} subtitle={date} />
            <Card.Content>
                <Text variant="bodyMedium">{date}</Text>
            </Card.Content>
            <Card.Cover style={styles.cardIMG} source={{uri:link}} />
            <Card.Actions style={styles.cardActions}>
                <Text style={styles.cardBTNText}>See More</Text>
                <Text style={styles.cardBTNText}>See More</Text>
            </Card.Actions>
        </Card>
    )
}
const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: "#F0FFF4",
        height: "100%",
        width: "100%",
        paddingTop: 20,
        paddingLeft: 10,
        flexWrap: "wrap"

    },
    cardStyle: {
        width: 160,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        margin: 15
    },
    cardActions: {
        width: "100%"
    },
    cardIMG: {
        height: 120,
        width: 150,
        margin: 5
    },
    cardBTNText: {
        width: "50%",
        fontSize: 12,
        fontWeight: "bold",
        marginLeft: 0,
        padding: 10
    }
});