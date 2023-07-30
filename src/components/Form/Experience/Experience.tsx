import React, { useState } from "react";
import { Field, FieldArray } from "formik";
import { InputText } from "primereact/inputtext";
import { Accordion, AccordionTab } from "primereact/accordion";
import { Button } from "primereact/button";
import { InputTextarea } from 'primereact/inputtextarea';

function Experience({ values }: any) {
  const handleAdd = (push: any) => {
    push({
        organisation: '',
        role: '',
        year: '',
        "project details": '',
      });
  };

  const handleRemove = (remove: any, index: any) => {
    remove(index);
  };
  return (
    <>
      <FieldArray name="Professional Experience">
        {({ push, remove }: any) => (
          <>
            <Accordion activeIndex={0}>
              {values["Professional Experience"].map((value: any, index: number) => (
                <AccordionTab header={`Professional Experience-${index + 1}`} key={`Professional Experience-${index + 1}`}>
                  <div key={index} className="p-sameline">
                    <div className="p-field">
                      <label htmlFor="organisation">Organisation</label>
                      <Field
                        as={InputText}
                        name={`Professional Experience.${index}.organisation`}
                        placeholder="Eg: Reliance Industries"
                      />
                    </div>
                    <div className="p-field">
                      <label htmlFor="role">Role</label>
                      <Field
                        as={InputText}
                        name={`Professional Experience.${index}.role`}
                        placeholder="Eg: Senior Manager"
                      />
                    </div>
                    <div className="p-field">
                      <label htmlFor="year">Duration (From-To)</label>
                      <Field
                        as={InputText}
                        name={`Professional Experience.${index}.year`}
                        placeholder="Eg: 2017-2021"
                      />
                    </div>
                    <div className="p-field p-sameline">
                      <label htmlFor="project details">Project Details</label>
                      <Field
                        as={InputTextarea}
                        name={`Professional Experience.${index}.project details`}
                        placeholder="Eg: I lead a team of 10 memebers in a most sought after project"
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
  );
}

export default Experience;
