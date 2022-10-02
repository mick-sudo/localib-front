import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CarsService } from '../cars/cars.service';

@Component({
  selector: 'app-cars-form',
  templateUrl: './cars-form.component.html',
  styleUrls: ['./cars-form.component.css']
})
export class CarsFormComponent implements OnInit {

carForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
   private carsService: CarsService) { }

  ngOnInit(): void {
    this.carForm = this.formBuilder.group({
      marque: [null],
      modele: [null],
      immatriculation: [null],
      prix: [null],
      etat: [null],
      type: [null],
    })
  }

  onSubmitCars(){
    console.log(this.carForm.value);
    this.carsService.addCars(this.carForm.value).subscribe();
  }
}
