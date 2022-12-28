import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) return [];
    if (!searchText) return items;
    return items.filter(item => {
      return Object.keys(item).some(key => {
        let f1:boolean=String(item['springName']).toLowerCase().includes(searchText.toLowerCase())
        let f2:boolean=String(item['name']).toLowerCase().includes(searchText.toLowerCase())
        return f1 || f2;
         
      });
    });
   }
}
