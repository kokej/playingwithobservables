import { Component, OnInit } from '@angular/core';
import { AppService }        from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(
    private _service: AppService
  ){}
  endpoints:string[] = ['/comments', '/photos']
  comments: any[];
  photos: any[];
  error: string;

  fetchData(url){

    this._service.getAPIResults(url).subscribe({
      next: (value) => this[url.slice(1, url.length)] = value,
      error: (err) => this.error = err
    })
  }

  ngOnInit(){
    this.endpoints.forEach(function(item, index){
      this.fetchData(item);
    }.bind(this))   
  }

}
