import { TextField } from '@mui/material';
import { useFormContext } from 'react-hook-form';

interface ITextFieldRHF {
  name: string;
  placeholder?: string;
  label?: string;
  multiline?: boolean;
  minRows?: number;
}

export default function TextFieldRHF({
  name,
  placeholder,
  label,
  multiline,
  minRows,
}: ITextFieldRHF) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <TextField
      {...register(name)}
      placeholder={placeholder}
      label={label}
      error={!!errors?.[name]?.message}
      multiline={multiline}
      minRows={minRows}
    />
  );
}
