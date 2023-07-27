import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../../service/gifs.service';

@Component({
  selector: 'gift-search-box',
  template: `
  <h5>Buscar:</h5>
  <input type="text"
  class="form-control"
  placeholder="buscar gift..."
  (keyup.enter)="searchTag(  )"
  #txtTagInput>
  `
})

export class SearchBoxComponent {

  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor( private gifsService: GifsService) {

  }

  searchTag(  ) {

    const newTag =  this.tagInput.nativeElement.value;
    this.gifsService.searchTag( newTag );
    this.tagInput.nativeElement.value = '';

  }

}
