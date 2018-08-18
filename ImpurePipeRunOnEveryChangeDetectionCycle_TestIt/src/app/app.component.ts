import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  heros = [
    { name: "A", canFly: true },
    { name: "B", canFly: false },
    { name: "C", canFly: true },
    {name : "D", canFly : false}
  ];

  object: Object = { foo: 'bar', baz: 'qux', nested: { xyz: 3, numbers: [1, 2, 3, 4, 5] } };
  
  str: string = "Darshan";

  constructor() { 
    setTimeout(() => { 
      this.str = "Darshan Trambadiya";
    },3000);
  }

  funcAddHero(getVal) { 
    this.heros.push({name : getVal, canFly:true});
  }

  funcClick() { 
    console.log("CLICKED CALL...");
  }

}
