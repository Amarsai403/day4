import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'testP',
  pure: true
})
export class TestPPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.filter(goods=>goods.type=='fruit');
  }

}
