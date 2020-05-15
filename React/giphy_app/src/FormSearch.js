import React from 'react';

function FormSearch(props){
    return (
    <form onSubmit={props.findGif} className="form-inline justify-content-center" >
        <input  className="form-control"
                onChange={props.evento}
                placeholder={`Ej. ${props.search}`} name="gif"
        />
        <button type="submit" className="btn btn-success ml-2">Buscar</button>
    </form>
    )
}

export default FormSearch;  