import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { Button } from '../components/index.native';

export default class App extends Component<{}> {


  const
  render() {
    return (
      <ScrollView>
      <View style={{ padding: 15 }}>
        <Button style={{marginBottom : 15}} onPress={()=>{console.log('press primary');}}>Default</Button>

        <Button theme="primary" style={{marginBottom : 15}} onPress={()=>{console.log('press primary large');}}>Primary</Button>
        <Button theme="primary" shape='radius' style={{marginBottom : 15}} onPress={()=>{console.log('press primary large');}}>Primary Radius</Button>
        <Button theme="primary" shape='round' style={{marginBottom : 15}} onPress={()=>{console.log('press primary large');}}>Primary Round</Button>
        <Button theme="primary" size='md' shape='circle' style={{marginBottom : 15}} onPress={()=>{console.log('press primary large');}}>Go</Button>

        <Button theme="success" style={{marginBottom : 15}} onPress={()=>{console.log('press success large');}}>Success</Button>
        <Button theme="wraning" style={{marginBottom : 15}} onPress={()=>{console.log('press warning large');}}>Warning</Button>
        <Button theme="error" style={{marginBottom : 15}} onPress={()=>{console.log('press error large');}}>Error</Button>

        <Button theme="primary" style={{marginBottom : 15}} size='sm'>Small</Button>
        <Button theme="primary" style={{marginBottom : 15}} size='md'>Middle</Button>
        <Button theme="primary" style={{marginBottom : 15}} size='lg'>Large</Button>
      </View>
      </ScrollView>
    );
  }
}
