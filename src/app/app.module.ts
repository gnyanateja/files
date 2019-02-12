import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import { FileUploadModule } from 'ng2-file-upload';
import {FilesService} from './files.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FileComponent } from './file/file.component';

const routes: Routes = [
  {path: '', component: FileComponent}];
@NgModule({
  declarations: [
    AppComponent,
    FileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FileUploadModule

  ],
  providers: [FilesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
