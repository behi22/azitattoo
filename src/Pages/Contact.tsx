import React from 'react';
import { useDispatch } from 'react-redux';
import { changeRoute } from '../Redux/features/app/app-slice';
import {
  FloatButton,
  /* Modal,*/
  Row,
  Col,
  Form,
  Typography,
  Input,
  Button,
  notification
} from 'antd';
import { useForm } from 'antd/es/form/Form';
import { UpOutlined } from '@ant-design/icons';
import LocationHours from '../Components/LocationHours';
import { location1, location2 } from '../Util/constants';
import Services from '../Components/Services';
import { fullServices } from '../Util/constants';
import axios from 'axios';
//import axios from 'axios';

const { Text } = Typography;

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!'
  },
  number: {
    range: '${label} must be between ${min} and ${max}'
  }
};

const Contact: React.FC = () => {
  const [api, contextHolder] = notification.useNotification();
  const [form] = useForm();
  const [submitLoading, setSubmitLoading] = React.useState(false);
  const onFinish = (values: any) => {
    setSubmitLoading(true);
    axios.post('https://app-acz3khlqkq-uc.a.run.app/sendemail', {
      data: {
        name: values.name,
        email: values.email,
        company: 'N/A',
        role: 'N/A',
        message: values.message,
        useDataEmailTo: 'true',
        emailTo: 'info@azitattoobeauty.com'
      },
      type: 'sendgrid',
      appName: 'WWT'
    });
    setSubmitLoading(false);
    form.resetFields();
    api.success({
      message:
        'Successfully sent your message. We will get back to you shortly.',
      placement: 'top'
    });
  };

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(changeRoute('/contact'));
  }, []);

  return (
    <div style={{ minHeight: '100vh' }}>
      {contextHolder}
      <Row justify={'center'}>
        <Col xs={20} lg={14} style={{ textAlign: 'center' }}>
          <Typography.Title level={2}>Contact Us</Typography.Title>
        </Col>
        <Col xs={20} lg={14} style={{ textAlign: 'center' }}>
          <Text style={{ fontSize: '1.3em' }}>
            If there's anything on your mind, feel free to get in contact with
            us
          </Text>
        </Col>
        <Col xs={20} lg={14} style={{ marginTop: '25px' }}>
          <Form
            form={form}
            name='nest-messages'
            onFinish={onFinish}
            validateMessages={validateMessages}
            initialValues={{ usage: 'patient', rate: 1 }}
          >
            <Form.Item name='name' rules={[{ required: true }]}>
              <Input placeholder='Full Name' />
            </Form.Item>
            <Form.Item name='email' rules={[{ type: 'email', required: true }]}>
              <Input placeholder='Email' />
            </Form.Item>
            <Form.Item name='message' rules={[{ required: true }]}>
              <Input.TextArea
                placeholder='Message'
                style={{ height: '150px' }}
              />
            </Form.Item>
            <Form.Item>
              <div style={{ textAlign: 'center' }}>
                <Button
                  type='primary'
                  htmlType='submit'
                  loading={submitLoading}
                  shape='round'
                  size='large'
                  style={{ height: 'auto', whiteSpace: 'normal' }}
                >
                  Submit
                </Button>
              </div>
            </Form.Item>
          </Form>
        </Col>
      </Row>
      <Services services={fullServices} />
      <br />
      <LocationHours locations={[location1, location2]}></LocationHours>
      <br />
      <FloatButton.BackTop
        style={{ insetInlineStart: '3%', bottom: 25, left: 35 }}
        icon={<UpOutlined style={{ color: 'white' }} />}
      />
    </div>
  );
};

export default Contact;
