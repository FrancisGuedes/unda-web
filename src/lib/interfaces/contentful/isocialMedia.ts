export module ISocialMediaModule {

  export interface IImage {
      width: number;
      height: number;
  }

  export interface IDetails {
      size: number;
      image: IImage;
  }

  export interface IFile {
      url: string;
      details: IDetails;
      fileName: string;
      contentType: string;
  }

  export interface IFields3 {
      title: string;
      description: string;
      file: IFile;
  }

  export interface IMedia {
      metadata: string;
      sys: string;
      fields: IFields3;
  }

  export interface IFields2 {
      name: string;
      id: string;
      title: string;
      href: string;
      media: IMedia;
      alt: string;
  }

  export interface ILink {
      metadata: string;
      sys: string;
      fields: IFields2;
  }

  export interface IFields {
      name: string;
      id: string;
      title: string;
      rel: string;
      links: ILink[];
  }

  export interface ISocialMediaContent {
      metadata: string;
      sys: string;
      fields: IFields;
  }

  export interface ISocialMedia {
      name: string;
      id: string;
      socialMediaContent: ISocialMediaContent[];
  }
}

