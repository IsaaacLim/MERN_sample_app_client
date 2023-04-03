export interface IQuickLink {
  _id: string;
  title: string;
  text: string;
  link: string;
}

export interface IQuickLinks extends Array<IQuickLink> {}

export interface QuickLinkDeleteData {
  id: string
}
export interface QuickLinkCreateData {
  title: string;
  text: string;
  link: string;
}

export interface QuickLinkEditData extends QuickLinkCreateData {
  id: string;
}
