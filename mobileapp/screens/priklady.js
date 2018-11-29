import React from 'react';
import {
    Image,
    Button,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };

    render() {
        return (
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                <View>

                    <Text style={styles.textWhite}>Priklady</Text>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => this.props.navigation.navigate('menu')}
                    >
                        <Text adjustsFontSizeToFit style={styles.buttonText}> Bitový posun </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => this.props.navigation.navigate('menu')}
                    >
                        <Text adjustsFontSizeToFit style={styles.buttonText}> Číselné prevody </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => this.props.navigation.navigate('menu')}
                    >
                        <Text adjustsFontSizeToFit style={styles.buttonText}> Počítačové siete </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => this.props.navigation.navigate('menu')}
                    >
                        <Text adjustsFontSizeToFit style={styles.buttonText}> Algoritmy a programovanie </Text>
                    </TouchableOpacity>

                </View>
            </ScrollView>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#222',
    },
    textWhite:{
        alignSelf: 'center',
        color: '#FFF',
        fontSize: 40,
        marginTop: 40,
    },

    contentContainer: {
        alignItems: 'center',
    },
    button: {
        color: '#ffffff',
        fontSize: 30,
        backgroundColor: '#0b0b55',
        marginTop: 7,
        width: 280,
        height: 100,
        borderColor: '#1312bb',
        borderWidth: 2,

    },
    buttonText: {
        fontSize: 37,
        textAlignVertical: 'center',
        textAlign: 'center',
        color: '#ffffff',
    },
});

