# Trint Cache Exercise

This simple cache model can hold 5 data objects. The data objects are set with a key and value, and retrieved with a key. The cache evicts the least recently used data object.

How to Install
-----
In your command line type the following:
To clone this repository:
````
  $ git clone https://github.com/jenniferbacon01/cache-exercise
````

How to Run
-----
In your command line from the cache-exercise directory:
````
  $ node cache.js
````
Comments
-----
Initially, the get method looped through the array, checking each element by key in order to return the correct data object. I have now improved the speed (would be significant for a scaled up model) by adding mapDataObjectsToKeys (mapping the data object array to another array of each data object's key). This is called before the end of the set method but must be manually called after get, to prepare for the next get. This way, the index position of the element to be retrieved can be found more quickly from the key array, and used to retrieve the data object from the data object array.
