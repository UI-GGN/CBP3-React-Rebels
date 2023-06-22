import React from 'react';
import '../../styles/pages/CabRequestForm.scss';
import type { FormProps } from '../../types/FormProps';
import FormComponent from '../../components/FormComponent';
import CabRequestService from 'src/services/CabRequestService';
import { useNavigate } from 'react-router-dom';

const CabRequestForm: React.FC<FormProps> = () => {
  const onSubmit = (formData: FormProps) => {
    CabRequestService.createRequest(formData)
      .then((response) => {
        console.log('Request created:', response);
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const navigate = useNavigate();
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
        type: 'text',
        name: 'startDate',
        validationProps: {
          required: true,
        },
        value: '',
      },
      {
        title: 'End Date (optional)',
        type: 'text',
        name: 'endDate',
        validationProps: {
          required: false,
        },
        value: '',
      },
      {
        title: 'Time',
        type: 'text',
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
        <div className="formContainer mt-4">
          <FormComponent template={formTemplate} />
        </div>
      </div>
    </div>
  );
};

export default CabRequestForm;
