import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const ingredientsData = [
    { id: '1', name: 'Eggs', category: 'Dairy' },
    { id: '2', name: 'Chicken', category: 'Meat' },
    // 추가 식재료를 여기에 추가
];

const IngredientsScreen = ({ navigation }: any) => {
    const handleNavigateToDetail = (item: { name: string; category: string; }) => {
        console.log('Clicked on:', item);
        navigation.navigate('IngredientDetail', {
            foodName: item.name,
            foodCategory: item.category,
            expirationDate: 'N/A', // 유통기한은 예시로 'N/A'를 사용
        });
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={ingredientsData}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => handleNavigateToDetail(item)}>
                        <View style={styles.item}>
                            <Text>{item.name} - {item.category}</Text>
                        </View>
                    </TouchableOpacity>
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

export default IngredientsScreen;
