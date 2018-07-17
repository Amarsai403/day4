import { Directive,TemplateRef,ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appDelayDirective]'
})
export class DelayDirectiveDirective {
  constructor(private templateRef:TemplateRef<any>,
    private viewcontainerRef:ViewContainerRef;
    ) { }
  @Input() set appDelayDirective(time:number){
    setTimeout(()=>{
        this.viewcontainerRef.createEmbeddedView(this.templateRef);
    },time);
  }
}
