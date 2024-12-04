const Message = ({ nombre, correo }) => {
    return (
        <div>
            <h3>Gracias {nombre},</h3>
            <h3>contactaremos cuando antes vía mail: {correo}</h3>
            <h3>Atento a tu bandeja de entrada.</h3>
        </div>
    )
};
export default Message