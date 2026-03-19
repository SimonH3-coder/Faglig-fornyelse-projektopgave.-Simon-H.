import { useState } from "react";
export function Formair() {
    const [form, setForm] = useState({
        Navn: "",
        Telefonnummer: "",
        Email: "",
        Besked: "",
        kommentar: "",
        Konktaktformular: "telefon"
    });
const [sendt, setSendt] = useState(false);

const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
        ...prev, [name]: value
    }));
    setSendt(false);
}
const handleKontaktmetodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
        ...prev, Konktaktformular: e.target.value
    }));
    setSendt(false);
}
const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSendt(true);
}

const handleReset = () => {
    setForm({
        Navn: "",
        Telefonnummer: "",
        Email: "",
        Besked: "",
        kommentar: "",
        Konktaktformular: "telefon"
    });
    setSendt(false);
}

return (
    <div>
        <form onSubmit={handleSubmit}>
        <div>
            <label>Fulde navn:</label>
            <input type="text" name="Navn" onChange={handleChange} />
        </div>
        <div>
            <label>Telefonnummer:</label>
            <input type="text" name="Telefonnummer" onChange={handleChange} />
        </div>
        <div>
            <label>Email:</label>
            <input type="email" name="Email" onChange={handleChange} />
        </div>
        <div>
            <label>Besked:</label>
            <textarea name="Besked" onChange={handleChange} />
        </div>
        <div>
            <label>Kommentar:</label>
            <textarea name="kommentar" onChange={handleChange} />
        </div>
        <div></div>
    </div>
    </form>
)