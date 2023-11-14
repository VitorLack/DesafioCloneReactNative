import { styles1 } from "./styles1";
import { Image, Text, TouchableOpacity} from 'react-native';
import logoCaixa from "./logoCaixa.png"
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <LinearGradient style={styles1.container}
          colors={["#0063ae", "#00a5db"]}
          start={[0, 0.7]}
        >
        <Image source={logoCaixa} style={styles1.image}></Image>   
        <TouchableOpacity style={styles1.button}>
          <Text style={styles1.buttonText}>Entrar no CAIXA Tem</Text>
        </TouchableOpacity>
        <Text style={styles1.ajuda}>Preciso de ajuda</Text>
        <Text style={styles1.mostrar}>☑︎  Não mostrar novamente</Text>
        <Text style={styles1.versao}>V1.85.3</Text>
    </LinearGradient>
  );
}

