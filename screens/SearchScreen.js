/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import Article from "../compnents/Article";
import SearchBar from "../compnents/SearchBar";

function SearchScreen(props) {
  const [searchText, setSearchText] = useState("");
  const [articles, setArticles] = useState([]);

  const searchArticles = async () => {
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?pageSize=20&category=technology&country=us&q=${searchText}&apiKey=****CHANGEBACKTOAPIKEY*****`
      );
      response.data.totalResults === 0
        ? setArticles(null) //alert("no posts found")
        : setArticles(response.data.articles);
    } catch (error) {
      alert(error);
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <SearchBar
        searchText={searchText}
        setSearchText={setSearchText}
        onSubmit={searchArticles}
      />
      <Text style={{ textAlign: "center", marginBottom: 5 }}>
        Search for something and your results will show here
      </Text>

      {/* <Text>ksksksksksk</Text> */}
      {articles === null ? (
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text>No Posts found</Text>
        </View>
      ) : (
        <FlatList
          data={articles}
          renderItem={({ item }) => {
            return (
              <Article
                urlImage={item.urlToImage}
                description={item.description}
                author={item.author}
                publishedAt={item.publishedAt}
                source={item.source.name}
                url={item.url}
              />
            );
          }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
});

export default SearchScreen;
