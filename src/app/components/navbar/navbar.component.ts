import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private createProductDialog : MatDialog) { }

  ngOnInit(): void {
  }
  openDialog() {
    this.createProductDialog.open(DialogComponent)
  }

}
