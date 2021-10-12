import { Component, OnInit } from '@angular/core';
import { AzureTranslatorService } from "../azure-translator.service";
import { ClipboardService } from "../clipboard.service";


@Component({
  selector: 'app-translator',
  templateUrl: './translator.component.html',
  styleUrls: ['./translator.component.less']
})
export class TranslatorComponent implements OnInit {
  translationEngine: string = "azure";
  translatedText: string;
  textToTranslate: string = "";
  apiKey: string = "";
  isLoading: boolean = false;

  constructor(private azureTranslatorService: AzureTranslatorService,
              private clipboardService: ClipboardService) {
  }

  ngOnInit(): void {
  }

  translate() {
    this.azureTranslatorService
      .translate(this.apiKey, "en", this.textToTranslate)
      .subscribe(x => {
        console.log(x);
        this.translatedText = x;
      });
  }

  copyToClipboard(isForSQL: boolean = false) {
    this.clipboardService.copy(isForSQL ?
      this.translatedText.replace(/'/g, "''")
      :
      this.translatedText);
  }

}
