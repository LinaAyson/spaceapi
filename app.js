const container = document.getElementById("astros");

fetch('http://api.open-notify.org/astros.json')
  .then((response) => {
    return response.json()
  })
  .then((json) => {
    container.innerHTML = `<h1>
    There are ${json.number} people in space right now! </h1>`
    json.people.forEach((person) => {
      container.innerHTML += `
      <p> ${person.name} is on the ${person.craft}</p>`
    });
  });


const URL = "http://www.boredapi.com/api/activity/?type=recreational";
const container2 = document.getElementById("activity");

const callApi = () => {
  fetch(URL).then((response) => {
    if (!response.ok) {
      throw new Error("Network problem");
    }
    return response.json();
  })
    .then((data) => {
      container2.innerText = data.activity;
      console.log(data);
    })
    .catch((error) => {
      container2.innerText = error
      console.log("fetch error", error);
    });
};

// callApi();

const fetchData = async () => {
  try {
    const response = await fetch(URL);
    const data = await response.json()
    container2.innerText = data.activity
  } catch (error) {
    container2.innerText = error;
  }
}
// fetchData();


const fetchActivity = () => {
  fetch(URL).then((res) => res.json()).then((data) => {
    container2.innerText = data.activity;
    console.log(data);
  }).catch(
    (err) => {
      container2.innerText = err;
      console.log("error", err);
    }
  );
}
// fetchActivity();


