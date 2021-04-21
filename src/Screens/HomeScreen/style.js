import { Platform, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import g from '../../../Global';
const style = StyleSheet.create({
    container: {
        flex: 1,
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    myName: {
        flexDirection: 'row',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '100%',
        justifyContent: 'space-between',
        marginTop: 20,
        marginBottom: 20
    },

    BoldText:
    {
        fontFamily: g.BOLD,
        fontSize: 18,
        color: '#fff'
    },
    RegularText:
    {
        fontSize: 14,
        marginTop: 15
    },
    myPhoto: {
        width: 40,
        height: 40,
        borderRadius: 25,
        overflow: 'hidden'
    },
    borderViewTitle: {
        borderBottomWidth: 3,
        borderColor: g.yellow,
        marginTop: 20,
        paddingVertical: 5,
        padding: 2,
        width: '20%',
        marginBottom: 10,
        flexDirection: 'row'
        , alignItems: 'center'
    },
    borderViewTitleText:
    {
        fontFamily: g.BOLD,
        fontSize: 16
    },
    check: {
        width: 20,
        height: 20
    },
    rowItem:
    {
        paddingHorizontal: 10, marginBottom: 15,
    },
    lightText:
    {
        fontSize: 12,
        fontFamily: g.bold,
        color: g.gray
    },
    lightText2:
    {
        fontSize: 16, padding: 10, paddingHorizontal: 25,
        fontFamily: g.bold,
        color: g.gray
    },
    frontRow: {
        flexDirection: 'row',
        width: g.windowWidth,
        backgroundColor: '#fff'
    },
    rowBack: {
        alignItems: 'center',
        backgroundColor: '#fff',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
    },
    backRightBtn: {
        alignItems: 'center',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: 75,
        backgroundColor: 'white',
        right: 0,
    },
    modalStyle: {
        width: g.windowWidth,
        height: g.windowHeight,
        backgroundColor: '#00000020',
    },
    modalContainer: {
        backgroundColor: '#fff',
        height: g.windowHeight - 80,
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
        marginTop: g.windowHeight - (g.windowHeight - 80),
    },
    swipeModalDash: {
        height: 4,
        backgroundColor: g.yellow,
        width: 100,
        marginTop: 15,
        marginRight: 'auto',
        marginLeft: 'auto',
        borderRadius: 10
    },
    BoldTextModal: {
        fontWeight: Platform.OS == 'ios' ? '600' : 'bold',
        fontSize: 18, padding: 15
    },
    customNum: {
        color: g.yellow,
        fontSize: 18,
    },
    dropPicker: {
        width: '90%', elevation: 5,
        backgroundColor: '#fff',
        borderRadius: 7,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingVertical: 10, marginBottom: 2
    },
    calendarIcon: {
        fontSize: 22,
        color: g.yellow
    },
    datePickerCenter: {
        marginTop: 10,
        marginLeft: 'auto',
        marginRight: 'auto',
        alignItems: 'center',
        elevation: 5,
        backgroundColor: '#fff',
        borderRadius: 3,
        marginBottom: 5,
        width: '90%'
    },
    setButton: {

        backgroundColor: g.yellow,
        padding: 7,
        borderRadius: 3,
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10
    },
    input: {
        marginTop: 10,
        height: 100,
        width: '90%',
        borderRadius: 7,
        borderColor: g.yellow, marginLeft: 'auto', marginRight: 'auto',
        color: '#000',
        textAlignVertical: 'top',
        elevation: 5,
        backgroundColor: '#fff',
        marginBottom: 5,
        paddingHorizontal: 15

    },
    createBtn: {
        width: '90%',
        paddingVertical: 15,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '50%'
    },
    center: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 'auto',
        marginBottom: 'auto',
        alignItems: 'center',
        justifyContent: 'center', marginTop: 50,
        width: '100%'
    },
    CreateText:
    {
        fontSize: 18,
        fontFamily: g.bold,
        color: g.gray,
        textAlign: 'center',
    },
    emptyListView: {
        flexDirection: 'row', marginTop: 30, marginLeft: -25
    },
    checkList: { width: 220, height: 220 },
    heightSwipe:{height:hp(60)}

});
export default style;