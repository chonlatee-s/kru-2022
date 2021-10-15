import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-upload-img',
  templateUrl: './upload-img.component.html',
  styleUrls: ['./upload-img.component.scss']
})
export class UploadImgComponent implements OnInit {
  filenameImg: string = '';
  selectedFile: any = null;
  imgUrl:string = '';
  constructor( private http: HttpClient ) { }

  ngOnInit(): void {
  }

  onFileSelected(event: any) {
    this.selectedFile = <File>event.target.files[0];
    // show Img
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.imgUrl = event.target.result;
    }
    reader.readAsDataURL(this.selectedFile);
  }

  onUpload() {
    const fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name);
    fd.append('topic', 'topic1');
    fd.append('detail', 'detail1');
    fd.append('ref', 'ref1');
    this.http.post('http://localhost:3000/course', fd)
    .subscribe( (res: any) =>{
      console.log(res);
      this.filenameImg = res.filename;
    })
  }

}
