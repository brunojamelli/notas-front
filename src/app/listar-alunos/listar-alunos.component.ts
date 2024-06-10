import { Component, OnInit } from '@angular/core';
import { AlunoService } from '../aluno.service';

@Component({
  selector: 'app-listar-alunos',
  templateUrl: './listar-alunos.component.html',
  styleUrls: ['./listar-alunos.component.scss']
})
export class ListarAlunosComponent implements OnInit {

  alunos: any[] = [];

  constructor(private alunoService: AlunoService) { }

  ngOnInit(): void {
    this.alunoService.getAlunos().subscribe(data => {
      this.alunos = data;
    });
  }

  calcularMedia(notas: number[]): number {
    const soma = notas.reduce((a, b) => a + b, 0);
    return soma / notas.length;
  }

  calcularConceito(notas: number[]): string {
    const media = this.calcularMedia(notas);
    if (media >= 9) {
      return 'A';
    } else if (media >= 7) {
      return 'B';
    } else if (media >= 5) {
      return 'C';
    } else if (media >= 3) {
      return 'D';
    } else {
      return 'E';
    }
  }
}
