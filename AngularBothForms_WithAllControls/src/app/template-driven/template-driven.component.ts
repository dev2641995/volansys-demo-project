import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styles: [
    `input.ng-invalid.ng-touched {
      border : 1px red solid
    }
    .error {
      color : red
    }`
  ]
})
export class TemplateDrivenComponent implements OnInit, AfterViewInit {

  @ViewChild('f') signUpForm: NgForm;

  genders: Array<string> = ['male', 'female'];
  hobbies: Array<Object> = [
    {
      name: 'Reading',
      checked: false
    }, {
      name: 'Swimming',
      checked: true
    }, {
      name: 'Music',
      checked: false
    }, {
      name: 'Gaming',
      checked: true
    }
  ];

  defaultUserDetails: { userDetails: { fname: string, lname: string }, mno: string, gender: string, hobby: Object, price: string } = {
    userDetails: {
      fname: 'Max',
      lname: 'William'
    },
    mno: '0123456789',
    gender: 'male',
    hobby: {
      "Swimming": true,
      "Gaming": true
    },
    price: "100"
  };

  ngOnInit() {
    console.log("===ngOnInit===");
    this.signUpForm.valueChanges.subscribe(
      (value) => {
        console.log(value);
      }
    );
    this.signUpForm.statusChanges.subscribe(
      (status) => {
        console.log(status);
      }
    );
  }

  ngAfterViewInit() {
    console.log("===ngAfterViewInit===");
    console.log(this.signUpForm);
  }

  onSubmit(form: NgForm) {
    console.log("===Submited===");
    console.log(form);
    console.log(form.value);
  }

  setFormDefaultValue() {
    // this.signUpForm.setValue({
    //   userDetails: {
    //     fname: 'Maxi',
    //     lname: ''
    //   },
    //   mno: '',
    //   gender: 'male',
    //   hobby: {        
    //     Reading: true,
    //     Swimming: true,
    //     Music: true,
    //     Gaming: true
    //   },
    //   price: "50"      
    // });

    // this.signUpForm.form.setValue({
    //   userDetails: {
    //     fname: 'Maxi',
    //     lname: ''
    //   },
    //   mno: '',
    //   gender: 'male',
    //   hobby: {        
    //     Reading: true,
    //     Swimming: true,
    //     Music: true,
    //     Gaming: true
    //   },
    //   price: "50"      
    // });

    this.signUpForm.form.patchValue({
      userDetails: {
        fname: 'Rebecca'
      },
      gender: 'female',
      hobby: {
        Reading: true,
        Swimming: false,
        Music: true,
        Gaming: false
      },
      price: "50"
    });
  }

}
