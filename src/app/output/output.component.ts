import { Component, ElementRef, EventEmitter, Inject, Input, NO_ERRORS_SCHEMA, OnChanges, OnInit, Output, PLATFORM_ID, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ClassicEditor, Bold, Essentials, Italic, Mention, Paragraph, Undo } from 'ckeditor5';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CodeEditor, Setup, Theme} from '@acrodata/code-editor';

@Component({
  selector: 'app-output',
  standalone: true,
  imports: [NgIf,FormsModule,CodeEditor],
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css'],
})
export class OutputComponent{
  

  @Input() code: string = '// No code to display';
  @Input() conversion!: string;

  @ViewChild('editor') editor!: CodeEditor;

  copyButtonText: string = 'Copy';

  onCopy() {
    navigator.clipboard.writeText(this.code).then(
      () => {
        this.copyButtonText = 'Copied';
        setTimeout(() => {
          this.copyButtonText = 'Copy';
        }, 2000);
      },
      (err) => {
        console.error('Failed to copy code: ', err);
      }
    );
  }

  options = {
    theme: 'dark' as Theme,
    setup: 'minimal' as Setup,
    disabled: false,
    readonly: true,
    placeholder: '',
    indentWithTab: 'Indent with tab',
    indentUnit: '4',
    lineWrapping: true,
    highlightWhitespace: true,
    language: 'javascript'
  };

}
