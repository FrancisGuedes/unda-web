export module HeroModule {
    export interface IContent2 {
        nodeType: string;
        value: string;
        marks: any[];
        data: object;
    }

    export interface IContent {
        nodeType: string;
        data: object;
        content: IContent2[];
    }
    export interface IText {
        nodeType: string;
        data: string;
        content: IContent[];
    }

    export interface IFields {
        name: string;
        id: string;
        text: IText;
    }

    export interface ITitle {
        metadata: string;
        sys: string;
        fields: IFields;
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
        media: IMedia;
        alt: string;
    }

    export interface IHeroImage {
        metadata: string;
        sys: string;
        fields: IFields2;
    }

    export interface IFields4 {
        name: string;
        id: string;
        title: string;
        href: string;
        ariaLabel: string;
        type: string;
    }

    export interface IButton {
        metadata: string;
        sys: string;
        fields: IFields4;
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

    export interface IFields6 {
        title: string;
        description: string;
        file: IFile2;
    }

    export interface IMedia2 {
        metadata: string;
        sys: string;
        fields: IFields6;
    }

    export interface IFields5 {
        name: string;
        id: string;
        media: IMedia2;
        alt: string;
    }

    export interface IButtonImage {
        metadata: string;
        sys: string;
        fields: IFields5;
    }

    export interface IHero {
        name: string;
        id: string;
        title: ITitle[];
        heroImage: IHeroImage[];
        button: IButton;
        buttonImage: IButtonImage;
    }
}

