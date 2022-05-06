import { NoteComponent } from './note/note.component';

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Notes } from './notes';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  note: Notes[] = JSON.parse(localStorage.getItem('notes') || '[]');
  private _note = new BehaviorSubject(this.note);
  note$ = this._note.asObservable();

  localStorage: Storage;

  date = new Date();
  constructor() {
    this.localStorage = window.localStorage;
  }

  addNote(id: number, text: string) {
    const newNote: Notes = {
      id: id,
      text: text,
    };
    this._note.next([...this._note.getValue(), newNote]);
    console.log(this._note.value);
    this.localStorage.setItem('notes', JSON.stringify(this._note.getValue()));
  }

  deleteNote(id: number) {
    let tmpNote: Notes[] = [];

    tmpNote = this._note.getValue().filter((item) => item.id !== id);
    console.log(tmpNote);

    this._note.next(tmpNote);

    this.localStorage.setItem('notes', JSON.stringify(this._note.getValue()));
  }

  editNote(id: number, text: string) {
    let noteEdit: Notes[] = [];

    noteEdit = [...this._note.getValue()];

    let note = noteEdit.filter((item) => (item.id = id))[0];

    note.text = text;

    this._note.next(noteEdit);

    console.log(this._note.getValue());

    this.localStorage.setItem('notes', JSON.stringify(this._note.getValue()));
  }

  getNote() {
    return this.note;
  }
}
