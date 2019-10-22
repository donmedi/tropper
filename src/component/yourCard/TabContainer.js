import React from 'react';
import { Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

import Analytics from './edit';
import Summary from './summary';
import Recipient from './recipient';

const TabNavigator = createMaterialTopTabNavigator({
    Summary: Summary,
    Recipient: Recipient,
    Analytics: Analytics,
});


const CardContainer = createAppContainer(TabNavigator);

const TabContainer = ()=> (

    <CardContainer />
);


export default TabContainer;