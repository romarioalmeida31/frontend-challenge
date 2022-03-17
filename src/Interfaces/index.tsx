export interface ICountry {
  translations: {
    br: string;
  };
  flag: string;
}

export interface IGoal {
  id: any;
  country: ICountry;
  spot: string;
  date: string;
}
