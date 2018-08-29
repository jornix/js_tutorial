function dayName(date) {
  const daysOfTheWeek = ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag", "Søndag" ];
  return daysOfTheWeek[now.getDay()];
}

function greeting(date){
  return `I dag er det heldigvis ${dayName(date)}!`
}
