const cont = document.querySelector("#insert .cont");

window.addEventListener("keypress", e => {
  console.log(e.key);
  cont.innerHTML = `
    <div class="key">
      <span class="big">${e.key === "" ? "Space" : e.key}</span>
    </div>
    <div class="key">
      <span class="big">${e.keyCode === "" ? "Space" : e.keyCode}</span>
    </div>
    <div class="key">
      <span class="big">${e.code === "" ? "Space" : e.code}</span>
    </div>
  `
});