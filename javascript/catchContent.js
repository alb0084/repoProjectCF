var targetDiv = document.getElementById('content');



function populateData(event){
  switch(event.getAttribute('value')){ 
    case 'A':{
     htmlContent = '<object style="width: -webkit-fill-available;" type="text/html" data="../carousel/carousel.html" ></object>';
      break;
    }
    case 'B':{
      htmlContent = "content for B";
break;
    }
  }
  targetDiv.innerHTML = htmlContent;
}