import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { TerrenoService } from 'src/app/sevices/terreno.service';

@Component({
  selector: 'app-add-terreno',
  templateUrl: './add-terreno.component.html',
  styleUrls: ['./add-terreno.component.css']
})
export class AddTerrenoComponent implements OnInit {
  terreno={
    idTerreno:0,
    dimesion:'',
    barrio:'',
    callePrincipal:''
  }
  constructor(private terrenoService:TerrenoService) { }

  ngOnInit(): void {
  }
  guardarTerreno():void{
    const data={
    idTerreno:this.terreno.idTerreno,
    dimension:this.terreno.dimesion,
    barrio:this.terreno.barrio,
    callePrincipal:this.terreno.callePrincipal
    }
    this.terrenoService.crear(data).subscribe(
      response=>{
        console.log(response);
      },
      error=>{
        console.log(error);
      }
    )
  }
}
