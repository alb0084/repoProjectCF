//catch content from id in index.html
var targetDiv = document.getElementById('content');
document.getElementById("idCheckBox").checked=true;
const aboutMe=   `<span style = " font-family: 'Dancing Script', cursive;" >
                  Hello ,</br> 
                  My name is Albert and i am  software developer for 2 years. Recently, i've approached some front-end tools 
                  such as Angular, React, Vue and surfing on the web
                  i have found an Intensive  Bootcamp course concerning the latest technology for Web Development organized by F&C. 
                  About this Initiative, i think that could be a great opportunity to level up my skills with your support and
                  to try a new great experience for working in London.
                  I looking forward to talking again soon. 
                  happy coding everybody </span>:)
                  </br> <span style =" font-family: autograf_personal_use_onlyRg ;"> Albert Cerea </span>` 
//function that re-render content taking the event from carousel/About Me  
function populateData(event){
  switch(event.getAttribute('value')){ 
    case 'A':{
     htmlContent =`
     <div id="content" style="width:100%">
        <div id=subContent>
            <h3 style= " text-align:center; font-family: cursive; margin-bottom: 0px; 
            ">
                  Carousel</h3>
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
                  About Me... 
                </h3>
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