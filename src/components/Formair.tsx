import { useState } from "react";
export function Formair() {
  const [form, setForm] = useState({
    Navn: "",
    Telefonnummer: "",
    Email: "",
    Besked: "",
    Kommentar: "",
    Konktaktformular: "telefon",
  });
  const [sendt, setSendt] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
    setSendt(false);
  };
  const handleKontaktmetodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      Konktaktformular: e.target.value,
    }));
    setSendt(false);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSendt(true);
  };

  const handleReset = () => {
    setForm({
      Navn: "",
      Telefonnummer: "",
      Email: "",
      Besked: "",
      Kommentar: "",
      Konktaktformular: "telefon",
    });
    setSendt(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Fulde navn:</label>
          <input type="text" name="Navn" value={form.Navn} onChange={handleChange} />
        </div>
        <div>
          <label>Telefonnummer:</label>
          <input type="text" name="Telefonnummer" value={form.Telefonnummer} onChange={handleChange} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="Email" value={form.Email} onChange={handleChange} />
        </div>
        <div>
          <label>Besked:</label>
          <textarea name="Besked" value={form.Besked} onChange={handleChange} />
        </div>
        <div>
          <label>Kommentar:</label>
          <textarea name="Kommentar" value={form.Kommentar} onChange={handleChange} />
        </div>
        <div>
          <label>Mest brugte kontaktmetode:</label>
          <label>
            <input type="radio" name="Konktaktmetode" value="telefon" checked={form.Kontaktmetode === "telefon"} onChange={handleKontaktmetodeChange} />
            Telefon
          </label>
          <label>
            <input type="radio" name="Kontaktmetode" value="email" checked={form.Kontaktmetode === "email"} onChange={handleKontaktmetodeChange} />
            Email
          </label>
        </div>
        <button type="submit">Send</button>
        <button type="button" onClick={handleReset}>
          Stil på nul
        </button>
        {sendt && <p>Formularen er sendt!</p>}
      </form>
      <div>
        <h3>Indtastede informationer:</h3>
        <p>
          <strong>Navn:</strong> {form.Navn}
        </p>
        <p>
          <strong>Telefonnummer:</strong> {form.Telefonnummer}
        </p>
        <p>
          <strong>Email:</strong> {form.Email}
        </p>
        <p>
          <strong>Besked:</strong> {form.Besked}
        </p>
        <p>
          <strong>Kommentar:</strong> {form.Kommentar}
        </p>
        <p>
          <strong>Kontaktmetode:</strong> {form.Konktaktformular}
        </p>
      </div>
    </div>
  );
}
