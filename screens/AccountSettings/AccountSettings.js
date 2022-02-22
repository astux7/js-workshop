import React from 'react';
import { SafeAreaView, Text } from 'react-native';

import { useAuthorization } from '../../context/AuthorizationContext';

const AccountSettings = () => {
  const [_, setIsAuthoized] = useAuthorization();

  return (
    <SafeAreaView>
      <Text>Account Settings</Text>
      <Text onPress={() => setIsAuthoized(false)}>Logout</Text>
    </SafeAreaView>
  );
}

export default AccountSettings;
