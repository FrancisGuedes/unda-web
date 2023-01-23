export module NavbarModule {
    export interface IFields {
        name: string;
        id: string;
        rel: string;
        href: string;
        title: string;
    }

    export interface INavlink {
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
        href: string;
        media: IMedia;
        alt: string;
    }

    export interface ILogo {
        metadata: string;
        sys: string;
        fields: IFields2;
    }

    export interface INavbar {
        name: string;
        id: string;
        navlinks: INavlink[];
        logo: ILogo;
    }

}

