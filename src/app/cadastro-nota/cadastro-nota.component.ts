// cadastro-nota.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cadastro-nota',
  templateUrl: './cadastro-nota.component.html',
  styleUrls: ['./cadastro-nota.component.scss']
})
export class CadastroNotaComponent implements OnInit {
  nota = {
    nomeAluno: '',
    nomeMateria: '',
    notasAdicionais: [null, null, null]
  };

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  submitForm(): void {
    // Faz a chamada para a API para salvar a nota
    this.http.post<any>('http://localhost:5285/api/Notas', this.nota).subscribe({
      next: data => {
        console.log('Nota cadastrada com sucesso!', data);
        // Limpa o formulário após o sucesso
        this.nota = {
          nomeAluno: '',
          nomeMateria: '',
          notasAdicionais: [null, null, null]
        };
      },
      error: error => {
        console.error('Erro ao cadastrar a nota!', error);
      }
    });
  }
}
