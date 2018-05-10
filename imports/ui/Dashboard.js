import React from 'react';
// import { Meteor } from 'meteor/meteor';
// import { Links } from './../api/links';
import PrivatHeader from './PrivatHeader';

export default () => {
    return (
        <div>
            <PrivatHeader titel="Dashboard"/>
            <div>Dashboard Seiteninhalt</div>
        </div>
    );
};
