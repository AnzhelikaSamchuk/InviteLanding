import React, { useRef } from 'react';
import { Formik } from 'formik';
import { observer } from 'mobx-react';
import NumberFormat from 'react-number-format';
import * as yup from 'yup';
import { corporateStore, toastStore } from 'stores';
import { Button, IconButton, TextField } from '@mui/material';

import * as S from './CorporateRegistration.styles';

const CorporateRegistration = () => {
  const validationSchema = yup.object({
    fullName: yup.string().min(2, 'Имя не может быть таким коротким').required('Поле является обязательным'),
    company: yup.string().required('Поле является обязательным'),
    email: yup.string().email('Не корректный email').required('Поле является обязательным'),
    phone: yup
      .string()
      .matches(/^\+\d\s\(\d{3}\)\s\d{3}\-\d{2}\-\d{2}$/, 'Вы ввели недопустимые символы')
      .length(18, 'Не корректная длина')
      .required('Поле является обязательным'),
    inputNumber: yup.string().matches(/^[0-9]/g, 'Вы ввели недопустимые символы'),
  });

  const formikRef = useRef<any>(null);

  const onSubmit = async () => {
    const resultCost = corporateStore.corporateRegistration.resultCost;
    if (resultCost <= 0) {
      toastStore.showWarning('Для оформления заявки на выставление счёта нужно указать количество человек и выбрать тарифы');
      return;
    }
    // corporateStore.setCorporateMode(CorporateFormModes.Details);
    corporateStore.postCorporate();
  };

  const onSubmitClick = () => {
    if (!formikRef.current) return;

    formikRef.current.handleSubmit();
  };

  return (
    <>
      <Formik
        innerRef={formikRef}
        initialValues={{
          fullName: corporateStore.corporateRegistration.fullName,
          company: corporateStore.corporateRegistration.company,
          phone: corporateStore.corporateRegistration.phone,
          email: corporateStore.corporateRegistration.email,
          tariffTypes: corporateStore.corporateRegistration.tariffTypes,
        }}
        onSubmit={() => onSubmit()}
        enableReinitialize={true}
        onValidationError={(errorValues: any) => {
          console.log(errorValues);
        }}
        validationSchema={validationSchema}>
        {({ values, errors, touched, handleBlur, setFieldValue }) => {
          const handleChangeFullName = (e: React.ChangeEvent<any>) => {
            corporateStore.corporateRegistration.setFullName(e.target.value);
            setFieldValue('fullName', e.target.value);
          };

          const handleChangeCompany = (e: React.ChangeEvent<any>) => {
            corporateStore.corporateRegistration.setCompany(e.target.value);
            setFieldValue('company', e.target.value);
          };

          const handleChangePhone = (e: React.ChangeEvent<any>) => {
            corporateStore.corporateRegistration.setPhone(e.target.value);
            setFieldValue('phone', e.target.value);
          };

          const handleChangeEmail = (e: React.ChangeEvent<any>) => {
            const value = e.target.value.trim();
            corporateStore.corporateRegistration.setEmail(value);
            setFieldValue('email', value);
          };

          return (
            <>
              <S.Title variant="h2">Регистрация</S.Title>
              <S.ContentWrapper>
                <S.Inputs
                  variant="standard"
                  label="Контактное лицо"
                  type="text"
                  name="fullName"
                  value={values.fullName}
                  onChange={handleChangeFullName}
                  onBlur={handleBlur}
                  error={touched.fullName && Boolean(errors.fullName)}
                  helperText={touched.fullName && errors.fullName}
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

                <S.Inputs
                  variant="standard"
                  type="text"
                  name="email"
                  label="E-mail"
                  value={values.email}
                  onChange={handleChangeEmail}
                  onBlur={handleBlur}
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                />
              </S.ContentWrapper>

              {corporateStore.corporateRegistration.tariffTypes.map((type, index) => {
                const increaseCount = () => {
                  type.increaseCount();
                  setFieldValue('tariffTypes', corporateStore.corporateRegistration.tariffTypes);
                };

                const decreaseCount = () => {
                  type.decreaseCount();
                  setFieldValue('tariffTypes', corporateStore.corporateRegistration.tariffTypes);
                };

                const handleChangeInput = (e: React.ChangeEvent<any>) => {
                  const value = e.target.value.trim();
                  type.setCount(value);
                  setFieldValue('tariffTypes', corporateStore.corporateRegistration.tariffTypes);
                };

                return (
                  <S.WrapperNumber key={index}>
                    <S.TitleTariff>{type.name}</S.TitleTariff>
                    <S.CostWrapper>
                      <S.Number>
                        <IconButton disableRipple onClick={decreaseCount}>
                          <img src="img/Minus.svg" alt="" />
                        </IconButton>

                        <NumberFormat
                          customInput={TextField}
                          variant="standard"
                          name="inputNumber"
                          type="text"
                          min="0"
                          allowEmptyFormatting
                          value={type.count}
                          onChange={handleChangeInput}
                          onBlur={handleBlur}
                          error={touched.tariffTypes && Boolean(errors.tariffTypes)}
                        />

                        <IconButton disableRipple onClick={increaseCount}>
                          <img src="img/Plus.svg" alt="" />
                        </IconButton>
                      </S.Number>
                      <S.Cost>{type.cost} &#8381;</S.Cost>
                    </S.CostWrapper>
                  </S.WrapperNumber>
                );
              })}

              <S.Result variant="h3">Итого: {corporateStore.corporateRegistration.resultCost} &#8381;</S.Result>
            </>
          );
        }}
      </Formik>

      <div className="flex">
        <S.BtnWrapper>
          <Button className={corporateStore.isWaiting ? 'gradient-background' : ''} variant="contained" disableRipple onClick={onSubmitClick}>
            Отправить
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

export default observer(CorporateRegistration);
