import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { ServiceAllService } from '../service-all.service';

@Component({
  selector: 'app-using',
  templateUrl: './using.component.html',
  styleUrls: ['./using.component.scss']
})
export class UsingComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  showSpinner = false;
  public total: number;
  public totalPer: number;
  // public totalOne: number;

  public chooseDate: Date;
  public category: any;
  public price: any;
  dataSource: any;
  displayedColumns: string[] = ['position', 'date', 'category', 'price', 'user', 'action'];
  constructor(
    private serviceAllService: ServiceAllService
  ) { }

  ngOnInit() {
    this.getDataUsing();
  }

  public getDataUsing() {
    this.serviceAllService.getUsing().subscribe((res: any) => {
      this.total = 0;
      this.totalPer = 0;
      ELEMENT_DATA = res.data;
      // this.totalPerson(res.data);
      this.dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
      this.dataSource.paginator = this.paginator;

      ELEMENT_DATA.forEach(item => {
        this.total += item.price;
      })
      this.totalPer = Math.round(this.total / 5);
    });
  }

  public saveUsing() {
    this.showSpinner = true;
    let dateSave: any;
    if (this.chooseDate) {
      dateSave = this.chooseDate.getDate() + '-' + (this.chooseDate.getMonth() + 1) + '-' + this.chooseDate.getFullYear();
    } else {
      const today = new Date();
      dateSave = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
    }
    const data = {
      date: dateSave,
      category: this.category,
      price: this.price,
      user: localStorage.getItem('user')
    }
    this.serviceAllService.postPriceUsing(data).subscribe(res => {
      if (res) {
        this.showSpinner = false;
        this.category = null;
        this.price = null;
        this.getDataUsing();
      }
    }, err => {
      this.showSpinner = false;
    })
  }

  public deleteDataUsing(data) {
    this.serviceAllService.deleteUsing(data._id).subscribe(res => {
      console.log(res);
      this.getDataUsing();
    })
  }

}

export interface PeriodicElement {
  category: string;
  id: number;
  price: number;
  user: string;
  date: string;
}

let ELEMENT_DATA: PeriodicElement[] = [
];