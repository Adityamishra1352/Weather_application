import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  weatherApiUrl = 'https://open-weather13.p.rapidapi.com/city';
  XRapidAPIHostHeaderName = 'X-RapidAPI-Host';
  XRapidAPIHostHeaderValue = 'open-weather13.p.rapidapi.com';
  XRapidAPIKeyName = 'X-RapidAPI-Key';
  XRapidAPIKey = '41504d3fcfmshc280d8d7bdf5f6ep1b1e84jsn5bac479d6753';

  constructor(private http: HttpClient) { }

  getWeatherData(cityName: string) {
    const headers = new HttpHeaders()
      .set(this.XRapidAPIHostHeaderName, this.XRapidAPIHostHeaderValue)
      .set(this.XRapidAPIKeyName, this.XRapidAPIKey);

    const url = `${this.weatherApiUrl}/${cityName}`;

    const params = new HttpParams()
      .set('units', 'metric')
      .set('mode', 'json');

    return this.http.get(url, { headers, params });
  }
}
