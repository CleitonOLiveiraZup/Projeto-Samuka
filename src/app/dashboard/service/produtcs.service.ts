import { Injectable } from '@angular/core';
import { HttpBackend, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../interface/produtcs.inteface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private httpClient: HttpClient, handler: HttpBackend) {}

  get(): Observable<Product> {
    return this.httpClient.get(
      `https://control-food-api.herokuapp.com/products`
    );
  }
}
