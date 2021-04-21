import React, { useMemo, useCallback } from "react";
import moment from "moment";
import { FlatList, View, ActivityIndicator, Dimensions } from "react-native";
import Month from "./Month";
import { getMonths } from "./utils/data";
var LAYOUT_HEIGHT = 370;
var width = Dimensions.get('window').width - 100;
var CalendarList = function (_a) {
  var pastYearRange = _a.pastYearRange, futureYearRange = _a.futureYearRange, initialNumToRender = _a.initialNumToRender, locale = _a.locale, handlePress = _a.handlePress, startDate = _a.startDate, endDate = _a.endDate, flatListProps = _a.flatListProps, style = _a.style;
  var months = useMemo(function () { return getMonths(pastYearRange, futureYearRange); }, [pastYearRange, futureYearRange]);

  var getInitialIndex = useCallback(function () {
    return months.findIndex(function (month) {
      var targetDate = startDate ? moment(startDate) : moment();
      return month.id === targetDate.format("YYYY-MM");
    });
  }, []);

  var handleRenderItem = useCallback(function (_a) {
    var item = _a.item;
    return (<View style={{
      width: width
    }}>
      <Month item={item} locale={locale} handlePress={handlePress} startDate={startDate} endDate={endDate} style={style} />
    </View>);
  }, [locale.today, startDate, endDate]);
  return (<View style={[{ position: "relative" }]}>

    <FlatList
      style={{ width: width, marginRight: 'auto', marginLeft: 'auto' }}
      keyExtractor={function (item) { return item.id; }}
      data={months}
      pagingEnabled
      horizontal
      renderItem={handleRenderItem}
      getItemLayout={function (_, index) {
        return ({
          length: width,
          offset: width * index,
          index: index,
        });
      }}

      initialScrollIndex={getInitialIndex()}
      //      initialNumToRender={1}
      {...flatListProps} />
  </View>);
};
export default CalendarList;
//# sourceMappingURL=CalendarList.js.map