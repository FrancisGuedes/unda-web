export module IContactModule {

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

    export interface IFields {
        name: string;
        id: string;
        paragraphContent: IParagraphContent;
    }

    export interface IStatement {
        metadata: string;
        sys: string;
        fields: IFields;
    }

    export interface IFields2 {
        name: string;
        id: string;
        rel: string;
        href: string;
        title: string;
    }

    export interface IButton {
        metadata: string;
        sys: string;
        fields: IFields2;
    }

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

    export interface IFields4 {
        title: string;
        description: string;
        file: IFile;
    }

    export interface IMedia {
        metadata: string;
        sys: string;
        fields: IFields4;
    }

    export interface IFields3 {
        name: string;
        id: string;
        media: IMedia;
        alt: string;
    }

    export interface IButtonImage {
        metadata: string;
        sys: string;
        fields: IFields3;
    }

    export interface IContact {
        name: string;
        id: string;
        statement: IStatement[];
        button: IButton;
        buttonImage: IButtonImage;
    }
}

