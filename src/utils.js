export default class Utils {

    date(date) {

        if (!(typeof(date) === 'object')) return 'Invalid Date';
        if (isNaN(date.getDate())) return 'Invalid Date';

        let newDate = date.getDate();
        let newMonth = date.getMonth() + 1;
        let newYear = date.getFullYear();

        if (newDate < 10) {
           newDate = '0' + newDate;
        }

        if (newMonth < 10) {
           newMonth = '0' + newMonth;
        }

        return `${newDate}/${newMonth}/${newYear}`;
    }

}
