import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roundOf'
})
export class RoundOfPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return Math.round(value);
  }

}
