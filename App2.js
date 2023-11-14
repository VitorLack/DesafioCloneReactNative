import { styles } from "./styles";
import { TouchableOpacity, Image, Text, View,TextInput } from 'react-native';
import logoCaixa from "./logoCaixaLogin.png"
import boneco from "./boneco.png"
import { FontAwesome } from '@expo/vector-icons'; 

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={logoCaixa} style={styles.logo}/>
      <Text style={styles.title}>Informe o seu CPF e clique em "Próximo"{'\n'}para continuar:</Text>
      <View style={styles.bonecoText}>
        <Image source={boneco}/>
        <Text style={styles.text}>CPF</Text>
      </View>
      <TextInput style={styles.input}/>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Próximo</Text>
      </TouchableOpacity>
      <Text style={styles.novo}>É novo por aqui?</Text>
      <Text style={styles.footer}>Cadastre-se e abra sua conta{'\n'}</Text>
      <Text style={styles.footer}>{'\n'}<FontAwesome name="question-circle" size={24} color="blue" />  Preciso de ajuda</Text>  
    </View>
  );
}

