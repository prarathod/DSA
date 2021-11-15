function lst(a, used, startIndex, currentSize, k) {
    if (currentSize === k) {
        let temp = []
      for (var i = 0; i < a.length; i++) {
        if (used[i])
        temp.push(a[i])
       
      }
      console.log(temp.join(" "));
      return;
    }
      
    if (startIndex === a.length)
      return;
      
    used[startIndex] = true;
    lst(a, used, startIndex+1, currentSize+1, k);
  
    used[startIndex] = false;
    lst(a, used, startIndex+1, currentSize, k);
  }
  
  var input = [1,2,3];
  lst(input, Array(input.length).fill(false), 0, 0, 3);