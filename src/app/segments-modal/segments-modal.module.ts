import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SegmentsModalComponent } from './segments-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmojiFrequentlyService, EmojiSearch, PickerModule } from '@ctrl/ngx-emoji-mart';
import { EmojiModule, EmojiService } from '@ctrl/ngx-emoji-mart/ngx-emoji';
import { RestrictFirstSpaceDirective } from '../restrict-first-space.directive';



@NgModule({
  declarations: [SegmentsModalComponent , RestrictFirstSpaceDirective],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    PickerModule,

  ],
  providers: [EmojiFrequentlyService, EmojiSearch, EmojiService],

  entryComponents: [SegmentsModalComponent]
})
export class SegmentsModalModule { }
