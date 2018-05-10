import React from 'react';
import { Accounts } from 'meteor/accounts-base';
import PropTypes from 'prop-types';

// Diese stateless functional component kommt in eine Variable, weil mit propTypes das
// Übergebene geprüft wird.
const PrivatHeader = (props) => {
    return (
        <div>
            <h1>{props.titel}</h1>
            <button onClick={() => Accounts.logout() }>Logout</button>
        </div>
    );
};

PrivatHeader.propTypes = {
    titel: PropTypes.string.isRequired,
};

export default PrivatHeader;