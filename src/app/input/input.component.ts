import { AfterViewInit, Component, ElementRef, EventEmitter, Inject, Input, NO_ERRORS_SCHEMA, OnInit, Output, PLATFORM_ID, ViewChild, ViewEncapsulation } from '@angular/core';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ClassicEditor, Bold, Essentials, Italic, Mention, Paragraph, Undo } from 'ckeditor5';
import { NgIf } from '@angular/common';
import * as monaco from 'monaco-editor';
import { EditorState, EditorView, basicSetup } from '@codemirror/basic-setup';
import { javascript } from '@codemirror/lang-javascript';
import { oneDark } from '@codemirror/theme-one-dark';
import { FormsModule } from '@angular/forms';
import { CodeEditor, Setup, Theme} from '@acrodata/code-editor';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [NgIf,FormsModule,CodeEditor],
  encapsulation: ViewEncapsulation.None,
  templateUrl: './input.component.html',
  styles: [`
    :host {
      display: flex;
      flex-direction: column;
      height: 100vh; /* Full viewport height */
    } 
    code-editor {
      height: 100%;
      width: 100%;
      font-size: 15px;
      border: 1px solid #ccc;
    }
  `],
})
export class InputComponent{

  @Input() conversion!:string;
  code: string = '';

  @Output() emitter = new EventEmitter();

  @ViewChild('editor') editor!: CodeEditor;

  options = {
    theme: 'dark' as Theme,
    setup: 'minimal' as Setup,
    disabled: false,
    readonly: false,
    placeholder: 'Enter your code here...',
    indentWithTab: 'Indent with tab',
    indentUnit: '4',
    lineWrapping: true,
    highlightWhitespace: true,
    language: 'javascript'
  };

  onCodeChange(newCode: string) {
    console.log('Code changed:', newCode);
    // You can add additional logic here if needed
  }


  onConvert() {
    this.emitter.emit(this.code);
  }
}
