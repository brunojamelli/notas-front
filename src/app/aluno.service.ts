import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { NotificationService } from './notification.service';


@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  private apiUrl = 'http://localhost:5285/api/Notas'; // URL da sua API

  constructor(private http: HttpClient, private notificationService: NotificationService) { }

  getAlunos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  cadastrarNota(nota: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, nota)
      .pipe(
        tap(() => this.notificationService.setMessage('Nota cadastrada com sucesso!'))
      );
  }
}
