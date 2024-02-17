import { TextInput, View, StyleSheet } from "react-native";

export default function Search({ text, setText }) {
  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setText(text)}
        value={text}
        placeholder="Search Movies By Text"
        placeholderTextColor={"black"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  
  input: {
    
    height: 40,
    margin: 12,
    borderWidth: 3,
    padding: 10,
  },
});