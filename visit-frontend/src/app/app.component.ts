import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisitsComponent } from './visits/visits.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, VisitsComponent],// <-- to je ključno za *ngFor, *ngIf, ipd.
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {}