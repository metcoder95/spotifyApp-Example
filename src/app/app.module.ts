import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { DataTablesModule } from 'angular-datatables';

import { AppRoutingModule } from './app.router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components//about/about.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';
import { AlbumComponent } from './components/album/album.component';
import { ZeroConfigComponent } from './components/zero-config/zero-config.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    SearchComponent,
    ArtistComponent,
    AlbumComponent,
    ZeroConfigComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
