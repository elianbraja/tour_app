import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  FlatList,
  TextInput,
  ActivityIndicator,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Image, withBadge } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = ({ navigation }) => {
  const image = {
    uri:"https://travellingbalkans.com/wp-content/uploads/2019/09/DJI_0853-HDR-1150x862.jpg",
  };

  const recentImage = {
    uri:"https://century21metropol.com/wp-content/uploads/2020/07/475991.jpg",
  };
  const venice = "Tirana offers so much to see!";

  const [gallery, setgallery] = useState([
    {
      image: {
        uri:"https://cdn.thecrazytourist.com/wp-content/uploads/2016/05/Piramida-Tirana-1024x768.jpg",
      },
      title: "Piramida",
      key: "1",
      lat: 14.3232,
      lng: 19.8216,
      description: "It might seem strange to start with a derelict building, but the Piramida is unique. It’s an unforgettable and culturally-significant building from 1987, completed not long before the fall of communism. It was intended as a museum to honour the country’s despotic dictator Enver Hoxha who ruled from 1944-85, but naturally these plans were torn up after 1990. Now it’s at the crux of a debate on how to deal with the period after the Second World War, when Albania suffered 45 years of isolation. Some want to see it restored as a monument to that period, while others want it torn down. In the meantime it remains unused, except by graffiti artists and skaters."
    },
    {
      image: {
        uri:"https://cdn.thecrazytourist.com/wp-content/uploads/2016/05/Skanderbeg-Square-Tirana-1024x680.jpg",
      },
      title: "Skanderbeg Square",
      key: "2",
      lat: 41.3277,
      lng: 19.8186,
      description: "This is where Tirana’s premier monuments are all assembled, including the Clock Tower, Et’hem Bey Mosque and the National History Museum. It is named after George Castriot, an Albanian national hero, credited with halting the advance of the Ottoman Empire into central Europe. There’s a monument to Skanderbeg in the square, which occupies the spot where a communist-era statue of Josef Stalin once stood. The architecture surrounding the square is neo-renaissance, and there’s a large lawn with flower beds to round off the stately atmosphere. Skanderbeg is the city’s main venue for popular celebrations, such as 100 years of Albanian Independence in 2012."
    },
    {
      image: {
        uri:"https://cdn.thecrazytourist.com/wp-content/uploads/2016/05/National-Historic-Museum-Tirana-768x576.jpg",
      },
      title: "National Historic Museum",
      key: "3",
      lat: 41.3294,
      lng: 19.8174,
      description: "One thing’s for sure – Tirana and Albania have a very complicated past. So if you need a point of entry this is the place to get some context. The museum is organised by pavilions, each covering a different period in the region’s history, from ancient times up to the 21st century. The most valuable in terms of archaeological wealth is the Pavilion of Antiquity, where there’s a great collection of almost 600 items spanning the late-Palaeolithic to the early-Middle Ages. The most treasured exhibit is the Beauty of Durrës, which is from the 4th century BC and is the most cherished ancient mosaic in the country."
    },
    {
      image: {
        uri:"https://cdn.thecrazytourist.com/wp-content/uploads/2016/05/Mount-Dajti-1024x768.jpg",
      },
      title: "Dajti Mountain National Park",
      key: "4",
      lat: 41.3674,
      lng: 19.9226,
      description: "In Europe it’s unusual to find a national park right on the doorstep of a capital city, so don’t pass up the chance to venture out further into the mountain range that forms Tirana’s eastern boundary. If you want to really get out and experience the natural scenery here, take the trail that connects Mount Dajti with Mount Tujani, which rises to 1,580 metres. This peak is the highest in the park and can be scaled on foot if you’re a regular hiker. The view from the top is what the effort is for, not least because it includes the vast water reservoir, Lake Bovilla. Surrounding this lake are sheer cliffs that also provide some excellent climbing walls."
    },
    {
      image: {
        uri:"https://cdn.thecrazytourist.com/wp-content/uploads/2016/05/Ethem-Bey-Mosque-1024x768.jpg",
      },
      title: "Et’hem Bey Mosque",
      key: "5",
      lat: 41.3233,
      lng: 19.8181,
      description: "This place of worship was completed in the early-19th century and is one of the city’s top landmarks. At the fall of communism it was the site of one of the most remarkable events in Tirana’s recent history, when on the 10th of January 1991 10,000 people gathered to practise their religion, against the decree of the authorities who had banned Islam for almost half a century. In the end there was no police interference and the event marked a turning for religious freedom in Albania. The outer walls of this mosque are unusual  as they depict idyllic scenery such as forests and waterfalls, which aren’t normally permitted in Islamic art."
    },
    {
      image: {
        uri:"https://cdn.thecrazytourist.com/wp-content/uploads/2016/05/Grand-Park-Tirana-768x512.jpg",
      },
      title: "Grand Park",
      key: "6",
      lat: 41.3123,
      lng: 19.8251,
      description: "Just south of the prestigious Blloku district is Tirana’s Grand Park, which is the city centre’s top spot for fresh air and a bit of exercise. It covers 230 hectares and encloses a large artificial lake. Famously the Presidential Palace can be found here, which was originally designated as a residence for King Zog I, but was completed just a few years before communism. There are also tombs to several Albanian national heroes in the park, among them politicians, writers and philosophers. Throughout the year you can find people fishing on the lakeshore, which indicates the improving water quality, while outdoor swimming is available in summer."
    },
    {
      image: {
        uri:"https://cdn.thecrazytourist.com/wp-content/uploads/2016/05/Clock-Tower-Tirana-768x1024.jpg",
      },
      title: "Clock Tower",
      key: "7",
      lat: 41.3277,
      lng: 19.8197,
      description: "One of the city’s most photographed landmarks, especially when it’s illuminated at night, the Clock Tower goes back to 1822 when it was completed by the court poet Haxhi Et’hem Bey. You can scale the tower’s narrow spiral staircase free of charge and take in the lovely vistas of Tirana’s city-centre. One of the curious features of the tower is its clock, which has been altered several times in building’s history. The first was a Viennese design, which was replaced by a German-style timepiece which was destroyed in the Second World War. After that there was one with Roman numerals that came down in the 70s in favour of the current Chinese clock."
    },
    {
      image: {
        uri:"https://cdn.thecrazytourist.com/wp-content/uploads/2016/05/Rruga-Murat-Toptani-1024x681.jpg",
      },
      title: "Rruga Murat Toptani",
      key: "8",
      lat: 41.3271,
      lng: 19.8225,
      description: "A pedestrianised street in the centre of Tirana, Rruga Murat Toptani is a handsome promenade between the Parliament Building and the National Art Gallery. The name of this popular artery comes from the Toptani Family, who held sway in Ottoman Albania from the 1700s right up to the Second World War. The street is especially grand in summer when the twin rows of plane trees offer shade from the sun. Along the route you can admire some of the city’s old fortifications, dating to the time when the Toptanis vied for control of Tirana with other powerful local families."
    },
    {
      image: {
        uri:"https://cdn.thecrazytourist.com/wp-content/uploads/2016/05/Tanners-Bridge-Tirana-1024x681.jpg",
      },
      title: "Tanners’ Bridge",
      key: "9",
      lat: 41.3264,
      lng: 19.8261,
      description: "This minor attraction is from the 1700s and is a fascinating fragment of Tirana’s Ottoman history, giving an impression of how the city went about its business in the years after its foundation. These days it’s a humble stone pedestrian bridge, but when it was built it was the main route for farmers to bring their livestock into the butchery and leatherworking district. These days the Lanë River that the bridge used to traverse has been redirected, so the bridge is kept as a monument. From the bridge you can also see the Tanners’ Mosque, which was constructed by the Tanners’ guild in the 1700s."
    },
    {
      image: {
        uri:"https://cdn.thecrazytourist.com/wp-content/uploads/2016/05/BunkArt-Tirana.jpg",
      },
      title: "Bunk’Art",
      key: "11",
      lat: 41.3516,
      lng: 19.8608,
      description: "This extraordinary attraction puts Albania’s recent past into perspective. Bunk’Art is an underground bunker that was constructed for Tirana’s communist-era politicians and military top brass in case of nuclear war. What’s astounding is the scale and detail of the shelter: It’s set over five stories, and has more than 100 different rooms including a meeting hall with 200 seats. The goal of the attraction today is to help people come to terms with a troubled period in the country’s history, but will enthuse people who enjoy Cold War-era  installations and communist design."
    },
    {
      image: {
        uri:"https://cdn.thecrazytourist.com/wp-content/uploads/2016/05/Preza-Castle-768x512.jpg",
      },
      title: "Preza Castle",
      key: "12",
      lat: 41.4315,
      lng: 19.6727,
      description: "Northwest of the city is this 15th century fortress that stands high over the village of the same name. It was built and belonged to the feudal Thopia family whose estates covered the area between the Shkumbin and Mat Rivers. In its day the structure would have been an outpost built to defend the area against bandits. The pentagonal-shaped castle’s value now lies in its intact walls and towers, including a clock tower that was installed in the 1800s. From the battlements you’ll get far-reaching panoramas over the plain, out to the city of Tirana and the mountain range behind it."
    }
  ]);
  const [counter, setCounter] = useState(1);

  const BadgedIcon = withBadge(counter)(Icon);
  return (
    <SafeAreaView>
    	<View style={{ flexGrow: 1 }}>
    		<View>
    			<ImageBackground source={image} style={styles.image}>
    				<View style={styles.searchContainer}>
    					<Text style={styles.userGreet}>Welcome to Tirana,</Text>
    					<Text style={styles.userText}>Where would you like to go today?</Text>
    				</View>
    				<View>
    					<TextInput style={styles.searchBox} placeholder="search destination" placeholderTextColor="#666"></TextInput>
    					<Icon name="search-outline" size={hp( "3%")} color="#666" style={{ position: "absolute", top: hp( "4.5%"), right: wp( "30%"), opacity: 0.6, }} />
    				</View>
    				<TouchableOpacity onPress={()=>navigation.openDrawer()} style={{ position: "absolute", top: hp("1.5%"), left: "5%", }} >
    					<Icon name="menu-outline" size={hp( "4%")} color="#fff" />
    				</TouchableOpacity>
    			</ImageBackground>
    		</View>
    		<ScrollView showsVerticalScrollIndicator={false}>
    			<View style={{ padding: 16 }}>
    				<Text style={{ fontSize: hp( "2.5%"), fontWeight: "bold" }}>Top Trending</Text>
    			</View>
    			<View>
    				<FlatList showsHorizontalScrollIndicator={false} data={gallery} horizontal={true} renderItem={({ item })=>{
              return (
      					<View style={{ paddingVertical: hp( "1%"), paddingHorizontal: wp( "0.5%"), }}>
      						<TouchableOpacity onPress={()=>navigation.navigate("Post", { item, gallery }) } style={{ shadowColor: "#000", shadowOffset: { width: 0, height: 20, }, shadowOpacity: 0.34, shadowRadius: 6.27, elevation: 10, }} >
      							<Image source={item.image} image={item.image} PlaceholderContent={ <ActivityIndicator size="small" color="#0000ff" />} style={{ width: responsiveScreenWidth(40), marginRight: wp("2%"), height: responsiveScreenHeight(20), borderRadius: 10, }} />
      							<Icon name="pin-outline" size={hp( "2.5%")} color="#fff" style={styles.imageLocationIcon} />
      							<Text style={styles.imageText}>{item.title}</Text>
      						</TouchableOpacity>
      					</View>
              );
            }}
            />
          </View>
    			<View style={{ marginBottom: hp( "5%") }}>
    				<View style={{ padding: hp( "2%"), flexDirection: "row", justifyContent: "space-between", }}>
    					<Text style={{ fontSize: hp( "2.5%"), fontWeight: "bold" }}>Top sights</Text>
    					<TouchableOpacity onPress={()=>navigation.navigate("Example")}>
    						<Text style={{ fontSize: hp( "2%"), fontWeight: "bold", color: "#ff6200", }}>View All</Text>
    					</TouchableOpacity>
    				</View>
    				<Image source={recentImage} style={{ width: "95%", height: hp( "30%"), borderRadius: 10, marginLeft: wp( "2%"), }} />
    				<View style={{ position: "absolute", bottom: 0, padding: hp( "1%") }}>
    					<View style={{ flexDirection: "row" }}>
    						<Icon name="location-outline" size={20} color="#ff6200" style={{ marginLeft: 10, position: "relative", top: 4 }} />
    						<Text style={{ fontSize: 22, color: "white", fontWeight: "normal", marginBottom: "2%", marginHorizontal: 10, }}>Tirana</Text>
    					</View>
    					<Text style={{ fontSize: 14, color: "white", fontWeight: "normal", marginBottom: 10, opacity: 0.9, marginLeft: 10, }}>{venice}</Text>
    				</View>
    			</View>
    		</ScrollView>
    	</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: wp("100%"),
    height: responsiveScreenHeight(25),
  },

  searchContainer: {
    paddingTop: hp("7.4%"),
    paddingLeft: wp("5%"),
  },
  userGreet: {
    fontSize: responsiveScreenFontSize(3),
    fontWeight: "bold",
    color: "white",
  },
  userText: {
    fontSize: responsiveScreenFontSize(1.7),
    fontWeight: "normal",
    color: "white",
  },
  searchBox: {
    marginTop: hp("3%"),
    backgroundColor: "#fff",
    paddingLeft: hp("2%"),
    padding: hp("1%"),
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    width: wp("75%"),
  },

  imageLocationIcon: {
    position: "absolute",
    left: hp("1%"),
    bottom: hp("1%"),
  },
  imageText: {
    position: "absolute",
    bottom: "2%",
    left: "20%",
    fontSize: hp("2.5%"),
    color: "white",
  },
});

export default Home;
