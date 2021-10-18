import { Component, OnInit } from '@angular/core';
import { Download } from 'src/app/features/download/interfaces/download.interface';
import { DownloadService } from 'src/app/features/download/services/download.service';
@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss']
})

export class DownloadComponent implements OnInit {
  showMenuRight: boolean = true;
  downloads!: Download[];
  first = 0;
  rows = 5;

  constructor(private downloadService: DownloadService) { }

  async ngOnInit(): Promise<void> {
    this.downloads = await this.downloadService.find({}).toPromise();
  }

  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  isLastPage(): boolean {
    return this.downloads ? this.first === (this.downloads.length - this.rows): true;
  }

  isFirstPage(): boolean {
    return this.downloads ? this.first === 0 : true;
  }

}
