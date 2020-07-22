import React from 'react';
import { StyleSheet, Text, View,TextInput , TouchableOpacity} from 'react-native';
import AppHeader from '../AppHeader';

export default class WriteScreen extends React.Component
{

constructor()
{
    super();

    this.state = 
    {
        Titletext:'',
        Storytext:''
    }
}



    render()
    {
        return(
            <View style = {{width:'100%', height:'100%'}}
            >
               <AppHeader/>


              <Text style = {styles.text}>WELCOME TO WRITE SCREEN</Text>


           
            </View>
        )
    }
}


const styles = StyleSheet.create({
    text:{

        
        fontSize:30,
        marginTop:50,
        alignSelf:'center',
        color:'#B71C1C'
        
        
    },
    
})
