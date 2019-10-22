import React from 'react';
import {View, Text, TouchableWithoutFeedback, Image} from 'react-native';
import {Card, ListItem,Icon,Avatar} from 'react-native-elements';

import { createBottomTabNavigator } from 'react-navigation-tabs';


const summary = [
    {
        icn: 'share',
        type: 'Shared By You',
        amount: '23 shared',
        color: '#CBF2EA'
    },
    {
        icn: 'visibility',
        type: 'Card clicks',
        amount: '16 clicks',
        color: '#CBCBCB'
    },
    {
        icn: 'thumb-up',
        type: 'Social Media Clicks',
        amount: '19 clicks',
        color: '#CECEFB'
    },
    {
        icn: 'play-circle-outline',
        type: 'Card Video view',
        amount: '10 views',
        color: '#FCCCCC'
    },
    {
        icn: 'group',
        type: '3rd Party Share',
        amount: '9 shared',
        color: '#FCF4CB'
    },
];



const Summary = (props) =>{
    return(
        summary.map((u,i) =>
        <TouchableWithoutFeedback onPress={()=> props.navigation.navigate('Edit')}>
                <ListItem
                    key={i}
                    roundAvatar
                    title={u.type}
                    titleStyle={{fontWeight: '500', fontSize: 22,textTransform: 'capitalize' }}
                    // subtitleStyle={{ fontSize: 18 }}
                    subtitle={
                        <View>
                            <Text style={{fontSize: 18, fontWeight: '400',textTransform: 'capitalize',color:'#707070'}} >{u.amount}</Text>
                            {/*<Text style={{fontSize: 16, fontWeight: '400',textTransform: 'capitalize', color: '#707070'}}>{u.added}</Text>*/}
                        </View>
                    }
                    leftAvatar={<Avatar
                        rounded={true}
                        // title='md'
                        overlayContainerStyle={{backgroundColor: `${u.color}`}}
                        size='medium'
                        icon={{name:`${u.icn}`, type:'material', color: 'black'}}

                    />}

                    bottomDivider
                />
        </TouchableWithoutFeedback>
        )
    )
};




export default Summary;