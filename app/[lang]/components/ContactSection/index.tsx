'use client';

import { Button, Divider, Stack, Typography } from '@mui/material';
import {
  ContactSectionContent,
  ContactSectionForm,
  ContactSectionWrapper,
} from './styles';
import TextFieldRHF from '../TextFieldRHF';
import { FormProvider, useForm } from 'react-hook-form';
import { ContactSchema } from '@/validation/schemas';
import { yupResolver } from '@hookform/resolvers/yup';
import { Translations } from '@/i18n.config';
import { MutableRefObject, useRef, useState } from 'react';
import { sendForm } from '@emailjs/browser';
import { toast } from 'react-toastify';
import { CustomContainer } from '../HomeSections/styles';

interface IContactSection {
  tr: Translations;
  contactRef: MutableRefObject<null>;
}

export default function ContactSection({ tr, contactRef }: IContactSection) {
  const formRef = useRef(null!);
  const [loadingForm, setLoadingForm] = useState(false);

  const methods = useForm({
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
    resolver: yupResolver(ContactSchema()),
  });

  const { handleSubmit, reset } = methods;

  const sendEmail = () => {
    setLoadingForm(true);
    sendForm(
      process.env.NEXT_PUBLIC_SERVICE_KEY as string,
      process.env.NEXT_PUBLIC_TEMPLATE_KEY as string,
      formRef.current,
      process.env.NEXT_PUBLIC_PUBLIC_KEY as string,
    )
      .then(
        () => {
          toast.success(`${tr.message_success}!`, {
            position: 'bottom-left',
          });
        },
        (error) => {
          toast.error(`${tr.message_failed}, ${error.text}`, {
            position: 'bottom-left',
          });
        },
      )
      .finally(() => {
        setLoadingForm(false);
      });
  };

  const onSubmit = () => {
    sendEmail();
    reset();
  };

  return (
    <ContactSectionWrapper ref={contactRef} id='contact'>
      <CustomContainer>
        <ContactSectionContent>
          <Typography variant='lg700'>{tr.contact}</Typography>
          <Divider />
          <Typography
            variant='lg500'
            sx={{
              maxWidth: '900px',
              textAlign: 'center',
              marginBottom: '60px',
            }}
          >
            {tr.freecontact}
          </Typography>

          <FormProvider {...methods}>
            <Stack width={'100%'}>
              <form onSubmit={handleSubmit(onSubmit)} ref={formRef}>
                <ContactSectionForm>
                  <TextFieldRHF
                    name='name'
                    placeholder={tr.enteryourname}
                    label={tr.name}
                  />
                  <TextFieldRHF
                    name='email'
                    placeholder={tr.enteryouremail}
                    label={tr.email}
                  />
                  <TextFieldRHF
                    name='message'
                    placeholder={tr.enteryourmessage}
                    label={tr.message}
                    multiline
                    minRows={8}
                  />
                  <Button
                    sx={{ maxWidth: '270px', alignSelf: 'flex-end' }}
                    type='submit'
                    disabled={loadingForm}
                  >
                    {tr.submit}
                  </Button>
                </ContactSectionForm>
              </form>
            </Stack>
          </FormProvider>
        </ContactSectionContent>
      </CustomContainer>
    </ContactSectionWrapper>
  );
}
