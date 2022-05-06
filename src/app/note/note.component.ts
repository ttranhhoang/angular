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

  constructor(public noteService: NoteService) {}
  isFlag: boolean = true;

  onClickIsFlag() {
    this.isFlag = !this.isFlag;
  }

  deleteNote(id: number) {
    this.noteService.deleteNote(id);
  }
  editNote(id: number, text: string) {
    this.noteService.editNote(id, text);
  }
  ngOnInit(): void {}
}
