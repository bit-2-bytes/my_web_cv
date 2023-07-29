import React, { useState } from "react";
import { Field, FieldArray } from "formik";
import { InputText } from "primereact/inputtext";
import { Accordion, AccordionTab } from "primereact/accordion";
import { Button } from "primereact/button";
import { InputTextarea } from 'primereact/inputtextarea';

function Awards({ values }: any) {
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
     <FieldArray name="Award">
        {({ push, remove }: any) => (
          <>
            <Accordion activeIndex={0}>
              {values.Award.map((value: any, index: number) => (
                <AccordionTab header={`Award-${index + 1}`} key={`Award-${index + 1}`}>
                  <div key={index} className="p-sameline">
                    <div className="p-field">
                      <label htmlFor="name">Name</label>
                      <Field
                        as={InputText}
                        name={`Award.${index}.name`}
                        placeholder="Eg: National Award"
                      />
                    </div>
                    <div className="p-field">
                      <label htmlFor="year">Recived Date</label>
                      <Field
                        as={InputText}
                        name={`Award.${index}.year`}
                        placeholder="Eg: Aug 2021"
                      />
                    </div>
                    <div className="p-field p-sameline">
                      <label htmlFor="description">Award Description</label>
                      <Field
                        as={InputTextarea}
                        name={`Award.${index}.description`}
                        placeholder="Eg: For composing a song named Hosonna.."
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

export default Awards