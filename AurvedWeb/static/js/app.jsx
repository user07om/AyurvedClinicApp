// static/js/app.jsx

const { useState, useEffect } = React;

function App() {
    const [appointments, setAppointments] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const data = [
            { id: 1, name: "John Doe", contact: "johndoe@example.com", details: ["Consultation", "Blood Test"] },
            { id: 2, name: "Jane Smith", contact: "janesmith@example.com", details: ["Check-up", "X-ray"] },
            { id: 3, name: "Michael Lee", contact: "michaellee@example.com", details: ["Surgery follow-up"] }
        ];
        setAppointments(data);
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === appointments.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? appointments.length - 1 : prevIndex - 1
        );
    };

    return (
        <div>
            <h1>Sliding Patient Appointments</h1>
            <div className="container">
                <div className="arrow arrow-left" onClick={prevSlide}>&#9664;</div>
                <div className="card-slider" style={{ transform: `translateX(-${currentIndex * 240}px)` }}>
                    {appointments.map(appointment => (
                        <div className="card" key={appointment.id}>
                            <h2>{appointment.name}</h2>
                            <p>{appointment.contact}</p>
                            <ul>
                                {appointment.details.map((detail, index) => (
                                    <li key={index}>{detail}</li>
                                ))}
                            </ul>
                            <button className="accept">ACCEPT</button>
                            <button className="reject">REJECT</button>
                            <button className="view">VIEW</button>
                        </div>
                    ))}
                </div>
                <div className="arrow arrow-right" onClick={nextSlide}>&#9654;</div>
            </div>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
