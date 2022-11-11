import { StyleSheet, SafeAreaView, Text, Image, FlatList, List } from "react-native";
import { Themes } from "./assets/Themes";
import { millisToMinutesAndSeconds, useSpotifyAuth } from "./utils";
import { Images } from "./assets/Themes";
import images from "./assets/Images/images";


export default function Song({ imageUrl, title, artist, album, duration}) {
    return(
        <SafeAreaView style={styles.song}>
        <Image style= {{height: 64, width: 64}} source ={{uri: imageUrl}}/>
        <Text numberOfLines={1} style= {{color: "white"}}>{title} {artist} {album} {millisToMinutesAndSeconds(duration)}</Text> 
        <Text style= {{color: "white"}} numberOfLines={1}>{artist} </Text>
        <Text numberOfLines={1} style= {{color: "white"}} >{album} </Text> 
         <Text style= {{color: "white"}}>{millisToMinutesAndSeconds(duration)} </Text>
       </SafeAreaView>
    );
}





const styles = StyleSheet.create({
    container: {
      backgroundColor: Themes.colors.background,
      justifyContent: "center",
      alignItems: "center",
      flex: 1,
    },
    button: {
      backgroundColor: Themes.colors.spotify,
      borderRadius: 99999,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    buttonImage:{
      resizeMode: "contain",
      height: 50,
      width: 50,
    },
    song:{
      flexDirection: "row",
      flex: 1,
      backgroundColor: Themes.colors.background,
      marginHorizontal: 1,
      marginVertical: 2,
      color: 'white',
      justifyContent: 'flex-start',
      alignItems: "center",
      width: '90%',
    }

    });