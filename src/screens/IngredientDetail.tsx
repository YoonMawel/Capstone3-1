import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';

interface FoodItem {
  id: number; // 고유 ID
  name: string; // 식품 이름
  category: string; // 카테고리
  expirationDate: string; // 유통기한
  image?: string; // 이미지 URL (선택적)
}

const IngredientsScreen = ({ navigation }: any) => {
  const [foodItems, setFoodItems] = useState<FoodItem[]>([]);

  useEffect(() => {
    const fetchFoodItems = async () => {
      try {
        const response = await fetch('https://your-api-endpoint.com/get-foods');
        const text = await response.text();
        console.log(text);

        const data = await response.json();
        setFoodItems(data);
      } catch (error) {
        console.error('Error fetching food items: ', error);
      }
    };

    fetchFoodItems();
  }, []);

  // 식재료 상세 정보로 이동하는 함수
  const handleNavigateToDetail = (item: FoodItem) => {
    navigation.navigate('IngredientDetail', {
      foodName: item.name,
      foodCategory: item.category,
      expirationDate: item.expirationDate, // 유통기한 추가
    });
  };

  return (
    <View>
      <Text>식재료 목록</Text>
      <FlatList
        data={foodItems}
        keyExtractor={(item) => item.id.toString()} // 고유 키 제공
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleNavigateToDetail(item)}>
            <View>
              <Text>{item.name} - {item.category}</Text>
              {item.image && <Image source={{ uri: item.image }} style={{ width: 100, height: 100 }} />}
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default IngredientsScreen;

