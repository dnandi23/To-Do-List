let pls = document.querySelector("#plus") // প্লাস আইকন
let container = document.querySelector(".container")
let weekday = document.querySelector("#weekday")
let monthDate = document.querySelector("#monthDate")
let todorecords = {} // কাজগুলো সংরক্ষণ করার জন্য

// তারিখ সেট করা
let date = new Date()
let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let months = ["Jan", "Feb", "Mar", "April", "May", "Jun", "July", "Aug", "Sept", "Oct", "Nov", "Dec"]

let day = weekdays[date.getDay()]
let currentMonth = months[date.getMonth()]
let currentDate = date.getDate()

weekday.innerHTML = day
monthDate.innerHTML = `${currentMonth} ${currentDate}`

// প্লাস আইকনে ক্লিক ইভেন্ট
pls.addEventListener("click", () => {
  let existingPopup = document.querySelector("#popup")

  // যদি popup আগে থেকেই থাকে, তাহলে সেটাকে সরিয়ে দাও এবং প্লাস আইকন দেখাও
  if (existingPopup) {
    existingPopup.remove()
    pls.classList.remove("fa-circle-minus")
    pls.classList.add("fa-circle-plus")
    return
  }

  // না থাকলে popup তৈরি করো এবং মাইনাস আইকন দেখাও
  pls.classList.remove("fa-circle-plus")
  pls.classList.add("fa-circle-minus")

  container.insertAdjacentHTML(
    "beforeend",
    `<div id="popup">
        <input name="task" type="text" maxlength="20" placeholder="Input task title" />
        <div>
          <input name="date" type="time" />
          <button id="submit">Save</button>
        </div>
      </div>`
  )

  // সেভ বাটনে ক্লিক করলে ডেটা নিবে
  let submit = document.querySelector("#submit")
  let inputs = document.querySelectorAll("#popup input")

  submit.addEventListener("click", () => {
    inputs.forEach((input) => {
      todorecords[input.name] = input.value
    })

    // টাস্ক কনসোলে দেখাও
    console.log(todorecords)

    // popup রিমুভ করো
    document.querySelector("#popup").remove()
    pls.classList.remove("fa-circle-minus")
    pls.classList.add("fa-circle-plus")
  })
})
