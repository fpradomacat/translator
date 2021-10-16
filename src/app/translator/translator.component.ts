import { Component, OnInit } from '@angular/core';
import { ClipboardService } from "../clipboard.service";
import { TranslatorService } from "../translator.service";
import { FormControl } from "@angular/forms";


@Component({
  selector: 'app-translator',
  templateUrl: './translator.component.html',
  styleUrls: ['./translator.component.less']
})
export class TranslatorComponent implements OnInit {
  // Translation
  textToTranslate: FormControl = new FormControl('');
  translatedText: FormControl = new FormControl({value: '', disabled: true});
  apiKey: FormControl = new FormControl('');

  // Loader
  isLoading: boolean = false;

  constructor(private translatorService: TranslatorService,
              private clipboardService: ClipboardService) {
  }

  ngOnInit(): void {
  }

  translate() {
    this.isLoading = true;
    this.translatorService
      .translate(this.apiKey.value.trim(), this.textToTranslate.value.trim())
      .subscribe(response => {
        this.translatedText.setValue(response);
        this.isLoading = false;
      });
  }

  copyToClipboard(event: Event) {
    this.clipboardService.copy(this.translatedText.value);
  }

  copyToClipboardForSql(event: Event) {
    this.clipboardService.copy(this.translatedText.value.replace(/'/g, "''"));
  }

}
