import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProspectorComponent } from './prospector.component';
import { RouterModule, Routes } from '@angular/router';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { SegmentsModalModule } from '../segments-modal/segments-modal.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatDialogModule } from '@angular/material';


const route: Routes = [
  { path: '', component: ProspectorComponent }
]

@NgModule({
  declarations: [ProspectorComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    SegmentsModalModule,
    MatDialogModule,

  ],
  exports: [ProspectorComponent]
})
export class ProspectorModule { }
