import { Button, Form, Input, message, Typography } from 'antd';
import { useRegister } from '../hooks/useRegister';
import { REGISTER_FORM_TEXTS as TEXTS } from '../constants/register.constants';
import { parseRegisterError } from '../../lib/error.mapper';

const { Title } = Typography;

export const RegisterForm = () => {
  const { mutate, isPending } = useRegister();
  const [form] = Form.useForm();

  const handleSubmit = (values: { name: string; email: string; password: string }) => {
    mutate(values, {
      onSuccess: () => {
        message.success(TEXTS.successMessage);
        form.resetFields();
      },
      onError: (err) => {
        message.error(parseRegisterError(err));
      },
    });
  };

  return (
    <>
      <Title level={3}>{TEXTS.title}</Title>
      <Form layout="vertical" form={form} onFinish={handleSubmit}>
        <Form.Item name="name" rules={[{ required: true, message: TEXTS.nameRequired }]}>
          <Input placeholder={TEXTS.namePlaceholder} />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[
            { required: true, message: TEXTS.emailRequired },
            { type: 'email', message: TEXTS.emailValid },
          ]}
        >
          <Input placeholder={TEXTS.emailPlaceholder} />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            { required: true, message: TEXTS.passwordRequired },
            { min: 6, message: TEXTS.passwordValid },
          ]}
        >
          <Input.Password placeholder={TEXTS.passwordPlaceholder} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block loading={isPending}>
            {TEXTS.submit}
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
