var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React, { memo } from "react";
import { View, Text } from "react-native";
import moment from "moment";
function Day(_a) {
    var day = _a.day, locale = _a.locale, style = _a.style;
    var date = day.date, type = day.type, isHoliday = day.isHoliday, isToday = day.isToday;
    var dayTextColor = (style === null || style === void 0 ? void 0 : style.dayTextColor) || "#1d1c1d";
    // var holidayColor = (style === null || style === void 0 ? void 0 : style.holidayColor) || "#1d1c1d";
    var todayColor = (style === null || style === void 0 ? void 0 : style.todayColor) || "#f19b3a";
    var selectedDayTextColor = (style === null || style === void 0 ? void 0 : style.selectedDayTextColor) || "#fff";
    var selectedDayBackgroundColor = (style === null || style === void 0 ? void 0 : style.selectedDayBackgroundColor) || "#f19b3a";
    var selectedBetweenDayTextColor = (style === null || style === void 0 ? void 0 : style.selectedBetweenDayTextColor) || "#f19b3a";
    var selectedBetweenDayBackgroundTextColor = (style === null || style === void 0 ? void 0 : style.selectedBetweenDayBackgroundTextColor) || "#e7f0ff";
    var markStyle = {
        width: 30,
        height: 30,
        justifyContent: "center",
        alignItems: "center",
    };
    var betweenStyle = {
        width: "50%",
        height: 30,
        position: "absolute",
        backgroundColor: selectedBetweenDayBackgroundTextColor,
    };
    var dayStyle = {
        color: isToday ? todayColor : dayTextColor,
    };
    switch (type) {
        case "single":
            markStyle = __assign(__assign({}, markStyle), { backgroundColor: selectedDayBackgroundColor, borderRadius: 15 });
            dayStyle = { color: selectedDayTextColor };
            break;
        case "start":
            markStyle = __assign(__assign({}, markStyle), { backgroundColor: selectedDayBackgroundColor, borderRadius: 15 });
            dayStyle = { color: selectedDayTextColor };
            break;
        case "end":
            markStyle = __assign(__assign({}, markStyle), { backgroundColor: selectedDayBackgroundColor, borderRadius: 15 });
            dayStyle = { color: selectedDayTextColor };
            break;
        case "between":
            markStyle = __assign(__assign({}, markStyle), { backgroundColor: selectedBetweenDayBackgroundTextColor, width: "101%" });
            dayStyle = {
                color: isToday
                    ? todayColor

                    : selectedBetweenDayTextColor,
            };
            break;
        default:
            break;
    }
    return (<>
        {type === "end" ? <View style={[betweenStyle, { left: -1 }]} /> : null}
        {type === "start" ? <View style={[betweenStyle, { right: -1 }]} /> : null}
        {date ? (<View style={markStyle}>
            <Text style={[{ fontSize: 15 }, dayStyle, style === null || style === void 0 ? void 0 : style.dayText]}>
                {moment(date).date()}
            </Text>
        </View>) : null}
       
    </>);
}
function areEqual(prevProps, nextProps) {
    if (prevProps.day.type === nextProps.day.type)
        return true;
    return false;
}
export default memo(Day, areEqual);
//# sourceMappingURL=Day.js.map