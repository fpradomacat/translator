import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-translator',
  templateUrl: './translator.component.html',
  styleUrls: ['./translator.component.less']
})
export class TranslatorComponent implements OnInit {
  translationEngine: string = "azure";

  constructor() { }

  ngOnInit(): void {
  }

}
