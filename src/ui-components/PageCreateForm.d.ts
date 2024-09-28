/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PageCreateFormInputValues = {
    title?: string;
    slug?: string;
    body?: string;
    header?: string;
    subheader?: string;
    image?: string;
    date?: string;
    category?: string;
};
export declare type PageCreateFormValidationValues = {
    title?: ValidationFunction<string>;
    slug?: ValidationFunction<string>;
    body?: ValidationFunction<string>;
    header?: ValidationFunction<string>;
    subheader?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
    date?: ValidationFunction<string>;
    category?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PageCreateFormOverridesProps = {
    PageCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    slug?: PrimitiveOverrideProps<TextFieldProps>;
    body?: PrimitiveOverrideProps<TextFieldProps>;
    header?: PrimitiveOverrideProps<TextFieldProps>;
    subheader?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
    category?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PageCreateFormProps = React.PropsWithChildren<{
    overrides?: PageCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PageCreateFormInputValues) => PageCreateFormInputValues;
    onSuccess?: (fields: PageCreateFormInputValues) => void;
    onError?: (fields: PageCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PageCreateFormInputValues) => PageCreateFormInputValues;
    onValidate?: PageCreateFormValidationValues;
} & React.CSSProperties>;
export default function PageCreateForm(props: PageCreateFormProps): React.ReactElement;
