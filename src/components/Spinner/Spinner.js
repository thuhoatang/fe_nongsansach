import "./style.css";

import React from 'react'
import { connect } from "react-redux";

const Spinner = ({ spinner }) => {
    return (<>

        {spinner.status && < div className='wrapper-spinner' >
            <h4>Loading...</h4>
            <div class="spinner-border text-success" role="status">
                <span class="sr-only"></span>
            </div>
        </div >}

    </>

    )
}
const mapStoreToProps = (state) => {

    return {
        spinner: state.spinner
    }
}
export default connect(mapStoreToProps)(Spinner);