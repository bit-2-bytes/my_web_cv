import React, { useState } from "react";
import { Field, FieldArray } from "formik";
import { InputText } from "primereact/inputtext";
import { Accordion, AccordionTab } from "primereact/accordion";
import { Button } from "primereact/button";
import { InputTextarea } from 'primereact/inputtextarea';

function Certificates({ values }: any) {
    const handleAdd = (push: any) => {
        push({
            name: '',
            description: '',
            year: '',
          });
      };
    
      const handleRemove = (remove: any, index: any) => {
        remove(index);
      };
  return (
    <>
     <FieldArray name="Certificates">
        {({ push, remove }: any) => (
          <>
            <Accordion activeIndex={0}>
              {values.Certificates.map((value: any, index: number) => (
                <AccordionTab header={`Certificates-${index + 1}`} key={`Certificates-${index + 1}`}>
                  <div key={index} className="p-sameline">
                    <div className="p-field">
                      <label htmlFor="name">Name</label>
                      <Field
                        as={InputText}
                        name={`Certificates.${index}.name`}
                        placeholder="Eg: Python Developer Certificate"
                      />
                    </div>
                    <div className="p-field">
                      <label htmlFor="year">Recived Date</label>
                      <Field
                        as={InputText}
                        name={`Certificates.${index}.year`}
                        placeholder="Eg: Aug 2021"
                      />
                    </div>
                    <div className="p-field p-sameline">
                      <label htmlFor="description"> Description</label>
                      <Field
                        as={InputTextarea}
                        name={`Certificates.${index}.description`}
                        placeholder="Eg: For attending a  3 month course on python programming"
                      />
                    </div>
                    <Button
                      icon="pi pi-trash"
                      severity="danger"
                      text
                      className="p-button-delete"
                      onClick={() => handleRemove(remove, index)}
                    />
                  </div>
                </AccordionTab>
              ))}
            </Accordion>
            <Button
              icon="pi pi-plus"
              className="p-button-add"
              onClick={() => handleAdd(push)}
            />
          </>
        )}
      </FieldArray>
    </>
  )
}

export default Certificates