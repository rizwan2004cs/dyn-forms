// In src/types/FormSchema.ts
export interface Field {
    id: string;
    label: string;
    type: string;
    placeholder?: string;
    required?: boolean;
    validation?: {
      message: string; // You can also add more validation properties if needed (e.g., minLength, maxLength)
    };
  }
  
  export interface FormSchema {
    formTitle: string;
    formDescription: string;
    fields: Field[];
  }
  