import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DeveloperService } from '../developer.service';
import {OfficeLocation} from '../office.location';
import {WeatherService} from '../weather.service';
import {Observable} from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/mergeMap';



@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.scss'],
  providers: [WeatherService]
})
export class WeatherWidgetComponent implements OnInit {
  temperature: string;
  weatherStatus: string;
  results: any;
  location: OfficeLocation;
  constructor(
    private route: ActivatedRoute,
    private developerService: DeveloperService,
    private weatherService: WeatherService
    ) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.developerService.getDeveloper(id).subscribe(developer => this.location = developer.location  );
  }
  getWeather() {
    if (this.location) {
      this.weatherService.getWeather(this.location)
        // .map(weather => weather.weather)
        // .flatMap(weather => weather)
        // .map(weather => weather.main)
        .subscribe(res => (this.results = res , this.temperature = res.main.temp, this.weatherStatus = res.weather[0].description));
    }
    // this.weatherService.getWeather().subscribe(weather => { this.weatherObs = weather, console.log('weatherObs:' + weather); });
  }

}
