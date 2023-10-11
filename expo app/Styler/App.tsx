import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import FlatCard from './components/FlatCard';
import ElevatedCards from './components/ElevatedCards';
import FancyCard from './components/FancyCard';
import ActionCard from './components/ActionCard';
import ContactList from './components/ContactList';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        style="auto"
        translucent={false} 
        backgroundColor="#ffffff" 
      />
      <ScrollView>
        <FlatCard />
        <ElevatedCards />
        <FancyCard />
        <ActionCard />
        <ContactList/> 
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', 
  },
});
