/-Convert a number string to Number and Number to string --/
// var newNum = "56";
// var intNum = parseInt(newNum);
// console.log(intNum);
// console.log(typeof(intNum));

//-----Convert a number ,number to string------/

// const newNum = "45.84567890987654567890";
// const flotNum = parseInt(newNum);
// console.log(newNum);
// console.log(typeof(flotNum));


console.log(parseInt("000098"));
/----------------------------------------------------------------------------------------/

// if you are passing anything in a string and provide parseInt to convert integer number ten you alwasy pass a integer number in striing then it will provide a correct answer otherwise it provide a NAN (Not a nuumber)

// console.log(parseInt("123"))//true
// console.log(parseInt("xyz"))//false   NAN
// console.log(parseInt("#1sdd23"))//false NAN

// console.log(isNaN("5"));




///------------------------------------------------------------------------------------//


//---there is ana anothere example of NaN ---/

// if(NaN == NaN){
//     console.log("both are equal");
// }
// else{
//     console.log("Both are not eqaul")
// }

//because not a number means dono hi pta ni number ke alawa kya ho skte hain .
 

///------------------------------------------------------------------------------

//-----------------Implicit and explicit ----------------------------------------

 //there is an explicit and implicit cohiesen ?
 
//  explicit cohisen means done by the automatically javscsript but the implicit cohiesne done by the programmer manually 
// console.log("Some questions for interview")
// console.log(10 + "20");//output -  1020 concatination
// console.log( 9 - "5");//output -  4 --yaha pr implicit cohiehen hua
// console.log( "Java" + "Script");//output - JavaScript
// console.log(" " + " ");//output - blank space     "  "
// console.log(" " + 0);//output - blankspace 0
// console.log("vinod" - "thapa");//output - NaN because both are not matched and not any opertaion are performed
// console.log(true + true);//output - 2
// console.log(true + false);//output - 1
// console.log(false + true);//output - 1
// console.log(false - false);//output - 0



///Expresion ----------------------------------------------------------

//5---operand

//10----operater

//+, - * / ---operater 

// 5+10 ---expression


//Now we are discuss about the operators are :--
//Assigment Operatror "=" assign the value of any variable known as assignmnent operator
//Arithmatic operator  "+", "-", "*" , "/" "%" opeartion performs on the variables 
//Comparison opeartor
//Logical Operator
//String Operator 
//Uranary Operator 
//Ternary Opeartor
//Type Operator


//Trickey QUETSION 

// var result = 'hello' / 2;
// console.log(result);


//Now there is a another trickey question 
 //if you are adding any two flowing numbers then you get a another number or somthing diffrent in number because of the brinary conversion in backend the number converst binary its etslef so it happen  likhe example 
 
//  //example---------------------------------------------- 

//  var result = 1.2 + 2.2;
//  console.log(result);
//   //there is solutiuon of this you can do it like that use (toFixed) method to take kitne decimal place ke baad kitni number value chaiye
//   var result3 = 1.2 + 2.2;
//   console.log(result.toFixed(1));

//  now there is another exeception in it  . if you add the both same floting point number then you will get the coreect annswer because in backend when it add the binary of both are same the its double the number and its by defut going to be corect see example 
// //example---------------------------------------------- 
// var result2 = 2.2 + 2.2 ;
// console.log (result2);


// Note :-----YOU CAN NOT DIVIDE AND MULTIPLY AANY STRING TO NUMBER AND NUMBER TO STRING OKAY, IF YOU DO THIS THEN YOU GET A ONLY ANSWER "NaN"


// There is an  new approch Double == and triple equalto ===

// (==) it mens that the vbalue are equal to thik hai true mil jaaega uska data type nahi dekhega 

// console.log(5==5)  //true not seeting there data type 
// console.log(5=='5') //true

//(===) but in triple equal too strictly qqual too bolte hai hum isme dono values bhi dekhte hai aur usk data type ko bhi dekhte hai aur uske baad agr dono chez match krti hai to usko true or false dete hai 

// console.log(5===5)//true
// console.log(5==='5')//false yaha pr data type bhi check hota hai


// Not Equal too ---- it means ki equal nahi hai 


