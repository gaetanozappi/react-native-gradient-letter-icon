# React Native: react-native-gradient-letter-icon

[![GitHub package version](https://img.shields.io/github/package-json/v/gaetanozappi/react-native-gradient-letter-icon.svg?style=flat&colorB=2b7cff)](https://github.com/gaetanozappi/react-native-gradient-letter-icon)
[![github home](http://img.shields.io/npm/v/react-native-gradient-letter-icon.svg?style=flat)](https://www.npmjs.com/package/react-native-gradient-letter-icon)
![platforms](https://img.shields.io/badge/platforms-Android%20%7C%20iOS-brightgreen.svg?style=flat&colorB=191A17)
[![github home](https://img.shields.io/badge/gaetanozappi-react--native--gradient--letter--icon-blue.svg?style=flat)](https://github.com/gaetanozappi/react-native-gradient-letter-icon)
[![npm](https://img.shields.io/npm/dm/react-native-gradient-letter-icon.svg?style=flat&colorB=007ec6)](https://www.npmjs.com/package/react-native-gradient-letter-icon)

[![github issues](https://img.shields.io/github/issues/gaetanozappi/react-native-gradient-letter-icon.svg?style=flat)](https://github.com/gaetanozappi/react-native-gradient-letter-icon/issues)
[![github closed issues](https://img.shields.io/github/issues-closed/gaetanozappi/react-native-gradient-letter-icon.svg?style=flat&colorB=44cc11)](https://github.com/gaetanozappi/react-native-gradient-letter-icon/issues?q=is%3Aissue+is%3Aclosed)
[![Issue Stats](https://img.shields.io/issuestats/i/github/gaetanozappi/react-native-gradient-letter-icon.svg?style=flat&colorB=44cc11)](http://github.com/gaetanozappi/react-native-gradient-letter-icon/issues)
[![github license](https://img.shields.io/github/license/gaetanozappi/react-native-gradient-letter-icon.svg)]()

<img src="https://raw.githubusercontent.com/gaetanozappi/react-native-gradient-letter-icon/master/screenshot/react-native-gradient-letter-icon.png" />

-   [Usage](#-usage)
-   [License](#-license)

## 📖 Getting started

`$ npm install react-native-gradient-letter-icon --save`

`$ react-native link react-native-linear-gradient`

## 💻 Usage

```javascript
import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MaterialLetter from 'react-native-gradient-letter-icon';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MaterialLetter style={{ alignSelf: 'center' }} size={80} single />
        <MaterialLetter
          style={{ alignSelf: 'center' }}
          shapeColor={'#ffdf9e'}
          letterColor={'#000'}
          size={80}
        />
        <MaterialLetter
          style={{ alignSelf: 'center' }}
          shapeColor={'#e56969'}
          size={80}
          shapeType={'round'}
        />
        <MaterialLetter
          style={{ alignSelf: 'center' }}
          shapeColor={'#ffc273'}
          letterColor={'#000'}
          size={80}
          shapeType={'rect'}
        />
        <MaterialLetter
          style={{ alignSelf: 'center' }}
          shapeColor={['#8a49a1', '#c1558b', '#e56969', '#ffc273', '#ffdf9e']}
          size={80}
          bold
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
});
```

## 💡 Props

| Prop              | Type       | Default | Note                                                                                                       |
| ----------------- | ---------- | ------- | ---------------------------------------------------------------------------------------------------------- |
| `shapeColor`      | `string`   | `#1e95cc`  | Shape color resource
| `shapeType`       | `string`   | `circle`   | Shape type (circle,round,rect)
| `letter`          | `string`   |`Leonardo Wilhelm DiCaprio`      | Letter, string or initials to get letters from
| `letterColor`     | `string`   | `#ffffff`  | Letter color
| `size`            | `number`   |`30`           | Size MaterialLetter
| `single`          | `bool`     | `false`            | If you take only one letter
| `bold`            | `bool`     |`false`            | If the text must have the bold feature

## 📜 License
This library is provided under the Apache License.
