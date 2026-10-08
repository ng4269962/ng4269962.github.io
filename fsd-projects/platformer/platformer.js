$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(310,660,100,20, "yellow");
    createPlatform(410,550,550,30, "pink");
    createPlatform(1000,450,200,40, "blue");
    createPlatform(700,350,200,50, " green");
    createPlatform(500,200,200,10, " purple");


    // TODO 3 - Create Collectables
    createCollectable("database", 1050,300);
    createCollectable("grace", 700, 150);
    createCollectable("max", 300, 550);
    createCollectable("kennedi", 700, 695);


    
    // TODO 4 - Create Cannons
    createCannon("top", 200, 2000);    createCannon("right", 300,1000);
    createCannon("top", 1050, 2000);
    createCannon("top", 700, 1000);
    createCannon("top", 200, 1000);
    createCannon("right", 350,1000);




    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
