import React from 'react';
import {View, Text, TouchableWithoutFeedback, Image} from 'react-native';
import {Card, ListItem, Icon, Avatar} from 'react-native-elements';

import { createBottomTabNavigator } from 'react-navigation-tabs';

const Recipient = (props) =>{


  const Recipients= [
      {
          name: 'Nnenna',
          position: 'Head of Marketing',
          clicks: '2',
          views: '4',
          shares: '32'
      },
      {
          name: 'Adesuwa',
          position: 'Pr and Marketing',
          clicks: '4',
          views: '6',
          shares: '76'
      },
      {
          name: 'john doe',
          position: 'Engineer',
          clicks: '20',
          views: '14',
          shares: '32'
      },
  ];



    return(
        Recipients.map((rec,i) =>
            <TouchableWithoutFeedback onPress={()=> props.navigation.navigate('Edit')} key={i}>
                <ListItem
                    key={i}
                    roundAvatar
                    title={rec.name}
                    titleStyle={{fontWeight: '400', fontSize: 20,textTransform: 'capitalize' }}
                    // subtitleStyle={{ fontSize: 18 }}
                    subtitle={
                        <View>
                            <Text style={{fontSize: 18, fontWeight: '400',textTransform: 'capitalize',color:'#707070'}} >{rec.position}</Text>
                           <View style={{fontSize: 18, color: '#707070',}}>
                               <Text style={{fontSize: 18, color: '#707070',marginTop: 20, fontWeight: '400'}}>
                                   {`${rec.clicks}`} clicks {'    '}
                                   {`${rec.views}`} views   {'    '}
                                   {`${rec.shares}`} shares
                               </Text>
                               {/*<Text style={{fontSize: 18, color: '#707070'}}>{`${rec.views}`} views </Text>*/}
                               {/*<Text style={{fontSize: 18, color: '#707070'}}>{`${rec.shares}`} shares </Text>*/}
                           </View>

                        </View>

                    }
                    leftAvatar={<Avatar
                        rounded={true}
                        title='md'
                        overlayContainerStyle={{backgroundColor: '#707070'}}
                        containerStyle={{marginTop: -35}}
                        size='medium'
                        // icon={{name:`${u.icn}`, type:'material', color: 'black'}}

                    />}

                    bottomDivider
                />
            </TouchableWithoutFeedback>
        )
    )
};




export default Recipient;