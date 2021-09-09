import React, { useState } from 'react';
import { Card, ListItem, Button } from 'react-native-elements'
import {StyleSheet, Text, View, Image, ImageBackground, ScrollView, FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from "react-native-vector-icons/Ionicons";

const CardComponent = (props) => {

    var day = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();

    const [gallery, setgallery] = useState([
      {
        image: {
          uri:"https://cdn.thecrazytourist.com/wp-content/uploads/2016/05/Piramida-Tirana-1024x768.jpg",
        },
        title: "Piramida",
        key: "1",
        description: "It might seem strange to start with a derelict building, but the Piramida is unique. It’s an unforgettable and culturally-significant building from 1987, completed not long before the fall of communism. It was intended as a museum to honour the country’s despotic dictator Enver Hoxha who ruled from 1944-85, but naturally these plans were torn up after 1990. Now it’s at the crux of a debate on how to deal with the period after the Second World War, when Albania suffered 45 years of isolation. Some want to see it restored as a monument to that period, while others want it torn down. In the meantime it remains unused, except by graffiti artists and skaters."
      },
      {
        image: {
          uri:"https://cdn.thecrazytourist.com/wp-content/uploads/2016/05/Skanderbeg-Square-Tirana-1024x680.jpg",
        },
        title: "Skanderbeg Square",
        key: "2",
        description: "This is where Tirana’s premier monuments are all assembled, including the Clock Tower, Et’hem Bey Mosque and the National History Museum. It is named after George Castriot, an Albanian national hero, credited with halting the advance of the Ottoman Empire into central Europe. There’s a monument to Skanderbeg in the square, which occupies the spot where a communist-era statue of Josef Stalin once stood. The architecture surrounding the square is neo-renaissance, and there’s a large lawn with flower beds to round off the stately atmosphere. Skanderbeg is the city’s main venue for popular celebrations, such as 100 years of Albanian Independence in 2012."
      },
      {
        image: {
          uri:"https://cdn.thecrazytourist.com/wp-content/uploads/2016/05/National-Historic-Museum-Tirana-768x576.jpg",
        },
        title: "National Historic Museum",
        key: "3",
        description: "One thing’s for sure – Tirana and Albania have a very complicated past. So if you need a point of entry this is the place to get some context. The museum is organised by pavilions, each covering a different period in the region’s history, from ancient times up to the 21st century. The most valuable in terms of archaeological wealth is the Pavilion of Antiquity, where there’s a great collection of almost 600 items spanning the late-Palaeolithic to the early-Middle Ages. The most treasured exhibit is the Beauty of Durrës, which is from the 4th century BC and is the most cherished ancient mosaic in the country."
      },
      {
        image: {
          uri:"https://cdn.thecrazytourist.com/wp-content/uploads/2016/05/Mount-Dajti-1024x768.jpg",
        },
        title: "Dajti Mountain National Park",
        key: "4",
        description: "In Europe it’s unusual to find a national park right on the doorstep of a capital city, so don’t pass up the chance to venture out further into the mountain range that forms Tirana’s eastern boundary. If you want to really get out and experience the natural scenery here, take the trail that connects Mount Dajti with Mount Tujani, which rises to 1,580 metres. This peak is the highest in the park and can be scaled on foot if you’re a regular hiker. The view from the top is what the effort is for, not least because it includes the vast water reservoir, Lake Bovilla. Surrounding this lake are sheer cliffs that also provide some excellent climbing walls."
      }
      ]);

    return (
        <FlatList
        showsHorizontalScrollIndicator={false}
        data={gallery}
        renderItem={({item}) =>{
            return(
            <View style={styles.container}>
                <ScrollView>
                <TouchableOpacity
                   onPress={() => props.navigation.navigate('Post', { item }) }
                  >
                <View style={{elevation:10}}>
                <ImageBackground
                    source={item.image}
                    style={styles.contain}
                    imageStyle={{borderRadius:25}}
                >
                    <View style={{flexDirection:'row', alignSelf:"flex-start", backgroundColor:'gray' , borderRadius:20, marginTop:170, marginLeft:15, alignItems:'center'}}>
                    <Icon name='menu-outline' size={14} color='orange' style={{marginLeft:5}} />
                    <Text style={{marginHorizontal:5}}>{item.title}</Text>
                    </View>

                    <View style={{flexDirection:'row', alignSelf:"flex-start", backgroundColor:'gray' , borderRadius:20, marginTop:170, marginLeft:10, alignItems:'center'}}>
                    <Icon name='eye-outline' size={14} color='orange' style={{marginLeft:5}} />
                    <Text style={{marginHorizontal:5}}>1509</Text>
                    </View>

                    <View style={{flexDirection:'row', alignSelf:"flex-start", backgroundColor:'gray' , borderRadius:20, marginTop:170, marginLeft:10, alignItems:'center'}}>
                    <Text style={{marginHorizontal:5}}>{day +"-"+ month+ "-" + year}</Text>
                    </View>

                </ImageBackground>
                </View>
                </TouchableOpacity>
               </ScrollView>
               </View>
            );
        }}
        />
    );
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      marginBottom:10
    },
    contain: {
        marginTop:10,
        marginHorizontal:10,
        height:200,
        flexDirection:'row',
        justifyContent:'space-between',
        elevation:10
    }

  });

export default CardComponent;
