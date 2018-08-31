import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pluralize'
})
export class PluralizePipe implements PipeTransform {

  transform(value: number, singlularWord: string, pluralWord: string): string {
    return value === 1 ? singlularWord : pluralWord;
  }
}
