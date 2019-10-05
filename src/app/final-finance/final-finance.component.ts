import { Component, OnInit } from '@angular/core';
import { ServiceAllService } from '../service-all.service';

@Component({
  selector: 'app-final-finance',
  templateUrl: './final-finance.component.html',
  styleUrls: ['./final-finance.component.scss']
})
export class FinalFinanceComponent implements OnInit {

  enableInput = false;
  priceRoom: number;
  totalUsing = 0;

  totalMarket = [{
    name: 'Vũ',
    priceMarket: 0,
    price: 0
  },
  {
    name: 'Khánh',
    priceMarket: 0,
    price: 0
  },
  {
    name: 'Trường',
    priceMarket: 0,
    price: 0
  },
  {
    name: 'Tâm',
    priceMarket: 0,
    price: 0
  },
  {
    name: 'Trung',
    priceMarket: 0,
    price: 0
  }]
  constructor(
    private serviceAllService: ServiceAllService
  ) { }

  ngOnInit() {
    const getUser = localStorage.getItem('user');
    if (getUser === 'Thiên Vũ') {
      this.enableInput = true;
    } else {
      this.enableInput = false;
    }

    this.marketUser();
  }

  public marketUser() {
    this.serviceAllService.getUsing().subscribe((res: any) => {
      const data = res.data;

      data.forEach(item => {
        this.totalUsing += item.price;        
      });

      const getVu = data.filter(item => item.user === 'Thiên Vũ');
      let priceVu = 0;

      const getTruong = data.filter(item => item.user === 'Sĩ Trường');
      let priceTruong = 0;

      const getKhanh = data.filter(item => item.user === 'Đức Khánh');
      let pricKhanh = 0;

      const getTam = data.filter(item => item.user === 'Thành Tâm');
      let priceTam = 0;

      const getTrung = data.filter(item => item.user === 'Thành Trung');
      let priceTrung = 0;

      getVu.forEach(item => {
        priceVu += item.price;
      });

      getKhanh.forEach(item => {
        pricKhanh += item.price;
      });

      getTruong.forEach(item => {
        priceTruong += item.price;
      });

      getTrung.forEach(item => {
        priceTrung += item.price;
      });

      getTam.forEach(item => {
        priceTam += item.price;
      });

      this.totalMarket.forEach(element => {
          switch (element.name) {
            case 'Vũ':
              element.priceMarket = priceVu;
              break;
              case 'Khánh':
                element.priceMarket = pricKhanh;
              break;
              case 'Trường':
                element.priceMarket = priceTruong;
              break;
              case 'Tâm':
                element.priceMarket = priceTam;              
              break;
              case 'Trung':
                element.priceMarket = priceTrung;              
              break;
          
            default:
              break;
          }
      });
    })
  }

  public inputPriceRoom() {

    const priceRoom = (+this.priceRoom + this.totalUsing ) / 5;
    this.totalMarket.forEach(element => {
      switch (element.name) {
        case 'Vũ':
          element.price = priceRoom - element.priceMarket;
          break;
          case 'Khánh':
            element.price = priceRoom - element.priceMarket;
          break;
          case 'Trường':
            element.price = priceRoom - element.priceMarket;
          break;
          case 'Tâm':
            element.price = priceRoom - element.priceMarket;              
          break;
          case 'Trung':
            element.price = priceRoom - element.priceMarket;              
          break;
      
        default:
          break;
      }
  });
  }

}
