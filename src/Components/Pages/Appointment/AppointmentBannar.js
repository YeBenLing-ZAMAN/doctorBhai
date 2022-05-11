import appoinmentBannarImg from '../../../assets/images/chair.png';
import AppointmentBGI from '../../../assets/images/bg.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppointmentBannar = ({date, setDate}) => {
    return (
        <div>
            <div class="hero min-h-screen bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${AppointmentBGI})` }}>
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={appoinmentBannarImg} class="w-full lg:w-1/2 rounded-lg shadow-3xl" alt='doctor chair' />
                    <div>
                        <DayPicker
                            mode="single"
                            styles={{
                                caption: { color: 'red' }
                              }}
                            selected={date}
                            onSelect={setDate}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBannar;