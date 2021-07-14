import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Card } from "react-native-elements";
import { BookItemProps } from "../../types/book-item";

export default function BookItem({ book, navigation }: BookItemProps) {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("BookDescription", { bookDescription: book })
      }
    >
      <Card containerStyle={styles.card}>
        <Card.Title>{book.title}</Card.Title>
        <Card.Divider />
        <View style={styles.container}>
          <Image
            style={styles.image}
            resizeMode="cover"
            source={{
              uri: `https://covers.openlibrary.org/b/id/${book.covers[0]}-M.jpg`,
            }}
          />
          <Text>{book.publish_date}</Text>
        </View>
      </Card>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 5,
    marginBottom: 10,
    height: 350,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 32,
  },
  image: {
    height: 200,
    width: 200,
    marginBottom: 5,
  },
});
