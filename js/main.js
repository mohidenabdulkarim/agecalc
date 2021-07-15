window.onload = function () {
  //grap all neccessary tags
  let selectDay = this.document.querySelector("#dob-d");
  let selectMonth = this.document.querySelector("#dob-m");
  let selectYear = this.document.querySelector("#dob-y");
  let age = this.document.querySelector(".age");
  let monthAndDay = this.document.querySelector(".age-month-day");
  let years = this.document.querySelector(".years");
  let myMonth = this.document.querySelector(".months");
  let weeks = this.document.querySelector(".weeks");
  let days = this.document.querySelector(".days");
  let hours = this.document.querySelector(".hours");
  let minutes = this.document.querySelector(".minutes");

  // Months
  let months = [
    "Jan",
    "Fab",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // put days in the option
  for (let i = 1; i <= 30; i++) {
    let optionDay = this.document.createElement("option");
    optionDay.innerHTML = `<option value="${i}">${i}</option>`;
    selectDay.appendChild(optionDay);
  }

  // put months in the option
  for (let j = 0; j < months.length; j++) {
    let optionMonth = this.document.createElement("option");
    optionMonth.innerHTML = `<option value="${j + 1}">${months[j]}</option>`;
    selectMonth.appendChild(optionMonth);
  }

  //put years in the option
  let year = 2020;
  for (let a = 0; a <= 50; a++) {
    let optionYear = this.document.createElement("option");
    optionYear.innerHTML = `<option value="${year--}">${year--}</option>`;
    selectYear.appendChild(optionYear);
  }

  // put today date in the input fields
  let inputFields = this.document.querySelectorAll("input");
  let nowDayField = inputFields[0];
  let nowMonthField = inputFields[1];
  let nowYearField = inputFields[2];
  nowDayField.value = new this.Date().getDay();
  for (let x = 0; x <= months.length; x++) {
    if (nowMonthField.value == x) {
      nowMonthField.value = months[x + 1];
    }
  }
  nowYearField.value = new this.Date().getFullYear();

  window.ondblclick = function () {
    ageInfo = {
      selectDay,
      selectMonth,
      selectYear,
    };
    ageNow = {
      day: new this.Date().getDay(),
      month: new this.Date().getMonth(),
      year: new this.Date().getFullYear(),
    };
    calcAge(ageInfo, ageNow);
  };

  function calcAge(a, x) {
    let m = a.selectMonth.value;
    let d = parseInt(a.selectDay.value);
    let y = parseInt(a.selectYear.value);
    let month;
    for (let i = 0; i < months.length; i++) {
      //    console.log(months[i]);
      if (m == months[i]) {
        month = i + 1;
      }
    }
    console.log(d + " " + y + " " + month);

    // console.log("Your age is "+((new Date().getFullYear())-y)+" years and "+((new Date().getMonth())-month)+" months and"+((new Date().getDay()) - d));

    let finalYear = new Date().getFullYear() - y;
    let finalDay = finalYear;
    let finalMonth = Math.abs(new Date().getMonth() - month);
    let finalWeek = finalYear * 12 * 4;
    let finalMinute = finalYear * 12 * 30 * 60;
    let finalHour = finalYear * 12 * 30 * 24;
    years.textContent = finalYear;
    myMonth.textContent = finalMonth;
    days.textContent = finalDay;
    monthAndDay.innerHTML = `${finalMonth} months | ${finalDay} days`;
    weeks.textContent = finalWeek;
    days.textContent = finalDay;
    age.textContent = finalYear;
    minutes.textContent = finalMinute;
    hours.textContent = finalHour;
  }
};
