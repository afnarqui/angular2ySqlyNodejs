import { Component, OnInit } from '@angular/core';
import { datosService } from  '../datos.service';

@Component({
    selector: 'opa-datos',
    templateUrl: './datos.component.html',
    styleUrls: ['./datos.component.css']
})
export class datosComponent implements OnInit {
    public nombre: string = 'este es el componente opa-datos'
    public lista = [];
    constructor(private datosservice: datosService){

    }

    ngOnInit() {
        this.datosservice.getDatos()
            .subscribe(
                resp => this.lista = resp,
                error => console.log(error),
                () => console.log(this.lista)
            )
    }
}
