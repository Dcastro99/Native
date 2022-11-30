import React, { useState, useEffect, useRef } from "react";
// import { NativeBaseProvider, Box } from "native-base";
import Test from './components/test'
import MyCamera from './components/camera'
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, Button, FlatList, Animated, Pressable, SafeAreaView } from 'react-native';
import { appStyles } from './styles/appStyle'
import back from './assets/images/littleNightmares2.jpg'


const cardImages = [

  { 'src': 'https://i.imgur.com/nhmzJiu.jpg' }, //Audio-Technica
  { 'src': 'https://i.imgur.com/CJ9mKJT.jpg' }, //Beanie
  { 'src': 'https://i.imgur.com/tYRpBsz.jpg' }, //XBOX Controller
  { 'src': 'https://i.imgur.com/ffflRGY.jpg' }, //Record Player
  { 'src': 'https://i.imgur.com/Fr0M72O.jpg' }, //Hunting knife
  { 'src': 'https://i.imgur.com/81Hv5UF.jpg' }, //Bow & Arrow
]


export default function App() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)
  const [disabled, setDisabled] = useState(false)
  const flipAnimation = useRef(new Animated.Value(0)).current;

  let flipRotation = 0;
  flipAnimation.addListener(({ value }) => flipRotation = value);

  const flipToFrontStyle = {
    transform: [
      {
        rotateY: flipAnimation.interpolate({
          inputRange: [0, 180],
          outputRange: ["0deg", "180deg"]
        })
      }
    ]
  };
  const flipToBackStyle = {
    transform: [
      {
        rotateY: flipAnimation.interpolate({
          inputRange: [0, 180],
          outputRange: ["0deg", "180deg"]
        })
      }
    ]
  };

  const flipToFront = () => {
    Animated.timing(flipAnimation, {
      toValue: 180,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };
  const flipToBack = () => {
    Animated.timing(flipAnimation, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  // shuffle cards for new game
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map(card => ({ ...card, id: Math.random() }))

    setChoiceOne(null)
    setChoiceTwo(null)
    setCards(shuffledCards)
    setTurns(0)
  }

  // handle a choice
  const handleChoice = (card) => {
    console.log('choice??', card.target.src
    )
    if (!disabled) {
      choiceOne ? setChoiceTwo(card.target.src) : setChoiceOne(card.target.src)
    }
  }


  console.log('CHOICE ONE', choiceOne)
  console.log('CHOICE TWO', choiceTwo)


  // compare 2 selected cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true)

      if (choiceOne === choiceTwo) {
        setCards(prevCards => {
          return prevCards.map(card => {
            if (card.src === choiceOne) {
              return { ...card, matched: true }
            } else {
              return card
            }
          })
        })
        resetTurn()
      } else {
        setTimeout(() => resetTurn(), 1000)
      }

    }
  }, [choiceOne, choiceTwo])


  // reset choices & increase turn
  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1)
    setDisabled(false)
  }

  // start new game automagically
  useEffect(() => {
    shuffleCards()
  }, [])


  const Item = ({ item }) => {
    console.log('item', item)
    return (
      <>

        <Pressable
          style={appStyles.cardWrapper}
          onPress={() => { !!flipRotation ? flipToBack() : flipToFront(), handleChoice }}
          flipped={item.src === choiceOne || item.src === choiceTwo || item.matched}
          disabled={disabled}
        >

          <Animated.Image
            style={{ ...appStyles.cardFront, ...flipToBackStyle }}
            source={{ uri: item.src }}



          />
          <Animated.Image
            style={{ ...appStyles.cardBack, ...flipToFrontStyle }}
            source={back} alt="cover"
          />

        </Pressable >


      </>
    )

  };




  return (
    // <NativeBaseProvider>

    <View style={appStyles.container}>
      <View style={appStyles.header}>

      </View>
      <View style={appStyles.body}>
        <Text style={appStyles.title}>Native Memory Game!</Text>
      </View>

      <View style={appStyles.buttonContainer}>
        <Button
          title='New Game!'
          color='#36454f'
          onPress={shuffleCards} />

      </View>

      <View style={appStyles.gameDisplay}>





        {/* <Pressable
          onPress={() => !!flipRotation ? flipToBack() : flipToFront()}
          onPressIn={handleChoice}

        >

          {cards.map(card => (
            <>
              {console.log('cardzzz', card)}

              <Animated.Image
                style={{ ...appStyles.cardFront, ...flipToBackStyle }}
                source={{ uri: card.src }}
                flipped={card.src === choiceOne || card.src === choiceTwo || card.matched}
                disabled={disabled}
              />
              <Animated.Image
                style={{ ...appStyles.cardBack, ...flipToFrontStyle }}
                source={back} alt="cover"
              />

            </>

          ))}

        </Pressable > */}

        <Pressable style={appStyles.listWrapper}>
          <FlatList
            style={appStyles.flatlistDiv}
            // ItemSeparatorComponent={renderSeparator}
            data={cards}
            numColumns={4}
            initialNumToRender={12}
            renderItem={Item}
            keyExtractor={(item) => item.alt}

          />
        </Pressable>

      </View>
      <MyCamera />
      <View>
        <Text style={appStyles.turnsBox}>Turns: {turns}</Text>
      </View>
      <StatusBar style="auto" />
    </View >

    // </NativeBaseProvider>
  );
}

