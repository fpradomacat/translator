import { Component, OnInit } from '@angular/core';
import { ClipboardService } from "../clipboard.service";
import { TranslatorService } from "../translator.service";
import { FormBuilder, FormGroup } from "@angular/forms";
import { debounceTime, distinctUntilChanged, tap } from "rxjs/operators";


@Component({
  selector: 'app-translator',
  templateUrl: './translator.component.html',
  styleUrls: ['./translator.component.less']
})
export class TranslatorComponent implements OnInit {
  translationForm: FormGroup = this.fb.group({
    apiKey: [''],
    textToTranslate: [''],
    translatedText: [{value: '', disabled: true}]
  })

  isLoading: boolean = false;

  constructor(private translatorService: TranslatorService,
              private clipboardService: ClipboardService,
              private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.translationForm.get('textToTranslate')?.valueChanges
      .pipe(
        debounceTime(400),
        distinctUntilChanged()
      )
      .pipe(tap(() => this.isLoading = true))
      .subscribe(() => {
          this.translatorService
            .translate(this.translationForm.get('apiKey')?.value.trim(), this.translationForm.get('textToTranslate')?.value.trim())
            .subscribe(response => {
              this.translationForm.get('translatedText')?.setValue(response);
              this.isLoading = false;
            });
        }
      );
  }

  copyToClipboard(event: Event) {
    this.clipboardService.copy(this.translationForm.get('translatedText')?.value);
  }

  copyToClipboardForSql(event: Event) {
    this.clipboardService.copy(this.translationForm.get('translatedText')?.value.replace(/'/g, "''"));
  }

}
