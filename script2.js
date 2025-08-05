let pls = document.querySelector("#plus")
// let popup = document.querySelector("#popup")
let container = document.querySelector(".container")
let weekday = document.querySelector("#weekday")
let monthDate = document.querySelector("#monthDate")
let todorecords = {}

let date = new Date()
let weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
]
let month = [
    "Jan",
    "Feb",
    "Mar",
    "April",
    "May",
    "Jun",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
]
let day = weekdays[date.getDay()]
let knowmonth = month[date.getMonth()]
let monthdate = date.getDate()
weekday.innerHTML = day
monthDate.innerHTML = `${knowmonth} ${monthdate}`

pls.addEventListener("click", () => {
  if (pls.classList.contains("fa-circle-plus")) {
    pls.classList.remove("fa-circle-plus")
    pls.classList.add("fa-circle-minus")
    container.lastChild.remove()
  } else {
    pls.classList.remove("fa-circle-minus")
    pls.classList.add("fa-circle-plus")
    container.insertAdjacentHTML(
      "beforeend",
      <div id="popup" class="inactive">
          <input
            name="task"
            type="text"
            maxlength="20"
            placeholder="input task title"
          />
          <div class="">
            <input name="date" type="time" />
            <button id="submit">Save</button>
          </div>
        </div>
    )
    let submit = document.querySelector("#submit")
    let inputs = document.querySelectorAll("input")
    submit.addEventListener("click", () => {
      inputs.forEach((ele) => {
        todorecords[ele.name] = ele.value
      })
      container.lastChild.remove()
    })
  }
})