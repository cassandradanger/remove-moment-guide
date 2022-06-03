export default {
  methods: {
    convertToMMDDYYYY(date_param) {
      return new Date(date_param).toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      });
    },
    convertToMMDDYYYYmonthAbr(date_param) {
      return new Date(date_param).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: '2-digit',
      });
    },
    convertTodddDDMMMYYY(date_param) {
      // the locale is en-GB for the date formatting
      let newDate = new Date(date_param).toLocaleDateString('en-GB', {
        weekday: 'short',
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      });
      return newDate;
    },
    convertToHHmmss(date_param, timeZone) {
      let newTime = new Date(date_param).toLocaleTimeString(['en-US'], {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
        timeZone: timeZone,
      });
      return newTime;
    },
    convertToMMDDYYYYlong(date_param) {
      let newDate = new Date(date_param).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
      });
      return (
        newDate + this.dateAppend(newDate) + ', ' + this.getYear(date_param)
      );
    },
    getYear(date_param) {
      return new Date(date_param).toLocaleDateString('en-US', {
        year: 'numeric',
      });
    },
    convertToHHMM12(date_param) {
      let newTime = new Date(date_param).toLocaleTimeString(['en-US'], {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
      });
      return newTime.toLowerCase().replace(/ /g, '');
    },
    convertToMMDD(date_param) {
      let newDate = new Date(date_param).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
      });
      return newDate + this.dateAppend(newDate);
    },
    convertToDayLong(date_param) {
      let newDate = new Date(date_param).toLocaleDateString('en-US', {
        weekday: 'long',
      });
      return newDate;
    },
    dateToISO(date, hour) {
      let newdate = new Date(date).setHours(hour, 0, 0, 0);
      let getTime = new Date(newdate).getTime();
      let timeZoneOffset = new Date(newdate).getTimezoneOffset() * 60000;
      return new Date(getTime - timeZoneOffset).toISOString();
    },
    timeZoneAbbr(timeZoneParam) {
      let localDate = new Date().toLocaleString('en-US', {
        timeZone: timeZoneParam,
        timeZoneName: 'short',
      });
      let timeZone = localDate.slice(localDate.length - 3, localDate.length);
      return timeZone;
    },
    alterMonth(numOfMonths, operator) {
      let date = new Date();
      let newNum = `${date.getMonth()} ${operator} ${numOfMonths}`;
      date.setMonth(eval(newNum));
      return this.endOfMonth(date);
    },
    dateAppend(date_param) {
      let lastNumber = date_param.charAt(date_param.length - 1);
      let lastTwoNumbers = date_param.slice(
        date_param.length - 2,
        date_param.length
      );
      switch (lastNumber) {
        case '1':
          return lastTwoNumbers == '11' ? 'th' : 'st';
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '0':
          return 'th';
        case '2':
          return lastTwoNumbers == '12' ? 'th' : 'nd';
        case '3':
          return lastTwoNumbers == '13' ? 'th' : 'rd';
        default:
          return;
      }
    },
  },
};
