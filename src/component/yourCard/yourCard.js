import React from 'react';
import {View, Text, TouchableWithoutFeedback, Image} from 'react-native';
import {Card, ListItem,Icon} from 'react-native-elements';




const YourCard = (props) =>{
    const users =[{
        name: 'mario',
        position: 'chairman',
        added: '2 months ago',
        avatar: '../../Images/mainImage.png'
    },{
        name: 'king',
        position: 'manager',
        added: '3 months ago'
    },{
        name: 'John doe',
        position: 'chairman',
        added: '4 months ago'
    }
    ];


    return(
        <>
            {
                users.map((u,i) =>
                    <TouchableWithoutFeedback onPress={()=> props.navigation.navigate('Summary')} key={i}>
                        <Card containerStyle={{padding: 0, borderRadius: 8}} key={i}>
                            <ListItem
                                key={i}
                                roundAvatar
                                title={u.name}
                                titleStyle={{fontWeight: '500', fontSize: 22,textTransform: 'capitalize' }}
                                subtitleStyle={{ fontSize: 18 }}
                                subtitle={
                                    <View>
                                        <Text style={{fontSize: 18, fontWeight: 'normal',textTransform: 'capitalize'}} >{u.position}</Text>
                                        <Text style={{fontSize: 16, fontWeight: '400',textTransform: 'capitalize', color: '#707070'}}>{u.added}</Text>
                                    </View>
                                }
                                leftAvatar={{rounded:true,size:"large", source: require('../../Images/mainImage.png') }}
                            />

                        </Card>
                    </TouchableWithoutFeedback>
                )
            }





        </>
    )
};

export default YourCard;