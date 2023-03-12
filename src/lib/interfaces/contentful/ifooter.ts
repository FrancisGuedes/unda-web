export module FooterModule {
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
        data: object;
        content: IContent[];
    }

    export interface IFields {
        name: string;
        id: string;
        text: IText;
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