import { Injectable } from '@angular/core';
import { PhotoItem } from './photo-item';


@Injectable({
  providedIn: 'root'
})
export class PhotoItemsService {

  async getAllPhotoItems(offset: number, limit: number): Promise<PhotoItem[]> {
    const url = `https://api.slingacademy.com/v1/sample-data/photos?offset=${offset}&limit=${limit}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Error occured in fetch. Status: ${response.status} `);
    }

    const responseBody = await response.json();

    if (! responseBody.success) {
      throw new Error(`Error occured in fetch. Message: ${responseBody.message}`);
    }

    return await responseBody.photos;

  }

  async getPhotoItemById(id: number): Promise<PhotoItem> {
    const response = await fetch(`https://api.slingacademy.com/v1/sample-data/photos/${id}`);

    if (!response.ok) {
      throw new Error(`Error occured in fetch. Status: ${response.status} `);
    }

    const responseBody = await response.json();

    if (! responseBody.success) {
      throw new Error(`Error occured in fetch. Message: ${responseBody.message}`);
    }

    return await responseBody.photo;
  }


 

  constructor() { }
}
