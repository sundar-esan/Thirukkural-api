
async function getdata(){

    var num=document.getElementById('randomNumber').value;
  console.log(num);
    var res= await fetch(`https://api-thirukkural.vercel.app/api?num=${num}`)
    var result= await res.json();
    console.log(result);
    

   //getting thirukkural in tamil & displayed in console
   let line1 = result.line1;
   let line2 = result.line2;

   console.log(line1);
   console.log(line2);

     //getting tamil explaination in console 

     var tamexp= result.tam_exp;
     console.log(result.tam_exp);

     //getting thirukkural in english & displayed in console
     var eng=  result.eng;
     console.log(result.eng);

     //getting english explaination in console 

     var engexp= result.eng_exp;
     console.log(result.eng_exp);
     // displayed all the data in following html div elements


     document.getElementById('line1').innerHTML =line1;
     document.getElementById('line2').innerHTML =line2;
     document.getElementById('tamilexp').innerHTML=tamexp;
     document.getElementById('english').innerHTML =eng;
     document.getElementById('englishexp').innerHTML=engexp;
     
     
    }

