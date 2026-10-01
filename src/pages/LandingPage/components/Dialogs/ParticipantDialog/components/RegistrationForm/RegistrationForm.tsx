import React, { useRef } from 'react';
import { Formik } from 'formik';
import { observer } from 'mobx-react-lite';
import NumberFormat from 'react-number-format';
import * as yup from 'yup';
import { participantsStore } from 'stores';
import { Button, TextField, Checkbox } from '@mui/material';
import * as S from './styles';

const RegistrationForm = () => {
  const validationSchema = yup.object({
    name: yup.string().min(2, 'Имя не может быть таким коротким').required('Поле является обязательным'),
    surname: yup.string().min(2, 'Фамилия не может быть такой короткой').required('Поле является обязательным'),
    company: yup.string().min(2, 'Название компании не может быть таким коротким').required('Поле является обязательным'),
    position: yup.string().min(2, 'Должность не может быть такой короткой').required('Поле является обязательным'),
    email: yup.string().email('Не корректный email').required('Поле является обязательным'),
    phone: yup
      .string()
      .matches(/^\+\d\s\(\d{3}\)\s\d{3}\-\d{2}\-\d{2}$/, 'Вы ввели недопустимые символы')
      .length(18, 'Не корректная длина')
      .required('Поле является обязательным'),
  });

  const formikRef = useRef<any>(null);

  const onSubmit = async () => {
    if (!formikRef.current) return;

    formikRef.current.handleSubmit();
  };

  return (
    <>
      <Formik
        innerRef={formikRef}
        initialValues={{
          name: participantsStore.personal.name,
          surname: participantsStore.personal.surname,
          company: participantsStore.personal.company,
          position: participantsStore.personal.position,
          email: participantsStore.personal.email,
          phone: participantsStore.personal.phone,
          help: participantsStore.personal.help,
          tariffTypeId: participantsStore.personal.tariffTypeId,
        }}
        onSubmit={() => participantsStore.submitParticipant()}
        enableReinitialize={true}
        validationSchema={validationSchema}>
        {({ values, errors, touched, handleBlur, setFieldValue }) => {
          const handleChangeName = (e: React.ChangeEvent<any>) => {
            if (participantsStore.isWaiting) return;
            setFieldValue('name', e.target.value);
            participantsStore.personal.setName(e.target.value);
          };

          const handleChangeSurname = (e: React.ChangeEvent<any>) => {
            if (participantsStore.isWaiting) return;
            setFieldValue('surname', e.target.value);
            participantsStore.personal.setSurname(e.target.value);
          };

          const handleChangeCompany = (e: React.ChangeEvent<any>) => {
            if (participantsStore.isWaiting) return;
            setFieldValue('company', e.target.value);
            participantsStore.personal.setCompany(e.target.value);
          };

          const handleChangePosition = (e: React.ChangeEvent<any>) => {
            if (participantsStore.isWaiting) return;
            setFieldValue('position', e.target.value);
            participantsStore.personal.setPosition(e.target.value);
          };

          const handleChangePhone = (e: React.ChangeEvent<any>) => {
            if (participantsStore.isWaiting) return;
            participantsStore.personal.setPhone(e.target.value);
            setFieldValue('phone', e.target.value);
          };

          const handleChangeEmail = (e: React.ChangeEvent<any>) => {
            if (participantsStore.isWaiting) return;
            const value = e.target.value.trim();
            setFieldValue('email', value);
            participantsStore.personal.setEmail(value);
          };

          const handleChangeHelp = (e: React.ChangeEvent<any>, checked: boolean) => {
            if (participantsStore.isWaiting) return;
            participantsStore.personal.setHelp(checked);
            setFieldValue('help', checked);
          };

          const handleChangeTabs = (e: React.ChangeEvent<any>, value: number) => {
            if (participantsStore.isWaiting) return;
            const type = participantsStore.dialogTariffs?.find((t) => t.types.some((t) => t.id === value));
            if (type) participantsStore.personal.setTariffTypeId(value, type.title);
          };

          return (
            <>
              <S.Title variant="h2">Регистрация</S.Title>

              <S.ContentWrapper>
                <S.Tabs value={participantsStore.personal.tariffTypeId} onChange={handleChangeTabs}>
                  {participantsStore.dialogTariffs?.map((tariff) => {
                    return tariff.types.map((type) => (
                      <S.Tab
                        key={type.id.toString()}
                        tabCount={tariff.types?.length ?? 0}
                        label={type.attributes.title}
                        value={type.id}
                        disableRipple
                      />
                    ));
                  })}
                </S.Tabs>

                <S.Inputs
                  variant="standard"
                  label="Имя"
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
                  name="email"
                  label="Email"
                  value={values.email}
                  onChange={handleChangeEmail}
                  onBlur={handleBlur}
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
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
                  onChange={handleChangePhone}
                  onBlur={handleBlur}
                  error={touched.phone && Boolean(errors.phone)}
                  helperText={touched.phone && errors.phone}
                />

                {participantsStore.personal.withHelpCheckbox && (
                  <S.HelpField
                    control={<Checkbox disableRipple value={true} name="help" checked={values.help} onChange={handleChangeHelp} />}
                    label="Нужна помощь в случае малой мобильности"
                  />
                )}
              </S.ContentWrapper>
            </>
          );
        }}
      </Formik>

      <div className="flex">
        <S.div_actionWrapper>
          {participantsStore.tariffType && (
            <S.div_BtnWrapper>
              <>
                {!participantsStore.personal.isRubiusEmpolyee && participantsStore.tariffType.attributes.price !== 0 && (
                  <S.div_resultSum>Итого: {participantsStore.tariffType.attributes.price} &#8381;</S.div_resultSum>
                )}
                <Button className={participantsStore.isWaiting ? 'gradient-background' : ''} variant="contained" disableRipple onClick={onSubmit}>
                  {participantsStore.personal.isRubiusEmpolyee || participantsStore.tariffType?.attributes.price === 0
                    ? 'Зарегистрироваться'
                    : 'Оплатить'}
                </Button>
              </>
            </S.div_BtnWrapper>
          )}
        </S.div_actionWrapper>

        <S.Agreement variant="subtitle1">
          Отправляя данные, вы соглашаетесь с условиями{' '}
          <a href="/docs/demo.html" target="_blank" rel="noopener noreferrer">
            Договора оферы
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
