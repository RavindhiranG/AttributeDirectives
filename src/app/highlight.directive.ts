import { Directive, ElementRef, HostListener, Input } from '@angular/core';

      //ng generate directive highlight created directive file in the app folder 
      //In Angular, the @Directive decorator is used to create a directive. Directives are a way to extend the behavior of DOM elements in your Angular applications.
      //One of the most important properties of this configuration object is selector. It specifies the CSS selector that identifies the directive when you use it in a template. In the provided code, the selector is [appHighlight], which means the directive can be used by adding hoverHighlight as an attribute to an HTML element.
@Directive({
  selector: '[appHighlight]'
})

export class HighlightDirective {


       // ElementRef used below in constructor is a service in Angular that provides access to the native element of the component or directive. It is used to obtain a reference to the actual DOM element that the directive is attached to, so that we can manipulate its properties or attributes directly using native DOM APIs or the Renderer2 service.
  constructor(private el:ElementRef) { 
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }

        //  this.el: el is an instance of ElementRef, which represents a reference to the host DOM element to which the directive is attached.
        // this.el.nativeElement: nativeElement property of ElementRef gives direct access to the underlying DOM element.
        // this.el.nativeElement.style: style property provides access to the inline CSS styles of the DOM element.
        // this.el.nativeElement.style.backgroundColor = 'yellow';: This line sets the background color of the element to yellow by directly manipulating its inline CSS styles.


// Handling user events
//HostListener is an even listener
//mouseenter and mouseleave are events

@HostListener('mouseenter') mouseEnter() {
  this.highlight('red');
  //when mouseeneter event occurs Hostlistener listends and invoke the mouseEnter method which
  //then invokes highlight method with string 'red'
}
@HostListener('mouseleave') mouseOver() {
  this.highlight('');
  //when moveleaves the hostlistener listens and invoke the mouseOver method
  //which invokes highlight method with empty string no color will be shown
}

private highlight(color:string) {
  this.el.nativeElement.style.color=color;
}
// event listeners and the highlight() method allow the directive to change the text color of the host element when the mouse enters or leaves it.
//string from above hostlistener will enter in the method and assigned to color and thats how color is changing

}

