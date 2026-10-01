import { useRef } from 'react';
import { Formik } from 'formik';
import { observer } from 'mobx-react';
import NumberFormat from 'react-number-format';
import * as yup from 'yup';
import { preSpeakerStore } from 'stores';
import { Button, TextField } from '@mui/material';

import * as S from './SpeakerDialog.styles';

const RegistrationForm = () => {
  const validationSchema = yup.object({
    name: yup.string().min(2, 'Имя не может быть таким коротким').required('Поле является обязательным'),
    surname: yup.string().min(2, 'Фамилия не может быть такой короткой').required('Поле является обязательным'),
    company: yup.string().min(2, 'Название компании не может быть таким коротким').required('Поле является обязательным'),
    position: yup.string().min(2, 'Должность не может быть такой короткой').required('Поле является обязательным'),
    topic: yup.string().min(2, 'Название не может быть таким коротким').required('Поле является обязательным'),
    shortDesc: yup.string().min(10, 'Описание не может быть таким коротким').required('Поле является обязательным'),
    phone: yup
      .string()
      .matches(/^\+\d\s\(\d{3}\)\s\d{3}\-\d{2}\-\d{2}$/, 'Вы ввели недопустимые символы')
      .length(18, 'Не корректная длина')
      .required('Поле является обязательным'),
    email: yup.string().email('Не корректный email').required('Поле является обязательным'),
  });

  const formikRef = useRef<any>(null);

  const onSubmit = () => {
    if (!formikRef.current) return;

    formikRef.current.handleSubmit();
  };

  return (
    <>
      <Formik
        innerRef={formikRef}
        initialValues={{
          name: preSpeakerStore.preSpeaker.name,
          surname: preSpeakerStore.preSpeaker.surname,
          company: preSpeakerStore.preSpeaker.company,
          position: preSpeakerStore.preSpeaker.position,
          topic: preSpeakerStore.preSpeaker.topic,
          shortDesc: preSpeakerStore.preSpeaker.shortDesc,
          phone: preSpeakerStore.preSpeaker.phone,
          email: preSpeakerStore.preSpeaker.email,
        }}
        onSubmit={() => preSpeakerStore.postPreSpeaker()}
        enableReinitialize={true}
        validationSchema={validationSchema}>
        {({ values, errors, touched, handleBlur, handleSubmit, setFieldValue }) => {
          const handleChangeName = (e: React.ChangeEvent<any>) => {
            preSpeakerStore.preSpeaker.setName(e.target.value);
            setFieldValue('name', e.target.value);
          };

          const handleChangeSurname = (e: React.ChangeEvent<any>) => {
            preSpeakerStore.preSpeaker.setSurname(e.target.value);
            setFieldValue('surname', e.target.value);
          };

          const handleChangeCompany = (e: React.ChangeEvent<any>) => {
            preSpeakerStore.preSpeaker.setCompany(e.target.value);
            setFieldValue('company', e.target.value);
          };

          const handleChangePosition = (e: React.ChangeEvent<any>) => {
            preSpeakerStore.preSpeaker.setPosition(e.target.value);
            setFieldValue('position', e.target.value);
          };

          const handleChangeTopic = (e: React.ChangeEvent<any>) => {
            preSpeakerStore.preSpeaker.setTopic(e.target.value);
            setFieldValue('topic', e.target.value);
          };

          const handleShortDesc = (e: React.ChangeEvent<any>) => {
            preSpeakerStore.preSpeaker.setShortDesc(e.target.value);
            setFieldValue('shortDesc', e.target.value);
          };

          const handlePhone = (e: React.ChangeEvent<any>) => {
            preSpeakerStore.preSpeaker.setPhone(e.target.value);
            setFieldValue('phone', e.target.value);
          };

          const handleEmail = (e: React.ChangeEvent<any>) => {
            const value = e.target.value.trim();
            preSpeakerStore.preSpeaker.setEmail(value);
            setFieldValue('email', value);
          };

          return (
            <>
              <S.Title variant="h2">Хочу выступить</S.Title>

              <S.ContentWrapper>
                <S.Inputs
                  variant="standard"
                  label="Имя"
                  type="text"
                  name="name"
                  value={values.name}
                  onChange={handleChangeName}
                  onBlur={handleBlur}
                  error={touched.name && Boolean(errors.name)}
                  helperText={touched.name && errors.name}
                />

                <S.Inputs
                  variant="standard"
                  label="Фамилия"
                  type="text"
                  name="surname"
                  value={values.surname}
                  onChange={handleChangeSurname}
                  onBlur={handleBlur}
                  error={touched.surname && Boolean(errors.surname)}
                  helperText={touched.surname && errors.surname}
                />

                <S.Inputs
                  variant="standard"
                  label="Компания"
                  type="text"
                  name="company"
                  value={values.company}
                  onChange={handleChangeCompany}
                  onBlur={handleBlur}
                  error={touched.company && Boolean(errors.company)}
                  helperText={touched.company && errors.company}
                />

                <S.Inputs
                  variant="standard"
                  label="Должность"
                  type="text"
                  name="position"
                  value={values.position}
                  onChange={handleChangePosition}
                  onBlur={handleBlur}
                  error={touched.position && Boolean(errors.position)}
                  helperText={touched.position && errors.position}
                />

                <S.Inputs
                  variant="standard"
                  name="topic"
                  label="Тема доклада"
                  value={values.topic}
                  onChange={handleChangeTopic}
                  onBlur={handleBlur}
                  error={touched.topic && Boolean(errors.topic)}
                  helperText={touched.topic && errors.topic}
                />

                <S.Inputs
                  variant="standard"
                  name="shortDesc"
                  label="Краткое описание"
                  value={values.shortDesc}
                  onChange={handleShortDesc}
                  onBlur={handleBlur}
                  error={touched.shortDesc && Boolean(errors.shortDesc)}
                  helperText={touched.shortDesc && errors.shortDesc}
                />

                <NumberFormat
                  customInput={TextField}
                  variant="standard"
                  className="PhoneInput"
                  name="phone"
                  label="Телефон"
                  type="tel"
                  format="+7 (###) ###-##-##"
                  allowEmptyFormatting
                  mask="_"
                  value={values.phone}
                  onChange={handlePhone}
                  onBlur={handleBlur}
                  error={touched.phone && Boolean(errors.phone)}
                  helperText={touched.phone && errors.phone}
                />

                <S.Inputs
                  variant="standard"
                  type="text"
                  name="email"
                  label="Email"
                  value={values.email}
                  onChange={handleEmail}
                  onBlur={handleBlur}
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                />
              </S.ContentWrapper>
            </>
          );
        }}
      </Formik>

      <div className="flex">
        <S.BtnWrapper>
          <Button className={preSpeakerStore.isWaiting ? 'gradient-background' : ''} variant="contained" disableRipple onClick={onSubmit}>
            Подать заявку
          </Button>
        </S.BtnWrapper>

        <S.Agreement variant="subtitle1">
          Отправляя данные, вы соглашаетесь с условиями{' '}
          <a href="/docs/demo.html" target="_blank" rel="noopener noreferrer">
            Договора оферты
          </a>
          ,{' '}
          <a href="/docs/demo.html" target="_blank" rel="noopener noreferrer">
            Политикой конфиденциальности
          </a>{' '}
          и даёте{' '}
          <a href="/docs/demo.html" target="_blank" rel="noopener noreferrer">
            Согласие на обработку персональных данных
          </a>
          .
        </S.Agreement>
      </div>
    </>
  );
};

export default observer(RegistrationForm);
