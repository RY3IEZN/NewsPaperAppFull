/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView, Text, FlatList } from "react-native";
import Article from "../compnents/Article";

function HomeScreen(props) {
  const [articles, setArticles] = useState();
  const getNews = async () => {
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?pageSize=20&category=technology&country=us&apiKey=****CHANGEBACKTOAPIKEY*****`
      );
      setArticles(response.data.articles);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getNews();
  }, []);
  return (
    // <ScrollView>
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
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default HomeScreen;
