import React, { Component } from 'react';
import {
    View, Text, ScrollView,
    TouchableOpacity, Image,
} from 'react-native';
import g from '../../../Global';
import { withNavigation } from 'react-navigation';
import style from './style';
import SearchBar from '../../Components/SearchBar';
import Footer from '../../Components/Footer';
import { SwipeListView } from 'react-native-swipe-list-view';
import AddModal from '../../Screens/HomeScreen/AddModal';
import AsyncStorage from '@react-native-community/async-storage';
import Strip from '../../Components/Strip';
import Toast from 'react-native-easy-toast'
import moment from 'moment';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoList: [],
            doneList: [],
            index: -1,
            openModal: false,
            loading: true,
            searchFlag: false,
            strip: false

        };
    }
    //Close Create Modal
    closeModal = () => {
        this.setState({ openModal: false, })
    }
    //Delete swipe
    renderHiddenItem = (data) => (
        <TouchableOpacity onPress={async () => {
            // const TODO = await AsyncStorage.getItem('TODO')
            //  this.Delete(data.item, JSON.parse(TODO))
            // if (this.containsObject(data.item, this.state.doneList)) {
            //     this.unCheckObject(data.item, this.state.doneList)

            // }
        }}
            style={style.rowBack}>
            <View style={[style.backRightBtn]}>
                <View style={{ backgroundColor: g.yellow }}>
                    <Image source={require('../../Images/delete.png')}
                        resizeMode='center'
                    />
                </View>

            </View>
        </TouchableOpacity>

    );
    //Check box row item
    renderItem = (data) => (
        <TouchableOpacity
            onPress={() => { this.DoneList(data.item) }}
            activeOpacity={1}
            style={style.frontRow}>
            <Image
                source={this.containsObject(data.item, this.state.doneList)
                    ?
                    require('../../Images/activeCheck.png') : require('../../Images/check.png')}
                style={style.check}
            />
            <View style={style.rowItem}>
                <Text style={{ textDecorationLine: this.containsObject(data.item, this.state.doneList) ? 'line-through' : null }}>{data.item.description}</Text>
                <Text style={style.lightText}>
                    {data.item.date + '  ' + data.item.time}
                </Text>
            </View>
        </TouchableOpacity>
    );
    //Create Task
    createTask = async (item) => {
        var id = 1, max = 0
        if (this.state.todoList != '') {
            this.state.todoList.forEach(i => {
                if (i.id > max) {
                    max = i.id;
                }
            });
            id = max + 1
        }
        item.id = id
        await this.setState({
            todoList: [item, ...this.state.todoList]
        })

        AsyncStorage.setItem('TODO', JSON.stringify(this.state.todoList))
        this.toast.show('The task was successfully added', 2000);

    }
    //Done List
    DoneList = async (item) => {
        if (this.containsObject(item, this.state.doneList)) {
            this.unCheckObject(item, this.state.doneList)
        }
        else {
            await this.setState({
                doneList: [...this.state.doneList, item]
            })
            AsyncStorage.setItem('DONELIST', JSON.stringify(this.state.doneList))
        }
    }
    containsObject(obj, list) {
        var i;
        for (i = 0; i < list.length; i++) {
            if (list[i].id === obj.id) {
                return true;
            }
        }

        return false;
    }
    //unCheck
    unCheckObject = (obj, list) => {
        var i;
        for (i = 0; i < list.length; i++) {
            if (list[i].id === obj.id) {
                this.removeTaskDoneList(i)
                return true
            }
        }

        return false;
    }
    Delete= (obj, list) => {
        var i;
        for (i = 0; i < list.length; i++) {
            if (list[i].id === obj.id) {
                this.removeTask(i)
                return true
            }
        }

        return false;
    }
    //Remove item
    removeItem = async (index) => {
        await this.state.todoList.splice(index, 1)
        return this.state.todoList
    }
    //Remove Task
    removeTask = async (index) => {
        await this.setState({ todoList: await this.removeItem(index) })
        AsyncStorage.setItem('TODO', JSON.stringify(this.state.todoList))
    }

    //Remove item Done list
    removeItemDoneList = async (index) => {
        await this.state.doneList.splice(index, 1)
        return this.state.doneList
    }
    //Remove Task DoneList
    removeTaskDoneList = async (index) => {
        await this.setState({ doneList: await this.removeItemDoneList(index) })
        AsyncStorage.setItem('DONELIST', JSON.stringify(this.state.doneList))
    }

    async componentDidMount() {
        await this.getTodo()
        await this.getDoneList()
        console.log('TODO-List');
        console.log(this.state.todoList);
        console.log('DONE-List');
        console.log(this.state.doneList);
        this.setState({ loading: false })
    }

    getTodo = async () => {
        const TODO = await AsyncStorage.getItem('TODO')
        this.setState({ todoList: TODO != null ? JSON.parse(TODO) : [] })
    }

    getDoneList = async () => {
        if (this.state.todoList == '') {
            await AsyncStorage.removeItem('DONELIST')
        }
        const DONELIST = await AsyncStorage.getItem('DONELIST')
        this.setState({ doneList: DONELIST != null ? JSON.parse(DONELIST) : [] })
    }
    searchCalendar = async (date) => {
        if (date) {
            const TODO = await AsyncStorage.getItem('TODO')
            await this.setState({
                todoList: JSON.parse(TODO).filter((el) => el.date.toLowerCase().match(date.trim().toLowerCase()))
            })
        }
        else {
            await this.setState({
                todoList: JSON.parse(TODO)
            })
        }
    }
    changeTab = async (strip) => {
        await this.setState({ strip: strip })
        await this.getTodo()
        await this.getDoneList()
        if (strip)
            this.searchCalendar(moment().format('DD-MMMM-YYYY'))
    }
    render() {
        return (
            <>
                <ScrollView style={style.container}>

                    <View style={style.myName}>
                        <View>
                            <Text style={[style.BoldText, { color: '#000' }]}>Hey Hussein,</Text>
                            <Text style={style.RegularText}>
                                Are you ready to complete your tasks?
                            </Text>
                        </View>

                        <Image
                            source={require('../../Images/business-man.png')}
                            style={style.myPhoto} />
                    </View>
                    {this.state.strip ?
                        <Strip searchCalendar={this.searchCalendar} /> :
                        <>
                            <SearchBar
                                placeholder={'Search'}
                                onchange={async (search) => {
                                    this.setState({ searchFlag: true })
                                    const TODO = await AsyncStorage.getItem('TODO')
                                    if (search) {
                                        await this.setState({
                                            todoList: JSON.parse(TODO).filter((el) => el.description.toLowerCase().match(search.trim().toLowerCase()))
                                        })
                                    }
                                    else {
                                        await this.setState({
                                            todoList: JSON.parse(TODO),
                                            searchFlag: false
                                        })
                                    }
                                }}
                            />
                        </>
                    }

                    {
                        this.state.strip ?
                            <>
                                {/**Tasks */}
                                <View style={style.borderViewTitle}>
                                    <Text style={[style.borderViewTitleText, style.customNum]}>
                                        {this.state.todoList.length}
                                    </Text>
                                    <Text style={style.borderViewTitleText}>
                                        {' TO-DO'}
                                    </Text>
                                </View>
                                <View style={style.heightSwipe}>
                                    <SwipeListView
                                        keyExtractor={item => item}
                                        nestedScrollEnabled
                                        data={this.state.todoList}
                                        extraData={this.state}
                                        renderItem={this.renderItem}
                                        renderHiddenItem={this.renderHiddenItem}
                                        rightOpenValue={-120}
                                        useNativeDriver={false}
                                    />
                                </View>
                            </> :
                            this.state.todoList == '' && !this.state.searchFlag ?
                                <View style={style.center}>
                                    <Image
                                        source={require('../../Images/checklist.png')}
                                        style={style.checkList} />
                                    <View style={style.emptyListView}>
                                        <TouchableOpacity
                                            onPress={() => { this.setState({ openModal: true }) }} >
                                            <Text style={[style.CreateText, { color: g.yellow }]}>Create </Text>
                                        </TouchableOpacity>

                                        <Text style={[style.CreateText]}>my first to-do list</Text>
                                    </View>
                                </View>
                                :
                                <>
                                    {/**Tasks */}
                                    <View style={style.borderViewTitle}>
                                        <Text style={[style.borderViewTitleText, style.customNum]}>
                                            {this.state.todoList.length}
                                        </Text>
                                        <Text style={style.borderViewTitleText}>
                                            {' TO-DO'}
                                        </Text>
                                    </View>
                                    <View style={style.heightSwipe}>
                                        <SwipeListView
                                            keyExtractor={item => item.id}
                                            nestedScrollEnabled
                                            data={this.state.todoList}
                                            extraData={this.state}
                                            renderItem={this.renderItem}
                                            renderHiddenItem={this.renderHiddenItem}
                                            rightOpenValue={-120}
                                            useNativeDriver={false}
                                        />
                                    </View>
                                </>}

                    {this.state.openModal ?
                        <AddModal closeModal={this.closeModal} createTask={this.createTask} /> : null}
                    <Toast
                        ref={(toast) => this.toast = toast}
                        style={{ backgroundColor: g.yellow, maxWidth: '85%', }}
                        positionValue='300'
                        fadeInDuration={120}
                        fadeOutDuration={1000}
                        textStyle={{ color: '#fff', fontSize: 14, textAlign: 'center' }}
                    />
                </ScrollView>
                <Footer createTask={this.createTask} changeTab={this.changeTab} />
            </>
        );
    }
}
export default withNavigation(Home);