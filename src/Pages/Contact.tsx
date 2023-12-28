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
  Button
} from 'antd';
import { useForm } from 'antd/es/form/Form';
import { UpOutlined } from '@ant-design/icons';
import LocationHours from '../Components/LocationHours';
import { location1, location2 } from '../Util/constants';
import Services from '../Components/Services';
import { fullServices } from '../Util/constants';
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
  const [form] = useForm();
  const [submitLoading, setSubmitLoading] = React.useState(false);
  const onFinish = (values: any) => {
    /* 
    setSubmitLoading(true);
    axios
      .post('//add link here//', {
        data: {
          name: values.name,
          email: values.email,
          message: values.message
        },
        type: 'sendgrid',
        appName: 'Azitattoo'
      })
      .then((response) => {
        if (response.data.status === 'success') {
          Modal.success({
            title: 'Thank You For Reaching Out To Us!',
            content:
              'Your inquiry is important to us, and we want to assure you that your message has been received and is being reviewed by our team. We will get back to you as soon as possible to provide the information or assistance you are seeking.'
          });
          form.resetFields();
        } else {
          Modal.error({
            title: 'Failed To Send Your Message!',
            content:
              'Sorry, looks like something went wrong. Please try again later!'
          });
        }
      })
      .catch((_error) => {
        console.log('unsuccessful!');
      })
      .finally(() => {
        setSubmitLoading(false);
      });
      */
    console.log(values.name);
    console.log(values.email);
    console.log(values.message);
  };

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(changeRoute('/contact'));
  }, []);

  return (
    <div style={{ minHeight: '100vh' }}>
      <Row justify={'center'} gutter={[30, 30]}>
        <Col span={14} style={{ textAlign: 'center' }}>
          <Typography.Title level={2}>Contact Us</Typography.Title>
        </Col>
        <Col span={14} style={{ textAlign: 'center' }}>
          <Text strong>
            If there's anything on your mind, feel free to get in contact with
            us
          </Text>
        </Col>
        <Col span={14}>
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
