import { Component, OnInit, QueryList } from '@angular/core';
import { ApiService } from '../../api.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-productnavigation',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './productnavigation.component.html',
  styleUrl: './productnavigation.component.css'
})
export class ProductnavigationComponent  {
  categories: any[]=[];

  constructor(private api: ApiService,private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.api.getCategory().subscribe((data: any) => {
      this.categories = data.data;
    });
  }
}
