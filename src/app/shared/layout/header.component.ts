import { Component, OnInit } from '@angular/core';

//import { User } from '../models';
import { UserService } from '../services';
declare var $: any;
@Component({
  selector: 'layout-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  constructor(
    private userService: UserService
  ) {}

  //currentUser: User;

  ngOnInit() {
    
  }
  ngAfterViewChecked() {
   // let self=this;
    $( "#tabs-1" ).tabs();
   
    $('ul.tab').each(function () {
      // For each set of tabs, we want to keep track of
      // which tab is active and its associated content
      var $active, $content, $links = $(this).find('a');
  
      // If the location.hash matches one of the links, use that as the active tab.
      // If no match is found, use the first link as the initial active tab.
      $active = $($links.filter('[href="' + location.hash + '"]')[0] || $links[0]);
      $active.addClass('active');
  
      $content = $($active[0].hash);
  
      // Hide the remaining content
      $links.not($active).each(function () {
        $(this.hash).hide();
      });
  
      // Bind the click event handler
      $(this).on('click', 'a', function (e) {
        // Make the old tab inactive.
        $active.removeClass('active');
        $content.hide();
  
        // Update the variables with the new link and content
        $active = $(this);
        $content = $(this.hash);
  
        // Make the tab active.
        $active.addClass('active');
        $content.show();
  
        // Prevent the anchor's default click action
        e.preventDefault();
      });
    });

}
  showLogin(modelId){
    // Get the modal
    var modal = document.getElementById(modelId);
    modal.style.display = "block";

     // When the user clicks anywhere outside of the modal, close it
     window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }
  }

  closeModel(modelId){
    // Get the modal
    var modal = document.getElementById(modelId);
    modal.style.display = "none";
 
  }
}
