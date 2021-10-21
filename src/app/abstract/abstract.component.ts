import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Address } from '../address';
import { ApiServiceService } from '../api-service.service';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

export interface DialogData {
  graphic: any;
}
@Component({
  selector: 'app-abstract',
  templateUrl: './abstract.component.html',
  styleUrls: ['./abstract.component.css'],
})
export class AbstractComponent implements OnInit {
  openDialog(data: any): void {
    console.log(data);

    const dialogRef = this.dialog.open(CoverImage, {
      width: '30%',
      data: { graphic: data },
    });
  }

  constructor(
    private Address: Address,
    public dialog: MatDialog,
    private api: ApiServiceService,
    private routes: Router,
    private active_router: ActivatedRoute
  ) {}

  item: any;
  pdf = this.Address.pdf_url;
  img = this.Address.img_url;
  supplementary_pdf = this.Address.supplementary;
  id: any;
  xmlFile: any;
  issueStatus: any;
  ids: any;
  fulltext = 0;
  abstract = 1;
  xml = 0;
  Graphical_abstract = 0;
  reference = 0;
  dataa: any;
  step: any = 'step1';

  Reference() {
    this.reference = 1;
    this.fulltext = 0;
    this.abstract = 0;
    this.xml = 0;
    this.Graphical_abstract = 0;
  }
  fullText() {
    this.reference = 0;
    this.fulltext = 1;
    this.abstract = 0;
    this.xml = 0;
    this.Graphical_abstract = 0;
  }
  Xml() {
    this.fulltext = 0;
    this.abstract = 0;
    this.xml = 1;
    this.Graphical_abstract = 0;
  }
  GraphicalAbstract() {
    this.reference = 0;
    this.fulltext = 0;
    this.abstract = 0;
    this.xml = 0;
    this.Graphical_abstract = 1;
  }
  Abstract() {
    this.reference = 0;
    this.fulltext = 0;
    this.abstract = 1;
    this.xml = 0;
    this.Graphical_abstract = 0;
  }

  ngOnInit(): void {
    this.active_router.params.subscribe((res) => {
      let id = res.id;
      this.getDataa(id);
    });
  }

  getDataa(id: any) {
    this.api.abstract(id).subscribe((members: any) => {
      console.log(members);
      this.item = members;
    });
  }
  countdownload(id: any) {
    this.api.countdownload(id).subscribe((res) => {
      console.log(res);
      // console.log('varsha');
    });
  }
}

@Component({
  selector: 'coverImage',
  templateUrl: './cover-image.html',
})
export class CoverImage {
  constructor(
    public dialogRef: MatDialogRef<CoverImage>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
