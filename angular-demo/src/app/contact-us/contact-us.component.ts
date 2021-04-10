import { Component, OnInit } from '@angular/core';
interface Choice {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent{
  choices: Choice[] = [
    { value: 'standard', viewValue: 'Standard' },
    { value: 'legacy', viewValue: 'Legacy' },
    { value: 'outline', viewValue: 'Outline' }
  ];
}



