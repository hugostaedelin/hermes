import { Component, Input } from '@angular/core';
import { ProductsFromOrdersService } from "../../../services/products-from-orders.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.css']
})
export class OrderItemComponent {
  @Input() productFromOrders: any;

  constructor(
    private readonly productFromOrdersService: ProductsFromOrdersService,
    private snackBar: MatSnackBar,
    private readonly dialog: MatDialog,
  ) {  }

  openSnackBar(content: string) {
    this.snackBar.open(content, 'Fermer', {
      duration: 2000,
      horizontalPosition: 'left',
      verticalPosition: 'bottom',
    });
  }

  deleteProduct() {
    this.productFromOrdersService.delete(this.productFromOrders.productsFromOrderId);
    this.openSnackBar('La commande a été supprimée !');
  }
}
