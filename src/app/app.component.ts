import { Component, ViewEncapsulation } from '@angular/core';
import {animate, state, style, transition, trigger, keyframes} from '@angular/animations';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('flyInOut', [
      transition('void => *', [
        animate(500, keyframes([
          style({opacity: 0}),
          style({opacity: 1})
        ]))
      ])
    ]),
    trigger('slideDown', [
      state('in', style({transform: 'translateY(0)'})),
      transition('void => *', [
        style({transform: 'translateX(-100%)'}),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({transform: 'translateY(100%)'}))
      ])
    ])
  ]
})
export class AppComponent {

  constructor() {}

  title = 'app';

  adminTag = 2;

  checked = true;

  additemModal = false;


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
