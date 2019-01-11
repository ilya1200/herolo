import { Pipe, PipeTransform } from '@angular/core';


@Pipe({ name: 'engPipe' })
export class EngPipe implements PipeTransform {
  transform(str: string) {
    return str.replace(new RegExp(/[^a-zA-Z ]/, 'g'), '');
  }
}