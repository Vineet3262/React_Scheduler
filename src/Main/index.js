import React, { useEffect } from 'react';
import moment from 'moment-timezone';
import './Main.css';
import { Container, Row, Col } from 'react-bootstrap';
import { hours } from '../Hours';

export default function WeeklyScheduler({ selectedTimeZone, currentWeek, setCurrentWeek }) {
    const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
    useEffect(() => {
        setCurrentWeek(moment().tz(selectedTimeZone).startOf('week'));
    }, [selectedTimeZone, setCurrentWeek]);

    return (
        <Container className='schudeler'>
            {daysOfWeek.map((day) => (
                <Row key={day}>
                    <Col lg={1} sm={2} xs={3} className={currentWeek.clone().day(day).format('MM/D') === moment().format("MM/D") ? 'todayDay' : 'day'}>
                        <div className='weekDays'>{day}</div>
                        <div>{currentWeek.clone().day(day).format('MM/D')}</div>
                    </Col>
                    <Col lg={11} sm={10} xs={9} className='checkSchedule'>
                        {currentWeek.clone().day(day).format('MM/D') < moment().format('MM/D') ?
                            "past" :
                            hours.map((hr) => (
                                <span key={hr} className='scheduleTime'>
                                    <input type='checkbox' /> {moment(hr, 'hh:mm a').tz(selectedTimeZone).format('hh:mm a')}
                                </span>
                            ))}
                    </Col>
                </Row >
            ))}
        </Container >
    );
}