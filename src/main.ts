import "./style.css";

const svg = document.querySelector('svg');

const player = {
  pos: 0,
  playing: false,
  el: document.querySelector('#player')
};

window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowDown":
      player.pos = Math.max( player.pos - 1, 0);
      break;
    case "ArrowUp":
      player.pos = Math.min(player.pos + 1, 9);
      break;
  }  
  render();
});


const render = () => {
  window.requestAnimationFrame(() => {
    /* draw the player */
    console.log(player);
    player.el?.setAttribute('y', '' +  ( 5 + 100 - player.pos * 10))
    console.log(player.el?.getAttribute('y'));
  })
}
