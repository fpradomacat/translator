import { Component, OnInit } from '@angular/core';
import { ClipboardService } from "../clipboard.service";
import { TranslatorService } from "../translator.service";


@Component({
  selector: 'app-translator',
  templateUrl: './translator.component.html',
  styleUrls: ['./translator.component.less']
})
export class TranslatorComponent implements OnInit {
  // Translation
  textToTranslate: string = "";
  translatedText: string;
  apiKey: string = "";

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
      .translate(this.apiKey, this.textToTranslate)
      .subscribe(response => {
        this.translatedText = response;
        this.isLoading = false;
      });
  }

  copyToClipboard(event: Event) {
    this.clipboardService.copy(this.translatedText);
  }

  copyToClipboardForSql(event: Event) {
    this.clipboardService.copy(this.translatedText.replace(/'/g, "''"));
  }

}
