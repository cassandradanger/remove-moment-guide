<template>
  <div class="hello">
    <p> Start: {{ MMMMDoYYYYhmmssa(startDate) }}</p>
    <p> End: {{ MMMMDoYYYYhmmssa(endDate) }}</p>
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
  methods: {
    MMMMDoYYYYhmmssa(date){
      return moment(date).format('MMMM Do YYYY, h:mm a');
      // return `${this.convertToMMDDYYYYlong(date)}, ${this.convertToHHMM12(date)}`;
    },
    duration(){
      // find duration
    }
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
