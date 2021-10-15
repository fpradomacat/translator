import { Component, OnInit } from '@angular/core';
import { AzureTranslatorService } from "../azure-translator.service";
import { ClipboardService } from "../clipboard.service";
import { Labels } from "./translator-labels";


@Component({
  selector: 'app-translator',
  templateUrl: './translator.component.html',
  styleUrls: ['./translator.component.less']
})
export class TranslatorComponent implements OnInit {
  // Translation
  translatedText: string;
  textToTranslate: string = "";
  apiKey: string = "";

  // Loader
  isLoading: boolean = false;

  // Buttons
  copyButtonLabel: string = Labels.Copy;
  copyForSqlButtonLabel: string = Labels.CopyForSql;

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

  onCopyButtonBlur() {
    this.copyButtonLabel = Labels.Copy;
  }

  onCopyForSqlButtonBlur() {
    this.copyForSqlButtonLabel = Labels.CopyForSql;
  }

  copyToClipboard() {
    this.copyButtonLabel = Labels.Copied;
    this.clipboardService.copy(this.translatedText);
  }

  copyToClipboardForSql() {
    this.copyForSqlButtonLabel = Labels.Copied;
    this.clipboardService.copy(this.translatedText.replace(/'/g, "''"));
  }

}
