import { Button, Col, Form, Input, Modal, Row } from 'antd';
import { useForm } from 'antd/es/form/Form';
import React from 'react';
import {
  addDocWithoutId,
  dayToLocation,
  fetchAllDocuments,
  generateUid,
  getFullDate,
  isIdAvailable
} from '../../Util/util';
import { useAppSelector } from '../../Redux/hooks';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import dayjs from 'dayjs';

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

const BookingForm: React.FC = () => {
  const [form] = useForm();
  const [submitLoading, setSubmitLoading] = React.useState(false);
  const booking = useAppSelector((state) => state.booking);
  const navigate = useNavigate();
  const { time, date, service } = booking;
  const address = dayToLocation[dayjs(date, 'YYYY-MM-DD').day()];

  React.useEffect(() => {
    window.scrollTo({ behavior: 'instant', top: 0 });
  }, []);

  const onFinish = async (values: { [key: string]: string }) => {
    const { fname, lname, email, phone, notes } = values;
    setSubmitLoading(true);
    try {
      // fetch db
      const dbBookings = await fetchAllDocuments('bookings');

      // check too many attempts
      if (localStorage) {
        const storageUid = localStorage.getItem('aziuid');
        if (storageUid && !isIdAvailable(dbBookings, storageUid)) {
          throw new Error('too_many_attempts');
        } else if (!storageUid) {
          const generatedUid = generateUid();
          localStorage.setItem('aziuid', generatedUid);
        }
      }

      const uid = localStorage.getItem('aziuid');

      // time slot taken
      if (
        dbBookings.some((pastBooking) => {
          return pastBooking.date === date && pastBooking.time === time;
        })
      ) {
        throw new Error('Time Slot taken');
      }
      const data = {
        name: `${fname} ${lname}`,
        email,
        phone,
        notes: notes || '(left empty)',
        time,
        date: getFullDate(date),
        service,
        address
      };
      // write to db
      const ref = await addDocWithoutId('bookings', {
        ...data,
        date: date,
        id: uid
      });
      // send email to Azi
      try {
        axios.post('https://app-acz3khlqkq-uc.a.run.app/sendemail', {
          data,
          type: 'sendgrid',
          appName: 'AZITATTOO'
        });
      } catch (error) {
        console.log(error);
      }
      // send email to client
      try {
        axios.post('https://app-acz3khlqkq-uc.a.run.app/sendemail', {
          data: {
            ...data,
            useDataEmailTo: true,
            id: ref.id
          },
          type: 'sendgrid',
          appName: 'AZITATTOO_CLIENT'
        });
      } catch (error) {
        console.log(error);
      }

      // redirect to result
      navigate('./confirmed');
    } catch (error) {
      if (error.message === 'too_many_attempts') {
        Modal.error({
          title: 'Booking Failed',
          afterClose: () => {
            window.location.reload();
          },
          content:
            'You cannot book this appointment as you currently have more than 5 active bookings. Contact us if this is a mistake and we will resolve the issue for you.'
        });
      } else {
        Modal.error({
          title: 'Booking Failed',
          afterClose: () => {
            window.location.reload();
          },
          content:
            'Oops, something went wrong. This date and time may be taken by someone else before you. Please try again for another time slot.'
        });
      }
    } finally {
      setSubmitLoading(false);
    }
  };

  return (
    <Form
      style={{ width: '80%' }}
      size='large'
      form={form}
      name='nest-messages'
      onFinish={onFinish}
      validateMessages={validateMessages}
      initialValues={{ address: address }}
    >
      <Row justify={'space-between'}>
        <Col xs={24} md={11}>
          <Form.Item name='address'>
            <Input value={address} readOnly />
          </Form.Item>
        </Col>
        <Col xs={24} md={12}>
          <Form.Item
            name='phone'
            rules={[
              {
                required: true,
                pattern: new RegExp(/^[0-9]+$/),
                message: 'Invalid Phone Number'
              },
              () => ({
                validator(_, value) {
                  if (value.length !== 10) {
                    return Promise.reject('Phone number has to be 10 digits.');
                  }
                  return Promise.resolve();
                }
              })
            ]}
          >
            <Input
              placeholder='Phone Number'
              addonBefore={'+1'}
              minLength={10}
            />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item name='email' rules={[{ type: 'email', required: true }]}>
        <Input placeholder='Email' />
      </Form.Item>
      <Row justify={'space-between'}>
        <Col xs={24} md={11}>
          <Form.Item name='fname' rules={[{ required: true }]}>
            <Input placeholder='First Name' />
          </Form.Item>
        </Col>
        <Col xs={24} md={12}>
          <Form.Item name='lname' rules={[{ required: true }]}>
            <Input placeholder='Last Name' />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item name='notes'>
        <Input.TextArea
          placeholder='Appointment Notes (optional)'
          style={{ height: '170px' }}
        />
      </Form.Item>
      <Form.Item>
        <Button
          type='primary'
          htmlType='submit'
          size='middle'
          loading={submitLoading}
        >
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default BookingForm;
