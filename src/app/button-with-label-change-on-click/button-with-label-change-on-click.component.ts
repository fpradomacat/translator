import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button-with-label-change-on-click',
  templateUrl: './button-with-label-change-on-click.component.html',
  styleUrls: ['./button-with-label-change-on-click.component.less'],
  // inputs: ['isDisabled', 'color', 'title', 'label', 'labelClicked'],
  // outputs: ['onClick']
})
export class ButtonWithLabelChangeOnClickComponent implements OnInit {
  btnLabel: string;
  color: string = '';

  @Input() label: string;
  @Input() labelClicked: string;
  @Input() isDisabled: boolean;
  @Input() title: string;
  @Input() colorClicked: string;

  @Output() onClick = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    this.btnLabel = this.label;
  }

  onClickButton(event: Event) {
    this.btnLabel = this.labelClicked;
    this.color = this.colorClicked;
    this.onClick.emit(event);
  }

  onBlur() {
    this.btnLabel = this.label;
    this.color = '';
  }
}
