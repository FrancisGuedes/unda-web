export module PortfolioModule {

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
        media: IMedia;
        alt: string;
    }

    export interface ITitleImage {
        metadata: string;
        sys: string;
        fields: IFields;
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

    export interface ICardImage {
        metadata: string;
        sys: string;
        fields: IFields4;
    }

    export interface IContent2 {
        nodeType: string;
        value: string;
        marks: any[];
        data: string;
    }

    export interface IContent {
        nodeType: string;
        data: string;
        content: IContent2[];
    }

    export interface IParagraphContent {
        nodeType: string;
        data: string;
        content: IContent[];
    }

    export interface IFields6 {
        name: string;
        id: string;
        paragraphContent: IParagraphContent;
    }

    export interface ICardDescription {
        metadata: string;
        sys: string;
        fields: IFields6;
    }

    export interface IContent4 {
        nodeType: string;
        value: string;
        marks: any[];
        data: object;
    }

    export interface IContent3 {
        nodeType: string;
        data: object;
        content: IContent4[];
    }

    export interface IText {
        nodeType: string;
        data: object;
        content: IContent3[];
    }
    export interface IFields7 {
        name: string;
        id: string;
        text: IText;
    }

    export interface ICardFooter {
        metadata: string;
        sys: string;
        fields: IFields7;
    }

    export interface IFields3 {
        name: string;
        id: string;
        cardImage: ICardImage[];
        cardDescription: ICardDescription[];
        cardFooter: ICardFooter[];
    }

    export interface ICardMain {
        metadata: string;
        sys: string;
        fields: IFields3;
    }

    export interface IPortfolio {
        name: string;
        id: string;
        title: string;
        titleImage: ITitleImage;
        cardMain: ICardMain[];
    }

}

