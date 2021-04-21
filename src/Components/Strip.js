import React, { Component } from 'react';
import { View } from 'react-native';
import moment from 'moment';
import CalendarStrip from 'react-native-calendar-strip';
import g from '../../Global';


export default class Strip extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <CalendarStrip
                    calendarAnimation={{ type: 'sequence', duration: 30 }}
                    daySelectionAnimation={{
                        type: 'border',
                        duration: 200,
                        borderWidth: 1,
                        borderHighlightColor: g.yellow,
                    }}
                    style={{
                        height: 80,
                        paddingTop: 10,
                        paddingBottom: 10,
                        marginTop: 10, width: '98%',
                        elevation: 3,
                        backgroundColor: '#fff',
                        borderRadius: 7,
                        marginLeft: 'auto',
                        marginRight: 'auto',marginBottom:5
                    }}
                    selectedDate={moment()}
                    calendarHeaderStyle={{ color: g.yellow }}
                    scrollable
                    scrollerPaging
                    dateNumberStyle={{ color: 'grey' }}
                    dateNameStyle={{ color: 'grey' }}
                    highlightDateNumberStyle={{ color: g.yellow }}
                    highlightDateNameStyle={{ color: g.yellow }}
                    disabledDateNameStyle={{ color: 'grey' }}
                    disabledDateNumberStyle={{ color: 'grey' }}
                    //iconLeft={require('../Images/list.png')}
                    iconContainer={{ flex: 0.1, }}
                    onDateSelected={(date) => this.props.searchCalendar(moment(date._d).format('DD-MMMM-YYYY'))}
                />
            </View>
        );
    }
}
