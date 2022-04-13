class Warehouse {
  constructor() {
    this.whMap = [];
    this.sections = [];
    this.aisles = [];
  }

  /* Adding sections to warehouse */
  createSections( secNames, aisleLength, numAisles ) {
    for ( let i=0; i<secNames.length; i++ ) {
      let section = new Section();
      section.name = secNames[i];
      section.startNum = (i+1)*100+2; //Costco naming convention starts on 102, 202, etc..
      section.aisleLength = aisleLength;
      section.numAisles = numAisles;
      
      section.fillSection();
      this.sections.push( section );
    }
  }
  
  buildMap() {
    let section = this.sections[0];
    for ( let i=0; i<section.numAisles; i++ ) {
      this.whMap.push( section.aisles[i] );
    }
  }
  //getSection( sectionName ) {
  //  return this.sections.find(x => x.name === sectionName);
  //}
  //getAisle( num, side ) {
  //  let results = this.aisles.filter(x => x.num === num);
  //  return results.find(x => x.side === side);
  //}
  
  temp(){
    for(let i=0; i<this.whMap.length; i++){
        console.log( i );
    }

  }
  
  draw( size, hue ) {
    for(let i=0; i<this.whMap.length; i++){
      let aisle = this.whMap[i];

      for(let j=0; j<aisle.contents.length; j++){
        
        if( aisle.contents[j].location==undefined ){
          fill(255);
          square(j*size, i*size, size);
        }
        
        else if ( aisle.side=='A' || aisle.side=='D' ) {
          fill(hue);
          square(j*size, i*size, size);
  
          fill(0);
          let location = aisle.side + aisle.contents[j].location;
          text(aisle.num, j*size, (i*size)+(size/2) );
          text(location, j*size, (i*size)+(size/2)+10 );
        }
        else {
          fill(255);
          square(j*size, i*size, size); 
        }
      }
    }
  }
}
