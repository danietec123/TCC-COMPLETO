import React from 'react';
import { View, Image, Text, Button, StyleSheet, StatusBar,ImageBackground, TouchableOpacity } from 'react-native';
import Botaomenu,{Aa}  from './componentes/Botaomenu';
import { css } from '../assets/css/PerfilStyle';
import {Entypo, MaterialIcons} from '@expo/vector-icons'




 export default  Perfil = ({navigation}) => {
  return (

    <ImageBackground style={css.login__imageback}  /*imagem da nuvem*/
    source={require('../assets/img/fundonuvem.png')}>

    <View style={css.containerPerfil}>
      <View>
        <View style={css.buttonsup}>
        <MaterialIcons name="settings" size={26} color="#fff"/>
        <Entypo name="bar-graph" size={26} color="#fff"/>
        </View>
        <Image source={require('../assets/img/icon.png')} style={css.foto_perfil} />
      </View>
      <Text style={css.nome_perfil}>Ana</Text>
      <View style={css.row}>

      <TouchableOpacity style={css.medidas_button} onPress={() => navigation.navigate('TelaComprimento')}>
      <Text style={css.medidas_texto}> Peso + </Text>
        </TouchableOpacity>

        <TouchableOpacity style={css.medidas_button} onPress={() => navigation.navigate('TelaComprimento')}>
          <Text style={css.medidas_texto}> Altura + </Text>
        </TouchableOpacity>

      </View>

     

      <View style={css.viewButtom}>
        {/* coloca a propriedade de navegação dentro do botão */}
        <Botaomenu style={css.botao_menu} navigation={navigation} /> 
      </View>

        
        </View>

      </ImageBackground>
       
        );
};








