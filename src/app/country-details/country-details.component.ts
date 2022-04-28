import { Country, countries } from '../countries';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent implements OnInit {

  country: Country | undefined;
  constructor(private route: ActivatedRoute) { }
  
  ngOnInit(): void {
      // First get the country id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const countryIdFromRoute = Number(routeParams.get('countryId'));

    // Find the country that correspond with the id provided in route.
    this.country = countries.find(country => country.id === countryIdFromRoute);
    }


}
