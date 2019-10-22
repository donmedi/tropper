import React from 'react';
import {
    StyleSheet,
    TouchableWithoutFeedback,
    Image,
    View,
    Text,
    Alert,
    Button
} from 'react-native';




class HomeScreen extends React.Component {
    render() {
        return (
            <>
                <View style={{flexDirection: 'column', justifyContent: 'flex-start', height: '100%'}}>
                    <Image source={require('../../Images/mainImage.png')}
                           style={{width: '100%', height: 300, resizeMode: 'contain'}}/>

                    <View style={{marginTop: 30}}>
                        <Text style={{textAlign: 'center', fontSize: 20, fontWeight: '400'}}>Network Better</Text>
                        <Text style={{
                            marginTop: 20,
                            textAlign: 'center',
                            fontSize: 17,
                             fontWeight: '400',
                            color: '#707070'
                        }}>
                            Share your cards seamlessly and easily without worrying about running out of copies
                        </Text>
                    </View>

                    <View style={{position: 'absolute', bottom: 5, width: '100%'}}>
                        <TouchableWithoutFeedback style={styles.buttons}
                                                  onPress={() => this.props.navigation.navigate('YourCard')}>

                            <Text style={styles.btnText}> Sign up</Text>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback style={styles.buttons} onPress={() => Alert.alert('login')}>
                            <Text style={styles.btnText1}>Login</Text>
                        </TouchableWithoutFeedback>
                    </View>

                </View>

            </>
        );
    }
};

const styles = StyleSheet.create({
    buttons:{
        width: '100%',

    },
    btnText:{
        textAlign: 'center',
        color: '#fff',
        backgroundColor: '#FF0000',
        fontSize: 20,
        fontWeight: '400',
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 20,
        marginRight: 16,
        marginLeft: 16
    },
    btnText1:{
        textAlign: 'center',
        color: '#000',
        backgroundColor: '#fff',
        fontSize: 20,
        fontWeight: '400',
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 20,
        margin: 16,
        // marginRight: 16,
        // marginLeft: 16,
        shadowColor: '#000',
        shadowOffset: {width: 12, height: 12},
        shadowOpacity:0.8,
        shadowRadius: 4,
        elevation: 2
    }
});

export default HomeScreen;