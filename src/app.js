class Drone {
  constructor(id, name) {
    this._id = id;
  }

  get id(){
    return this._id;
  }

  set id(value){
    this._id = value;
  }
}

let drone = new Drone("A123");

drone.id = "B456"
console.log(`Drone id: ${drone.id}`);
