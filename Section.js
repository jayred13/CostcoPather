class Section{
  constructor( name, startNum, aisleLength, numAisles ){
    this.name = name;
    this.startNum = startNum;
    this.aisleLength = aisleLength;
    this.numAisles = numAisles;
    this.aisles = [];
    this.sectionMap = [];
  }
   
  set name( name ){ this._name = name; }
  get name(){ return this._name; }
  set startNum( startNum ){ this._startNum = startNum; }
  get startNum(){ return this._startNum; }
  set aisleLength( aisleLength ){ this._aisleLength = aisleLength; }
  get aisleLength(){ return this._aisleLength; }
  set numAislies( numAislies ){ this._numAislies = numAislies; }
  get numAislies(){ return this._numAislies; }
  
  fillSection(){
    let side = 'A';
    let aisleNum = this.startNum;
  
    for (let i=0; i<this.numAisles*4; i++) {
      let aisle = new Aisle();
      aisle.num = aisleNum;
      aisle.side = side;
      
      aisle.fillAisle( this.aisleLength );
      this.aisles.push( aisle );
    
      if ( side == 'D' ) { // Catch if reach next Aisle
        side = 'A';
        aisleNum += 2;
      } 
      else {
        side = this.nextChar( side );
      }
    }
  }
  
    
  nextChar(c) {
    return String.fromCharCode(c.charCodeAt(0) + 1);
}
  
}
