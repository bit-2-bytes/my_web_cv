import React, { useState } from "react";
import { Field, FieldArray } from "formik";
import { InputText } from "primereact/inputtext";
import { Accordion, AccordionTab } from "primereact/accordion";
import { Button } from "primereact/button";
import { InputTextarea } from "primereact/inputtextarea";

function Education({ values }: any) {
  const handleAdd = (push: any) => {
    push({
      degree: "",
      institution: "",
      year: "",
      specialisation: "",
      achievements: "",
    });
  };

  const handleRemove = (remove: any, index: any) => {
    remove(index);
  };
  return (
    <>
      <FieldArray name="Education">
        {({ push, remove }: any) => (
          <>
            <Accordion activeIndex={0}>
              {values.Education.map((value: any, index: number) => (
                <AccordionTab
                  header={
                    <>
                      <div className="p-accordion-header-display">
                        Education-{index + 1}
                        <Button
                          icon="pi pi-trash"
                          severity="danger"
                          text
                          className="p-button-delete"
                          onClick={() => handleRemove(remove, index)}
                        />
                      </div>
                    </>
                  }
                  key={`Education-${index + 1}`}
                >
                  <div key={index} className="p-sameline">
                    <div className="p-field">
                      <label htmlFor="degree">Degree</label>
                      <Field
                        as={InputText}
                        name={`Education.${index}.degree`}
                        placeholder="Eg: B.Sc / B.E / B.Tech"
                      />
                    </div>
                    <div className="p-field">
                      <label htmlFor="institution">Institution</label>
                      <Field
                        as={InputText}
                        name={`Education.${index}.institution`}
                        placeholder="Eg: Indian Institute of Technology"
                      />
                    </div>
                    <div className="p-field">
                      <label htmlFor="specialisation">Specialisation</label>
                      <Field
                        as={InputText}
                        name={`Education.${index}.specialisation`}
                        placeholder="Eg: Physics / Computer Science"
                      />
                    </div>
                    <div className="p-field">
                      <label htmlFor="year">Duration (From-To)</label>
                      <Field
                        as={InputText}
                        name={`Education.${index}.year`}
                        placeholder="Eg: 2017-2021"
                      />
                    </div>
                    <div className="p-field p-sameline">
                      <label htmlFor="achievements">Achievement</label>
                      <Field
                        as={InputTextarea}
                        name={`Education.${index}.achievements`}
                        placeholder="Eg: I was a university topper and passed with 98.5 CGPA"
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
                label="Add Education Details"
                className="p-button-add"
                onClick={() => handleAdd(push)}
              />
            </div>
          </>
        )}
      </FieldArray>
    </>
  );
}

export default Education;
