import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.filter(item => {
      return item.name.toLowerCase().includes(args.toLowerCase())
        || item.content.toLowerCase().includes(args.toLowerCase());
    })
  }

}
