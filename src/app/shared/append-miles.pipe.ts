import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appendMiles'
})
export class AppendMilesPipe implements PipeTransform {

  transform(value: string,): string {
    return `${value} miles`;
  }

}
