/// <reference types="react" />
import { LOCALE_TYPE } from "./utils/locale";
import { Style } from "./index";
interface Props {
    pastYearRange: number;
    futureYearRange: number;
    initialNumToRender: number;
    locale: LOCALE_TYPE;
    handlePress: (date: string) => void;
    startDate: string | null;
    endDate: string | null;
    style?: Style;
    flatListProps?: any;
}
declare const CalendarList: ({ pastYearRange, futureYearRange, initialNumToRender, locale, handlePress, startDate, endDate, flatListProps, style, }: Props) => JSX.Element;
export default CalendarList;
//# sourceMappingURL=CalendarList.d.ts.map