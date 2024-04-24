import { Directive, Input, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlightColor]'
})
export class HighlightColorDirective {

  @Input() appHighlightColor = '';

  //This declares an input property named appHighlightColor which allows you to pass a color value to the directive from the component's template.

  constructor(private el:ElementRef) {

   }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appHighlightColor);

    //due to property binding in app component html the color from app component will be assigned here which will use used in highlight method when mouse enters
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
