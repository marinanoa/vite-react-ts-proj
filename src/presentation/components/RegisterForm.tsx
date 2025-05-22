import { Button, Form, Input, Typography } from 'antd';
import { useRegister } from '../hooks/useRegister';
import { REGISTER_FORM_TEXTS as TEXTS } from '../constants/register.constants';
import { FormMessageHandler } from './FormMessageHandler';

const { Title } = Typography;

export const RegisterForm = () => {
  const { mutate, isPending, isSuccess, isError } = useRegister();
  const [form] = Form.useForm();

  const handleSubmit = (values: { name: string; email: string; password: string }) => {
    mutate(values);
  };

  return (
    <>
      <Title level={3}>{TEXTS.title}</Title>
      <Form layout="vertical" form={form} onFinish={handleSubmit}>
        <Form.Item name="name" rules={[{ required: true }]}>
          <Input placeholder={TEXTS.namePlaceholder} />
        </Form.Item>
        <Form.Item name="email" rules={[{ required: true }, { type: 'email' }]}>
          <Input placeholder={TEXTS.emailPlaceholder} />
        </Form.Item>
        <Form.Item name="password" rules={[{ required: true }]}>
          <Input.Password placeholder={TEXTS.passwordPlaceholder} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block loading={isPending}>
            {TEXTS.submit}
          </Button>
        </Form.Item>
      </Form>
      <FormMessageHandler
        isSuccess={isSuccess}
        isError={isError}
        successText={TEXTS.successMessage}
        errorText={TEXTS.errorMessage}
      />
    </>
  );
};
