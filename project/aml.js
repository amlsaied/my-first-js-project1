
//first task

var txt1="my name is ";
var txt2=" and i'm  ";
var txt3=" my favourite hoppy is ";
var My_Age=(24);
console.log (My_Age);
console.log(typeof(My_Age));
var My_Name=("aml saied")
console.log(My_Name)
console.log(typeof(My_Name));
var hoppy=("watching tv");
console.log(hoppy);
console.log(typeof(hoppy));
var combinedtxt= txt1+ My_Name +txt2+My_Age+txt3+hoppy;
console.log(combinedtxt);
console.log(typeof(combinedtxt));





document.getElementById("txt").innerHTML=' " Hello! My name is '+ My_Name +', and I am '+My_Age+' years old."';



//second task
var num=24
console.log(typeof(num));
var boolean=true;
console.log(typeof(boolean));
var data3= null;
console.log(typeof(data3));
var data4=undefined;
console.log(typeof(data4));
console.log(null)

//third and the most important task
 var userName =prompt("what is your mame?")
  if(userName){
     document.getElementById("username").innerHTML= " hello , "+userName;
     
  } else{
    document.getElementById("username").innerHTML="hi you"
  }
   