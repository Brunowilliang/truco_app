import React from 'react';
import { SafeAreaView } from 'react-native';

import { COLORS } from '~/constants';

export default function ContainerPage({ children }) {
  return (
    <SafeAreaView style={{ backgroundColor: COLORS.BackgroundLight, flex: 1 }}>
      {children}
    </SafeAreaView>
  );
}
