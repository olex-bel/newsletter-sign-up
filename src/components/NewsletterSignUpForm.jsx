
import { useForm, useController } from 'react-hook-form'
import { Stack, TextField, Typography, Box  } from '@mui/material';
import CustomButton from "./CustomButton";

export default function NewsletterSignUpForm( { setEmail } ) {
    const {
        handleSubmit,
        control
    } = useForm();

    const {
        field,
        fieldState: { invalid, error },
      } = useController({
        name: 'email',
        control,
        defaultValue: '',
        rules: { 
            pattern:  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            required: true,
        },
      })

    const onSubmit = function (data) {
        setEmail(data.email);
    }

    return (
        <form noValidate  onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={1} pt={4}>
                    <Stack direction='row' justifyContent='space-between'>
                        <label className="email-label" htmlFor="email">Email address</label>
                        {invalid && <Typography color='error' variant='subtitle2'>Valid Email Required</Typography>}
                    </Stack>
                    <TextField 
                        id="email" 
                        variant="outlined" 
                        placeholder='email@company.com' 
                        type='email' 
                        required
                        onChange={field.onChange}
                        onBlur={field.onBlur}
                        value={field.value}
                        name={field.name}
                        inputRef={field.ref}
                        error={!!invalid}
                        pb={1}
                        sx={
                            {
                                '& .Mui-error .MuiInputBase-input': {
                                    backgroundColor: '#FFE8E6',
                                    color: '#d32f2f',
                                },
                            }
                        }
                        InputProps={{ sx: { borderRadius: 2 } }}
                    />
                    <Box 
                        pt={2} 
                    >
                        <CustomButton text='Subscribe to monthly newsletter' type='submit' />
                    </Box>
            </Stack>
        </form>
    );
}