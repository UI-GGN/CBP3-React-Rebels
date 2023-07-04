export type FormProps = {
  template: {
    title: string;
    fields: {
      title: string;
      type: string;
      name: string;
      value: string;
      validationProps: Record<string, any>;
    }[];
  };
  initialState: {};
  onSubmit?: (formData: FormProps) => void;
};
