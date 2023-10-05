function availableSchedules() {
  let request = new XMLHttpRequest();
  request.open('GET', '/api/schedules');
  request.responseType = 'json';
  request.timeout = 5000;

  request.send();
  console.log('Requesting available schedules...');

  request.addEventListener('load', event => {
    let data = request.response;

    if (data.length > 0) {
      let results = {};
      data.forEach(schedule => {
        if (results[schedule.staff_id]) {
          results[schedule.staff_id] += 1;
        } else {
          results[schedule.staff_id] = 1;
        }
      });
      for (let key in results) {
        console.log(`staff ${key} ${results[key]}`);
      }
    } else {
      console.log('No schedules available for booking.');
    }

    console.log('Request complete.');
  });

  request.addEventListener('timeout', event => {
    console.log('Request timed out. Please try again.');
  });
}

// function retrieveSchedules() {
//   const request = new XMLHttpRequest();

//   // Be sure to change your host and port number accordingly
//   request.open('GET','http://localhost:3000/api/schedules')
//   request.timeout = 5000;
//   request.responseType = 'json';

//   request.addEventListener('load', event => {
//     const schedules = request.response;
//     const staffs = [];
//     const tally = [];

//     if (schedules.length > 0) {
//       schedules.forEach(({staff_id}) => {
//         const key = `staff ${String(staff_id)}`;
//         if (!staffs.includes(key)) {
//           staffs.push(key);
//           tally.push(1);
//         } else {
//           tally[staffs.indexOf(key)] += 1;
//         }
//       });

//       alert(tally.map((_, index) => `${staffs[index]}: ${tally[index]}`).join("\n"));
//     } else {
//       alert('There are currently no schedules available for booking');
//     }
//   });

//   request.addEventListener('timeout', event => {
//     alert('It is taking longer than usual, please try again later.')
//   });

//   request.addEventListener('loadend', event => {
//     alert('The request has completed.');
//   });

//   request.send();
// }