import React, { useState } from "react";

function DynamicForm() {
  const [formFields, setFormFields] = useState([{ id: 1, value: "" }]);
  const [formData, setFormData] = useState({});
  // Event to add form fild

  const addFormField = () => {
    const newForm = { id: formFields.length + 1, value: "" };
    setFormFields([...formFields, newForm]);
  };

  const updateForm = (id, value) => {
    setFormFields((prevFileds) =>
      prevFileds.map((field) => (field === id ? { ...field, value } : field))
    );
  };

  //set formdata
  const handleSubmit = (e) => {
    e.preventDefault();
    const formDataObject = {};
    formFields.forEach((field) => {
      formDataObject[`field${field.id}`] = field.value;
    });
    setFormData(formDataObject);
  };

  return (
    <div>
      <h2>Dynamic Form</h2>
      <form onSubmit={handleSubmit}>
        {formFields.map((field) => (
          <div key={field.id}>
            <label>
              Field {field.id}:
              <input
                type="text"
                value={field.value}
                onChange={(e) => updateForm(field.id, e.target.value)}
              />
            </label>
          </div>
        ))}
        <button type="button" onClick={addFormField}>
          Add Field
        </button>
        <button type="submit">Submit</button>
      </form>
      {Object.keys(formData).length > 0 && (
        <div>
          <h3>Form Data:</h3>
          <pre>{JSON.stringify(formData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default DynamicForm;
