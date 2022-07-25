/** @format */

import * as WebBrowser from "expo-web-browser";
import moment from "moment";
import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  StatusBar,
  Text,
  Pressable,
} from "react-native";

function Article({
  urlImage,
  description,
  title,
  author,
  publishedAt,
  url,
  source,
}) {
  const goToSource = async () => {
    await WebBrowser.openBrowserAsync(url);
  };

  return (
    <Pressable style={styles.container} onPress={goToSource}>
      <StatusBar showHideTransition={"fade"} />
      <Image source={{ uri: urlImage }} style={styles.bannerImg} />

      <View style={{ padding: 20 }}>
        {/* title */}
        <Text style={styles.titleTxt}>{title}</Text>
        {/* description */}
        <Text style={styles.descriptionTxt} numberOfLines={3}>
          {description}
        </Text>
        <View style={styles.data}>
          <Text style={styles.heading} numberOfLines={1}>
            by: <Text style={styles.author}>{author}</Text>
          </Text>
          <Text style={styles.date}>
            {moment(publishedAt).format("MM - DD - YYYY")}
          </Text>
        </View>
        {/* source */}
        <View style={{ marginTop: 5 }}>
          <Text>
            Source: <Text style={styles.soucre}>{source}</Text>
          </Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  soucre: {
    color: "indigo",
    fontWeight: "bold",
    fontSize: 15,
  },
  heading: {},
  author: {
    fontWeight: "bold",
    fontSize: 15,
  },
  date: {
    fontWeight: "bold",
    color: "indigo",
  },
  data: {
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  container: {
    width: "90%",
    alignSelf: "center",
    marginTop: 5,
    borderRadius: 50,
    elevation: 5,
    shadowColor: "black",
    shadowOffset: {
      height: 5,
      width: 5,
    },
    backgroundColor: "white",
    marginBottom: 10,
  },
  bannerImg: {
    height: 200,
    width: "100%",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  titleTxt: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 10,
  },
  descriptionTxt: {
    fontSize: 16,
    fontWeight: "400",
  },
});

export default Article;
