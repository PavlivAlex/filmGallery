import React, { useState, useEffect, useCallback, useMemo, memo } from 'react';

import { SizeType } from 'antd/lib/config-provider/SizeContext';
import { useField, useFormikContext } from 'formik';

import { Form } from 'antd';

const FormField = Form.Item;

enum VALIDATE_STATUS_ENUM {
  ERROR = 'error',
  SUCCESS = 'success',
}

export interface FormItemProps {
  name: string;
  label?: string | React.ReactNode;
  labelTooltip?: string;
  labelCol?: any;
  component: any;
  size?: SizeType;
  placeholder?: string;
  shouldShowErrorMessage?: boolean;
  onChange?: (e: any) => void;
  additionalProps?: {
    [key: string]: any;
  };
}

export interface InnerComponentModel {
  name: string;
  size?: SizeType;
  onBlur: any;
  onChange: any;
  placeholder?: string;
  value: any;
  checked?: boolean;
}

interface InnerFormItemProps {
  component: any;
  validateStatus: VALIDATE_STATUS_ENUM;
  innerComponentProps: InnerComponentModel;
  labelCol: any;
  label?: string | React.ReactNode;
  style?: any;
  help?: string;
}

const DEFAULT_LABEL_CONFIG = { span: 24 };
const DEFAULT_INPUT_WRAPPER_STYLE = { marginBottom: 0 };

const FormItem = ({
  name,
  label = '',
  labelTooltip,
  labelCol,
  size = 'large',
  component: Component,
  shouldShowErrorMessage = true,
  placeholder,
  onChange,
  additionalProps,
}: FormItemProps) => {

  const { isSubmitting, status } = useFormikContext();
  const [field, meta, helpers] = useField(name);
  const [privateValue, setPrivateValue] = useState<any>(field.value || undefined);

  useEffect(() => {
    if (field.value !== privateValue) {
      setPrivateValue(field.value);
    }
  }, [field.value]);

  const handleChange = (e: any) => {
    let newValue: any = '';

    if (e) {
      newValue = e.target ? (e.target.type === 'checkbox' ? e.target.checked : e.target.value) : e;
    } else {
      newValue = typeof e === 'boolean' ? e : '';
    }

    setPrivateValue(newValue);
    helpers.setValue(newValue);
    onChange && onChange(e);
  };

  const handleBlur = useCallback(() => {
    return helpers.setTouched(true);
  }, []);

  const itemLabel = useMemo(() => {
    if (labelTooltip) {
      return (
        <>
          {label}
        </>
      );
    }

    return label;
  }, [label, labelTooltip]);

  const errorMessage = useMemo(() => {
    if (!shouldShowErrorMessage) {
      return;
    }

    let message;
    if (meta.error) {
      if (typeof meta.error === 'string') {
        message ='Invalid';
      } else if (typeof meta.error === 'object') {
        const error = meta.error as any;
        const values: { [key: string]: string } = {};

        if (error.values) {
          Object.keys(error.values).forEach(key => {
            values[key] ='Invalid';
          });
        }
        
        message = 'Invalid';
      }
    }

    return message;
  }, [shouldShowErrorMessage, meta.error]);

  const innerComponentProps = useMemo(() => {
    let result: InnerComponentModel = {
      ...additionalProps,
      name,
      size,
      onBlur: handleBlur,
      value: privateValue,
      onChange: handleChange,
      placeholder: placeholder || 'enter',
    };

    return result;
  }, [isSubmitting, privateValue, additionalProps, status]);

  return (
    <InnerFormItem
      label={itemLabel}
      help={errorMessage}
      component={Component}
      innerComponentProps={innerComponentProps}
      labelCol={labelCol || DEFAULT_LABEL_CONFIG}
      style={!shouldShowErrorMessage ? DEFAULT_INPUT_WRAPPER_STYLE : undefined}
      validateStatus={meta.error ? VALIDATE_STATUS_ENUM.ERROR : VALIDATE_STATUS_ENUM.SUCCESS}
    />
  );
};

const InnerFormItem = memo(({ innerComponentProps, component: Component, ...rest }: InnerFormItemProps) => {
  return (
    <FormField {...rest}>
      <Component {...innerComponentProps} />
    </FormField>
  );
});

export default FormItem;
