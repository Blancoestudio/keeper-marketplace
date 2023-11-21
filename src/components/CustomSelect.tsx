import { FormControl, InputLabel, MenuItem, NativeSelectProps, Select } from "@mui/material";

interface OptionType {
  value: string;
  label: string;
}

interface PropTypes extends NativeSelectProps {
  id?: string,
  label?: string,
  options: OptionType[] | string[],
  [key: string]: unknown,
}

export const CustomSelect = ({id, label, options}: PropTypes) => {
  return (
    <FormControl fullWidth sx={{ mb: 2 }}>
      <InputLabel shrink htmlFor={ `${id}` }>{ label }</InputLabel>
      <Select 
        variant="standard">
        <MenuItem disabled value="">Selecciona un Rubro</MenuItem>
        {
          Array.isArray(options) && options.map((option, index) => {
            const value = typeof option === 'string' ? option : option.value;
            const label = typeof option === 'string' ? option : option.label;
            return <MenuItem key={index} value={value}>{label}</MenuItem>;
          })
        }
      </Select>
    </FormControl>
  )
}
