import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import g from '../../Global';
import { Icon } from 'native-base';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <>
                <View style=
                    {[styles.viewInput, {
                        flexDirection:'row',
                        backgroundColor: '#fff',
                        borderWidth:1,
                        borderRadius:25,borderColor:g.yellow,
                        marginTop: this.props.top ? this.props.top : null,
                        marginBottom: this.props.bottom ? this.props.bottom : null,
                    }]}>
                   
                        <Icon name={'search1'}
                            type={'AntDesign'}
                            style={{
                                fontSize: this.props.size ? this.props.size : 22,
                                color: g.yellow
                            }} />
                        
                    <TextInput
                        ref={this.props.ref}
                        autoFocus={this.props.foucs == true ? true : false}
                        onChangeText={this.props.onchange}
                        keyboardType={this.props.keyboardType ? this.props.keyboardType : null}
                        autoCapitalize='none'
                        editable={this.props.editable == false ? false : true}
                        secureTextEntry={this.props.secure ? this.props.secure : false}
                        autoCorrect={false}
                        placeholder={this.props.placeholder ? this.props.placeholder : null}
                        placeholderTextColor={g.gray}
                        style={[styles.input, {
                            textAlign: 'left'
                        }]}
                        defaultValue={this.props.value}
                        blurOnSubmit={false}
                    />
                  
                </View>
            </>
        );
    }
}

const styles = StyleSheet.create({
    input: {
        textAlign: 'left',
        fontSize: 16,
        padding: 4,
        paddingTop: 10,
        fontFamily: 'Poppins-Regular',
        width: wp('70%'),
        color: '#000'

    },
    viewInput: {
        
        //justifyContent: 'space-between',
        paddingHorizontal: 10,
        width: wp('90%'),
        textAlign: 'left',
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
});

export default SearchBar;
