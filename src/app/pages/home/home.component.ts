import { Component } from '@angular/core';
import { ProductnavigationComponent } from '../../units/productnavigation/productnavigation.component';
import { BannerComponent } from '../../units/banner/banner.component';
import { OfferimgComponent } from '../../units/offerimg/offerimg.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductnavigationComponent,BannerComponent,OfferimgComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
