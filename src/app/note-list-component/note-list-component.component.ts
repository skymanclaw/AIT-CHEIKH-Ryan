import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-note-list',
  template: `
    <div id="notes-container">
      <div *ngIf="filteredNotes.length === 0">
        <p>Aucune note avec ce tag.</p>
      </div>

      <app-note-item
        *ngFor="let note of filteredNotes"
        [note]="note"
        (delete)="onDelete($event)"
        (edit)="onEdit($event)"
      ></app-note-item>
    </div>
  `
})
export class NoteListComponent {
  @Input() filteredNotes: any[] = [];

  onDelete(id: number) {
    // Supprimer la note avec l'ID
  }

  onEdit(note: any) {
    // Modifier la note
  }
}
