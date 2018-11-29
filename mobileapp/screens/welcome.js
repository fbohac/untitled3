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
import menu from "./menu";

export default class welcome extends React.Component {
    static navigationOptions = {
        header: null,
    };

    render() {
        return (
            <View style={styles.container} contentContainerStyle={styles.contentContainer}>
                <Image
                    source={  require('../assets/images/uvodMA.png')}
                    style={styles.welcomeImage}
                />
                <Text style={styles.textWhite}>Do aplikácie prejdite tlačidlom</Text>
                <Button
                    title="Enter application"
                    onPress={() => this.props.navigation.navigate('menu')}
                />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#222',
        justifyContent: 'center',
    },
    textWhite:{
        color: '#FFF',
    },

    welcomeImage: {
        flex: 1,
        width: undefined,
        height: undefined,
        resizeMode: 'contain',
    },
    contentContainer: {
        alignItems: 'center',
    },

});
