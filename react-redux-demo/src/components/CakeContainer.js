import React from 'react'

const CakeContainer = () => {
    return (
        <div>
            <h2>Number of cakes</h2>
            <button>Buy cake</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfCakes: state.numOfCakes
    }
}

export default CakeContainer
