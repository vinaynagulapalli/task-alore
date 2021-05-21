import { Component, OnInit } from '@angular/core';
import { getConfig } from '../constants/app.constants';
import { MatDialog } from '@angular/material';
import { SegmentsModalComponent } from '../segments-modal/segments-modal.component';
import { Segments, SubSegments } from '../constants/segments.modal';

@Component({
  selector: 'app-prospector',
  templateUrl: './prospector.component.html',
  styleUrls: ['./prospector.component.scss']
})
export class ProspectorComponent implements OnInit {
  segments: Segments[] = [];
  tempSegments;

  resBody;
  showSegmentsList: boolean = false;

  constructor(private modalService: MatDialog) { }



  ngOnInit() {
  }

  addNewSegments(index) {
    const modalRef = this.modalService.open(SegmentsModalComponent, { data: { type: 'SubSegments' } });

    modalRef.afterClosed().subscribe(res => {
      console.log(res);
      if (res.type === true) {
        var subSegment = new SubSegments()
        subSegment.subSubSegmentsName = res.value.name;
        subSegment.subSubSegmentsIcon = res.value.icon;
        subSegment.subSubSegmentsColor = res.value.color;

        this.segments[index].subSegmentName.push(subSegment);
      }
    })

  }


  openSegment() {
    const modalRef = this.modalService.open(SegmentsModalComponent, { data: { type: 'Segments' } });

    modalRef.afterClosed().subscribe(res => {
      console.log(res);
      if (res.type === true) {
        var segment = new Segments();
        segment.segmentName = res.value.name;
        segment.segmentIcon = res.value.icon;
        segment.segmentDescription = res.value.description;
        this.segments.push(segment);
      }
      this.tempSegments = JSON.parse(JSON.stringify(this.segments))
      console.log(this.tempSegments);

    })
  }

  searchSegments(event) {
    this.segments = this.tempSegments.filter((list: any) => list.segmentName.toUpperCase().includes(event.toUpperCase()))
    console.log(this.segments);

    if (event === '') {
      this.segments = this.tempSegments
    }
  }

  showSegments(index) {
    // this.showSegmentsList = !this.showSegmentsList
    this.segments[index].showValue = !this.segments[index].showValue;
  }

}
