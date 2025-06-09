import {MYTextField} from "../../components/forms/textfield";
import {useFormik} from "formik";

export default function TextInput() {
    const formik = useFormik({
        initialValues: {
            username: "",
        },
        onSubmit: (values) => {
            console.log(values);
        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>
        <MYTextField name="username" formik={formik} />
        </form>
    );
}
