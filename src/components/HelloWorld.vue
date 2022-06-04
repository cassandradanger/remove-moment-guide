<template>
  <div class="hello">
    <p>Start: {{ MMMMDoYYYYhmmssa(startDate) }}</p>
    <p>End: {{ MMMMDoYYYYhmmssa(endDate) }}</p>
    <p>duration: {{ durationHours(startDate, endDate) }}</p>
    <p>end of this month: {{ endOfMonth(new Date()) }}</p>
    <p>four months ago: {{ changeMonth(4, '-') }}</p>
  </div>
</template>

<script>
import moment from 'moment';
import dateTimeMixin from './mixins/dateTime';

export default {
  name: 'HelloWorld',
  mixins: [dateTimeMixin],
  props: {
    msg: String
  },
  data() {
    return {
      startDate: '2022-05-17 21:00:15.935084',
      endDate: '2022-05-18 11:00:15.935084',
    }
  },
  computed: {
  },
  methods: {
    MMMMDoYYYYhmmssa(date){
      return moment(date).format('MMMM Do YYYY, h:mm a');

      // non-moment solution:
      // return `${this.convertToMMDDYYYYlong(date)}, ${this.convertToHHMM12(date)}`;
    },
    endOfMonth(date) {
      return moment(date).endOf('month');
      
      // non-moment solution:
      // return new Date(date.getFullYear(), date.getMonth(), 0);
      // getFullYear helps understand what year it is, 2nd param gives the current month +1, and the 3rd param says the date to show (0 is show the previous month's last day)
    },
    changeMonth(numMonths, operator) {
      if(operator === '-'){
        return moment(Date.now()).subtract(numMonths, 'M').endOf('month');
      } else {
        return moment(Date.now()).add(numMonths, 'M').endOf('month');
      }

      // non-moment solution:
      // return this.alterMonth(numMonths, operator);
    },
    durationHours(startDate, endDate) {
      let end = moment(endDate);
      let start = moment(startDate);
      let duration = moment.duration(end.diff(start));
      return `${duration.asHours()} hours`;

      // non-moment solution:
      // let end  = new Date(this.endDate);
      // let start =new Date(this.startDate);
      // return `${(end - start)/1000/60/60} hours`;
      // Divide the milliseconds by 1000 to get the seconds.
      // Divide the seconds by 60 to get the minutes.
      // Divide the minutes by 60 to get the hours.
      // Add a leading zero if the values of the hours and minutes are less than 10 to format them consistently.
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
