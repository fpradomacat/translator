import { Component, OnInit } from '@angular/core';
import { AzureTranslatorService } from "../azure-translator.service";
import { ClipboardService } from "../clipboard.service";


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

  constructor(private azureTranslatorService: AzureTranslatorService,
              private clipboardService: ClipboardService) {
  }

  ngOnInit(): void {
  }

  translate() {
    this.isLoading = true;
    this.azureTranslatorService
      .translate(this.apiKey, "en", this.textToTranslate)
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
