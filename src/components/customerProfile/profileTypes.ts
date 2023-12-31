import { Address } from '@commercetools/platform-sdk';

export interface ICustomerInfo {
  name: string;
  surename: string;
  email: string;
  birthDate: string;
}

export interface IAddressTypes {
  billing: string[];
  shipping: string[];
  defaultBilling: string;
  defaultShipping: string;
}

export interface IParsedCustomer {
  info: ICustomerInfo;
  address?: Address[];
  addressTypes?: IAddressTypes;
}
