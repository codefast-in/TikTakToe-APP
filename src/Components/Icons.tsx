import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import type {PropsWithChildren} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

type IconsProps = PropsWithChildren<{
  name: string;
}>;

export default function Icons({name}: IconsProps): JSX.Element {
  switch (name) {
    case 'circle':
      return <Icon name="circle-thin" size={55} color="#F7CD2E" />;

    case 'cross':
      return <Icon name="times" size={55}  color="#38CC77" />;

    default:
      return <Icon name="pencil" size={15} color="#2C3335" />;
  }
}

const styles = StyleSheet.create({});
