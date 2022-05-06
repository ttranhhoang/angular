import { NoteComponent } from './../note/note.component';
import { Component, Input, OnInit } from '@angular/core';
import { Notes } from '../notes';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  noteList: Notes[] = [];

  date = new Date();

  textArea: string = '';

  constructor(public noteService: NoteService) {}

  ngOnInit(): void {
    this.getNote();
  }

  submit() {
    this.noteService.addNote(Math.floor(Math.random() * 100), this.textArea);
  }

  getNote() {
    this.noteService.note$.subscribe((notes) => {
      this.noteList = notes;
    });
  }
}
