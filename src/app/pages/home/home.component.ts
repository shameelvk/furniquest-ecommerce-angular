import { Component } from '@angular/core';
import { ProductnavigationComponent } from '../../units/productnavigation/productnavigation.component';
import { BannerComponent } from '../../units/banner/banner.component';
import { OfferimgComponent } from '../../units/offerimg/offerimg.component';
import { ProductComponent } from '../product/product.component';
import { ApiService } from '../../api.service';
import { CardComponent } from '../../units/card/card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductnavigationComponent,BannerComponent,OfferimgComponent,ProductComponent,CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private api:ApiService){

  }
  products:any;

  ngOnInit():void{
    this.api.getProducts().subscribe((data: any) => {
    this.products=data.data;
    
   })
   
   
    
   }

}
