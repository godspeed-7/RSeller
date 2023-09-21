import { StyleSheet } from 'react-native';
import AppTextInput from '../TextInput';
import ErrorMessage from './ErrorMessage';
import { useFormikContext } from 'formik';

export default function AppFormField(props) {
    const {name, ...otherProps}  = props;
    const {handleChange, setFieldTouched, errors, touched} = useFormikContext();
    return (
        <>
            <AppTextInput
                {...otherProps}
                onChangeText={handleChange(name)}
                onBlur={() => setFieldTouched(name)}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    )
}

const styles = StyleSheet.create({})