import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public pokemons: any[] = [];

  constructor(
    private httpService: HttpService
  ) { }

  getPokemon() {
    this.httpService.getPokemon().subscribe((data: any) => this.pokemons = data.results)
  }

  ngOnInit() {
    this.getPokemon()

  }

  showPokemon(id: number) {
    console.log('id do pokemon: ' + id)

  }

}
