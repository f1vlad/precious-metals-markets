// Precious Markets Operating Hours
// (https://www.jmbullion.com/faq/precious-metals-market-hours/)
//
// Monday -- closed 17:00-18:00
// Tuesday -- closed 17:00-18:00
// Wednesday -- closed 17:00-18:00
// Thursday -- closed 17:00-18:00
// Friday -- closed 17:00
// Saturday -- closed
// Sunday -- open 18:00

const moment = require('moment');
const timezone = require('moment-timezone');

/**
 * Get market status boolean or string
 *
 * @param {*} timestamp
 * @returns boolean || string
 */



const marketsOpen = (timestamp = Date.now()) => {
    timestamp = moment(timezone(timestamp).tz('America/New_York'));
    let easternWeekday = moment(timezone(timestamp).tz('America/New_York')).format('d');
    let easternHour = parseInt(moment(timezone(timestamp).tz('America/New_York')).format('HH'));

    const timeTillMarketOpens = (ts, days = 0) => {
        // return moment(moment(ts).add(days, 'days').format('YYYY-MM-DD') + 'T18:00:00-05:00')
        //         .startOf('hour')
        //         .from(ts);
        return moment(moment(ts).add(days, 'days').format('YYYY-MM-DD') + 'T18:00:00')
                .startOf('hour')
                .from(ts);
    }

    switch (easternWeekday) {
        case "1":
        case "2":
        case "3":
        case "4":
            // Monday, Tuesday, Wednesday, Thursday -- markets closed 17:00--18:00
            if (easternHour === 17) {
                return timeTillMarketOpens(timestamp);
            }
            return true;
        case "5":
            // Friday -- markets closed after 17:00
            if (easternHour >= 17) {
                return timeTillMarketOpens(timestamp, 2);
            }
            return true;
        case "6":
            // Saturday
            return timeTillMarketOpens(timestamp, 1);
        case "0":
            // Sunday -- markets open after 18:00
            if (easternHour >= 18) {
                return true;
            }
            return timeTillMarketOpens(timestamp);
    }
};

module.exports = marketsOpen; 