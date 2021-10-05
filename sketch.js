var arr= [35,38,42,45,43,34,46,41,48,32];


function findNum(arr,n){
  for(var i=0;i<arr.length;i=i+1){
    console.log(arr[i]+" "+n);
    if(arr[i]===n){
      return (i+1);
    }
    
  }
  return -1;
}
function setup() 
{
  createCanvas(400,400);
  var result=findNum(arr,38);
  if(result===-1){
    console.log("Number not found");
  }
  else{
    console.log("Number found in "+result+" position");
  }

}

function draw() 
{
  background(30);
}

 

