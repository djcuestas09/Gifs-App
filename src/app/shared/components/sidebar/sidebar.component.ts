import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/service/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor( private gifsService: GifsService ) {}

  get Tags(): string[] {
    return this.gifsService.tagsHistory;
  }

  searchTag( tag: string ) {
    this.gifsService.searchTag( tag );
  }

}
