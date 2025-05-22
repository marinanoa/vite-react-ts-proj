import { message } from 'antd';
import { useEffect } from 'react';

type Props = {
  isSuccess: boolean;
  isError: boolean;
  successText: string;
  errorText: string;
};

export const FormMessageHandler = ({ isSuccess, isError, successText, errorText }: Props) => {
  useEffect(() => {
    if (isSuccess) message.success(successText);
    if (isError) message.error(errorText);
  }, [isSuccess, isError, successText, errorText]);

  return null;
};
