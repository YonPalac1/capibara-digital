import { Resend } from 'resend';

const resend = new Resend(import.meta.env.VITE_RESEND_API_KEY);

const FormContact = ({ type, load }) => {
    
    return <div>
    <form>
        <label htmlFor="name">nombre *</label>
        <input placeholder="nombre" id="name" name="name" />
        <label htmlFor="email">email *</label>
        <input placeholder="nombre" id="email" name="email" />
        
        <label htmlFor="plan">plan</label>
        <input value={load ? "..." : type } id="plan" name="plan" readOnly />
        <label htmlFor="msg">¡Cuentanos un poco lo que necesitas y pronto nos pondremos en contacto! </label>
        <textarea id="msg"></textarea>
        <button>Enviar</button>
    </form>
</div>
}
export default FormContact;