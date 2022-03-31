// // api key : 82565a74ce3e39072e71ac0895d785d9
function getWeathername(cityName) {
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=82565a74ce3e39072e71ac0895d785d9&units=metric`;
  axios
    .get(url)
    .then(function (response) {
      // handle success
      document.getElementById(
        "message"
      ).innerText = `it is now ${response.data.main.temp}°C`;
    })
    .catch(function (error) {
      // document.getElementById("message").value;
      alert("please enter the valid city name");
    });
  document.querySelector("#tasks").innerHTML += `
      <div class="task">
          <span id="taskname">
              ${document.querySelector("#newtask input")}
          </span>
          <button class="delete">
              <i class="far fa-trash-alt"></i>
          </button>
      </div>
  `;

  var current_tasks = document.querySelectorAll(".delete");
  for (var i = 0; i < current_tasks.length; i++) {
    current_tasks[i].onclick = function () {
      this.parentNode.remove();
    };
  }
}

window.onload = function () {
  document.getElementById("send").onclick = function () {
    const cityName = document.getElementById("city").value;
    if (document.getElementById("city").value.trim() !== "") {
      console.log("value", document.getElementById("city").value);
      getWeathername(cityName);
    }
  };
};
