import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import type {PropsWithChildren} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

type IconsProps = PropsWithChildren<{
  name: string;
}>;

export default function Icons({name}: IconsProps):JSX.Element {
  switch (name) {
    case 'circle':
      return <Icon name="circle" size={55} color="#0A79DF" />;

    case 'cross':
      return <Icon name="xmark" size={55} color="#E8290B" />;
      default :
      return <Icon name="hand-pointer" size={55} color="#2C3335" />;
  }
}

const styles = StyleSheet.create({});
