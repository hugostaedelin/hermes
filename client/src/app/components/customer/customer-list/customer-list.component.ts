import { Component, OnInit } from '@angular/core';
import { Customer } from "../../../models/customer";
import { CustomerService } from "../../../services/customer.service";
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers!: Customer[];

  constructor(
    private readonly dialog: MatDialog,
    private readonly customerService: CustomerService
  ) { }

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers() {
    this.customerService.find().subscribe((res) => {
      this.customers = res;
    }, error => {
      console.error(error);
    })
  }
}
