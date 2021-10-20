import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'form-submission';
  @ViewChild('f') signUpForm!: NgForm;
  ans = "";
  genders = ["Male", "Female", "LGBTQ+", "Prefer not to say"];
  submitted = false;
  user = {
    username: '',
    pass: '',
    email: '',
    phone: '',
    secretQuestion: '',
    answer: '',
    gender: '',
    job: '',
    jobDes: '',
    salary: '',
  }

  suggestUserName() {
    const suggestedName = 'Superuser';
    this.signUpForm.form.patchValue({
        userData: {
          username: suggestedName
      },
    });
  }

  onSubmit(){
    this.submitted = true;
    this.user.username = this.signUpForm.value.userData.username
    this.user.pass = this.signUpForm.value.userData.pass
    this.user.email = this.signUpForm.value.userData.email
    this.user.phone = this.signUpForm.value.userData.phone
    this.user.secretQuestion = this.signUpForm.value.otherInfo.secret
    this.user.answer = this.signUpForm.value.otherInfo.ans
    this.user.gender = this.signUpForm.value.otherInfo.gender
    this.user.job = this.signUpForm.value.otherInfo.job
    this.user.jobDes = this.signUpForm.value.otherInfo.jobDes
    this.user.salary = this.signUpForm.value.otherInfo.salary

    this.signUpForm.reset();
  }
}

