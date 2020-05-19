import React from 'react';

function ModalEdit(){

    return(
        <div className="modal fade">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                       <h5 className="modal-title">Editar</h5>
                       <button className="close" >
                           <span>&times;</span>
                       </button>
                    </div>

                    <div className="modal-body">
                        <div className="row">
                            <div className="col-md-12 col-lg-12 col-sm-12">
                                <form action="">
                                    <div className="form-group">
                                        <label htmlFor="">Nombre:</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">To-do:</label>
                                        <textarea
                                            className="from-control" 
                                            name=""
                                            id=""
                                            cols="30"
                                             rows="10">

                                             </textarea>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">Prioriddad</label>
                                        <select name="" id="" className="form-control"></select>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>    )


}

export default ModalEdit;