import { StyleSheet, SafeAreaView, Text, Image, FlatList, List } from "react-native";
import { millisToMinutesAndSeconds, useSpotifyAuth } from "./utils";
import { Themes } from "./assets/Themes";
import { Images } from "./assets/Themes";
//import { FlatList } from "react-native-web";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import images from "./assets/Images/images";
import { useState } from "react";
import Song from './Song';





export default function App() {
  // Pass in true to useSpotifyAuth to use the album ID (in env.js) instead of top tracks
  const { token, tracks, getSpotifyAuth } = useSpotifyAuth(true);

  const SpotifyAuthButton = () => {
    return (
      <SafeAreaView style={styles.container}>
      <Pressable onPress={() => getSpotifyAuth()} style={styles.button}>
            <Image style= {{height: 30, width: 30}} source={images.spotify} ></Image>
            <Text style= {{color: Themes.colors.white}}>Connect with Spotify</Text> 
        </Pressable> 
        </SafeAreaView>
        
    )
  
  }
// const [text, setText] = useState('')
// const [songs, setSongs] = useState([])

// const addSong = (song) => {
//   let newTracks = [...songs]
//   newTracks.push(song)
//   setSongs(newTacks)
// }

  // const Song = ({imageUrl, title, artist, album, duration}) => {
  //   return (
  //     <SafeAreaView style={styles.song}>
  //      <Image style= {{height: 30, width: 30}} source ={imageUrl}/>
  //      <Text numberOfLines={1}>{title}</Text> 
  //      <Text numberOfLines={1}>{artist}</Text>
  //      <Text numberOfLines={1}>{album}</Text>
  //      <Text>{millisToMinutesAndSeconds(duration)}</Text>
  //     </SafeAreaView>
  //   );
  // }

 
  
  const renderSong = (item, index) => (
  <Song
    //index = {item.index}
    //id = {item.id}
    imageUrl={item.album.images[0].url}
    
    title={item.name}
    artist={item.artists[0].name}
    album={item.album.name}
    duration={item.duration_ms} />

  );
  //console.log(item.imageUrl)
const TrackList = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
      data = {tracks}
      keyExtractor = {(item) => item.id}

      renderItem={({item}) => renderSong(item)}
      />
    </SafeAreaView>
  )
}

let contentDisplayed = null;

  if (token) {
    contentDisplayed = <TrackList/>
  } else {
    contentDisplayed = <SpotifyAuthButton/>
 }
  console.log(tracks)
  
  return (
    <SafeAreaView style={styles.container}>
      {/* TODO: Your code goes here */}
      {contentDisplayed}
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
    marginHorizontal: 1,
    backgroundColor: Themes.colors.background,
    justifyContent: 'space-between',
    alignItems: "center",

  }

});
