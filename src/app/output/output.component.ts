import { Component, ElementRef, EventEmitter, Inject, Input, NO_ERRORS_SCHEMA, OnChanges, OnInit, Output, PLATFORM_ID, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ClassicEditor, Bold, Essentials, Italic, Mention, Paragraph, Undo } from 'ckeditor5';
import { NgIf } from '@angular/common';
import * as monaco from 'monaco-editor';

@Component({
  selector: 'app-output',
  standalone: true,
  imports: [NgIf,CKEditorModule],
  templateUrl: './output.component.html',
  styleUrl: './output.component.css'
})
export class OutputComponent implements OnInit, OnChanges{
  @ViewChild('editorContainer', { static: true }) editorContainer!: ElementRef;
  private _editor: monaco.editor.IStandaloneCodeEditor | undefined;

  @Input() code: string = '// No code to display';
  @Input() conversion!: string;

  ngOnInit(): void {
    this.initMonaco();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['code'] && !changes['code'].firstChange) {
      this.updateEditorContent(this.code);
    }
    if (changes['language'] && !changes['language'].firstChange) {
      monaco.editor.setModelLanguage(this._editor?.getModel()!, this.conversion);
    }
  }

  private initMonaco() {
    this._editor = monaco.editor.create(this.editorContainer.nativeElement, {
      value: this.code,
      language: this.conversion,
      theme: 'vs-dark',
      readOnly: true,
      minimap: { enabled: false },
      scrollBeyondLastLine: false,
      lineNumbers: 'on',
      wordWrap: 'on'
    });
  }

  // Method to update the editor content programmatically
  updateEditorContent(newCode: string) {
    if (this._editor) {
      this._editor.setValue(newCode);
    }
  }

  // Cleanup method
  ngOnDestroy() {
    if (this._editor) {
      this._editor.dispose();
    }
  }

}
