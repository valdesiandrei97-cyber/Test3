emailjs.init({
    publicKey: "xeTPCgSK8mgwHugHW"
});

function sendReservation(date){

    return emailjs.send(

        "service_7gdn8hj",

        "template_mllp0o3",

        {

            selected_date: date,

            selected_time: "After 20:00"

        }

    );

}
