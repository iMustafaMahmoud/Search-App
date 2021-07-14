import React from "react";
import { StyleSheet, Text, Image, SafeAreaView } from "react-native";
import { BookDescriptionProps } from "../types/book-description";

export default function BookDescription({ route }: BookDescriptionProps) {
  const { bookDescription } = route.params;

  const publishersText = `This Book is Published by these Authors: ${bookDescription.publishers.join(
    ", "
  )}`;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{bookDescription.title}</Text>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={{
          uri: `https://covers.openlibrary.org/b/id/${bookDescription.covers[0]}-M.jpg`,
        }}
      />
      <Text style={styles.publishersText}>{publishersText}</Text>
      <Text style={styles.publishDateText}>
        Published at: {bookDescription.publish_date}
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 80,
  },
  title: {
    fontSize: 35,
    color: "black",
    marginBottom: 10,
  },
  image: {
    width: 400,
    height: 400,
  },
  publishersText: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 8,
  },
  publishDateText: {
    fontSize: 16,
  },
});
