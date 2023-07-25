import React from 'react';

export type FormProps = {
  template: {
    title: string;
    fields: {
      title: string;
      type: string;
      name: string;
      value: string;
      validationProps?: Record<string, any>;
    }[];
  };
  initialState: {};
  onSubmit?: (event: React.FormEvent) => void;
  onChange: (event: React.FormEvent) => void;
};
