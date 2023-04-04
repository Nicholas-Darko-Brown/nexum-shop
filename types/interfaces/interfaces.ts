export interface ILoginResponse {
  apiAlias: string;
  contextToken: string;
  redirectUrl: string;
}

export interface IProducts {
  elements: {
    id: string;
    name: string;
    stock: number;
    cover: {
      media: {
        url: string;
      };
    };
    calculatedPrice: {
      totalPrice: number;
    };
  }[];
  total: number;
}

export interface ICategoryNames {
  elements: {
    id: string;
    name: string;
  }[];
  total?: number
}

export interface ICustomListingPageProps {
  category: string
}
