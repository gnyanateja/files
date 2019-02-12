import { Component, OnInit } from '@angular/core';
import { FilesService } from './../files.service';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit {

  constructor(private FileService: FilesService) { }
  private files = [];
  private url = 'http://localhost:3000/upload';
  public uploader: FileUploader;

  ngOnInit() {
    this.uploader = new FileUploader({url: this.url});

    this.FileService.showFileNames().subscribe(response => {
      for (let i = 0; i < response.toString().length; i++) {
        this.files[i] = {
          filename: response[i].filename,
          originalname: response[i].originalname,
          contentType: response[i].contentType
        };
      }
    });
  }

  downloadPdf(filename, contentType) {
    this.FileService.downloadPDF(filename, contentType).subscribe(
      (res) => {
        const file = new Blob([res.blob()], { type: contentType });
        const fileURL = URL.createObjectURL(file);
        window.open(fileURL);
      }
    );
  }
}

