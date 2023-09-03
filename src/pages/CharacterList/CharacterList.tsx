/* eslint-disable react-native/no-inline-styles */
import {Text, StyleSheet, View, ScrollView, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NativeBaseProvider} from 'native-base';
import {TouchableOpacity} from 'react-native';

const CharacterList = ({navigation}: any) => {
  interface Character {
    id: number;
    fullName: string;
    imageUrl: string;
    // Add other properties as needed
  }
  const [posts, setPosts] = useState<Character[]>([]);
  function openProfile(): any {
    navigation.navigate('Profile');
  }
  useEffect(() => {
    fetch('https://thronesapi.com/api/v2/Characters')
      .then(response => response.json())
      .then(json => setPosts(json));
  }, []);

  // const renderItem = ({item}: any) => (
  //   <View style={styles.item}>
  //     <Text style={styles.textContainer}>
  //       <Text style={styles.itemText}>{item.id}</Text>
  //       <Text style={styles.spaceText}>... </Text>
  //       <Text style={styles.itemText}>{item.fullName}</Text>
  //     </Text>
  //     <Image source={{uri: item.imageUrl}} style={{width: 80, height: 80}} />
  //   </View>
  // );

  return (
    <NativeBaseProvider>
      <View>
        <ScrollView>
          <View style={styles.img}>
            <TouchableOpacity onPress={() => openProfile()}>
              <Image source={require('../../assets/setting.png')} />
            </TouchableOpacity>
          </View>
          <View style={styles.listView}>
            {posts.map((item, index) => (
              <View key={index} style={styles.item}>
                <Text style={styles.textContainer}>
                  <Text style={styles.itemText}>{item.id}</Text>
                  <Text style={styles.spaceText}>...</Text>
                  <Text style={styles.itemText}>{item.fullName}</Text>
                </Text>
                <Image
                  source={{uri: item.imageUrl}}
                  style={{width: 80, height: 80}}
                />
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </NativeBaseProvider>
  );
};

export default CharacterList;

const styles = StyleSheet.create({
  listView: {
    backgroundColor: '#2a2a2a',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
  img: {
    alignItems: 'flex-end',
    backgroundColor: '#2a2a2a',
    padding: 10,
  },
  item: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 12,
    width: 350,
    borderRadius: 10,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  spaceText: {
    marginHorizontal: 15,
  },
});
