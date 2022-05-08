import { NoteService } from './../note.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Notes } from '../notes';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
})
export class NoteComponent implements OnInit {
  @Input() note: Notes = {
    id: -1,
    text: '',
  };
  @Output() noteChange = new EventEmitter<Notes>();
  isFlag: boolean = true;

  constructor(public noteService: NoteService) {}

  onClickIsFlag() {
    this.isFlag = !this.isFlag;
  }

  deleteNote(id: number) {
    this.noteService.deleteNote(id);
  }
  editNote(id: number, text: string) {
    this.noteService.editNote(id, text);
    this.isFlag = true;
  }
  ngOnInit(): void {}
}
