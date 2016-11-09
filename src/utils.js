export default class Utils {

    getDate(date) {
        if (!(typeof (date) === 'object')) return 'Invalid Date';
        if (isNaN(date.getDate())) return 'Invalid Date';

        let newDate = date.getDate();
        let newMonth = date.getMonth();
        let newYear = date.getFullYear();

        if (newDate < 10) {
            newDate = '0' + newDate;
        }

        if (newMonth < 10) {
            newMonth = '0' + newMonth;
        }

        return `${newDate}/${newMonth}/${newYear}`;
    }

    getFilename(path = '') {
        if (typeof path !== 'string') {
            return 'Not a string';
        }

        return path.split('/').pop();
    }

}
