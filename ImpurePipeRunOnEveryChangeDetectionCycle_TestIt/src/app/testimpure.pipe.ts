import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'testimpure',
  pure : false
})
export class TestimpurePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log("PIPE CALLED...");
    return (value.filter((oneHero) => oneHero.canFly));
  }

}
