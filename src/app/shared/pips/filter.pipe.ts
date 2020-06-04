import { Pipe, PipeTransform } from '@angular/core';
import { Category } from '../interfaces/category.interface';

@Pipe({name: 'filter'})

export class filterData implements PipeTransform {
  transform(list: Category[] , searchValue: string ): any {
      if(searchValue != null)
        {return list.filter(item => item.CategoryName.toLowerCase().includes(searchValue.toLowerCase())); }
      else{
        return list;
      }
  }
}
