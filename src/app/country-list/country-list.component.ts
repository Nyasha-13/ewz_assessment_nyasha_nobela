import { Component } from '@angular/core';

import { countries } from '../countries';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent {
  countries = countries;

  share() {
    window.alert('The country has been shared!');
  }
}


