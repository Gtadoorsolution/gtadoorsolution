//GetInTouch.js

import { useState } from "react";
import { sendContactForm } from '../../lib/api';
import getInTouchStyles from '../styles/getInTouch.module.css'
import contacts from '@/data/contacts';

const initValues = { name: "", email: "", subject: "", message: "" };
const initState = { isLoading: false, error: "", values: initValues };

const GetInTouch = () => {
    const [state, setState] = useState(initState);
    const [touched, setTouched] = useState({});

    const { values, isLoading, error } = state;

    const onBlur = ({ target }) =>
        setTouched((prev) => ({ ...prev, [target.name]: true }));
    const handleChange = ({ target }) =>
        setState((prev) => ({
            ...prev,
            values: {
                ...prev.values,
                [target.name]: target.value,
            },
        }));
    const onSubmit = async (e) => {
        e.preventDefault();
        setState((prev) => ({
            ...prev,
            isLoading: true,
        }));
        try {
            await sendContactForm(values); // використовуйте sendContactForm для відправки даних
            setTouched({});
            setState(initState);
            alert("Message sent.");
        } catch (error) {
            setState((prev) => ({
                ...prev,
                isLoading: false,
                error: error.message || "Failed to send message",
            }));
            alert("Failed to send message.");
        }
    };
    return (
        <div className={getInTouchStyles.wrapper} >
            <div>
                <p className={getInTouchStyles.title}>Get in Touch</p>
                {error && (
                    <p style={{ color: "red", margin: "16px 0", fontSize: "18px" }}>
                        {error}
                    </p>
                )}
                <form className={getInTouchStyles.formWrap} onSubmit={onSubmit}>
                    <div className={getInTouchStyles.inputWrap}>
                        <input
                            className={getInTouchStyles.input}
                            type="text"
                            name="name"
                            value={values.name}
                            onChange={handleChange}
                            onBlur={onBlur}
                            placeholder={values.name ? "" : "Name"} // Якщо у полі є текст, плейсхолдер зникає
                            required
                        />
                    </div>
                    <input
                        className={getInTouchStyles.input}
                        type="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={onBlur}
                        placeholder={values.email ? "" : "Email"}
                        required
                    />
                    <input
                        className={getInTouchStyles.input}
                        type="text"
                        name="subject"
                        value={values.subject}
                        onChange={handleChange}
                        onBlur={onBlur}
                        placeholder={values.subject ? "" : "Subject"}
                        required
                    />
                    <textarea
                        className={`${getInTouchStyles.input} ${touched.message && !values.message ? getInTouchStyles.errorInput : ''}`}
                        name="message"
                        rows="4"
                        value={values.message}
                        onChange={handleChange}
                        onBlur={onBlur}
                        placeholder={values.message ? "" : "\nAdditional Message\n(Not Required)"}
                    ></textarea>
                    <div>
                        <button
                            className={getInTouchStyles.button}
                            type="submit"
                            disabled={isLoading}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 512 512" fill="currentColor">
                                <path d="M508.645,18.449c-2.929-2.704-7.133-3.51-10.826-2.085L6.715,204.446c-3.541,1.356-6.066,4.515-6.607,8.264c-0.541,3.75,0.985,7.496,3.995,9.796l152.127,116.747v83.592c0,3.851,2.663,7.393,6.061,9.213c1.541,0.827,3.51,1.236,5.199,1.236c2.026,0,4.181-0.593,5.931-1.756l56.12-37.367l130.369,99.669c1.848,1.413,4.099,2.149,6.365,2.149c1.087,0,2.186-0.169,3.248-0.516c3.27-1.066,5.811-3.672,6.786-6.974L511.571,29.082C512.698,25.271,511.563,21.148,508.645,18.449z M170.506,321.508L31.659,217.272L456.525,54.557L170.506,321.508z M176.552,403.661v-48.454l33.852,25.887L176.552,403.661z M359.996,468.354l-121.63-93.012l-47.29-36.163L480.392,60.86L359.996,468.354z" />
                            </svg>
                            <snan className={getInTouchStyles.name}>
                                Get in Touch
                            </snan>
                        </button>
                    </div>
                </form>
            </div>
            <div>
                <p className={getInTouchStyles.title}>Contact Info</p>
                <ul className={getInTouchStyles.contactWrap}>
                    <li className={getInTouchStyles.contact}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" fill="none" stroke="#835c46" strokeWidth="2" />
                            <circle cx="12" cy="9" r="2.5" fill="none" stroke="#835c46" strokeWidth="2" />
                        </svg>
                        {contacts.adress}
                    </li>
                    <li className={getInTouchStyles.contact}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#835c46" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                            <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                        {contacts.email}
                    </li>
                    <li className={getInTouchStyles.contact}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <rect x="5" y="2" width="14" stroke="#835c46" height="20" rx="2" ry="2"></rect>
                            <line x1="12" y1="18" x2="12" y2="18"></line>
                        </svg>
                        {contacts.telNumber}
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default GetInTouch;
