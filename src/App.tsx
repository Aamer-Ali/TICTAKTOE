import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Icons from './components/Icons';

const App = () => {
  const [isCross, setIsCross] = useState<boolean>(false);
  const [gameWinner, setGameWinner] = useState<String>('');
  const [gameState, setGameState] = useState(new Array(9).fill('empty', 0, 9));

  const reloadTheGame = () => {
    setIsCross(false);
    setGameWinner('');
    setGameState(new Array(9).fill('empty', 0, 9));
  };

  const checkIsWinner = () => {
    if (
      gameState[0] !== 'empty' &&
      gameState[0] === gameState[1] &&
      gameState[1] === gameState[2]
    ) {
      setGameWinner(`${gameState[0]} won the game. 🎉🎉🎉🎉`);
    } else if (
      gameState[3] !== 'empty' &&
      gameState[3] === gameState[4] &&
      gameState[4] === gameState[5]
    ) {
      setGameWinner(`${gameState[3]} won the game. 🎉🎉🎉🎉`);
    } else if (
      gameState[6] !== 'empty' &&
      gameState[6] === gameState[7] &&
      gameState[7] === gameState[8]
    ) {
      setGameWinner(`${gameState[6]} won the game. 🎉🎉🎉🎉`);
    } else if (
      gameState[0] !== 'empty' &&
      gameState[0] === gameState[3] &&
      gameState[3] === gameState[6]
    ) {
      setGameWinner(`${gameState[0]} won the game. 🎉🎉🎉🎉`);
    } else if (
      gameState[1] !== 'empty' &&
      gameState[1] === gameState[4] &&
      gameState[4] === gameState[7]
    ) {
      setGameWinner(`${gameState[1]} won the game. 🎉🎉🎉🎉`);
    } else if (
      gameState[2] !== 'empty' &&
      gameState[2] === gameState[5] &&
      gameState[5] === gameState[8]
    ) {
      setGameWinner(`${gameState[2]} won the game. 🎉🎉🎉🎉`);
    } else if (
      gameState[0] !== 'empty' &&
      gameState[0] === gameState[4] &&
      gameState[4] === gameState[8]
    ) {
      setGameWinner(`${gameState[0]} won the game. 🎉🎉🎉🎉`);
    } else if (
      gameState[2] !== 'empty' &&
      gameState[2] === gameState[4] &&
      gameState[4] === gameState[6]
    ) {
      setGameWinner(`${gameState[2]} won the game. 🎉🎉🎉🎉`);
    }
  };

  const onChangeItem = (itemNumber: number) => {
    if (gameWinner) {
      console.log('Game is already finished');
    } else if (gameState[itemNumber] === 'empty') {
      gameState[itemNumber] = isCross ? 'cross' : 'circle';
      setIsCross(!isCross);
    } else {
      console.log('Position is already filled');
    }

    checkIsWinner();
  };

  return (
    <SafeAreaView>
      <Text style={styles.headerText}>Tic Tac Toe</Text>$
      {gameWinner && <Text style={styles.winnerTitle}>{gameWinner}</Text>}
      {!gameWinner && (
        <Text
          style={[
            styles.winnerTitle,
            {backgroundColor: isCross ? 'pink' : 'lightgreen'},
          ]}>
          {isCross ? 'This is X turn' : 'This is O turn'}
        </Text>
      )}
      <FlatList
        numColumns={3}
        data={gameState}
        style={styles.gridStyle}
        renderItem={({item, index}) => (
          <TouchableOpacity
            style={styles.gridSingleItem}
            onPress={() => onChangeItem(index)}>
            <Icons name={item} />
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity
        style={styles.restartGameButton}
        onPress={reloadTheGame}>
        <Text style={styles.restartGameButtonText}>
          {gameWinner ? 'Play Again' : 'Re-Load the game'}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  gridStyle: {
    padding: 10,
  },
  gridSingleItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 40,
    borderWidth: 1,
  },
  winnerTitle: {
    textAlign: 'center',
    marginVertical: 24,
    marginHorizontal: 24,
    padding: 8,
    borderRadius: 8,
    fontSize: 22,
  },
  restartGameButton: {
    backgroundColor: 'lightblue',
    alignItems: 'center',
    marginVertical: 24,
    marginHorizontal: 24,
    padding: 8,
    borderRadius: 8,
  },
  restartGameButtonText: {
    fontSize: 22,
  },
});
