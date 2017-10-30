var Cache = function(){
  this.dataObjects = []
}

Cache.prototype.set = function (key, value) {
  var dataObject = new DataObject(key, value)
  this.dataObjects.push(dataObject)
  if (this.dataObjects.length > 5){
    this.dataObjects.splice(0,1);
  }
}

Cache.prototype.get = function (key){
  var dataObjectToGetIndex = this.dataObjectKeys.indexOf(key);
  var dataObjectToGet = this.dataObjects.splice(dataObjectToGetIndex,1)[0];
  this.dataObjects.push(dataObjectToGet);
  console.log(dataObjectToGet);
  return dataObjectToGet
}

Cache.prototype.mapDataObjectsToKeys = function (){
  this.dataObjectKeys = this.dataObjects.map ( function(dataObject){
    return dataObject.key;
  })
  console.log(this.dataObjectKeys);
}


var DataObject = function(key, value) {
  this.key = key;
  this.value = value;
}

var cache = new Cache()
cache.set("example", 1)
cache.mapDataObjectsToKeys();
cache.set("example2", 2)
cache.mapDataObjectsToKeys();
cache.set("example3", 3)
cache.mapDataObjectsToKeys();
cache.set("example4", 4)
cache.mapDataObjectsToKeys();
cache.set("example5", 5)
cache.mapDataObjectsToKeys();
cache.set("example6", 6)
cache.mapDataObjectsToKeys();
cache.get("example3")
cache.mapDataObjectsToKeys();
cache.get("example3")
cache.mapDataObjectsToKeys();
