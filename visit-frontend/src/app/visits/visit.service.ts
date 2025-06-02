import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

export interface Visit {
  ip: string;
  timestamp: string;
}

@Injectable({
  providedIn: 'root'
})
export class VisitService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  // Pridobi javni IP in pošlji na backend
  logVisit(): Observable<any> {
    return this.http.get<{ ip: string }>('https://api.ipify.org?format=json').pipe(
      switchMap(res => this.http.post(`${this.apiUrl}/visit`, { ip: res.ip })),
      catchError(err => {
        console.error('Napaka pri pridobivanju IP-ja:', err);
        // Če ni IP-ja, pošlji POST brez IP-ja - backend bo sam pridobil IP
        return this.http.post(`${this.apiUrl}/visit`, {});
      })
    );
  }

  getVisits(): Observable<Visit[]> {
    return this.http.get<Visit[]>(`${this.apiUrl}/visits`);
  }

  deleteAllVisits(): Observable<any> {
    return this.http.delete(`${this.apiUrl}/visits`);
  }

  getVisitCount(): Observable<number> {
    return this.http.get<{ count: number }>(`${this.apiUrl}/visits/count`).pipe(
      map(response => response.count)
    );
  }
}