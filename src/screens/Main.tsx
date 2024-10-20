import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IngredientsScreen from './Ingredients'; // 경로에 맞게 수정
import RecipeScreen from './Recipes'; // 경로에 맞게 수정
import AddScreen from './Add'; // 경로에 맞게 수정

const Tab = createBottomTabNavigator();

const MainScreen = () => {
    return (
            <Tab.Navigator>
                <Tab.Screen name="Ingredients" component={IngredientsScreen} />
                <Tab.Screen name="Recipe" component={RecipeScreen} />
                <Tab.Screen name="Add" component={AddScreen} />
            </Tab.Navigator>
    );
};

export default MainScreen;
