export interface Product {
  content?: Content[];
}

export interface Content {
  id?: string;
  costValue: number;
  describe: string;
  name: string;
  saleValue: number;
}
