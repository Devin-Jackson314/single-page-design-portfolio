import { Component, OnInit } from '@angular/core';
//import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.css']
})
export class MyWorkComponent implements OnInit {

  constructor() {
    const slidesContainer = document.getElementById("slides-container");
    const slide = document.querySelector(".slide");
    const prevButton = document.getElementById("slide-arrow-prev");
    const nextButton = document.getElementById("slide-arrow-next");
  if (nextButton != null && slide != null && slidesContainer != null)
  nextButton.addEventListener("click", (event) => {
  const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft += slideWidth;
  });
  else if (prevButton != null && slide != null && slidesContainer != null)
  prevButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
}); 
    
  }
    ngOnInit():void {
 
   }

  
    
     

  

}





