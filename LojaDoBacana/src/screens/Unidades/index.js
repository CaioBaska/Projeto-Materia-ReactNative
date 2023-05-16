import React, { useState } from 'react';
import { styles } from './styles'
import {
    View,
    Text,
    StatusBar,
    TouchableHighlight,
    Image
} from 'react-native';
import { Button } from '../../components/Button';

import { FontAwesome5 } from '@expo/vector-icons';

export function Unidades({ navigation, route }) {
    const { Nome } = route.params;

    function Leave() {
        navigation.navigate('Home')
    }

    return (
        <View style={styles.container}>
            <StatusBar />
            <View style={styles.header}>
                <Text style={styles.title}>Olá {Nome}</Text>
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
            <Image
                source={require('../../assets/images/banner.gif')}
                resizeMode='contain'
                style={styles.gif}
            />
            <Image
                source={require('../../assets/images/post.png')}
                resizeMode='contain'
                style={styles.post}
            />
            <TouchableHighlight 
                style={styles.containerButton}
                onPress={() => navigation.navigate('Produtos', {Nome: Nome})}
            >
                <Text style={styles.button}>
                    Compre já
                </Text>
            </TouchableHighlight>
        </View>
    )
}