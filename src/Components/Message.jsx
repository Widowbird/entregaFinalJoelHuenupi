const Message = ({ nombre, correo }) => {
    return (
        <div>
            <h3>{nombre}</h3>
            <h3>Nos pondremos en contacto a tu correo: {correo}</h3>
            <h3>Atento a tu bandeja de entrada.</h3>
        </div>
    )
};
export default Message