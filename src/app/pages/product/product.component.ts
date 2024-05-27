import { Component } from '@angular/core';
import { CardComponent } from '../../units/card/card.component';
import { ProductnavigationComponent } from '../../units/productnavigation/productnavigation.component';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CardComponent,ProductnavigationComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  constructor(private api:ApiService){

  }
  products:any;

  ngOnInit():void{
    this.api.getProducts().subscribe((data: any) => {
    this.products=data.data;
    
   })
   
   
    
   }
}
