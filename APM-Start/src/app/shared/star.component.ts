import { Component, EventEmitter, Input, OnChanges, Output } from "@angular/core";

@Component({
	selector: 'pm-star',
	templateUrl: './star.component.html',
	styleUrls: [ './star.component.css' ]
})
export class StarComponent implements OnChanges {
	private _cropWidth: number = 0;
	private _rating: number = 0;
	private _ratingClicked: EventEmitter<string> = new EventEmitter<string>();

	get cropWidth(): number {
		return this._cropWidth;
	}

	set cropWidth(value: number) {
		this._cropWidth = value;
	}

	get rating(): number {
		return this._rating;
	}

	@Input() set rating(value: number) {
		this._rating = value;
	}

	@Output() get ratingClicked(): EventEmitter<string> {
		return this._ratingClicked;
	}

	ngOnChanges(): void {
		this.cropWidth = this.rating * 75 / 5;
	}

	onClick(): void {
		this.ratingClicked.emit(`The rating ${this.rating} was clicked`);
	}
}