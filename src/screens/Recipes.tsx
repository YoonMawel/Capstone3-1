import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const recipesData = [
    { id: '1', name: 'Spaghetti', ingredients: ['Pasta', 'Tomato Sauce'] },
    { id: '2', name: 'Fried Rice', ingredients: ['Rice', 'Vegetables'] },
    // 추가 레시피를 여기에 추가
];

const RecipeScreen = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={recipesData}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text>{item.name}</Text>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    item: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
});

export default RecipeScreen;
