import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Scheduler from './Main/index.js';
import { useState } from 'react';
import moment from 'moment-timezone';
import Container from 'react-bootstrap/Container';

function App() {
  const [selectedTimeZone, setSelectedTimeZone] = useState('Asia/Calcutta');
  const [currentWeek, setCurrentWeek] = useState(moment().tz(selectedTimeZone).startOf('week'));
  return (
    <Container className='main'>
      <Header
        selectedTimeZone={selectedTimeZone}
        setSelectedTimeZone={setSelectedTimeZone}
        currentWeek={currentWeek}
        setCurrentWeek={setCurrentWeek}
      />
      <Scheduler
        selectedTimeZone={selectedTimeZone}
        currentWeek={currentWeek}
        setCurrentWeek={setCurrentWeek}
      />
    </Container>
  );
}

export default App;
