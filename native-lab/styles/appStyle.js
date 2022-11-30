
import { Dimensions, StyleSheet } from 'react-native';


export const appStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'pink',
    fontWeight: 'bold',
    fontSize: 30
  },
  header: {
    width: 40,
    backgroundColor: 'lightblue ',
    padding: 20,
    marginTop: 40
  },
  body: {
    backgroundColor: '#36454f',
    padding: 10,
    borderRadius: 5
  },
  buttonContainer: {
    marginTop: 10,
    color: 'pink',
    fontWeight: 'bold',
    fontSize: 30,
    borderRadius: 5,
    backgroundColor: 'salmon'
  },
  gameDisplay: {
    flex: 1, // the number of columns you want to devide the screen into
    // marginHorizontal: "auto",
    alignItems: 'center',
    width: 400,
    // padding: 10,
    // backgroundColor: "red",

  },
  cardFront: {
    flex: 1,
    height: '100%',
    width: '100%',
    marginLeft: 4,
    marginTop: 4,
    alignItems: "center",
    padding: 0,
    borderWidth: 1.5,
    borderRadius: 4,
    position: 'absolute',
    // backfaceVisibility: 'hidden'
  },
  cardBack: {
    flex: 1,
    height: '100%',
    width: '100%',
    // maxWidth: "50%", // 100% devided by the number of rows you want
    // maxHeight: "15%",
    alignItems: "center",
    padding: 40,
    borderWidth: 1.5,
    borderRadius: 4,
    backfaceVisibility: 'hidden',

  },

  flatlistDiv: {
    marginTop: 20,
  },

  turnsBox: {

    color: 'green',
    fontWeight: '800',
    fontSize: 20,
    marginBottom: 60,
    // backgroundColor: 'green',
    padding: 10
  },
  // listWrapper: {
  //   height: Dimensions.get('window').width,
  //   // backgroundColor: 'red',

  // },
  cardWrapper: {
    padding: 5
  },

})





