async function getdata(url) {
    let res=await fetch(url);
    let data=await res.json();
    //console.log("data" ,data)

    return data;
}
function append(data,place){

data.forEach(el => {
    let div=document.createElement('div');
    let p_name=document.createElement('p')
    let p_price=document.createElement('p')
   let img=document.createElement('img')
   
   img.src=el.image
    p_price.innerHTML=el.price;
    p_name.innerHTML=el.title;

    div.append(img,p_name,p_price)
place.append(div);

});
}
function search() {

    let name=document.getElementById("dis").value;
   
  getdata(`https://www.themealdb.com/api.php?=${name}ref=apilist.fun`).then(responce=>{
       console.log("responce:",responce);

let place=document.getElementById("data");
append(responce,place);
  
});
 console.log(name);
 // return name ;
    
            }
export  {getdata,append,search}