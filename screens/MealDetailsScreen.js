import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { MEALS } from "../data/dummy-data";

const MealDetailsScreen = ({ navigation }) => {
  const mealId = navigation.getParams("mealId");
  const selectedMeal = MEALS.find((meal) => mealid === mealId);

  return (
    <View style={styles.screen}>
      <Text>{selectedMeal.title}</Text>
      <Button
        title="Go back to Categories"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
};

// MealDetailsScreen.navigationOptions = (navigationData) => {

//   return
// };

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default MealDetailsScreen;
