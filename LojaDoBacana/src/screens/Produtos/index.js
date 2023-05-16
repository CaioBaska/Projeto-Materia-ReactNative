import React, { useState } from 'react';
import { styles } from './styles'
import {
    View,
    Text,
    Image,
    TouchableHighlight,
    Modal,
    Switch,  
    StatusBar
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export function Produtos({navigation, route}) {
    const { Nome } = route.params;
    const [checked, setChecked] = useState(false)
    const [Produto, setProduto] = useState('')

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
                <Text style={styles.txtLocal}>Escolha o tipo de produto</Text>
            </View>
            <View style={styles.switchContainer}>
                <Switch value={checked}
                    onValueChange={() => setChecked(!checked)}>
                </Switch>

                {checked == false ?
                    <Text style={styles.txtLocal}> Entrega - Você recebe onde estiver</Text>
                    :
                    <Text style={styles.txtLocal}> Retirada - Você retira no local</Text>
                }
            </View>
            <TouchableHighlight
                onPress={()=>navigation.navigate('Busca', {Nome: Nome})}
            >
                <Image
                    resizeMode='cover'
                    style={styles.image}
                    source={require('../../assets/images/tipoproduto1.jpg')}
                />
            </TouchableHighlight>
            <TouchableHighlight
                 onPress={()=>navigation.navigate('Busca', {Nome: Nome})}
            >
                <Image
                    resizeMode='cover'
                    style={styles.image}
                    source={require('../../assets/images/tipoproduto4.png')}
                />
            </TouchableHighlight>
            <TouchableHighlight
                 onPress={()=>navigation.navigate('Busca', {Nome: Nome})}
            >
                <Image
                    resizeMode='cover'
                    style={styles.image}
                    source={require('../../assets/images/tipoproduto2.jpg')}
                />
            </TouchableHighlight>
            <TouchableHighlight
                 onPress={()=>navigation.navigate('Busca', {Nome: Nome})}
            >
                <Image
                    resizeMode='cover'
                    style={styles.image}
                    source={require('../../assets/images/tipoproduto5.jpg')}
                />
            </TouchableHighlight>
        </View>
    )
}
