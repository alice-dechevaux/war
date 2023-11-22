document.querySelector('#clickMe').addEventListener('click', makeReq)

async function makeReq(){

  const playerNumber = document.querySelector("#playerNumber").value;
  const res = await fetch(`/api?player=${playerNumber}`)
  const data = await res.json()

  document.querySelector("#winningPlayer").textContent = data.result
}