// // api key : 82565a74ce3e39072e71ac0895d785d9
async function getWeathername(cityName) {
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=82565a74ce3e39072e71ac0895d785d9&units=metric`;
  this.apiResp = await axios
    .get(url)
    .then(function (response) {
      //   alert(arr);
      for (var i = 0; i <= 3; i++) {
        if(){}
        document.querySelector("#tasks").innerHTML += `
          <div class="div-shadow">
              <span id="send">
              Temperature:${response.data.main.temp}°C <br>
               City: ${document.querySelector("#city").value}
              </span>
         </div>
        `;
        cacheData.push(response);
      }

      console.log(cacheData);
      // return response;
    })
    .catch(function (error) {
      // document.getElementById("message").value;
      alert("please enter the valid city name");
    });
}

window.onload = function () {
  cacheData = [];
  var apiResp;
  document.getElementById("send").onclick = function () {
    const cityName = document.getElementById("city").value;
    if (document.getElementById("city").value.trim() !== "") {
      console.log("value", document.getElementById("city").value);
      getWeathername(cityName);
    }
  };
};
