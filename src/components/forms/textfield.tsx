import {TextField, type TextFieldProps} from "@mui/material";
import {type FormikProps} from "formik";

interface FormikTextFieldProps extends Omit<TextFieldProps, "name"> {
    name: string;
    formik: FormikProps<any>;
}

export const MYTextField: React.FC<FormikTextFieldProps> = ({ name, formik, ...props }) => {
    const errorMessage = formik.touched[name] && formik.errors[name];
    
    return (
        <TextField
            {...props}
            {...formik.getFieldProps(name)}
            error={Boolean(errorMessage)}
            helperText={errorMessage? String(errorMessage) : undefined}
        />
    );
};
    
