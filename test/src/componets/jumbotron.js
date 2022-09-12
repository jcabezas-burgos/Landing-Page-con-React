import React from "react"

function Heading () {
    return (
        <div className="container container-fluid">
        <div className="card bg-light p-3 m-0">
            <div className="card-body">
                <h1 className="card-title">A Warm Welcome!</h1>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum non erat sit amet blandit. Nulla semper ex eu feugiat efficitur. Aliquam placerat commodo nisl, in euismod justo laoreet eu. Sed vulputate ac neque quis rhoncus. Etiam dolor tortor, iaculis ac erat condimentum, eleifend pulvinar est. Sed ultricies velit sit amet lacus tempor, quis vestibulum lorem condimentum. Nunc vitae hendrerit erat.</p>
                <a href="/#" className="btn btn-primary">Call to action!</a>
            </div>
        </div>
        </div>
        );
    }

export default Heading;