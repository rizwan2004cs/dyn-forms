// src/components/DynamicForm.tsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { FormSchema } from '../types/FormSchema';

interface DynamicFormProps {
  schema: FormSchema;
}

const DynamicForm: React.FC<DynamicFormProps> = ({ schema }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);  // Log form data
  };

  const renderField = (field: any) => {
    switch (field.type) {
      case 'text':
      case 'email':
        return (
          <input
            type={field.type}
            placeholder={field.placeholder}
            {...register(field.id, { required: field.required, pattern: field.validation?.pattern })}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
          />
        );
      case 'select':
        return (
          <select {...register(field.id, { required: field.required })} className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full">
            {field.options?.map((option: any) => (
              <option value={option.value} key={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );
      case 'radio':
        return (
          <div className="space-y-2">
            {field.options?.map((option: any) => (
              <label key={option.value} className="inline-flex items-center space-x-2">
                <input
                  type="radio"
                  {...register(field.id, { required: field.required })}
                  value={option.value}
                  className="form-radio text-blue-500"
                />
                <span>{option.label}</span>
              </label>
            ))}
          </div>
        );
      case 'textarea':
        return (
          <textarea
            placeholder={field.placeholder}
            {...register(field.id, { required: field.required })}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
          ></textarea>
        );
      default:
        return null;
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-800">{schema.formTitle}</h1>
      <p className="text-gray-600">{schema.formDescription}</p>

      {schema.fields.map((field) => (
        <div key={field.id} className="flex flex-col space-y-2">
          <label htmlFor={field.id} className="text-lg font-medium text-gray-700">
            {field.label}
          </label>
          {renderField(field)}
          {errors[field.id] && <p className="text-red-500 text-sm">{field.validation?.message || "This field is required."}</p>}
        </div>
      ))}

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Submit
      </button>
    </form>
  );
};

export default DynamicForm;
