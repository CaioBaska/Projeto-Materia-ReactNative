import { Input } from '../../components/Input';
import React, { useState } from 'react';
import { styles } from './styles'
import {
    View,
    Text,
    Image,
    TouchableHighlight,
    Modal,
    Switch,  
    StatusBar,
    TextInput
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export function Busca({navigation, route}) {
    const { Nome } = route.params;
    const [checked, setChecked] = useState(false)

    function Leave() {
        navigation.navigate('Home')
    }

    return (
        <View style={styles.container}>
            <StatusBar />
            <View style={styles.header}>
                <Text style={styles.title}>Usuário: {Nome}</Text>
                <TouchableHighlight
                    onPress={Leave}
                >
                    <FontAwesome5
                        name='door-open'
                        size={25}
                    />
                </TouchableHighlight>
            </View>
            <View style={styles.separator} />
            <View style={styles.containerPrincipal}>
            <View style={styles.containerPrincipal}>
                <Text style={styles.txtLocal}>Pesquise pelo produto</Text>
            </View>
            <Input 
                        hasIcon='false'
                        placeholder='Buscar'                        
                    />
            </View>

            <TouchableHighlight>
                <Image
                    resizeMode='cover'
                    style={styles.image}
                    source={require('../../assets/images/produto1.jpg')}
                />
            </TouchableHighlight>
            <TouchableHighlight>
                <Image
                    resizeMode='cover'
                    style={styles.image}
                    source={require('../../assets/images/produto4.jpg')}
                />
            </TouchableHighlight>
            <TouchableHighlight>
                <Image
                    resizeMode='cover'
                    style={styles.image}
                    source={require('../../assets/images/produto2.jpg')}
                />
            </TouchableHighlight>
            <TouchableHighlight>
                <Image
                    resizeMode='cover'
                    style={styles.image}
                    source={require('../../assets/images/produto5.jpg')}
                />
            </TouchableHighlight>

            
        </View>
    )
}
