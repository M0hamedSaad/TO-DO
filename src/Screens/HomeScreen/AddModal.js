import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native';
import Modal from 'react-native-modalbox';
import g from '../../../Global';
import { Icon } from 'native-base';
import style from './style';
import moment from 'moment';
import DatePicker from '../../Packages/react-native-date-picker'
import Toast from 'react-native-easy-toast'

var FormatDate = ''

export default class AddModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: true,
            showClender: false,
            FormatDate: 'Set date and time',
            text: '',
        };
    }

    render() {
        return (
            <>
                <Modal
                    isOpen={this.state.modal}
                    swipeToClose={true}
                    backButtonClose={true}
                    coverScreen={true}
                    style={style.modalStyle}
                    onOpened={() => {
                        FormatDate=''
                    }}
                    onClosed={() => {
                        this.setState({ modal: false })
                        this.props.closeModal()
                    }}>

                    <View>
                        <View style={style.modalContainer}>
                            <View style={style.swipeModalDash} />
                            <ScrollView
                                nestedScrollEnabled
                                showsVerticalScrollIndicator={false} >

                                <TouchableOpacity activeOpacity={1} >

                                    <Text style={style.BoldTextModal}>
                                        {'Create task'}
                                    </Text>
                                    <Text style={style.lightText2}>
                                        {'Date/Time'}
                                    </Text>

                                    <TouchableOpacity
                                        activeOpacity={1}
                                        onPress={() => {
                                            this.setState({
                                                showClender: !this.state.showClender
                                            })
                                        }}>
                                        <View style={style.dropPicker}>
                                            <Text>{this.state.FormatDate}</Text>
                                            <Icon name='calendar-outline'
                                                type='Ionicons'
                                                style={style.calendarIcon} />
                                        </View>
                                    </TouchableOpacity>

                                    {this.state.showClender ?
                                        <View style={style.datePickerCenter}>
                                            <DatePicker
                                                date={new Date()}
                                                mode='datetime'
                                                timeZoneOffsetInMinutes={120}
                                                minimumDate={new Date(moment().format('YYYY-MM-DD'))}
                                                onDateChange={async (date) => {
                                                    var date = new Date(date)
                                                    FormatDate = moment(date).format('DD MMMM YYYY, hh:mm a')
                                                }}
                                            />
                                            <TouchableOpacity
                                                style={style.setButton}
                                                onPress={() => {
                                                    this.setState({
                                                        FormatDate: FormatDate != '' ? FormatDate : moment().format('DD MMMM YYYY, hh:mm a'),
                                                        showClender: false
                                                    })
                                                }}>
                                                <Text style={style.BoldText}>SET</Text>
                                            </TouchableOpacity>
                                        </View>
                                        : null}
                                </TouchableOpacity>
                                <Text style={style.lightText2}>
                                    {'Description'}
                                </Text>
                                <TextInput
                                    multiline={true}
                                    placeholder={'Description ...'}
                                    placeholderTextColor={'#000'}
                                    onChangeText={(text) => {
                                        this.setState({
                                            text: text,
                                        });
                                    }}
                                    style={style.input}
                                    value={this.state.text}
                                />

                                <TouchableOpacity
                                    style={[style.setButton, style.createBtn]}
                                    onPress={() => {
                                        if (this.state.FormatDate == 'Set date and time')
                                            this.toast.show('First, select date and time.', 2000);
                                        else if (this.state.text == '')
                                            this.toast.show('Fill description of  your task.', 2000);
                                        else {
                                            console.log(moment(FormatDate).format('hh:mm a'));
                                            this.props.createTask({
                                                description: this.state.text,
                                                time: moment(this.state.FormatDate).format('hh:mm a'),
                                                date: moment(this.state.FormatDate).format('DD-MMMM-YYYY'),
                                            })
                                            this.props.closeModal()
                                            this.setState({ modal: false })
                                        }

                                    }}>
                                    <Text style={style.BoldText}>CREATE TASK</Text>
                                </TouchableOpacity>
                                <Toast
                                    ref={(toast) => this.toast = toast}
                                    style={{ backgroundColor: g.yellow, maxWidth: '85%', }}
                                    positionValue='300'
                                    fadeInDuration={120}
                                    fadeOutDuration={1000}
                                    textStyle={{ color: '#fff', fontSize: 14, }}
                                />
                            </ScrollView>

                        </View>

                    </View>

                </Modal>
            </>
        );
    }
}
