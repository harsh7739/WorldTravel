import React from 'react'

const Accordion = () => {
    return (
        <div class="accordion" id="accordionExample">
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        What kind of travel services does World Travel offer?
                    </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <strong>World Travel offers a wide range of travel services, including flight booking, hotel reservations, vacation packages, cruise bookings, car rentals, and personalized travel itineraries. We strive to make your travel experience seamless and enjoyable.</strong>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        How do I book a flight or hotel on World Travel?
                    </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <strong>Booking a flight or hotel with World Travel is easy! Simply visit our website, enter your travel details, including destination and dates, and browse through the available options. Once you find the right one, follow the simple booking process to secure your reservation.</strong>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Are there any travel deals or discounts available on World Travel?
                    </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <strong>Yes, we regularly offer exclusive travel deals and discounts on flights, hotels, and vacation packages. Keep an eye on our website's "Deals" section and subscribe to our newsletter to stay updated on the latest offers and promotions.</strong>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        Can I customize my travel itinerary with World Travel?
                    </button>
                </h2>
                <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <strong>Absolutely! World Travel provides customized travel planning services. Contact our experienced travel consultants to tailor your itinerary according to your preferences, including destinations, activities, and budget. We'll create a unique travel experience just for you.</strong>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                        Is my personal and payment information secure when booking through World Travel?
                    </button>
                </h2>
                <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <strong>Yes, your security is our priority. World Travel uses industry-standard encryption and security measures to protect your personal and payment information. Your data is treated with the utmost confidentiality and care.</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Accordion