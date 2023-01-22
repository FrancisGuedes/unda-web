export module IFooterModule {

    export interface IFields {
        name: string;
        id: string;
        text: string;
    }

    export interface IAuthorText {
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

    export interface IAuthorLink {
        metadata: string;
        sys: string;
        fields: IFields2;
    }

    export interface IFooter {
        name: string;
        id: string;
        allRightsText: string;
        authorText: IAuthorText;
        authorLink: IAuthorLink;
    }
}