var Cache = function(){
  this.dataObjects = []
}

Cache.prototype.set = function (key, value) {
  dataObject = new DataObject(key, value)
  this.dataObjects.push(dataObject)
  if (this.dataObjects.length > 5){
    this.dataObjects.splice(0,1);
  }
  console.log(this.dataObjects)
}

Cache.prototype.get = function (key){
  var dataObjectToGet;
  var that = this;
  this.dataObjects.forEach( function(dataObject, index ){
    if (dataObject.key === key){
      dataObjectToGet = that.dataObjects.splice(index,1)[0];
    };
  })
  this.dataObjects.push(dataObjectToGet);
  console.log(this.dataObjects)
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
cache.get("example3")
cache.set("example6", 6)
