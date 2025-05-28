import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function index() {
  const cell = () => {
    return (
      <TouchableOpacity style={styles.square}>
        <Text style={styles.symbol}>X</Text>
      </TouchableOpacity>
    )
  }

  return (
    <View style = {styles.container}>
      <Text style = {styles.title}>Jogo da Velha</Text>
      <Text style = {styles.status} >Vencedor</Text>

      <View style = {styles.board}>
        <View style = {styles.row}>
          {cell()}
          {cell()}
          {cell()}
        </View>
        <View style = {styles.row}>
          {cell()}
          {cell()}
          {cell()}
        </View>
        <View style = {styles.row}>
          {cell()}
          {cell()}
          {cell()}
        </View>
      </View>

    <TouchableOpacity style = {styles.resetButton}>
      <Text style = {styles.resetText}>Reiniciar Jogo</Text>
    </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "cyan",
  },
  title: {
    fontSize: 22,
    fontWeight: "light",
    marginBottom: 20,
  },
  status: {
    fontSize: 17,
    marginBottom: 20,
  },
  board: {
    marginBottom: 20
  },
  row: {
    flexDirection: 'row'
  },
  square: {
    width: 80,
    height: 80,
    borderWidth: 2,
    borderColor: 'purple',
    alignItems: 'center',
    justifyContent: "center",
    backgroundColor: '#FFFFFF',
  },
  symbol: {
    fontSize: 36,
    fontWeight: 'bold'
  },
  resetButton: {
    padding: 10,
    backgroundColor: '#A01A7D',
    borderRadius: 5
  },
  resetText: {
    color: '#FFFFFF',
    fontSize: 16,
  }
});