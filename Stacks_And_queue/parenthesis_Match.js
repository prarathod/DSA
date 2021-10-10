const str = '(){}[][({})]'

function isBalenced(str){
  let brct ={
    "{": "}",
    "[":"]",
    '(':')'
  }
  let stack =[];
  let pointer = -1;
  
  for(var i=0;i<str.length;i++){
    if(str[i]=="("||str[i]=="["||str[i]=="{"){
      
    }else{

    }
    console.log(str[i])

  }


}
isBalenced(str)


