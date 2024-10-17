'use client'
import Button from './button'

function ContactForm() {
    return (
        <div className="flex flex-col">
            <div className="flex sm:flex-col md:flex-row w-full">
                <label className="text-[12px] flex flex-col md:w-1/2" htmlFor="full-name">
                    <div className="flex flex-row pb-2">
                        Full Name <span className="text-red-500">*</span>
                    </div>
                    <input id="full-name" name="full-name" type="text" placeholder="Your full name" />
                </label>
                <label className="text-[12px] flex flex-col md:w-1/2" htmlFor="full-name">
                    <div className="flex flex-row pb-2">
                        Company Name <span className="text-red-500">*</span>
                    </div>
                    <input id="company-name" name="company-name" type="text" placeholder="Your company name" />
                </label>
            </div>
            <div className="flex sm:flex-col md:flex-row w-full">
                <label className="text-[12px] flex flex-col md:w-1/2" htmlFor="full-name">
                    <div className="flex flex-row pb-2">
                        Contact Number <span className="text-red-500">*</span>
                    </div>
                    <div className="flex flex-row">
                        <select name="country code" id="">
                            <option value="+91">🇮🇳 +91</option>
                            <option value="+91">🇦🇪 +971</option>
                            <option value="+91">🇶🇦 +974</option>
                            <option value="+91">🇺🇸 +1</option>
                            <option value="+91">🇬🇧 +44</option>
                        </select>
                        <input className="w-full" type="text" placeholder="98210 300066" />
                    </div>
                </label>
                <label className="text-[12px] flex flex-col md:w-1/2" htmlFor="email">
                    <div className="flex flex-row pb-2">
                        E-mail <span className="text-red-500">*</span>
                    </div>
                    <input id="email" name="email" type="email" placeholder="Enter your e-mail address" />
                </label>
            </div>

            <label className="text-[12px] flex flex-col w-full" htmlFor="email">
                <div className="flex flex-row pb-2">
                    Your Message<span className="text-red-500">*</span>
                </div>
                <textarea name="message" id="" cols={30} rows={8}></textarea>
            </label>
            <div className="w-full flex sm:flex-col md:flex-row justify-between">
                <p className="md:w-[60%]">By sending this form I confirm that I have read and accept the Privacy Policy</p>
                <button className="px-7 py-4 rounded-full bg-primary text-black my-[22px]">Send a Message</button>
            </div>
        </div>
    )
}

export default ContactForm
