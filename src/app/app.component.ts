import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  notes: any[] = []; // tt les notes qu’on a
  filteredNotes: any[] = []; // notes qu’on affiche selon le filtre
  tags: string[] = []; // les tags uniqs
  selectedTags: string[] = []; // pas utilisé là

  title: string = ''; // titre de la note
  content: string = ''; // contenu de la note
  tagsInput: string = ''; // les tags que l’utilisateur tape
  selectedNoteId: number | null = null; // pr savoir si on édite une note

  ngOnInit() {
    this.loadNotes(); // on charge depuis localstorage au démarage
    this.displayNotes(); // on affiche tt direct
  }

  updateTags() {
    const tagSet = new Set<string>(); // pr pas avoir de doublon
    this.notes.forEach(note => note.tags.forEach((tag: string) => tagSet.add(tag)));
    this.tags = Array.from(tagSet); // converti en tableau
  }

  
  selectTag(tag: string) {
    this.displayNotes([tag]); // affiche les notes avec ce tag
  }


  showAllNotes() {
    this.displayNotes(); // reset filtre
  }





  submitNote() {
    const tags = this.tagsInput.split(',').map(t => t.trim()).filter(Boolean); // on split et clean les tags

    // si titre et contenu vide → on fait rien
    if (!this.title.trim() && !this.content.trim()) return;

    if (this.selectedNoteId !== null) {
      // mode edit
      const index = this.notes.findIndex(n => n.id === this.selectedNoteId);
      if (index !== -1) {
        this.notes[index] = {
          ...this.notes[index], // garde l’id et le reste
          title: this.title,
          content: this.content,
          tags
        };
      }
      this.selectedNoteId = null;
    } else {
      // sinon on ajoute une nouv note
      const note = {
        id: Date.now(), // id unique
        title: this.title,
        content: this.content,
        tags
      };
      this.notes.push(note);
    }

    // maj général
    this.saveNotes();
    this.updateTags();
    this.displayNotes();

    // reset les champs
    this.title = '';
    this.content = '';
    this.tagsInput = '';
  }

  editNote(note: any) {
    // prérempli les champs pr modif
    this.title = note.title;
    this.content = note.content;
    this.tagsInput = note.tags.join(', ');
    this.selectedNoteId = note.id;
  }

  deleteNote(id: number) {
    this.notes = this.notes.filter(note => note.id !== id); // on tej la note
    this.saveNotes();
    this.updateTags();
    this.displayNotes();
  }

  loadNotes() {
    this.notes = JSON.parse(localStorage.getItem('notes') || '[]'); // récup les notes
    this.updateTags(); // met a jour les tags
  }

  saveNotes() {
    localStorage.setItem('notes', JSON.stringify(this.notes)); 
  }

  displayNotes(filterTags: string[] = []) {
    if (filterTags.length === 0) {
      this.filteredNotes = [...this.notes]; // montre tt si y’a pas de filtre
    } else {
      // garde que les notes qui ont tt les tags demandés
      this.filteredNotes = this.notes.filter(note =>
        filterTags.every(tag => note.tags.includes(tag))
      );
    }
  }
}
