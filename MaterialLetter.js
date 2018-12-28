import { StyleSheet, View, Text } from 'react-native';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';

export default class MaterialLetter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      props: props,
    };
  }

  componentWillMount() {
    var { letter, size, shapeColor, single } = this.state.props;
    size = isNaN(size) ? 30 : size;
    letter = letter.trim();
    var initialsLetter = this._getInitials(letter, single);
    var fontSize = Math.round(size / initialsLetter.length);
    shapeColor = this._shapeColor(shapeColor);
    this.setState(prevState => ({
      props: {
        ...prevState.props,
        initialsLetter,
        size,
        fontSize,
        letter,
        shapeColor,
      },
    }));
  }

  _getInitials = (text, single) => {
    if (text !== null && typeof text === 'object') {
      return text;
    } else if (text.indexOf(' ') > 0 && !single) {
      var splitLetter = text.split(' ');
      var name = '';
      splitLetter.forEach(el => {
        name += el.charAt(0);
      });
      return name.toUpperCase();
    } else {
      return text.charAt(0).toUpperCase();
    }
  };

  _shapeColor = color => {
    if (
      !Array.isArray(color) &&
      !/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(color)
    )
      color = '#1e95cc';

    if (Array.isArray(color) && color.length < 2) color = color.concat(color);
    else if (!Array.isArray(color)) color = [color, color];

    return color;
  };

  borderRadius = (shapeType, size) => {
    switch (shapeType) {
      case 'rect':
        return null;
      case 'round':
        return 4;
      default:
        return size / 2;
    }
  };

  render() {
    let {
      initialsLetter,
      fontSize,
      size,
      shapeType,
      shapeColor,
      letterColor,
      bold,
    } = this.state.props;

    return (
      <View style={styles.center}>
        <LinearGradient
          colors={shapeColor}
          style={[
            styles.center,
            {
              width: size,
              height: size,
              borderRadius: this.borderRadius(shapeType, size),
            },
            this.props.style,
          ]}>
          <Text
            style={[
              styles.center,
              {
                fontSize,
                color: letterColor,
                fontWeight: bold ? 'bold' : '',
              },
            ]}>
            {initialsLetter}
          </Text>
        </LinearGradient>
      </View>
    );
  }
}

MaterialLetter.defaultProps = {
  shapeColor: '#1e95cc',
  shapeType: 'circle',
  letter: 'Leonardo Wilhelm DiCaprio',
  letterColor: '#ffffff',
  size: 30,
  single: false,
  bold: false
};

MaterialLetter.propTypes = {
  shapeColor: PropTypes.string,
  shapeType: PropTypes.string,
  letter: PropTypes.string,
  letterColor: PropTypes.string,
  size: PropTypes.number,
  single: PropTypes.bool,
  bold: PropTypes.bool,
};

const styles = StyleSheet.create({
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
});
