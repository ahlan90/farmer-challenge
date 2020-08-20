import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { tap, debounceTime, map, distinctUntilChanged } from 'rxjs/operators';

import { FarmerSearchAbstractProvider } from '../providers/farmer-search-abstract.provider';
import { FarmerService } from '../services/farmer.service';
import { Farmer } from '../models/farmer';

@Component({
  selector: 'farmer-search-card',
  templateUrl: './farmer-search-card.component.html',
  styleUrls: ['./farmer-search-card.component.scss']
})
export class FarmerSearchCardComponent implements OnInit {

  farmerForm: FormGroup = this._formBuilder.group({
    searchInput: '',
    name: '',
    documentNumber: '',
    address: '',
  });

  @Input() farmerSearchAbstractProvider: FarmerSearchAbstractProvider;
  @Output() onPartnerSelectedEvent = new EventEmitter();

  farmers: Farmer[];

  isLoading = false;

  constructor(
    private _formBuilder: FormBuilder,
    private farmerService: FarmerService
  ) { }

  ngOnInit() {

    console.log('Teste', this.farmerForm.get('searchInput'))

    this.farmerForm.get('searchInput').valueChanges.pipe(
      tap(() => this.isLoading = true ),
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe(res => {

      console.log(res);

      this.farmerService.find(res).subscribe(farmers => {
        console.log(farmers);
        this.isLoading = false;
        this.farmers = farmers;
      })
    })
  }

  displayFarmer(farmer: Farmer) {
    return farmer.name;
  }

  setFarmer(farmer: Farmer) {
    this.farmerForm.patchValue({
      name: farmer.name,
      address: farmer.address.address,
      documentNumber: farmer.document.documentNumber
    })
  }
}
