import React, { type ComponentType, type PropsWithChildren } from 'react';
export type ServerDocumentProps = PropsWithChildren<{
    bodyAttributes?: React.ComponentPropsWithoutRef<'body'>;
    bodyNodes?: React.ReactNode;
    headNodes?: React.ReactNode;
    htmlAttributes?: React.ComponentPropsWithoutRef<'html'>;
    metadataNodes?: React.ReactNode;
}>;
export type ServerDocumentComponent = ComponentType<ServerDocumentProps>;
export type ServerDocumentPayload = Omit<ServerDocumentProps, 'children'>;
export declare function useServerDocumentContext(): ServerDocumentPayload;
export declare function ServerDocument({ Root, children, payload, }: PropsWithChildren<{
    payload: ServerDocumentPayload;
    Root: ServerDocumentComponent;
}>): React.JSX.Element;
//# sourceMappingURL=ServerDocument.d.ts.map