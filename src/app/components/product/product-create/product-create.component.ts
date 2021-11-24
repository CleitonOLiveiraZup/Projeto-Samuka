import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css'],
})
export class ProductCreateComponent implements OnInit {
  form: FormGroup;
  stoc: FormGroup;

  constructor(
    private productService: ProductService,
    private router: Router,
    public formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: [null, Validators.required],
      describe: [null, Validators.required],
      saleValue: [null, Validators.required],
      type: [{ value: 'ALIMENTO', disabled: true }],
      stocks: this.formBuilder.array([this.initId()]),
    });
  }

  initId() {
    return (this.stoc = this.formBuilder.group({
      id: [null, Validators.required],
    }));
  }

  transformProducts() {
    const formProducts = this.form.getRawValue();
    formProducts.saleValue = Number(formProducts.saleValue);
    return formProducts;
  }

  createProduct() {
    const formProducts = this.transformProducts();
    this.productService.create(formProducts).subscribe(() => {
      this.productService.showMessage('Produto criado!');
      this.router.navigate(['/products']);
    });
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }
}
