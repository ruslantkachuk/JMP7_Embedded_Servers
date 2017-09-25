import {Injectable}     from 'angular2/core';
import {Http, Response, Headers, RequestOptions} from 'angular2/http';
import {LoginParams}    from './login-form.model';
import {Observable}     from 'rxjs/Observable';

@Injectable()
export class LoginService {
    constructor (private http: Http) {}

    private _loginUrl = 'api/auth/login';  // URL to web api

    submitLogin(params: LoginParams) {
        let body = JSON.stringify(params);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this._loginUrl, body, options)
                .map(res => <string> res.text())
                .do(data => console.log(data))
                .catch(this.handleError);
    }

    private handleError (error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}