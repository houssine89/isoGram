function isIsogram(str){
  var array = str.split('');
  var sortedArr = array.slice().sort();
  for(var i =0; i<array.length; i++){
    if(sortedArr[i+1] == sortedArr[i]){
      return false;
    } 
  }
  return true;
}

isIsogram("papa");
