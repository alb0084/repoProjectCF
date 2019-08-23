var targetDiv = document.getElementById('content');

const aboutMe=   `Hello,</br> My name is Alberto and i am  software developer for 2 years. Recently  
                  i've approached some front-end tools such as angular,react,vue and surfing on the web
                  i have found an Intensive  Bootcamp course regarding the lates technolgy for web development organized by F&C. 
                  About this Initiative, i think that could be a great opportunity to level up my skills with your support and
                  to try a new great experience for working in London.
                  I looking forward to talking again soon. 
                  happy coding everybody :) </br>Alb0084 ` 

function populateData(event){
  switch(event.getAttribute('value')){ 
    case 'A':{
     htmlContent = '<object style="width: -webkit-fill-available;" type="text/html" data=" ./carousel.html "></object>';
      break;
    }
    case 'B':{
      htmlContent =  `<h1>${aboutMe}</h1>`;
break;
    }
  }
  targetDiv.innerHTML = htmlContent;
}