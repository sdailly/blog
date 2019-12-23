import Vue from 'vue';
import moment from 'moment';

Vue.filter('capitalize', function (date) {
    return moment(date).format('DD/MM/YY')
});
