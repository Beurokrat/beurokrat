'use client'
import Button from './button'

function ContactForm() {
    return (
        <div className="flex flex-col">
            <input type="text" placeholder="FULL NAME" />
            <input type="text" placeholder="EMAIL" />
            <div className="flex flex-row">
                <select name="country code" id="">
                    <option value="+91">🇮🇳 +91</option>
                    <option value="+91">🇦🇪 +971</option>
                    <option value="+91">🇶🇦 +974</option>
                    <option value="+91">🇺🇸 +1</option>
                    <option value="+91">🇬🇧 +44</option>
                </select>
                <input className="w-full" type="text" placeholder="PHONE NUMBER" />
            </div>
            <textarea
                name="message"
                id=""
                cols="30"
                rows="8"
                placeholder="MESSAGE.."
            ></textarea>
            <div className="w-fit">
                <Button
                    text="Send Message"
                    onClick={() => console.log('contact message sent')}
                />
            </div>
        </div>
    )
}

export default ContactForm
