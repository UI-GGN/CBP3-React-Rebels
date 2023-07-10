import React from 'react';
import '../../styles/pages/CabRequestForm.scss';
import type { FormProps } from '../../types/FormProps';
import FormComponent from '../../components/FormComponent';
import CabRequestService from 'src/services/CabRequestService';
import { useNavigate } from 'react-router-dom';

const CabRequestForm: React.FC<FormProps> = () => {
  const navigate = useNavigate();
  const onSubmit = (formData: FormProps) => {
    CabRequestService.createRequest(formData)
      .then((response) => {
        console.log('Request created:', response);
        navigate('/cab-request');
      })
      .catch((error) => {
        console.error('Error creating request:', error);
      });
  };

  let formTemplate = {
    title: 'Request a Cab',
    fields: [
      {
        title: 'Name',
        type: 'text',
        name: 'name',
        validationProps: {
          required: true,
        },
        value: '',
      },
      {
        title: 'Employee ID',
        type: 'text',
        name: 'employeeId',
        validationProps: {
          required: true,
        },
        value: '',
      },
      {
        title: 'Project Code',
        type: 'text',
        name: 'projectCode',
        validationProps: {
          required: true,
        },
        value: '',
      },
      {
        title: 'Phone Number',
        type: 'text',
        name: 'phoneNumber',
        validationProps: {
          required: true,
        },
        value: '',
      },
      {
        title: 'Start Date',
        type: 'date',
        name: 'startDate',
        validationProps: {
          required: true,
        },
        value: '',
      },
      {
        title: 'End Date (optional)',
        type: 'date',
        name: 'endDate',
        validationProps: {
          required: false,
        },
        value: '',
      },
      {
        title: 'Time',
        type: 'time',
        name: 'time',
        validationProps: {
          required: true,
        },
        value: '',
      },
      {
        title: 'Pickup Location',
        type: 'text',
        name: 'pickupLocation',
        validationProps: {
          required: true,
        },
        value: '',
      },
      {
        title: 'Drop Location',
        type: 'text',
        name: 'dropLocation',
        validationProps: {
          required: true,
        },
        value: '',
      },
    ],
  };

  return (
    <div className="cabRequestForm">
      <div className="leftWindow"></div>
      <div className="rightWindow">
        <div className="formContainer mt-4 px-4 mr-8 ml-8">
          <FormComponent template={formTemplate} onSubmit={onSubmit} />
        </div>
      </div>
    </div>
  );
};

export default CabRequestForm;
