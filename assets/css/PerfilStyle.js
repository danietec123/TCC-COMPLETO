import { StyleSheet } from "react-native";

export const css = StyleSheet.create({


    login__imageback:{
        width:'100%',
        height: '100%',
        resizeMode: 'cover'
    },

    buttonsup:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: '8%',
      

    },

    containerPerfil: {
        flex: 1,
        bottom: '2%'
        
       },

       
      foto_perfil: {
        width: 100,
        height: 100,
        borderRadius: 50,
        alignSelf: 'center'
      },


      nome_perfil: {
        alignSelf: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000',

      },


      row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: '5%',
        bottom: '25%'
       
      },

      medidas_button: {
        padding: 6,
        backgroundColor: '#fff',
        borderRadius: 15,
      },

      medidas_texto: {
        color: "#000",
        fontWeight: 'bold',
        fontSize: 18
      },

      viewButtom:{
        position:"absolute",
        right:50,
        bottom:70
      },
})