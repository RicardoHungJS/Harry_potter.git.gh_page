import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultadoWizard = [];
    for(const post of value){
      if(post.name.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultadoWizard.push(post);
      };
    };
    return resultadoWizard;
  }

}
