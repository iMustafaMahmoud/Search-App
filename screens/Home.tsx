import { StatusBar } from "expo-status-bar";
import React from "react";
import { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  FlatList,
  Text,
  ActivityIndicator,
} from "react-native";
import BookItem from "../components/BookItem/BookItem";
import { searchTextParser } from "../helpers";
import { useGetBooks } from "../hooks/useGetBooks";
import { HomeProps } from "./../types/home";

export default function Home({ navigation }: HomeProps) {
  const [searchingISBNs, setsearchingISBNs] = useState<string[]>([]);

  const responses = useGetBooks(searchingISBNs);

  let isLoading = responses.some((response) => response.isLoading);

  let isError = responses.some((response) => response.isError);

  const [searchText, setSearchText] = useState<string>("");

  const onChangeHandler = (text: string) => {
    const newText = searchTextParser(text);
    const splittedISBNS = newText.split(" ").filter((ISBN) => ISBN != "");
    setsearchingISBNs(splittedISBNS);
    setSearchText(newText);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search"
        onChangeText={onChangeHandler}
        keyboardType="default"
        value={searchText}
      />
      {isError ? (
        <Text>NOT FOUND</Text>
      ) : isLoading ? (
        <ActivityIndicator size="large" color="#00ff00" />
      ) : (
        <FlatList
          style={styles.flatList}
          data={responses}
          keyExtractor={(item: any, index) => `${index}`}
          renderItem={({ item }: any) => (
            <BookItem book={item.data} navigation={navigation} />
          )}
          showsVerticalScrollIndicator={false}
        />
      )}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    marginTop: 30,
  },
  input: {
    height: 40,
    width: "80%",
    margin: 12,
    borderWidth: 1,
    textAlign: "center",
    borderRadius: 25,
    paddingHorizontal: 10,
  },
  flatList: {
    marginBottom: 80,
  },
});
