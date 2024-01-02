import { useState } from 'react';

export const useForm = ( initialForm = {
    searchTerm: ''
} ) => {
  
    const [ formState, setFormState ] = useState( initialForm );

    const onInputChange = ({ target }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }

    return {
        ...formState,
        formState: formState.searchTerm,
        onInputChange,
        onResetForm,
    }
}