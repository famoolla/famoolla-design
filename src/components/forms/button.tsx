import {Button, type ButtonProps, CircularProgress} from "@mui/material";
import {type FormikProps} from "formik";

interface FormikButtonProps extends Omit<ButtonProps, "name"> {
    name: string;
    formik: FormikProps<any>;
}

export const MYButton: React.FC<FormikButtonProps> = ({ name, formik, ...props }) => {
    const errorMessage = formik.touched[name] && formik.errors[name];
    
    return (
        <Button
            {...props}
            {...formik.getFieldProps(name)}
            endIcon={formik.isSubmitting ? <CircularProgress size={20} /> : undefined}
            disabled={formik.isSubmitting || Boolean(errorMessage)}
           
        />
    );
};
