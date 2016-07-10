import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'slider'
})
export class SliderPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.filter(item => {
      return item.start >= +args;
    })
  }

}
