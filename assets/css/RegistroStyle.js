import { StyleSheet } from "react-native";



export const css = StyleSheet.create({
    
    
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal:'4%',
    },
    
    darkbg:{  //KeyboardAvoidingView (não deixa o teclado cobrir os componentes)
        marginTop: 5,  
    },

    logo__image:{ //Imagem do logo 
        bottom:'20%',
        alignSelf: "center",
        marginBottom: '15%'
    },

    text_form:{  //Texto em cima dos inputs "Email / Senha etc"
        
        fontSize: 20,
        marginBottom: 3, 
        alignSelf: "flex-start",
        left: 3
        
    },

    login__form:{ // Formulario como um todo (Texto, inputs e botão)
        bottom:'7%',
        alignItems: "center",
        width:"100%"

    },
    login__input:{ // Inputs dos formularios
        width: '100%',
        borderWidth: 2, // Adiciona a borda para todas as direções
        borderColor: 'rgba(110, 216, 203, 0.75)',
        borderRadius: 15,
        fontSize:  19,
        padding: 7,
        marginBottom: 10,
        fontWeight: 'bold',
        color: "#fff",
        backgroundColor: 'rgba(110, 216, 203, 0.50)'
    
    },
    login__buttonText:{ // Texto do botão de entrar
        fontWeight:'bold',
        fontSize: 22,
        color: "#fff"

    },
  // FIM DA PAGINA DE LOGIN


  // INICIO DA PAGINA DE CADASTRO

 
    cadastrar__button: { //Botão de cadastrar 
      top: '5%',
      padding: 12,
      backgroundColor: '#6ED8CB',
      alignSelf: 'center',
      borderRadius: 15,
  },
})