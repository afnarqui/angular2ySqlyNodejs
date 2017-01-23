import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class datosService {
    url: string = 'http://localhost:8000/datos';
    constructor(private http: Http){
    }
    getDatos() {
        return this.http.get(this.url)
            .map(resp => resp.json())
    }
}

