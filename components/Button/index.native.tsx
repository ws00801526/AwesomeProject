import React, { PureComponent, CSSProperties } from 'react'
import { StyleSheet, Text, View, TouchableHighlight }  from 'react-native'
import PropsType from './PropsType'
import ButtonStyle from './style/index.native'

const buttonStyles = StyleSheet.create<any>(ButtonStyle);
export interface ButtonProps extends PropsType {
  style?: CSSProperties;
  styles?: buttonStyles;
}

export default class Button extends PureComponent<ButtonProps, {}> {

  console.log(buttonStyles)
  static defaultProps = {
    size: 'md',
    theme: 'default',
    styles: buttonStyles,
    onPress: () => {}, // empty on press action
  };

  render() {
    const {
      style, // css style
      styles, // buttonStyles
      size,   // button size
      theme,  // button theme
      shape,  // button shape
      children, // text children
      ...others
    } = this.props;
    const textStyle = [
      styles!.text,
    ];
    const containerStyle = [
      styles!.container,
      styles![`${theme}Theme`],
      style,
    ];
    const containerProps = {
      style: containerStyle,
      ...others,
    };
    const contentStyle = [
      styles!.content,
    ];
    const contentRender =  (
      <View style={contentStyle}>
        <Text style={textStyle}>{children}</Text>
      </View>
    );
    return <TouchableHighlight {...containerProps}>{contentRender}</TouchableHighlight>
  }
}
