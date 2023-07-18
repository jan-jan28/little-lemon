
import Bookingform from "./Bookingform";

export default function Booking(prop){
    return(
        <>
        <Bookingform availableTimes={prop.availableTimes}/>
        </>
    )
}
