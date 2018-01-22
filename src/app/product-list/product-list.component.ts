import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: any[] = [
    {
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/418T8GVdMtL._SL500_AC_SS350_.jpg',
      sku: '100012300',
      name: 'Bungee Cord',
      price: 99.5,
      rating: 4.5
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  enlargeImage(product): void {
    product.enlargedImage = !product.enlargedImage;
    console.log(product);
  }

}
