import { Component, ElementRef, EventEmitter, Inject, Input, NO_ERRORS_SCHEMA, OnInit, Output, PLATFORM_ID, ViewChild, ViewEncapsulation } from '@angular/core';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ClassicEditor, Bold, Essentials, Italic, Mention, Paragraph, Undo } from 'ckeditor5';
import { NgIf } from '@angular/common';
import * as monaco from 'monaco-editor';
// import { MonacoEditorModule } from 'ngx-monaco-editor-v2';
// import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [NgIf,CKEditorModule],
  encapsulation: ViewEncapsulation.None,
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
  schemas:[NO_ERRORS_SCHEMA]
})
export class InputComponent implements OnInit{

  @Input() conversion!:string;

  @ViewChild('editorContainer', { static: true }) editorContainer!: ElementRef;
  private _editor: monaco.editor.IStandaloneCodeEditor | undefined;

  code: string = '';

  @Output() emitter = new EventEmitter();

  ngOnInit(): void {
    this.initMonaco();
  }

  private initMonaco() {
    this._editor = monaco.editor.create(this.editorContainer.nativeElement, {
      value: this.code,
      language: this.conversion,
      theme: 'vs-dark'
    });

    // Update the code variable and emit changes when the editor content changes
    this._editor.onDidChangeModelContent(() => {
      this.code = this._editor?.getValue() ?? '';
    });
  }

  // Add methods to get/set editor content as needed
  get editor(): monaco.editor.IStandaloneCodeEditor | undefined {
    return this._editor;
  }

  updateEditorContent(newCode: string) {
    if (this._editor) {
      this._editor.setValue(newCode);
    }
  }

  onConvert() {
    this.emitter.emit(this.code);
  }
}
