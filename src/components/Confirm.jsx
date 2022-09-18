import { useNavigate } from "react-router-dom";



const Confirm= () => {
    const myStyle={
        backgroundImage: 
    "url('https://lh3.googleusercontent.com/pw/AL9nZEWCdAnDy4Vp2a5joBT4Rj59GB_0KnRxUIdhFFlR83p2nBgKdiHnbDqDnjYWUMltte5BZIZ2FBTVFdqjJJwoB7FmIconWYlWyZ4VhGdLuvjVdKHv5IFENSPyK7UyPWstYAW1WyWRdQulfZEzwHDNrLMnqQ=s919-no?authuser=0')",
        height:'100vh',
        marginTop:'-70px',
        fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
    const navigate = useNavigate();
    const handleConfirmBooking = (e) =>{
        alert('Your Booking is confirmed')
        navigate('/')
 
     }
    return(
        <>
        <div style={myStyle}>
        <div className="conatiner bg-dark w-50 m-auto text-center text-light position-relative" style={{  top: '10vw', fontSize: '3vw',  borderRadius: '3vw', paddingTop: '2vw', height: '35vw',opacity:'60%' ,left:'20vw'}}>
        <div className="fw-bold text-decoration-underline text-warning">Confirm</div>
        <table style={{ textAlign:'center'}}>
        
        {/* <div className="conatiner bg-dark w-50 m-auto text-center text-light position-relative" style={{  top: '5vw', fontSize: '3vw',  borderRadius: '3vw', paddingTop: '2vw', height: '35vw' }}></div> */}
        <br></br>
        <div className="text-light" style={{fontSize:'2vw',top:'2vw'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; To confirm your booking, Click on confirm booking</div>
        <p>
        <div className="text-light" style={{fontSize:'2vw'}}> After confirmation our executive will get back to you with your final fare and the link to our payment gateway</div>
        </p>
        <br></br>
        

            <tr>
                            <td colSpan={2}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <button
                                    type="button"
                                    className="btn btn-warning fw-bold position-relative"
                                    style={{ fontSize: '2vw', padding: '1vw 2vw', bottom: '3vw' }}
                                    onClick={handleConfirmBooking}
                                >
                                    Confirm Booking
                                </button>
                            </td>
            </tr>
        </table>
        </div>
        </div>
        </>

        
        );
}
export default Confirm;
