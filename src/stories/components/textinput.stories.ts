import React from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import TextInput  from './textinput.component';
// import { withFormik } from 'storybook-formik';

// Establish meta data for the component
const meta = {
    title: 'Components/TextField',
    component: TextInput,
    // decorators: [withFormik],
    args: {
        onClick: () => {
            alert('clicked');
        },
        fullWidth: false,
    },
    argTypes: {
        helperText: { control: 'text' },
        error: { control: 'boolean' },
    },
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        color: 'primary',
      label: 'My label',
      variant: 'outlined',
      size: 'medium',
      fullWidth: false,
    },
  };


// Primary.parameters = {
//     variant: 'outlined',
//     label: 'Primary',
//     fullWidth: false,
//     color: 'primary',
//     size: 'medium', 
// };


// 



