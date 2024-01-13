import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  Animated,
  StyleSheet,
  Image,
  TextInput,
  Platform,
  TouchableOpacity,
  KeyboardAvoidingView,
  Easing,
  Keyboard,
} from "react-native";

export default function SignIn() {
  const [keyboardOpen, setKeyboardOpen] = useState(false);
  const imageSize = useRef(new Animated.Value(300)).current;
  const imageWidth = useRef(new Animated.Value(500)).current;
  const marginTop = useRef(new Animated.Value(50)).current;
  const marginBottom = useRef(new Animated.Value(50)).current;

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardOpen(true);
      }
    );
  
    const keyboardWillHideListener = Keyboard.addListener(
      "keyboardWillHide",
      () => {
        setKeyboardOpen(false);
        const toValue = keyboardOpen ? 300 : 150;
  
        Animated.parallel([
          Animated.timing(imageSize, {
            toValue,
            duration: 250,
            easing: Easing.ease,
            useNativeDriver: false,
          }),
          Animated.timing(imageWidth, {
            toValue: keyboardOpen ? 500 : 300,
            duration: 250,
            easing: Easing.ease,
            useNativeDriver: false,
          }),
          Animated.timing(marginTop, {
            toValue: keyboardOpen ? 50 : 0,
            duration: 250,
            easing: Easing.ease,
            useNativeDriver: false,
          }),
          Animated.timing(marginBottom, {
            toValue: keyboardOpen ? 50 : 0,
            duration: 250,
            easing: Easing.ease,
            useNativeDriver: false,
          }),
        ]).start();
      }
    );
  
    return () => {
      keyboardDidShowListener.remove();
      keyboardWillHideListener.remove();
    };
  }, [keyboardOpen, imageSize, imageWidth, marginTop, marginBottom]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <View style={styles.container}>
        <Text style={styles.text}>Controle de Estoque</Text>
        <Animated.Image
          source={require("../../../assets/controle-de-estoque.jpg")}
          style={[
            styles.image,
            { height: imageSize, width: imageWidth, marginTop, marginBottom },
          ]}
        />
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
          placeholderTextColor="#999"
          textAlign="center"
        />
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          secureTextEntry={true}
          placeholderTextColor="#999"
          textAlign="center"
        />

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}



const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#30333A",
  },
  text: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#fff",
  },
  image: {
    width: 200,
    height: 300,
    resizeMode: "contain",
    marginBottom: 50,
    marginTop: 50,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingLeft: 10,
    marginBottom: 10,
    width: 280,
    borderRadius: 5,
  },
  loginButton: {
    width: 240,
    backgroundColor: '#999', 
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});