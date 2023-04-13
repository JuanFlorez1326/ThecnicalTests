import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ComicsComponent } from './components/comics/comics.component';
import { DetailedComponent } from './containers/detailed/detailed.component';
import { HomeComponent } from './containers/home/home.component';
import { MarvelRoutingModule } from './marvel-routing.module';
import { StoriesComponent } from './components/stories/stories.component';
import { CardCharactersComponent } from './components/card-characters/card-characters.component';
import { TableCharactersComponent } from './components/table-characters/table-characters.component';
import { EffectsModule } from '@ngrx/effects';
import { CharactersEffects } from './marvel-store/characters/characters.effects';
import { StoriesEffects } from './marvel-store/stories/stories.effects';
import { ComicsEffects } from './marvel-store/comics/comics.effects';

@NgModule({
  declarations: [
    CardCharactersComponent,
    ComicsComponent,
    StoriesComponent,
    DetailedComponent,
    HomeComponent,
    TableCharactersComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MarvelRoutingModule,
    MaterialModule,
    EffectsModule.forFeature([
      CharactersEffects,
      StoriesEffects,
      ComicsEffects
    ])
  ]
})
export class MarvelModule {}