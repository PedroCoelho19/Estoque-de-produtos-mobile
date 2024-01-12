
import React, { useEffect, useRef, useState } from "react";

import { View, Text, Animated, StyleSheet, Image, TextInput, Platform, TouchableOpacity, KeyboardAvoidingView, Easing, Keyboard } from "react-native";


export default function SignIn() {
  const [logo] =  useState(new Animated.ValueXY({x: 300, y: 200}));
  const altAnimada = useRef(new Animated.Value(28)).current;
  const [opacityLogo] =  useState(new Animated.Value(1));
  const [opacity] =  useState(new Animated.Value(0));

  useEffect(() => {
   Keyboard.addListener('keyboardDidShow', keyboardDidShow);
    Keyboard.addListener('keyboardDidHide', keyboardDidHide); 

   function startAnimation() {
  setTimeout(() => {
    Animated.parallel([
      Animated.timing(altAnimada, {
        toValue: 45,
        duration: 300,
        delay: 10,
        useNativeDriver: false,
        easing: Easing.linear,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 800,
        delay: 15,
        useNativeDriver: false,
        easing: Easing.linear,
      }),
    ]).start();
  }, 1000);
}

    startAnimation()
    return () => {
      Keyboard.removeAllListeners('keyboardDidShow')
    }

  }, []);

     //Teclado Aberto
     function keyboardDidShow () {
      Animated.parallel([
        Animated.timing(logo.y, {
          toValue: (Platform.OS === 'android' ? 150 : 150),
          duration: 0,
          useNativeDriver:false
        }),
        Animated.timing(logo.x, {
          toValue: (Platform.OS === 'android' ? 200 : 200),
          duration: 0,
          useNativeDriver:false
        }),
        Animated.timing(opacityLogo, {
          toValue: 0,
          duration: 150,
          useNativeDriver:true
        }),
    ]).start();
    }
  
    //Teclado Fechou
    function keyboardDidHide () {
      Animated.parallel([
        Animated.timing(logo.y, {
          toValue: 200,
          duration: 150,
          useNativeDriver:false
        }),
        Animated.timing(logo.x, {
          toValue: 300,
          duration: 150,
          useNativeDriver:false
        })
      ]).start();
    }

  let porcentagemAltura = altAnimada.interpolate({
      inputRange: [50, 100],
      outputRange: ['5%', '100%'],
  })
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
    <View style={styles.container}>
      <Text style={styles.text}>Controle de Estoque</Text>
      <Image
        source={require("../../../assets/controle-de-estoque.jpg")}
        style={[styles.image, {width: logo.x, height: logo.y}]}
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

      <TouchableOpacity  style={styles.loginButton}>
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
    resizeMode: "contain",
    marginBottom: 20,
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