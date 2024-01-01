//modal code
$(document).ready(function() 
{ 
$("#myModal").modal('hide'); 
}); 

//popover  code
$(function(){
$('[data-toggle="popover"]').popover ()
})

//tooltip code
$(function(){
$('[data-toggle="tooltip"]').tooltip()
})

//toggle question code 
$(document).ready(function() 
{ 

$("#shbtn0").click(function() 
{ 

$("#d0").toggle(); 

}); 

}); 


//toggle question code 1
$(document).ready(function() 
{ 

$("#shbtn").click(function() 
{ 

$("#d1").toggle(); 

}); 

}); 

//toggle question code 2
$(document).ready(function() 
{ 

$("#shbtnn").click(function() 
{ 

$("#d11").toggle(); 

}); 

}); 

//toggle question code 3
$(document).ready(function() 
{ 

$("#shbtn3").click(function() 
{ 

$("#d3").toggle(); 

}); 

}); 

//toggle question code 4
$(document).ready(function() 
{ 

$("#shbtn4").click(function() 
{ 

$("#d4").toggle(); 

}); 

}); 

//toggle question code 5
$(document).ready(function() 
{ 

$("#shbtn5").click(function() 
{ 

$("#d5").toggle(); 

}); 

}); 

//toggle question code 6
$(document).ready(function() 
{ 

$("#shbtn6").click(function() 
{ 

$("#d6").toggle(); 

}); 

}); 

//toggle question code 7
$(document).ready(function() 
{ 

$("#shbtn7").click(function() 
{ 

$("#d7").toggle(); 

}); 

}); 

//toggle question code 8
$(document).ready(function() 
{ 

$("#shbtn8").click(function() 
{ 

$("#d8").toggle(); 

}); 

}); 

//toggle question code 9
$(document).ready(function() 
{ 

$("#shbtn9").click(function() 
{ 

$("#d9").toggle(); 

}); 

}); 

//toggle question code 10
$(document).ready(function() 
{ 

$("#shbtn10").click(function() 
{ 

$("#d10").toggle(); 

}); 

}); 

//toggle question code 12
$(document).ready(function() 
{ 

$("#shbtn12").click(function() 
{ 

$("#d12").toggle(); 

}); 

}); 

//toggle question code 13
$(document).ready(function() 
{ 

$("#shbtn13").click(function() 
{ 

$("#d13").toggle(); 

}); 
}); 

$(document).ready(function(){
$("h5").animate({
color: "teal"
});
});

//Previous page 
function equatorialGuinea(){
open("https://salmandascript.github.io/EquatorialGuinea/EquatorialGuinea.html");
}

function eswatini(){
open("https://salmandascript.github.io/Eswatini/Eswatini.html");
}


//quizz questions code 
function checkAnswer()
  {
   var totQuestion = 13;

   var ansQuestion = 0;

   var rightAns = 0;

   for (var i = 1; i <= totQuestion; i++)
   {
    var elem = document.getElementsByName("q" + i);

    for (var j = 0; j < elem.length; j++)
    {
     if (elem[j].checked)
     {

      ansQuestion++;

      if (elem[j].dataset.answer == 1)
      {
       rightAns++;
      }

     }
    }
   }

   if (ansQuestion != totQuestion)
   {
    alert("Please answer all questions");
   }
   else
   {
    alert("Your Score is " + rightAns + " Out Of " + totQuestion);
   }
  }
  //quizz question code end 
  