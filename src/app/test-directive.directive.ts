import { Directive,ElementRef ,HostListener,Input, text} from '@angular/core';

@Directive({
  selector: '[appTestDirective]'
})
export class TestDirectiveDirective {
clicked:boolean=false;
@Input() backgroundColor:string;
@Input() textColor:string;
  constructor(private el: ElementRef) {
    }
   @HostListener('click') onMouseClick(){
    this.clicked=!this.clicked;
    if(this.clicked)
    this.performOps(this.backgroundColor,this.textColor);
    else
    this.performOps('white','black');
  } 
  @HostListener('mouseenter') onMouseEnter() {
    this.performOps('yellow','black');
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.performOps('white','black');  
  }
   performOps(primary,secondary){
    this.el.nativeElement.style.backgroundColor=primary;
    this.el.nativeElement.style.color=secondary;
   }
}
