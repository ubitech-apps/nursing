import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'htmlSpecial',
})
export class HtmlSpecialPipe implements PipeTransform {
  transform(value: any): any {
    value = value.replaceAll('__ampersandsignamp;', '&');
    value = value.replaceAll('__ampersandsign', "'");
    value = value.replaceAll('nbsp;', ' ');
    value = value.replaceAll('rsquo;', ' ');
    value = value.replaceAll('rsquo;', ' ');
    value = value.replaceAll('lsquo;', ' ');

    return value;
  }
}
