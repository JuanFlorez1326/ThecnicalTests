import { Component, OnInit } from '@angular/core';

import { ResultCharacter } from '../../interfaces/characters.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { MarvelState } from '../../marvel-store/marvel.state';
import { LoadCharacters } from '../../marvel-store/characters/characters.actions';
import  * as fromReducers  from '../../marvel-store/characters/characters.reducers';
import { DisplayedColumns } from '../../components/table-characters/display-columns';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit  {

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly store: Store<MarvelState>
  ) {
    this.buildForm();
    this.searchForm.valueChanges.subscribe( form => {
      this.nameStartsWith = form.nameStartsWith;
      this.limit = form.limit;
    });
  }

  searchForm!: FormGroup;
  limit!: number;
  nameStartsWith!: string;
  showTable: boolean =  true ? true : false;
  displayedColumns: string[] = Object.values(DisplayedColumns);
  alphanumericRegex: RegExp = /^[a-zA-Z0-9- .()]*$/;
  characters$: Observable<ResultCharacter[]> = new Observable<ResultCharacter[]>();

  ngOnInit(): void {
    this.store.dispatch( new LoadCharacters())
    this.characters$ = this.store.select( fromReducers.selectCharacters )
  }

  private buildForm(): void {
    this.searchForm = this.formBuilder.group({
      nameStartsWith: ['', [ Validators.required, Validators.pattern(this.alphanumericRegex) ]],
      limit: [1, [ Validators.required, Validators.min(1), Validators.max(10) ]]
    });
  }

  saveForm(): void {  
    if (this.searchForm.valid) {
      const { nameStartsWith, limit } = this.searchForm.value;
      this.nameStartsWith = nameStartsWith;
      this.limit = limit;
      //this.searchCharacters();
    }
  }

  // searchCharacters(): void {
  //   this.subscription.add( 
  //     this.marvelService.searchCharacter(this.nameStartsWith, this.limit)
  //     .pipe< ResultCharacter[] > ( map( (res: any ) => res.data.results ) )
  //     .subscribe(
  //       ( characters: ResultCharacter[] ) => {
  //         this.characters$ = characters;
  //       }
  //     )
  //   );
  // }
}