import React, { useState } from 'react';
import { View, Text, Button, TextInput, Image, Alert } from 'react-native';
import { launchCamera, launchImageLibrary, CameraOptions, ImagePickerResponse } from 'react-native-image-picker';

const Add = () => {
  const [image, setImage] = useState<string | null>(null);
  const [foodName, setFoodName] = useState<string>('');
  const [foodCategory, setFoodCategory] = useState<string>('');

  const handleCamera = () => {
    const options: CameraOptions = {
      mediaType: 'photo', // 'photo', 'video', or 'mixed'
      quality: 1,
    };

    launchCamera(options, (response: ImagePickerResponse) => {
      if (response.didCancel) {
        console.log('User cancelled camera picker');
      } else if (response.errorCode) {
        console.error('Camera Error: ', response.errorCode);
        Alert.alert('Error', 'Could not access camera.');
      } else if (response.assets) {
        setImage(response.assets[0]?.uri || null);
      }
    });
  };

  const handleGallery = () => {
    const options: CameraOptions = {
      mediaType: 'photo', // 'photo', 'video', or 'mixed'
      quality: 1,
    };

    launchImageLibrary(options, (response: ImagePickerResponse) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.error('Image Picker Error: ', response.errorCode);
        Alert.alert('Error', 'Could not access gallery.');
      } else if (response.assets) {
        setImage(response.assets[0]?.uri || null);
      }
    });
  };

  const handleAddFood = async () => {
    if (!foodName || !foodCategory) {
      Alert.alert('Missing Information', 'Please fill in all fields.');
      return;
    }

    const newFoodItem = {
      name: foodName,
      category: foodCategory,
      image,
    }

    // API호출 방식이라면 해당 주석 아래줄에서 작업하면 됨.

    // Handle adding food logic here (e.g., API call or state update)
    Alert.alert('Success', 'Food item added successfully!');
  };

  return (
    <View>
      <TextInput
        placeholder="Food Name"
        value={foodName}
        onChangeText={setFoodName}
      />
      <TextInput
        placeholder="Food Category"
        value={foodCategory}
        onChangeText={setFoodCategory}
      />
      <Button title="Open Camera" onPress={handleCamera} />
      <Button title="Open Gallery" onPress={handleGallery} />
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
      <Button title="Add Food" onPress={handleAddFood} />
    </View>
  );
};

export default Add;
