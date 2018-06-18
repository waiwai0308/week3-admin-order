import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  adminTag = 1;

  checked = true;


  product = [
    {
      checked: false,
      name: 'Mauris non tem.',
      img: 'https://picsum.photos/50/49',
      original: '$4,200',
      discount: '$3,200',
      status: true,
      specification: [
        {
          size: 'L',
          item: [{color: 'Black', limit: 15}, {color: 'Red', limit: 20}]
        },{
          size: 'L',
          item: [{color: 'Black', limit: 15}, {color: 'Red', limit: 20}]
        }
      ]
    },
    {
      checked: false,
      name: 'Mauris non tem.',
      img: 'https://picsum.photos/50/48',
      original: '$4,200',
      discount: '$3,200',
      status: false,
      specification: [
        {
          size: 'L',
          item: [{color: 'Black', limit: 15}, {color: 'Red', limit: 20}]
        },{
          size: 'L',
          item: [{color: 'Black', limit: 15}, {color: 'Red', limit: 20}]
        }
      ]
    },
    {
      checked: false,
      name: 'Mauris non tem.',
      img: 'https://picsum.photos/50/47',
      original: '$4,200',
      discount: '$3,200',
      status: false,
      specification: [
        {
          size: 'L',
          item: [{color: 'Black', limit: 15}, {color: 'Red', limit: 20}]
        },{
          size: 'L',
          item: [{color: 'Black', limit: 15}, {color: 'Red', limit: 20}]
        }
      ]
    }
  ]

  changeTag(num) {
    this.adminTag = num;
  }

  clickAllCheckbox() {
    this.product.forEach((item)=>{
      item.checked = true; 
    });
  }
}
