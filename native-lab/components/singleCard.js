// import { cardStyles } from '../styles/singleCardStyle'
// import { View, Image, TouchableHighlight } from 'react-native';
// import back from '../assets/images/littleNightmares2.jpg'
// import { appStyles } from '../styles/appStyle'
// export default function SingleCard({ item, card, handleChoice, flipped, disabled }) {

//   const handleClick = () => {
//     if (!disabled) {
//       handleChoice(card)
//     }
//   }

//   return (
//     < View style={[cardStyles.container, flipped ? 'flipped' : '']} >
//       <TouchableHighlight style={appStyles.grid}>
//         <Image
//           style={appStyles.item}
//           source={item.src}
//           key={item.id}
//         />

//       </TouchableHighlight>
//       <TouchableHighlight>
//         {/* <View style={cardStyles.flipped ? "flipped" : ""}> */}
//         {/* < Image style={cardStyles.front} source={card.src} key={card.id} /> */}
//         <Image onPress={handleClick} style={appStyles.item} source={back} alt="cover" />
//         {/* </View> */}
//       </TouchableHighlight>
//     </View>
//   )
// }