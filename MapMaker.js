function snakeMapMaker( warehouse ){
  let whMap = [];
  
  for( let section of warehouse.sections ){
    let sectionMap = makeSectionMap( section );
    //whMap.push(  );
    
    
  }
}

function makeSectionMap( section ){
  let aisleNum = section.startNum;
  let side = 'A';
  
  
  for( let i=0; i<section.numAisles*4; i++ ){
    /* Costco's aisle marking style */      
    addAisle( section, aisleNum, side );
    if( side == 'D' ){
      side = 'A';
      aisleNum += 2;
    }
    
    for( let j=0; j<section.aisleLength; j++ ){
      /* Equation for determining aisle direction & location */
      addPallet
      //let location = findLocForSec( section, j, numPallets );
      //let location = abs( (option*(numPallets-1))-j );
      
      /* Create pallet and add to aisle */
      //if( j==numPallets/2-1 ) {continue;}
      //let pallet = new Pallet( startAisle, side, location, true );
      //aisle.push(pallet);
      //console.log(conOut+=pallet.info());
      
      /* Draw pallet (Testing method) */
      //pallet.draw(j, i, pixel);
    }
    //option ^= 1; //Switch between 0 & 1
    side = nextChar(side);
    //sectionMap.push(aisle);
  }
  console.log(section);
  //return sectionMap;
}
