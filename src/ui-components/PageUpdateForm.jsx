/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getPage } from "../graphql/queries";
import { updatePage } from "../graphql/mutations";
const client = generateClient();
export default function PageUpdateForm(props) {
  const {
    id: idProp,
    page: pageModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    title: "",
    slug: "",
    body: "",
    header: "",
    subheader: "",
    image: "",
    date: "",
    category: "",
  };
  const [title, setTitle] = React.useState(initialValues.title);
  const [slug, setSlug] = React.useState(initialValues.slug);
  const [body, setBody] = React.useState(initialValues.body);
  const [header, setHeader] = React.useState(initialValues.header);
  const [subheader, setSubheader] = React.useState(initialValues.subheader);
  const [image, setImage] = React.useState(initialValues.image);
  const [date, setDate] = React.useState(initialValues.date);
  const [category, setCategory] = React.useState(initialValues.category);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = pageRecord
      ? { ...initialValues, ...pageRecord }
      : initialValues;
    setTitle(cleanValues.title);
    setSlug(cleanValues.slug);
    setBody(cleanValues.body);
    setHeader(cleanValues.header);
    setSubheader(cleanValues.subheader);
    setImage(cleanValues.image);
    setDate(cleanValues.date);
    setCategory(cleanValues.category);
    setErrors({});
  };
  const [pageRecord, setPageRecord] = React.useState(pageModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getPage.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getPage
        : pageModelProp;
      setPageRecord(record);
    };
    queryData();
  }, [idProp, pageModelProp]);
  React.useEffect(resetStateValues, [pageRecord]);
  const validations = {
    title: [{ type: "Required" }],
    slug: [],
    body: [],
    header: [],
    subheader: [],
    image: [],
    date: [],
    category: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          title,
          slug: slug ?? null,
          body: body ?? null,
          header: header ?? null,
          subheader: subheader ?? null,
          image: image ?? null,
          date: date ?? null,
          category: category ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updatePage.replaceAll("__typename", ""),
            variables: {
              input: {
                id: pageRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "PageUpdateForm")}
      {...rest}
    >
      <TextField
        label="Title"
        isRequired={true}
        isReadOnly={false}
        value={title}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title: value,
              slug,
              body,
              header,
              subheader,
              image,
              date,
              category,
            };
            const result = onChange(modelFields);
            value = result?.title ?? value;
          }
          if (errors.title?.hasError) {
            runValidationTasks("title", value);
          }
          setTitle(value);
        }}
        onBlur={() => runValidationTasks("title", title)}
        errorMessage={errors.title?.errorMessage}
        hasError={errors.title?.hasError}
        {...getOverrideProps(overrides, "title")}
      ></TextField>
      <TextField
        label="Slug"
        isRequired={false}
        isReadOnly={false}
        value={slug}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              slug: value,
              body,
              header,
              subheader,
              image,
              date,
              category,
            };
            const result = onChange(modelFields);
            value = result?.slug ?? value;
          }
          if (errors.slug?.hasError) {
            runValidationTasks("slug", value);
          }
          setSlug(value);
        }}
        onBlur={() => runValidationTasks("slug", slug)}
        errorMessage={errors.slug?.errorMessage}
        hasError={errors.slug?.hasError}
        {...getOverrideProps(overrides, "slug")}
      ></TextField>
      <TextField
        label="Body"
        isRequired={false}
        isReadOnly={false}
        value={body}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              slug,
              body: value,
              header,
              subheader,
              image,
              date,
              category,
            };
            const result = onChange(modelFields);
            value = result?.body ?? value;
          }
          if (errors.body?.hasError) {
            runValidationTasks("body", value);
          }
          setBody(value);
        }}
        onBlur={() => runValidationTasks("body", body)}
        errorMessage={errors.body?.errorMessage}
        hasError={errors.body?.hasError}
        {...getOverrideProps(overrides, "body")}
      ></TextField>
      <TextField
        label="Header"
        isRequired={false}
        isReadOnly={false}
        value={header}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              slug,
              body,
              header: value,
              subheader,
              image,
              date,
              category,
            };
            const result = onChange(modelFields);
            value = result?.header ?? value;
          }
          if (errors.header?.hasError) {
            runValidationTasks("header", value);
          }
          setHeader(value);
        }}
        onBlur={() => runValidationTasks("header", header)}
        errorMessage={errors.header?.errorMessage}
        hasError={errors.header?.hasError}
        {...getOverrideProps(overrides, "header")}
      ></TextField>
      <TextField
        label="Subheader"
        isRequired={false}
        isReadOnly={false}
        value={subheader}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              slug,
              body,
              header,
              subheader: value,
              image,
              date,
              category,
            };
            const result = onChange(modelFields);
            value = result?.subheader ?? value;
          }
          if (errors.subheader?.hasError) {
            runValidationTasks("subheader", value);
          }
          setSubheader(value);
        }}
        onBlur={() => runValidationTasks("subheader", subheader)}
        errorMessage={errors.subheader?.errorMessage}
        hasError={errors.subheader?.hasError}
        {...getOverrideProps(overrides, "subheader")}
      ></TextField>
      <TextField
        label="Image"
        isRequired={false}
        isReadOnly={false}
        value={image}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              slug,
              body,
              header,
              subheader,
              image: value,
              date,
              category,
            };
            const result = onChange(modelFields);
            value = result?.image ?? value;
          }
          if (errors.image?.hasError) {
            runValidationTasks("image", value);
          }
          setImage(value);
        }}
        onBlur={() => runValidationTasks("image", image)}
        errorMessage={errors.image?.errorMessage}
        hasError={errors.image?.hasError}
        {...getOverrideProps(overrides, "image")}
      ></TextField>
      <TextField
        label="Date"
        isRequired={false}
        isReadOnly={false}
        value={date}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              slug,
              body,
              header,
              subheader,
              image,
              date: value,
              category,
            };
            const result = onChange(modelFields);
            value = result?.date ?? value;
          }
          if (errors.date?.hasError) {
            runValidationTasks("date", value);
          }
          setDate(value);
        }}
        onBlur={() => runValidationTasks("date", date)}
        errorMessage={errors.date?.errorMessage}
        hasError={errors.date?.hasError}
        {...getOverrideProps(overrides, "date")}
      ></TextField>
      <TextField
        label="Category"
        isRequired={false}
        isReadOnly={false}
        value={category}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              slug,
              body,
              header,
              subheader,
              image,
              date,
              category: value,
            };
            const result = onChange(modelFields);
            value = result?.category ?? value;
          }
          if (errors.category?.hasError) {
            runValidationTasks("category", value);
          }
          setCategory(value);
        }}
        onBlur={() => runValidationTasks("category", category)}
        errorMessage={errors.category?.errorMessage}
        hasError={errors.category?.hasError}
        {...getOverrideProps(overrides, "category")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || pageModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || pageModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
