export interface IBook {
  _id: string;
  title: string;
  author: string;
  genre: string;
  isbn: string;
  description?: string;
  copies: number;
  available: boolean;
  createdAt: Date;
  updatedAt: Date;
  updateAvailability(): Promise<this>;
}

export interface IBorrow {
  _id: string;
  book: string;
  quantity: number;
  dueDate: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface IBorrowSummary {
  book: {
    title: string;
    isbn: string;
  };
  totalQuantity: number;
}
export interface IBookResponse {
  success: boolean;
  message: string;
  data: IBook[];
  pagination: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}