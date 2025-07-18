import {MYTextField} from "../../../components/forms/textfield";
import {useFormik} from "formik";
import {MYButton} from "../../../components/forms/button";
import * as Yup from "yup";
// import {Box} from "@mui/material";

export default function TextInput({onClick, fullWidth, color, label, variant, size, ariaLabel}) {

    const validationSchema = Yup.object({
        username: Yup.string().required("Required"),
    });
    const formik = useFormik({
        initialValues: {
            username: "",
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(values);
        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>
        {/* <Box sx={{ bgcolor: `primary.main`, width: 40, height: 20 }} /> */}
        {/* https://mui.com/material-ui/customization/palette/ */}
        <MYTextField 
        name="username" 
        label={label} 
        formik={formik} 
        onClick={onClick} 
        fullWidth={fullWidth} 
        color={color}
        variant={variant} 
        aria-label={ariaLabel}
        size={size}/><br /><br />
        <MYButton name="submit" type="submit" variant="contained" fullWidth={true} formik={formik} color="primary" >Submit</MYButton>
        </form>
    );
}
