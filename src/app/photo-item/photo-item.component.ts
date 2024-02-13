import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoItem } from '../photo-item';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-photo-item',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './photo-item.component.html',
  styleUrl: './photo-item.component.css'
})
export class PhotoItemComponent {

  @Input() photoItem!: PhotoItem;

}
