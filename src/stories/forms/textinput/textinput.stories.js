import TextInput  from './textinput.component';
// import { withFormik } from 'storybook-formik';

// Establish meta data for the component
const meta = {
    title: 'Forms/TextInput',
    component: TextInput,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    // decorators: [withFormik],
    args: {
        onClick: () => { console.log('clicked')},
        fullWidth: false,
        color: 'primary',
        label: 'My label',
        variant: 'outlined',
        size: 'medium',
        ariaLabel: 'My accessible username',
    },
};

export default meta;

export const Primary= {
    // args: {
    //     color: 'primary',
    //     label: 'My label',
    //     variant: 'outlined',
    //     size: 'medium',
    //     fullWidth: false,
    // },
  };

  export const Secondary= {
    args: {
        color: 'secondary',
        label: 'My label',
        variant: 'outlined',
        size: 'medium',
    }
    //     fullWidth: false,
    // },
  };


// Primary.parameters = {
//     variant: 'outlined',
//     label: 'Primary',
//     fullWidth: false,
//     color: 'primary',
//     size: 'medium', 
// };


// 



