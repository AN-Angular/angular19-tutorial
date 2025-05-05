import { Component } from '@angular/core';
import { CurrencyConvertorPipe } from '../pipe/currency-convertor.pipe';

@Component({
  selector: 'app-custom-pipes',
  imports: [CurrencyConvertorPipe],
  templateUrl: './custom-pipes.component.html',
  styleUrl: './custom-pipes.component.css'
})
export class CustomPipesComponent {

  priceAmount = 1599; // property
}
