import { Component, OnInit } from '@angular/core';
import { Car } from './car';
import { CarsService } from './cars.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  carsList: Car[] | undefined;

  constructor(private carsService: CarsService) { }

  ngOnInit(): void {
    this.carsService.getCars().subscribe((carsList) => (this.carsList = carsList))
  }

}
