const btn = document.getElementById("random");
const div = document.getElementById("advise");

async function getData() {
  const req = await fetch("https://api.adviceslip.com/advice");
  const data = await req.json();

  return data;
}

btn.addEventListener("click", async (e) => {
  e.preventDefault();
  const { slip } = await getData();
  div.innerHTML = `
  <h2>${slip.id}</h2>
  <p>
    ${slip.advice}
  </p>`;
});