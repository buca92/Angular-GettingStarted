import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
	templateUrl: './product-list.component.html',
	styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
	pageTitle: string = 'Product List';
	imageWidth: number = 50;
	imageMargin: number = 2;
	showImage: boolean = false;

	private _listFilter: string = '';

	products: IProduct[] = [];
	errorMessage: string = '';
	subscription!: Subscription;

	constructor(private productService: ProductService) { }

	ngOnInit(): void {
		console.log('In ngOnInit');

		this.subscription = this.productService.getProducts().subscribe({
			next: products => this.products = products,
			error: err => this.errorMessage = err
		});
	}

	ngOnDestroy(): void {
		this.subscription.unsubscribe();
	}

	toggleImage(): void {
		this.showImage = !this.showImage;
	}

	get listFilter(): string {
		return this._listFilter;
	}

	set listFilter(value: string) {
		this._listFilter = value;

		console.log('In Setter', value);
	}

	performFilter(): IProduct[] {
		return this.products.filter(product => product.productName.toLowerCase().includes(this.listFilter.toLowerCase()));
	}

	onRatingClicked(message: string): void {
		this.pageTitle = `Product List: ${message}`;
	}
}
