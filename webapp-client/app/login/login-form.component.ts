import {Component} from 'angular2/core';
import {NgClass} from 'angular2/common';
import {LoginParams} from './login-form.model';
import {LoginService} from './login-form.service';
import {EmailValidator} from '../helpers/email-validator';

@Component({
    selector: 'login-form',
    templateUrl: './app/login/login-form.component.html',
    styles:[`.active {background-color: red;}`],
    directives: [NgClass]
})

export class LoginFormComponent {
    constructor (private _loginService: LoginService, private _emailValidator: EmailValidator) {}

    params: LoginParams = new LoginParams();
    serverResponse: string = '';
    isValidEmail: boolean = false;

    onLoginSubmit() {
        this._loginService.submitLogin(this.params)
            .subscribe(
                res => this.serverResponse = res,
                error => this.serverResponse = <any>error);
    }

    onEmailKey() {
        this.isValidEmail = this._emailValidator.isValidEmail(this.params.email);
    }

    get diagnostic() { return JSON.stringify(this.params) }
}