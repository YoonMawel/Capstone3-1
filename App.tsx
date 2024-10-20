/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './src/screens/Main'; // 메인 화면 경로
import IngredientsScreen from './src/screens/Ingredients'; // 식재료 화면 경로
import RecipesScreen from './src/screens/Recipes'; // 레시피 화면 경로
import AddScreen from './src/screens/Add'; // 직접 추가 화면 경로
import IngredientDetailScreen from './src/screens/IngredientDetail'; // 식재료 상세 정보 경로

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{ title: '냉장고 관리 시스템' }}
        />
        <Stack.Screen
          name="Ingredients"
          component={IngredientsScreen}
          options={{ title: '식재료 목록' }}
        />
        <Stack.Screen
          name="IngredientDetail"
          component={IngredientDetailScreen}
          options={{ title: '식재료 상세정보' }}
        />
        <Stack.Screen
          name="Recipes"
          component={RecipesScreen}
          options={{ title: '레시피' }}
        />
        <Stack.Screen
          name="Add"
          component={AddScreen}
          options={{ title: '식재료 추가' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
