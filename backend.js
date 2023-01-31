document.getElementById('getDetail').addEventListener('click', getApi);
function getApi() {
  var userno = document.getElementById('randno').value;
  const url = `http://localhost:4000/fetchdata?id=${userno}`;
  let output = ``;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      for (const i in data["details"]) {
        if (Object.hasOwnProperty.call(data["details"], i)) {
          const element = data["details"][i]["id"];
          console.log(element);
          if (userno == element) {
            output = `
            <div style="flex: auto;">
                <table border="2">
                    <tr>
                      <th>Full Name</th>
                      <th>Salary</th>
                      <th>Age</th>
                      <th>Phone</th>
                      <th>Profile Pic</th>
                    </tr>
                    <tr>
                      <td>${data["details"][i]["employee_name"]}</td>
                      <td>${data["details"][i]["employee_salary"]}</td>
                      <td>${data["details"][i]["employee_age"]}</td>
                      <td>${data["details"][i]["employee_phone"]}</td>
                      <td><img src="${data["details"][i]["profile_image"]}" height="100px" width="100px" alt="" srcset=""></td>
                    </tr>
                  </table>
            </div>
                `;
          }
        }
        // console.log(data.details[i]["employee_name"]);
      }
      document.getElementById('output').innerHTML = output;
    }).catch((err) => console.log(err))
}
