export interface IQuickLink {
  _id: string;
  title: string;
  text: string;
  link: string;
}

export interface IQuickLinks extends Array<IQuickLink> {}
