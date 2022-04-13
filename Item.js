class Item{
  constructor( num, quantity, description, location ){
    this.num = num;
    this.quantity = quantity;
    this.description = description;
    this.loc = location;
  }
  
  set num( num ){ this._num = num; }
  get num(){ return this._num; }
  set quantity( quantity ){ this._quantity = quantity; }
  get quantity(){ return this._quantity; }
  set description( description ){ this._description = description; }
  get description(){ return this._description; }
  set location( location ){ this._loc = location; }
  get location(){ return this._loc; }
}
