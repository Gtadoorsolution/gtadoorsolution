interface Contacts {
    email: string;
    telNumber: string;
    telNumberView: string;
    telE164: string;
    schedule: string;
}

const FALLBACK_PHONE = "4372142768";
const FALLBACK_EMAIL = "gtadoorsolution@gmail.com";

function parsePhone(raw: string): { digits: string; e164: string } | null {
    const digits = raw.replace(/\D/g, "").replace(/^1/, "");
    if (digits.length !== 10) return null;
    return { digits, e164: `+1${digits}` };
}

const phone = parsePhone(process.env.NEXT_PUBLIC_PHONE ?? FALLBACK_PHONE)
    ?? parsePhone(FALLBACK_PHONE)!;

const contacts: Contacts = {
    email: process.env.NEXT_PUBLIC_EMAIL ?? FALLBACK_EMAIL,
    telNumber: phone.digits,
    telNumberView: phone.digits,
    telE164: phone.e164,
    schedule: "Mon - Sun 24/7",
}

export default contacts
