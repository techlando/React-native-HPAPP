
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const printer = (<Icon name="print" size={40} color='black'/>)
const print = (<Icon name="print" size={50} color='dodgerblue'/>)
const supplies = (<Icon name="pencil" size={40} color='black'/>)
const camera = (<Icon name="camera" size={40} color='black'/>)
const shortcuts = (<Icon name="paperclip" size={40} color='black'/>)
const copy = (<Icon name="paperclip" size={40} color='black'/>)
const help = (<Icon name="envelope" size={40} color='black'/>)
const file = (<Icon name="file" size={40} color='black'/>)
const user = (<Icon name="user" size={40} color='black'/>)
const setting = (<Icon name="gear" size={40} color='black'/>)
const home = (<Icon name="home" size={40} color='black'/>)


export default function App() {
  return (
  
    <View style={styles.container}>
    <SafeAreaView style={{position: 'absolute', top: 20, }}>
     <Text style={{fontSize: 20, fontWeight: 'bold'}}>HP Smart</Text>
     </SafeAreaView>
      <View style={styles.addContainer}>
        
      <Text style={styles.addPrinter}>Add Your Printer</Text>
      <View>{print}</View>
      
      </View>
      <View style={styles.optionContainer}>
      <View style={styles.option}>
        <Text>Get Supplies</Text>
        <View>{supplies}</View>
      </View>
      <View style={styles.option}>
        <Text>Printables</Text>
        <View>{printer}</View>
      </View>
      <View style={styles.option}>
        <Text>Shortcuts</Text>
        <View>{shortcuts}</View>
      </View>
      <View style={styles.option}>
        <Text>Print Photos</Text>
        <View>{printer}</View>
      </View>
      <View style={styles.option}>
        <Text>Print Documents</Text>
        <View>{file}</View>
      </View>
      <View style={styles.option}>
        <Text>Camera Scan</Text>
        <View>{camera}</View>
      </View>
      <View style={styles.option}>
        <Text>Help & Support</Text>
        <View>{help}</View>
      </View>
      <View style={styles.option}>
        <Text>Printer Scan</Text>
        <View>{copy}</View>
      </View>
      </View>
      <View style={styles.nav}>
        <Text>Home</Text>
        <View>{home}</View>
      </View>
      <View style={styles.nav}>
        <Text>Scan</Text>
        <View>{shortcuts}</View>
      </View>
      <View style={styles.nav}>
        <Text>View & Print</Text>
        <View>{printer}</View>
      </View>
      <View style={styles.nav}>
        <Text>Settings</Text>
        <View>{setting}</View>
      </View>
      <View style={styles.nav}>
        <Text>Account</Text>
        <View>{user}</View>
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  addContainer: {
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    top: '10%', 
    height: "25%", 
    width: '100%', 
    backgroundColor: '#f5f5f5', 
    position: 'absolute', 
  },
  addPrinter: {
    overflow: 'hidden',
    borderRadius: 10,
    justifyContent: 'center',
    textAlign: 'center',
    top: '10%', 
    height: "50%", 
    width: '70%', 
    backgroundColor: 'white', 
    position: 'absolute',
  },
  container: {
    backgroundColor: 'dodgerblue', 
       flex: 1, 
       flexDirection: 'row', 
       justifyContent: 'center', 
       alignItems: 'flex-end', 
       flexWrap: 'nowrap', 
       alignContent: 'flex-end', 
       flexShrink: 1,
  },
  nav: {
    backgroundColor: 'white', 
    width:100, 
    height: 100, 
    justifyContent: 'center', 
    alignItems: 'center', 
    flexShrink: 1
  },
  option: {
    margin: 10, 
    height: '20%', 
    width: '35%', 
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: 'dodgerblue', 
    borderColor: 'black', 
    borderRadius: 15 
  },
  optionContainer: {
    position: 'absolute', flex: 1, flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-evenly', alignContent: 'center', top: '30%', backgroundColor: 'white', width: '100%', height: '60%'
  },
});
