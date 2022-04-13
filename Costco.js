let canWidth = 1000;
let canHeight = 1000;
let pixel = 30;

function setup() {
  createCanvas(canWidth, canHeight);
  scale(0.65);

  let warehouse = new Warehouse();
  let sectionNames = ["hardlines", "centers", "foods"];

  warehouse.location = "Dallas, TX";
  warehouse.createSections( sectionNames, 26, 19 );
  warehouse.buildMap();
  //console.log( warehouse.whMap[0].contents[1] );
  warehouse.temp();
  warehouse.draw(40, 'red');

  //mapper = snakeMapMaker( warehouse );
}

function draw() {
  //background(220);
}

    /* Equation for determining aisle direction & location */
    //let location = findLocForSec( section, j, numPallets );\
    //option ^= 1; //Switch between 0 & 1
