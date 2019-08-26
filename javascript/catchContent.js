//catch content from id in index.html
var targetDiv = document.getElementById('content');
document.getElementById("idCheckBox").checked=true;
const aboutMe=   `Hello,</br> My name is Alberto and i am  software developer for 2 years. Recently  
                  i've approached some front-end tools such as angular,react,vue and surfing on the web
                  i have found an Intensive  Bootcamp course regarding the latest technolgy for web development organized by F&C. 
                  About this Initiative, i think that could be a great opportunity to level up my skills with your support and
                  to try a new great experience for working in London.
                  I looking forward to talking again soon. 
                  happy coding everybody :) </br>Alb0084 ` 
//function that re-render content taking the event from carousel/About Me  
function populateData(event){
  switch(event.getAttribute('value')){ 
    case 'A':{
     htmlContent =`
     <div id="content" style="width:100%">
        <div id=subContent>
            <h3 style= " text-align:center; font-family: cursive; margin-bottom: 0px;">
                  Welcome in my site demo project C&F</h3>
            <object style="width: 1070px; height:530px;" type="text/html" data="./carousel/carousel.html "></object>
        </div>
     </div>
     `;
      break;
    }
    case 'B':{
      htmlContent = `  
      <div id="content" style="width:100%">
        <div id=subContent>
                <h3 style=" text-align: center; font-family: cursive; margin: 0 0px 0 0;">
                  Welcome in my site demo project C&F</h3>
                <h1 style="width: 1056px;">
                  ${aboutMe}
                </h1>  
            </div>   
      </div>      
            `
break;
    }
  }
  targetDiv.innerHTML = htmlContent;
}