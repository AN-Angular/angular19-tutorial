import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private route: ActivatedRoute,
    private router: Router,
  ) {
    
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log('Query Params:', params['id']);
      console.log('Query Params:', params['name']);
    });
  }

  gotToProfile() {
    this.router.navigate(['/profile'], { queryParams: { name: 'Arjun Naik'}});
  }
}
