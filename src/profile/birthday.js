import React from 'react'
import PropTypes from 'prop-types'


function birthday({birthday}) {
    return (
        <h1 style={{"border":"solid 2px green"}} >
            {birthday?(<h1>born on: {birthday}</h1>):(<h1>Please set birthdate</h1>)     }
        </h1>
    )
}

birthday.propTypes = {
    birthday:PropTypes.string
}

export default birthday
