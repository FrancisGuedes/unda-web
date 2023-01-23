export module AboutModule {
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

    export interface IFields2 {
        title: string;
        description: string;
        file: IFile;
    }

    export interface IMedia {
        metadata: string;
        sys: string;
        fields: IFields2;
    }

    export interface IFields {
        name: string;
        id: string;
        media:IMedia;
        alt: string;
    }

    export interface ITitleImage {
        metadata: string;
        sys: string;
        fields: IFields;
    }

    export interface IContent2 {
        data: string;
        marks: any[];
        value: string;
        nodeType: string;
    }

    export interface IContent {
        data: string;
        content: IContent2[];
        nodeType: string;
    }

    export interface IParagraphContent {
        data: string;
        content: IContent[];
        nodeType: string;
    }

    export interface IFields3 {
        name: string;
        id: string;
        paragraphContent: IParagraphContent;
    }

    export interface IText {
        metadata: string;
        sys: string;
        fields: IFields3;
    }

    export interface IImage2 {
        width: number;
        height: number;
    }

    export interface IDetails2 {
        size: number;
        image: IImage2;
    }

    export interface IFile2 {
        url: string;
        details: IDetails2;
        fileName: string;
        contentType: string;
    }

    export interface IFields5 {
        title: string;
        description: string;
        file: IFile2;
    }

    export interface IMedia2 {
        metadata: string;
        sys: string;
        fields: IFields5;
    }

    export interface IFields4 {
        name: string;
        id: string;
        media: IMedia2;
        alt: string;
    }

    export interface IAboutImage {
        metadata: string;
        sys: string;
        fields: IFields4;
    }

    export interface IAbout {
        name: string;
        id: string;
        title: string;
        titleImage: ITitleImage;
        text: IText[];
        aboutImage: IAboutImage[];
    }

}

