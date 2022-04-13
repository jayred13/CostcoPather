class Aisle{
  constructor( num, side, hasItem ){
    this.num = num;
    this.side = side;
    this.hasItem = hasItem;
    this.contents = [];
  }
  
  set num( num ){ this._num = num; }
  get num(){ return this._num; }
  set side( side ){ this._side = side; }
  get side(){ return this._side; }

  /* Not looking forward to this part */
  fillAisle( aisleLength ) {
    for (let i=0; i<=aisleLength; i++) {
      let item = new Item();
      if( i!=0 && i!=aisleLength ){
        item.itemNum = i*245;
        item.quantity = i*23;
        item.description = "";
        item.location = i;
      }
      this.contents.push( item );
    }
  }
}
