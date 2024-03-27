import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
  standalone: true
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, length:number = 50): unknown {
    // value.slice(0, length)
    return value && value.length > length ? value.slice(0, length) + "…" : value;
  }

}
