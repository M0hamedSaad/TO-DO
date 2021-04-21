import React, { Component } from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import g from '../../Global';
import AddModal from '../Screens/HomeScreen/AddModal';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openModal: false,
        };
    }
    closeModal = () => {
        this.setState({ openModal: false, })
    }
    render() {
        return (
            <>
                <View style={styles.container}>
                    <TouchableOpacity
                        onPress={() => {this.props.changeTab(false) }}>

                        <Image style={styles.listIcon} source={require('../Images/list.png')} />
                    </TouchableOpacity>
                    <View />

                    <TouchableOpacity
                        onPress={() => { this.props.changeTab(true) }}>
                        <Image source={require('../Images/search.png')}
                            style={styles.searchIcon}
                        />
                    </TouchableOpacity>


                </View>
                <TouchableOpacity
                    onPress={() => { this.setState({ openModal: true }) }}
                    style={styles.plusIcon}>
                    <Image style={styles.plusIconSize}
                        source={require('../Images/plus.png')} />
                </TouchableOpacity>

                {this.state.openModal ?
                    <AddModal closeModal={this.closeModal} createTask={this.props.createTask} /> : null}


            </>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        width: '100%',
        paddingHorizontal: 10,
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        elevation: 5, alignItems: 'center'
    },
    listIcon: { width: 32, height: 32 },
    plusIcon: {
        position: 'absolute',
        width: 48,
        height: 48,
        bottom: '4%', zIndex: 1,
        elevation: 20,
        right: g.windowWidth / 2 - 24
    },
    plusIconSize: { width: 48, height: 48 },
    searchIcon: { width: 32, height: 32 }


});
export default withNavigation(Footer);
