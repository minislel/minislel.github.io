const api_key = "6AHlrx12w1xScvgsP3ODTLhB32NRMqKwXRpj-uboKeM";
const api_link = "https://letscountapi.com";
const namespace = "wseinalia2025";
const key = "akceptacje";
const licznikSpan = document.getElementById("licznik");

// fetch(`${api_link}/${namespace}/${key}`, {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     "X-API-Key": api_key,
//   },
//   body: JSON.stringify({
//     current_value: 0,
//   }),
// }).then((res) => console.log(res));

function akceptuj() {
  fetch(`${api_link}/${namespace}/${key}/increment`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-API-Key": api_key,
    },
    body: JSON.stringify({}),
  }).then((res) => console.log(res));

  fetch(`${api_link}/${namespace}/${key}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-API-Key": api_key,
    },
  })
    .then((res) => res.json())
    .then((json) => {
      document.querySelector("#licznik").textContent = json.current_value;
    });
}
