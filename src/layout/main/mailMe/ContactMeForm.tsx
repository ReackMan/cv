import React from 'react';
import {Button, FormControl, FormGroup, FormLabel, Grid, TextField} from "@mui/material";
import {FormikHelpers, useFormik} from "formik";
import {telegramAPI} from "../../../api/TelegramAPI";
import styled from "styled-components";
import {mainTheme} from "../../styles/Theme";

export type FormValuesType = {
    name: string
    email: string
    message: string
}

export const ContactMeForm = ({theme}: {theme: any}) => {

    const formik = useFormik({
        validate: (values) => {
            if (!values.name) {
                return {
                    name: 'Name is required'
                }
            }
            if (!values.email) {
                return {
                    email: 'Email is required'
                }
            }
            if (!values.message) {
                return {
                    message: 'Message is required'
                }
            }
        },

        initialValues: {
            email: '',
            name: '',
            message: '',
        },
        onSubmit: async (values, formikHelpers: FormikHelpers<FormValuesType>) => {
            const res = await telegramAPI.sendMessage(values)
            // if (loginTC.rejected.match(action)) {
            //     if (action.payload?.fieldsErrors?.length) {
            //         const error = action.payload?.fieldsErrors[0]
            //         formikHelpers.setFieldError(error.field, error.error)
            //     }
            // }
        },
    });


    const CssTextField = styled(TextField)({
        '& label.Mui-focused': {
            color: theme === 'light' ? mainTheme.colors.accentLight : mainTheme.colors.accentDark
        },
        '& label': {
            color: theme === 'light' ? mainTheme.colors.accentLight : mainTheme.colors.fontDark
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: theme === 'light' ? mainTheme.colors.accentLight : mainTheme.colors.customText
        },
        '& .MuiOutlinedInput-root fieldset': {
            borderColor: theme === 'light' ? mainTheme.colors.accentLight : mainTheme.colors.accentDark
        },
        '& .MuiOutlinedInput-root:hover fieldset': {
            borderColor: theme === 'light' ? mainTheme.colors.accentLight : mainTheme.colors.accentDark
        },
        '& .MuiOutlinedInput-root .Mui-focused fieldset': {
            borderColor: theme === 'light' ? mainTheme.colors.accentLight : mainTheme.colors.accentDark
        }
    });

    return (
        <Grid container justifyContent='center'>
            <Grid item>
                <form onSubmit={formik.handleSubmit}>
                    <FormControl>
                        <FormLabel></FormLabel>
                        <FormGroup
                            sx={{
                                width: '500px'
                            }}>
                            <CssTextField
                                label='Name'
                                margin='normal'
                                {...formik.getFieldProps('name')}
                            />
                            {formik.errors.name ? <div>{formik.errors.name}</div> : null}
                            <CssTextField
                                label='Email'
                                type='email'
                                margin='normal'
                                {...formik.getFieldProps('email')}
                            />
                            {formik.errors.email ? <div>{formik.errors.email}</div> : null}
                            <CssTextField
                                label='Message'
                                margin='normal'
                                multiline
                                {...formik.getFieldProps('message')}
                            />
                            {formik.errors.message ? <div>{formik.errors.message}</div> : null}
                            <Button type='submit' variant='contained' color='primary'
                                    sx={{
                                        marginTop: '40px'
                                    }}
                            >Send</Button>
                        </FormGroup>
                    </FormControl>
                </form>
            </Grid>
        </Grid>
    )
}