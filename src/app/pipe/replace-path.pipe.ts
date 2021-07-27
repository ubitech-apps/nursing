import { Pipe, PipeTransform } from '@angular/core';
import { Address } from '../address';

@Pipe({
  name: 'replacePath'
})
export class ReplacePathPipe implements PipeTransform {
  constructor(private add: Address){}
  transform(value: any) {
    value = value?.replaceAll("/jab_demo", `${this.add.api}jab_demo`);
    value = value?.replaceAll("jab_demo", `${this.add.api}jab_demo`);
    value = value?.replaceAll(`${this.add.api}${this.add.api}jab_demo`, `${this.add.api}jab_demo`);
    return value;
  }

}
