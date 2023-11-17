import { Button, Calendar, Col, Radio, Row, Select, Typography } from 'antd';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import React from 'react';
import { useAppSelector } from '../../Redux/hooks';
import { useDispatch } from 'react-redux';
import {
  changeDate,
  changeTime
} from '../../Redux/features/booking/booking-slice';
import {
  fetchAllDocuments,
  getFirstAvailableDate,
  isDayAvailable
} from '../../Util/util';
import { consultTimes, days, monthsShort, times } from '../../Util/constants';
import { Booking } from '../../Util/types';

const DateAndTime: React.FC = () => {
  const [dbBookings, setDbBookings] = React.useState<Booking[]>([]);
  const booking = useAppSelector((state) => state.booking);
  const dispatch = useDispatch();
  const { date, time, service } = booking;
  const dayjsDate = dayjs(date, 'YYYY-MM-DD');

  React.useEffect(() => {
    const effect = async () => {
      window.scrollTo({ behavior: 'instant', top: 0 });
      const db = await fetchAllDocuments('bookings');
      setDbBookings(db);
      const initDate = getFirstAvailableDate(db);
      dispatch(changeDate(initDate));
      dispatch(changeTime(null));
    };
    effect();
  }, []);

  const onSelect = (newValue: Dayjs) => {
    dispatch(changeDate(newValue?.format('YYYY-MM-DD')));
  };

  const onPanelChange = (newValue: Dayjs) => {
    dispatch(changeDate(newValue?.format('YYYY-MM-DD')));
  };

  const getTimeOptions = () => {
    const appTimes = service === 'Consultation' ? consultTimes : times;
    return appTimes.map((aziTime) => {
      console.log(dbBookings);
      if (
        dbBookings.some(
          (pastBooking) =>
            pastBooking.date === date && pastBooking.time === aziTime
        )
      ) {
        return <></>;
      } else {
        return (
          <Radio.Button value={aziTime} key={aziTime}>
            {aziTime}
          </Radio.Button>
        );
      }
    });
  };

  const myTimeOptions = getTimeOptions();

  return (
    <Row gutter={[0, 30]}>
      <Col span={24}>
        <Typography.Title level={5}>
          {date &&
            `${days[dayjsDate.day()]}, ${
              monthsShort[dayjsDate.month()]
            } ${dayjsDate.date()} ${dayjsDate.year()}`}
          {time && `, at ${time}`}
        </Typography.Title>
      </Col>
      <Col span={24}>
        <Calendar
          value={dayjsDate}
          onSelect={onSelect}
          onPanelChange={onPanelChange}
          fullscreen={false}
          disabledDate={(date) => {
            return (
              date.isBefore(dayjs()) ||
              !isDayAvailable(dbBookings, date.format('YYYY-MM-DD')) ||
              date.day() === 0
            );
          }}
          headerRender={({ value, onChange }) => {
            const monthOptions = [];
            const month = value.month();
            const start = dayjs().month();
            const end = 12;
            for (let i = start; i < end; i++) {
              monthOptions.push(
                <Select.Option key={i} value={i} className='month-item'>
                  {monthsShort[i]}
                </Select.Option>
              );
            }

            return (
              <div style={{ padding: 8 }}>
                <Row gutter={8} justify={'end'} align={'middle'}>
                  <Col>
                    <Select defaultValue={value.year()} size='small'>
                      <Select.Option value={value.year()}>
                        {value.year()}
                      </Select.Option>
                    </Select>
                  </Col>
                  <Col>
                    <Select
                      size='small'
                      value={month}
                      onChange={(newMonth) => {
                        const now = value.clone().month(newMonth);
                        onChange(now);
                      }}
                    >
                      {monthOptions}
                    </Select>
                  </Col>
                </Row>
              </div>
            );
          }}
        />
      </Col>
      <Col span={24}>
        <Row gutter={20} justify={'center'}>
          <Col>
            <Radio.Group
              buttonStyle='solid'
              onChange={(e) => {
                const value = e.target.value;
                dispatch(changeTime(value));
              }}
            >
              {myTimeOptions.map((el) => el)}
            </Radio.Group>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default DateAndTime;
