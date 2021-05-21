import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { COLORPALETTE, getInputFieldValidation } from '../constants/app.constants';


@Component({
  selector: 'app-segments-modal',
  templateUrl: './segments-modal.component.html',
  styleUrls: ['./segments-modal.component.scss']
})
export class SegmentsModalComponent implements OnInit {

  segmentForm: FormGroup;
  isSubmitted: boolean;
  showPicker: boolean = false;
  showcolors: boolean = false;
  colorsPalette = COLORPALETTE;
  selectedColor = '';

  constructor(private dialogRef: MatDialogRef<SegmentsModalComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm();
    console.log(this.data);
  }

  initForm() {
    this.segmentForm = this.fb.group({
      name: ['', Validators.required],
      icon: ['', Validators.required],
      color: ['', Validators.required],
      description: ['', Validators.required]
    })
  }

  getValid(fieldName) {
    return getInputFieldValidation(this.segmentForm, fieldName, this.isSubmitted);
  }


  addSegment() {
    this.isSubmitted = true;
    this.segmentForm.controls.color.setValue(this.selectedColor)
    const formValue = this.segmentForm.value
    this.isSubmitted = false;
    const modalObj = {
      value: formValue,
      type: true
    }
    this.isSubmitted = false;
    console.log(formValue);
    this.dialogRef.close(modalObj)
  }

  addEmoji(event) {
    console.log(event.emoji.native);
    this.segmentForm.controls.icon.setValue(event.emoji.native)
    this.showPicker = false;
  }

  showEmoji() {
    this.showPicker = true;
  }

  displayColors() {
    this.showcolors = true;
  }

  onSelect(event) {
    this.selectedColor = event;
    this.showcolors = false;
  }
}
