const author = document.querySelector("#author")
const calculation = document.querySelector("#calculation")
const btn_toggle = document.querySelector("#toggle");
const length = document.getElementById('length')
const color = document.querySelector('#color')
const search = document.querySelector('#search')
const text = document.getElementById('text')

// define more constants and variables here

btn_toggle.onclick = () => {
  const x = "640631102 PANNAWIT PANWONG"
  const y = 640631102 + parseInt(length.value)
  if (btn_toggle.innerHTML == "Show Calculation") {
    author.innerHTML = y
    btn_toggle.innerHTML = "Show Author"
  }
  else {
    author.innerHTML = x
    btn_toggle.innerHTML = "Show Calculation"
  }
}

search.onclick = () => {
  const myArr = text.innerHTML.split(" ")
  var stringOut = ""
  // console.log(myArr)
  for (let i = 0; i < myArr.length; i++) {
    if (myArr[i].length >= length.value) {
      stringOut += "<mark>" + myArr[i] + "</mark>"
      // console.log(myArr[i])
    }
    else {
      stringOut += myArr[i] + " ";
    }
  }
  document.getElementById("text").innerHTML = stringOut;

}

// more codes for Search and Reset buttons here


