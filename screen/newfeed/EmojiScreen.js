import { Text, View, Image, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { emojiStyles } from './styles/EmojiStyles'

const emojiIconList = [
    require('../../assets/emoji-icons/angry.png'),
    require('../../assets/emoji-icons/care.png'),
    require('../../assets/emoji-icons/haha.png'),
    require('../../assets/emoji-icons/like.png'),
    require('../../assets/emoji-icons/love.png'),
    require('../../assets/emoji-icons/sad.png'),
]

export default class EmojiScreen extends Component {

    state = {
        currentEmojiIcon: emojiIconList[2]
    }

    onEmojiPress = (icon) => {
        this.setState({currentEmojiIcon: icon})
    }

  render() {
    return (
      <View style={emojiStyles.root}>
        <Text style={emojiStyles.title}>How do you feel right now?</Text>
        <Image source={this.state.currentEmojiIcon} />
        <View style={emojiStyles.emojiIcon_btn_list}>
            {emojiIconList.map((icon,index) => (
                <TouchableOpacity key={index} onPress={() => this.onEmojiPress(icon)}>
                    <Image style={emojiStyles.emojiIcon_btn_image} source={icon} />
                </TouchableOpacity>
            ))}
        </View>
      </View>
    )
  }
}