import React, {useState} from 'react';
import {styles} from './styles'
import { 
    View, 
    Text, 
    Image, 
    Modal,
    KeyboardAvoidingView,
    TouchableHighlight
} from 'react-native';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { FontAwesome5 } from '@expo/vector-icons';

export function Login({navigation}){
    const [modalActive, setModalActive] = useState(false)
    const [LoginUser, setLoginUser] = useState('')
    const [SenhaUser, setSenhaUser] = useState('')
    const [Info, setInfo] = useState('')
    const [InfoCadastro, setInfoCadastro] = useState('')

    let Lista = [["Joao", "abc1r1"], ["Jose", "fy63u*"], ["MaLu", "th678"], ["Luck", "lsji48se"], ["Hansol", "stwr478"]]

    //Novo Usuário
    const [newUser, setNewUser] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    function Leave() {
        navigation.navigate('Home')
    }

    function VerificaLogin() {

        if(newUser!='' && newPassword!=''){
            Lista.push([newUser, newPassword]);
        }
        for(let i = 0; i < Lista.length; i++){
            if(Lista[i][0] == LoginUser && Lista[i][1] == SenhaUser){
                setInfo('')
                navigation.navigate('Unidades',{Nome: LoginUser})
                break
            } else if(LoginUser == '' || SenhaUser == ''){
                setInfo('Por favor preencha todos os campos!')
            } else if(Lista[i][0] != LoginUser && Lista[i][1] != SenhaUser){
                setInfo('Usuário e/ou senha incorreto(s)')
            }
        }
    }

    function VerificaCadastro(){
        if(confirmPassword != newPassword){
            setInfoCadastro('As senhas não coincidem')
        } else if(newUser != '' && newPassword != '' && confirmPassword != ''){
            setInfoCadastro('')
            setModalActive(false)
        } else {
            setInfoCadastro('Por favor preencha todos os campos!')
        }
    }

    return(
        <View style={styles.container}>
            <Image 
                style={styles.image}
                resizeMode='contain'
                source={require('../../assets/images/loja_do_bacana_1.png')} 
            />
            <Text style={styles.Info}>
                {Info}
            </Text>
            <View style={styles.inputContainer}>
                <Input 
                    hasIcon
                    placeholder='Login'
                    name='user-alt'
                    onChangeText={x => setLoginUser(x)}
                />
                <Input 
                    hasIcon
                    placeholder='Senha'
                    name='key'
                    onChangeText={x => setSenhaUser(x)}
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button 
                    title='Entrar'
                    onPress={VerificaLogin}
                />
                <Button 
                    title='Crie nova conta'
                    onPress={() => setModalActive(true)}
                />
            </View>
            <Modal 
                onRequestClose={()=> setModalActive(false)} 
                animationType="fade"
                visible={modalActive}
            >
                <KeyboardAvoidingView style={styles.modalView}>
                <TouchableHighlight
                    onPress={()=> setModalActive(false)}
                >
                    <FontAwesome5
                        name='door-open'
                        size={25}
                    />
                </TouchableHighlight>
                    <Text style={styles.title}>
                        Crie sua conta 
                    </Text>
                    <View style={styles.separator}/>
                    <Input 
                        hasIcon='false'
                        placeholder='Nome'                        
                    />
                    <Input 
                        hasIcon='false'
                        placeholder='Login'
                        onChangeText={x => setNewUser(x)}
                    />
                    <Input 
                        hasIcon='false'
                        placeholder='Senha'
                        onChangeText={x => setNewPassword(x)}
                    />
                    <Input 
                        hasIcon='false'
                        placeholder='Confirmar Senha'
                        onChangeText={x => setConfirmPassword(x)}
                    />
                    <Text style={styles.Info}>
                        {InfoCadastro}
                    </Text>
                    <View style={styles.buttonContainer}>
                        <Button 
                            title='Confirmar'
                            onPress={VerificaCadastro}
                        />
                    </View>
                </KeyboardAvoidingView>
            </Modal>
        </View>
    )
}