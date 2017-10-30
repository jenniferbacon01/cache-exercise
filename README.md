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
Initially, the get method looped through the array, checking each element by key in order to return the correct data object.

I have now improved the speed of get (would be significant for a scaled up model) by adding mapDataObjectsToKeys (mapping the data object array to another array of each data object's key). This way, the index position of the element to be retrieved can be found instantly from the key array, and used to retrieve the data object from the data object array.

The downside of using this technique is that mapDataObjectsToKeys must be called manually called after get, to rearrange the key array to be in line with the object array. The efficiency might not be better overall but the get method is definitely optimised, which is the main point of the cache!
