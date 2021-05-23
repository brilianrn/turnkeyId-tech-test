export function getDateRegistered(regisDate) {
  let date = regisDate.split('-');
  let dd = `${date[2][0]}${date[2][1]}`;
  let mm = date[1];
  let yyyy = date[0];
  let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  for (let i = 0; i < months.length; i++) {
    if (i + 1 == mm) {
      mm = months[i];
    }
  }

  return `${mm}, ${dd} ${yyyy}`;
}