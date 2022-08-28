var customers = [];

var mybtn = document.getElementById("mybtn");

var customername = document.getElementById("customername");
//console.log(customername.value)

var customerlastname = document.getElementById("customerlastname");
//console.log(customerlastname.value)

var city = document.getElementById("city");
//console.log(city.value)

var state = document.getElementById("state");
//console.log(state.value)

var no = document.getElementById("no");
//console.log(no.value)

var appt = document.getElementById("appt");
var row = document.getElementById("customers");
console.log(row)



mybtn.onclick = function () {
  add();
  show();
}

function add() {
  var customer = {
    name: customername.value,
    lastname: customerlastname.value,
    city: city.value,
    state: state.value,
    no: no.value,
    appt: appt.value

  }

  customers.push(customer)

  console.log(customers)



}

function show() {
  var col = "";
  for (var i = 0; i < customers.length; i++) {
    col += `  <div class="col-md-4 mine">

      <h1>  ` + customers[i].name + `</h1>
      <h2>  ` + customers[i].lastname + `</h2>
      <p>  ` + customers[i].appt + `</p>
      <p>  ` + customers[i].city + `</p>
      <p>  ` + customers[i].state + `</p>
      <p>  ` + customers[i].no + `</p>

      </div> `
  }
  row.innerHTML = col
}