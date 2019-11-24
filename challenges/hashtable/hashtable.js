'use strict';

class HashMap {
  constructor(size){
    this.buckets = new Array(size);
    this.size = size;
  }

  hash(key){
    return key.toString().length % this.size;
  }

  add(key, value){
    // this is the index where you place the key value pair
    let index = this.hash(key);

    // initialize the bucket if we never had a bucket at that location before
    if(!this.buckets[index]){
      this.buckets[index] = [];
    }
    // put the key value pair inside the bucket
    this.buckets[index].push([key, value]);

    return index;
  }

  get(key){
    const bucket = this.hash(key);
    const bucketArray = this.buckets[bucket];

    if(bucketArray === null ||bucketArray === undefined){
      return null;
    }

    for(let i=0; i<bucketArray.length; i++){
      if(bucketArray[i][0] === key){
        return bucketArray[i][1];
      }
    }
    return null;
  }

  contains(key){
    const bucket = this.hash(key);
    const bucketArray = this.buckets[bucket];

    if(bucketArray === null ||bucketArray === undefined){
      return false;
    }

    for(let i=0; i<bucketArray.length; i++){
      if(bucketArray[i][0] === key){
        return true;
      }
    }
    return false;
  }

  print(){
    console.log(this.buckets);
  }
}

module.exports = HashMap;