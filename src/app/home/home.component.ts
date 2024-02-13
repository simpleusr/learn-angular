import { Component, inject } from '@angular/core';
import { PhotoItemComponent } from '../photo-item/photo-item.component';
import { CommonModule } from '@angular/common';
import { PhotoItem } from '../photo-item';
import { PhotoItemsService } from '../photo-items.service';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PhotoItemComponent,CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  offset = 0;

  limit = 10;

  photoItemList: PhotoItem[] = [];
  
  constructor (private photoItemsService: PhotoItemsService  ) {

    /* this.photoItemsService.getAllPhotoItems2(0,10).then((photoItemList : PhotoItem[]) => {
        this.photoItemList = photoItemList;
    }); */

    this.search(0, 10);

  }


  search(offset: number, limit: number){
    

    console.log(`offset : ${offset},  limit: ${limit}`)
    this.photoItemsService.getAllPhotoItems(offset,limit).then((photoItemList : PhotoItem[]) => {
      this.photoItemList = photoItemList;
  });
  }

 

}
