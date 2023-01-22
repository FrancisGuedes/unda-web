export module ILayoutModule {

    export interface IImage2 {
        width: number;
        height: number;
    }

    export interface IDetails {
        size: number;
        image: IImage2;
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
        title: string;
        href: string;
        media: IMedia;
        alt: string;
    }

    export interface IImage {
        metadata: string;
        sys: string;
        fields: IFields;
    }

    export interface ILayout {
        name: string;
        id: string;
        image: IImage[];
    }
}

