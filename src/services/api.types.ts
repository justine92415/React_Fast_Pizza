export interface BaseResponse<D> {
  status: string;
  data: D;
}

export interface IMenu {
  id: number;
  name: string;
  unitPrice: number;
  imageUrl: string;
  ingredients: string[];
  soldOut: boolean;
}

export interface MenuResponse extends BaseResponse<IMenu[]> {}
