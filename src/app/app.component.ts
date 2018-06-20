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

  adminTag = 1;

  checked = true;

  additemModal = false;

  specification = [
    {
      size: '',
      item: {color: '', limit: ''}
    }
  ]


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

  order = [
    {
      checked: false,
      name: 'Ian Medina',
      img: 'https://picsum.photos/50/49',
      total: '$4,200',
      addtocart: '2018/06/08 13:39',
      checkout: '2018/06/08 13:39',
      address: '386 Windler Drives Apt. 358',
      status: 'unpaid',
      order: [
        {
          name: 'Vestibulum.',
          price: '$1,400',
          num: 1
        },{
          name: 'Vestibulum.',
          price: '$1,400',
          num: 1
        }
      ]
    },    {
      checked: false,
      name: 'Ian Medina',
      img: 'https://picsum.photos/50/49',
      total: '$4,200',
      addtocart: '2018/06/08 13:39',
      checkout: '2018/06/08 13:39',
      address: '386 Windler Drives Apt. 358',
      status: 'paid',
      order: [
        {
          name: 'Vestibulum.',
          price: '$1,400',
          num: 1
        },{
          name: 'Vestibulum.',
          price: '$1,400',
          num: 1
        }
      ]
    },    {
      checked: false,
      name: 'Ian Medina',
      img: 'https://picsum.photos/50/49',
      total: '$4,200',
      addtocart: '2018/06/08 13:39',
      checkout: '2018/06/08 13:39',
      address: '386 Windler Drives Apt. 358',
      status: 'done',
      order: [
        {
          name: 'Vestibulum.',
          price: '$1,400',
          num: 1
        },{
          name: 'Vestibulum.',
          price: '$1,400',
          num: 1
        }
      ]
    }
  ]

  addMoreSpecification(){
    if(this.specification.length > 5) {
      return;
    }
    this.specification.push({
      size: '',
      item: {color: 'Red', limit: ''}
    });
  }

  changeTag(num) {
    this.adminTag = num;
  }

  clickAllCheckbox(item) {
    if(item == 'order'){
      this.order.forEach((item)=>{
        item.checked = true; 
      });
    }else{
      this.product.forEach((item)=>{
        item.checked = true; 
      });
    }

  }

}
