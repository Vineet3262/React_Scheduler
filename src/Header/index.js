import React from 'react'
import './Header.css';
import moment from 'moment-timezone';
import Container from 'react-bootstrap/Container';
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';

export default function Header({ selectedTimeZone, setSelectedTimeZone, currentWeek, setCurrentWeek }) {
    const timeZones = [
        { label: '[GMT+5:30] India Standard Time', value: 'Asia/Calcutta' },
        { label: '[UTC-5] Eastern Standard Time', value: 'UTC' },
        { label: '[GMT+1] British Summer Time', value: 'Europe/London' }
    ];
    const handleTimeZoneChange = (event) => {
        setSelectedTimeZone(event.target.value);
    };

    const handlePrevWeek = () => {
        setCurrentWeek(currentWeek.clone().subtract(1, 'week'));
    };

    const handleNextWeek = () => {
        setCurrentWeek(currentWeek.clone().add(1, 'week'));
    };
    return (
        <Container className='header'>
            <div className='topBar'>
                <span className='swap' onClick={handlePrevWeek}><AiFillCaretLeft /> <span className="swapWeek" >Previous Week</span></span>
                <h6>{moment().format('MMM D, YYYY')}</h6>
                <span className='swap' onClick={handleNextWeek}><span className="swapWeek" >Next Week</span> <AiFillCaretRight /></span>
            </div>
            <div className='timeZone'>
                <h6>Timezone:</h6>
                <select value={selectedTimeZone} onChange={handleTimeZoneChange}>
                    {timeZones.map((timeZone) => (
                        <option key={timeZone.value} value={timeZone.value}>{timeZone.label}</option>
                    ))}
                </select>
            </div>
        </Container>
    )
}
