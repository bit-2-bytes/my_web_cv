import React from "react";
import { Field, FieldArray } from "formik";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

function Technologies({ values }: any) {
  const handleAdd = (push: any, value: any) => {
    if (values.Technologies.length < 10) push(value);
  };

  const handleRemove = (remove: any, index: any) => {
    remove(index);
  };

  return (
    <>
      <p>List Down the all technologies you know( *Max 10)</p>
      <FieldArray name="Technologies">
        {({ push, remove }: any) => (
          <>
            {values.Technologies.map((value: any, index: number) => (
              <div key={index} className="p-sameline">
                <Field
                  as={InputText}
                  name={`Technologies.${index}`}
                  placeholder={"Enter technology-"+(index+1)}
                />

                <Button
                  icon="pi pi-trash"
                  severity="danger"
                  text
                  className="p-button-delete"
                  onClick={() => handleRemove(remove, index)}
                />
                <Button
                  icon="pi pi-plus"
                  className="p-button-add"
                  type="button"
                  label="Add Technologies"
                  style={{
                    display:
                      index === values.Technologies.length - 1
                        ? "block"
                        : "none",
                  }}
                  onClick={() => handleAdd(push, "")}
                />
              </div>
            ))}
            <Button
              icon="pi pi-plus"
              className="p-button-add"
              type="button"
              label="Add Technologies"
              style={{
                display: values.Technologies.length === 0 ? "block" : "none",
              }}
              onClick={() => handleAdd(push, "")}
            />
          </>
        )}
      </FieldArray>
    </>
  );
}

export default Technologies;
