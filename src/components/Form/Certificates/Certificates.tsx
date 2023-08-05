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
                <AccordionTab header={
                  <>
                    <div className="p-accordion-header-display">
                      Certtifcation-{index + 1}
                      <Button
                        icon="pi pi-trash"
                        severity="danger"
                        text
                        className="p-button-delete"
                        onClick={() => handleRemove(remove, index)}
                      />
                    </div>
                  </>
                } key={`Certificates-${index + 1}`}>
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

                  </div>
                </AccordionTab>
              ))}
            </Accordion>
            <div className="add-more-container">
              <Button
                icon="pi pi-plus"
                type="button"
                label="Add More Certificate Details"
                className="p-button-add"
                onClick={() => handleAdd(push)}
              />
            </div>
          </>
        )}
      </FieldArray>
    </>
  )
}

export default Certificates