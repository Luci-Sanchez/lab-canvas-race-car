
window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };

  function startGame() {
    const canvas = document.getElementById("game");
    const ctx = canvas.getContext("2d");

    const game = new Game(ctx);
    game.start();
  }

  document.addEventListener("keypress", () => {
    game.start();
  });

  document.addEventListener("keydown", () => {
    game.onKeyEvent(event);
  });

  document.addEventListener("keyup", () => {
    game.onKeyEvent(event);
  });
};
