import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PhotoItemsService } from '../photo-items.service';
import { PhotoItem } from '../photo-item';

@Component({
  selector: 'app-photo-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './photo-details.component.html',
  styleUrl: './photo-details.component.css'
})
export class PhotoDetailsComponent {

  photoItem: PhotoItem | undefined;

  constructor (private route: ActivatedRoute,
    private photoItemsService: PhotoItemsService) {

      const id = Number(this.route.snapshot.params['id']);

      photoItemsService.getPhotoItemById(id).then((e : PhotoItem) => {
        this.photoItem = e;
      });
    }

}
