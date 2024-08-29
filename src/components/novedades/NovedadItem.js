const NovedadItem = (props) => {
    const { title, subtitle, imagen, body } = props;

    // Utiliza una expresión regular para extraer la URL de la imagen
    const imageUrlMatch = imagen.match(/src=['"](.*?)['"]/);
    const imageUrl = imageUrlMatch ? imageUrlMatch[1] : '';

    return (
        <div className="novedades">
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            {/* <img src={imagen} alt="imagen novedades"/> */}
            <img src={imageUrl} alt="imagen novedades" style={{ width: '40%' }}/>
            <div dangerouslySetInnerHTML={{__html: body}}/> 
            <hr/>
        </div>
    );
}

export default NovedadItem;