// console.log('Not equal to operator')
// console.log(5!=5);//false
// console.log(5 != 6);//true




//there is an bug in the java script is when you provide a value as null after you gettinh to see the type of oeprtaore of the numm then the output is ----'object'

// var myBadMemories = null;
// console.log(myBadMemories);
// console.log(typeof myBadMemories);




/////tthere is a method to change a number to string and string to Number ---------

//First Number to string

// var num = 9;
// console.log(num);
// console.log(typeof num); //it shows number 
// console.log(typeof(num + ""))//its way to change the type of nummber to string
// console.log(typeof String(num));//its  another way to change the type of nummber to string




//Now Second change String to Number


// var num2 = "Ankush";
// console.log(num2);
// console.log(typeof num2);
// console.log(typeof Number(num2));
// console.log(typeof +num2);





//Now here we have a ternary opertror which usese -----------------------


// var age = 10;
//  console.log(age >= 18 ? "yes" : "no");




 ////there is some trickey questions are




 //now we have a Loop statement


  


 ///Function 


 var num1 = 30 ;
 var num2 = 40 ;

 var result = num1 + num2
//   return (result);
//   console.log(result);


  function sum (a,b){
   return a +b;
  }

  console.log(sum(30,50));
  console.log(sum(80,90));




  // there is somethinh function declaration and function invocation 


// this is function declaration
  function greets (){
    console.log("I this is an Ankush Mishra")

  }




  // function invocation menas function ko call krna 
greets();
greets();
greets();
greets();



//there is something  in this Topic "Parameter" and "Argumnets"



// agr me function ko jab declare krta hu  aur usme () parentheses me jo pass krta hu usko parameter bolte hai auur jb me usi function ko call krta hu to us tym jo parantes me pass krtr hai usko "Arguments"


function sum (a,b){  //yhe ha parenthese me parameter 
    return(a+b);
}

sum(30,40);// yhe h paranthese me argumenst



//EXAMPLES


function namePerson (greets){
    console.log("hello welcome " + greets );

}

namePerson("Ram");
namePerson("Shyam");



//there is something we can call function exprssion


var result =  function sum (a,b){
    console.log(a+b);
   }



   result(10,30); //isko k=hi hum anannymus function aur fat arrow function bhi bol skte hai 


   //example of ananymous function
   /--isme bs itna diffrence hai function expression se  ki isme function ka name ni doge to bhi koe plm ni hai varialbe name se function ko accese kiya  ja sakta hai --/

   var result =  function (a,b){
    console.log(a+b);
    return ///keyword use krne ka matlb hota hai function will end now isko use krne ke baad koe function ke aage ka code run ni hota hai wo returen ko dekh kr block of code se baahr a ajata hai
   }
   result(10,30);


   ///there is somthing where functionn will call automatically at one time okay 
//    without any function call

(   function sum(a,b){
    console.log( a+b);
   })(30,50);


   //another way

var result =   (   function sum(a,b){
    console.log( a+b);
   })(30,50);


   // tamplate string 

   var n1 ="rohit";
   var n2 ="Dubey";

   var result1 = n1 + n2;//old way to code 
   console.log(result1);

   var result2 = `${n1} ${n2}`; //new way to code
   console.log(result2);


   //there is a most important question in "Array"
 // waise to hum log kehte hai ki arrya me similar type of data store hota hai but relaity me string , number , booloen , yeh sb store hota hai hum kr skte hai , but ek problem jb ap array ko loop me daaloge aur achank se lopp me charcter ki jalh number aa gya to loop stuck ho jaega apko erro through kr dega 

 //EXample

 var arr = ["Shiv" , "Shambhu", "Ganesh" , "Parvati Maa", "Kamakhaya Maa" , 1, "Nandi", "Kartikeye"]
 console.log(arr);///dekho agr isme achnk se loop me number aa jaatga to plm crete ho skti hai  
 

 //Updates the array 

 var arr =["Ram" , "Shyam" , "VAAM" 
 ];
  arr[2] = "Orange";
  console.log(arr);

 

  //"for of" and "For in" yaha the doo naye tarike hai loop chlaane me agr "for of " use krte ho to uska mtlb hota hai ki jo bhi array me value hai wo aaega aur agr ""  ,
   