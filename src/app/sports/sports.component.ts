import { Component, OnInit , Input} from '@angular/core';
import { Venues , TimeSlots , Sports} from '../sport-venue'
import { Venue } from '../venue';
import { MatIconModule,MatIconRegistry } from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import { TimeSlot } from '../timeSlot';
import { Sport } from '../sport';
import {AbstractControl,FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  finalFormGroup: FormGroup;
  
  @Input() sportsVenue = Venues;
  @Input() timeSlots = TimeSlots;
  @Input() sports = Sports;

  @Input() selectedVenue : Venue;
  @Input() selectedSport : Sport;
  @Input() selectedTimeslot : TimeSlot;
  @Input() confirmStatus : string;


  constructor(public matIconRegistry:MatIconRegistry,sanitizer: DomSanitizer) {
    matIconRegistry.addSvgIcon
   }

  ngOnInit() {
    this.confirmStatus = 'Please Click confirm to submit your booking';
  }

  confirmBooking(){
    this.confirmStatus = 'Your booking to play'+this.selectedSport+' between '+this.selectedTimeslot+' at '+this.selectedVenue+' is confirmed';
  }

}
