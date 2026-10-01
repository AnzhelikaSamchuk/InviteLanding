import React from 'react';
import { Formik } from 'formik';
import { observer } from 'mobx-react';
import NumberFormat from 'react-number-format';
import * as yup from 'yup';
import { corporateStore } from 'stores';
import { Button, TextField } from '@mui/material';

import * as S from './CorporateDetails.styles';

const CorporateDetails = () => {
  const validationSchema = yup.object({
    entityCompany: yup.string().min(2, 'Наименование не может быть таким коротким').required('Поле является обязательным'),
    innCompany: yup
      .string()
      .matches(/^[0-9]/g, 'Вы ввели недопустимые символы')
      .min(10, 'Не корректная длина')
      .max(12, 'Не корректная длина')
      .required('Поле является обязательным'),
    kppCompany: yup
      .string()
      .matches(/^[0-9]/g, 'Вы ввели недопустимые символы')
      .length(9, 'Не корректная длина')
      .required('Поле является обязательным'),
    bik: yup
      .string()
      .matches(/^[0-9]/g, 'Вы ввели недопустимые символы')
      .length(9, 'Не корректная длина')
      .required('Поле является обязательным'),
    actualAddressCompany: yup.string().min(2, 'Адрес не может быть таким коротким').required('Поле является обязательным'),
    legalAddressCompany: yup.string().min(2, 'Адрес не может быть таким коротким').required('Поле является обязательным'),
    corporateAccount: yup
      .string()
      .matches(/^[0-9]/g, 'Вы ввели недопустимые символы')
      .length(20, 'Не корректная длина')
      .required('Поле является обязательным'),
    innBank: yup
      .string()
      .matches(/^[0-9]/g, 'Вы ввели недопустимые символы')
      .length(10, 'Не корректная длина')
      .required('Поле является обязательным'),
    kppBank: yup
      .string()
      .matches(/^[0-9]/g, 'Вы ввели недопустимые символы')
      .length(9, 'Не корректная длина')
      .required('Поле является обязательным'),
    bankName: yup.string().min(2, 'Наименование не может быть таким коротким').required('Поле является обязательным'),
  });

  return (
    <Formik
      initialValues={{
        entityCompany: corporateStore.corporateDetails.entityCompany,
        innCompany: corporateStore.corporateDetails.innCompany,
        kppCompany: corporateStore.corporateDetails.kppCompany,
        actualAddressCompany: corporateStore.corporateDetails.actualAddressCompany,
        legalAddressCompany: corporateStore.corporateDetails.legalAddressCompany,
        bik: corporateStore.corporateDetails.bik,
        corporateAccount: corporateStore.corporateDetails.corporateAccount,
        innBank: corporateStore.corporateDetails.innBank,
        kppBank: corporateStore.corporateDetails.kppBank,
        bankName: corporateStore.corporateDetails.bankName,
      }}
      onSubmit={() => corporateStore.postCorporate()}
      enableReinitialize={true}
      validationSchema={validationSchema}>
      {({ values, errors, touched, handleBlur, handleSubmit, setFieldValue }) => {
        const handleChangeEntityCompany = (e: React.ChangeEvent<any>) => {
          corporateStore.corporateDetails.setEntityCompany(e.target.value);
          setFieldValue('entityCompany', e.target.value);
        };

        const handleChangeInnCompany = (e: React.ChangeEvent<any>) => {
          const value = e.target.value.trim();
          corporateStore.corporateDetails.setInnCompany(value);
          setFieldValue('innCompany', value);
        };

        const handleChangeKppCompany = (e: React.ChangeEvent<any>) => {
          const value = e.target.value.trim();
          corporateStore.corporateDetails.setKppCompany(value);
          setFieldValue('kppCompany', value);
        };

        const handleChangeActualAddressCompany = (e: React.ChangeEvent<any>) => {
          corporateStore.corporateDetails.setActualAddressCompany(e.target.value);
          setFieldValue('actualAddressCompany', e.target.value);
        };

        const handleChangeLegalAddressCompany = (e: React.ChangeEvent<any>) => {
          corporateStore.corporateDetails.setLegalAddressCompany(e.target.value);
          setFieldValue('legalAddressCompany', e.target.value);
        };

        const handleChangeBik = (e: React.ChangeEvent<any>) => {
          const value = e.target.value.trim();
          corporateStore.corporateDetails.setBik(value);
          setFieldValue('bik', value);
        };

        const handleChangeCorporateAccount = (e: React.ChangeEvent<any>) => {
          const value = e.target.value.trim();
          corporateStore.corporateDetails.setCorporateAccount(value);
          setFieldValue('corporateAccount', value);
        };

        const handleChangeInnBank = (e: React.ChangeEvent<any>) => {
          const value = e.target.value.trim();
          corporateStore.corporateDetails.setInnBank(value);
          setFieldValue('innBank', value);
        };

        const handleChangeKppBank = (e: React.ChangeEvent<any>) => {
          const value = e.target.value.trim();
          corporateStore.corporateDetails.setKppBank(value);
          setFieldValue('kppBank', value);
        };

        const handleChangeBankName = (e: React.ChangeEvent<any>) => {
          corporateStore.corporateDetails.setBankName(e.target.value);
          setFieldValue('bankName', e.target.value);
        };

        return (
          <>
            <S.Title variant="h2">Реквизиты компании</S.Title>
            <S.ContentWrapper>
              <S.Inputs
                variant="standard"
                label="Наименование юридического лица"
                type="text"
                name="entityCompany"
                value={values.entityCompany}
                onChange={handleChangeEntityCompany}
                onBlur={handleBlur}
                error={touched.entityCompany && Boolean(errors.entityCompany)}
                helperText={touched.entityCompany && errors.entityCompany}
              />

              <S.InputsWrapper>
                <S.NumberFormatShort>
                  <NumberFormat
                    customInput={TextField}
                    variant="standard"
                    name="innCompany"
                    type="text"
                    label="ИНН"
                    format="############"
                    value={values.innCompany}
                    onChange={handleChangeInnCompany}
                    onBlur={handleBlur}
                    error={touched.innCompany && Boolean(errors.innCompany)}
                    helperText={touched.innCompany && errors.innCompany}
                  />
                </S.NumberFormatShort>

                <S.NumberFormatShort>
                  <NumberFormat
                    customInput={TextField}
                    variant="standard"
                    name="kppCompany"
                    type="text"
                    label="КПП"
                    format="#########"
                    value={values.kppCompany}
                    onChange={handleChangeKppCompany}
                    onBlur={handleBlur}
                    error={touched.kppCompany && Boolean(errors.kppCompany)}
                    helperText={touched.kppCompany && errors.kppCompany}
                  />
                </S.NumberFormatShort>
              </S.InputsWrapper>

              <S.InputsWrapper>
                <S.InputShort
                  variant="standard"
                  label="Фактический адрес"
                  type="text"
                  name="actualAddressCompany"
                  value={values.actualAddressCompany}
                  onChange={handleChangeActualAddressCompany}
                  onBlur={handleBlur}
                  error={touched.actualAddressCompany && Boolean(errors.actualAddressCompany)}
                  helperText={touched.actualAddressCompany && errors.actualAddressCompany}
                />

                <S.InputShort
                  variant="standard"
                  label="Юридический адрес"
                  type="text"
                  name="legalAddressCompany"
                  value={values.legalAddressCompany}
                  onChange={handleChangeLegalAddressCompany}
                  onBlur={handleBlur}
                  error={touched.legalAddressCompany && Boolean(errors.legalAddressCompany)}
                  helperText={touched.legalAddressCompany && errors.legalAddressCompany}
                />
              </S.InputsWrapper>

              <S.Details>Реквизиты банка</S.Details>

              <S.InputWrapper>
                <S.NumberFormatShort>
                  <NumberFormat
                    customInput={TextField}
                    variant="standard"
                    name="bik"
                    type="text"
                    label="БИК"
                    format="#########"
                    value={values.bik}
                    onChange={handleChangeBik}
                    onBlur={handleBlur}
                    error={touched.bik && Boolean(errors.bik)}
                    helperText={touched.bik && errors.bik}
                  />
                </S.NumberFormatShort>

                <S.NumberFormatShort>
                  <NumberFormat
                    customInput={TextField}
                    variant="standard"
                    name="corporateAccount"
                    type="text"
                    label="Корп. счёт"
                    format="####################"
                    value={values.corporateAccount}
                    onChange={handleChangeCorporateAccount}
                    onBlur={handleBlur}
                    error={touched.corporateAccount && Boolean(errors.corporateAccount)}
                    helperText={touched.corporateAccount && errors.corporateAccount}
                  />
                </S.NumberFormatShort>
              </S.InputWrapper>

              <S.InputsWrapper>
                <S.NumberFormatShort>
                  <NumberFormat
                    customInput={TextField}
                    variant="standard"
                    name="innBank"
                    type="text"
                    label="ИНН"
                    format="##########"
                    value={values.innBank}
                    onChange={handleChangeInnBank}
                    onBlur={handleBlur}
                    error={touched.innBank && Boolean(errors.innBank)}
                    helperText={touched.innBank && errors.innBank}
                  />
                </S.NumberFormatShort>

                <S.NumberFormatShort>
                  <NumberFormat
                    customInput={TextField}
                    variant="standard"
                    name="kppBank"
                    type="text"
                    label="КПП"
                    format="#########"
                    value={values.kppBank}
                    onChange={handleChangeKppBank}
                    onBlur={handleBlur}
                    error={touched.kppBank && Boolean(errors.kppBank)}
                    helperText={touched.kppBank && errors.kppBank}
                  />
                </S.NumberFormatShort>
              </S.InputsWrapper>

              <S.Inputs
                variant="standard"
                label="Название банка"
                type="text"
                name="bankName"
                value={values.bankName}
                onChange={handleChangeBankName}
                onBlur={handleBlur}
                error={touched.bankName && Boolean(errors.bankName)}
                helperText={touched.bankName && errors.bankName}
              />
            </S.ContentWrapper>

            <S.BtnWrapper>
              <Button
                variant="contained"
                disableRipple
                onClick={() => {
                  handleSubmit();
                }}>
                Выставить счёт
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
          </>
        );
      }}
    </Formik>
  );
};

export default observer(CorporateDetails);
