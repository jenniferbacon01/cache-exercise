var Cache = function(){
  this.dataObjects = []
}

Cache.prototype.set = function (key, value) {
  dataObject = new DataObject(key, value)
  this.dataObjects.push(dataObject)
  if (this.dataObjects.length > 5){
    this.dataObjects.splice(0,1);
  }
  this.dataObjectKeys = this.dataObjects.map ( function(dataObject){
    return dataObject.key;
  })
  console.log(this.dataObjectKeys)
}

Cache.prototype.get = function (key){
  var position = this.dataObjectKeys.indexOf(key);
  var dataObjectToGet = this.dataObjects.splice(position,1)[0];
  this.dataObjects.push(dataObjectToGet);
  this.dataObjectKeys = this.dataObjects.map ( function(dataObject){
    return dataObject.key;
  })
  console.log(dataObjectToGet);
  console.log(this.dataObjectKeys);
  return dataObjectToGet
}


var DataObject = function(key, value) {
  this.key = key;
  this.value = value;
}

var cache = new Cache()
cache.set("example", 1)
cache.set("example2", 2)
cache.set("example3", 3)
cache.set("example4", 4)
cache.set("example5", 5)
cache.set("example6", 6)
cache.get("example3")
