import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

export default function ProfileCards() {
  return (
    <View>
      <Text style={styles.headingText}>Profile Cards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Image
            source={{ uri: 'https://via.placeholder.com/150' }} // Add profile image URL here
            style={styles.cardImage}
          />
          <Text style={styles.cardText}>John Doe</Text>
          <Text style={styles.cardSubtext}>Front-End Developer</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Image
            source={{ uri: 'https://via.placeholder.com/150' }} // Add profile image URL here
            style={styles.cardImage}
          />
          <Text style={styles.cardText}>Jane Smith</Text>
          <Text style={styles.cardSubtext}>UI/UX Designer</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Image
            source={{ uri: 'https://via.placeholder.com/150' }} // Add profile image URL here
            style={styles.cardImage}
          />
          <Text style={styles.cardText}>Michael Johnson</Text>
          <Text style={styles.cardSubtext}>Full-Stack Developer</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 16,
    marginTop: 16,
    textAlign: 'center',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  card: {
    width: '45%',
    borderRadius: 8,
    marginVertical: 16,
    padding: 16,
    backgroundColor: '#FFF',
    elevation: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  cardImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 8,
  },
  cardText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
    textAlign: 'center',
  },
  cardSubtext: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
  },
  cardOne: {
    backgroundColor: '#FFA726',
  },
  cardTwo: {
    backgroundColor: '#66BB6A',
  },
  cardThree: {
    backgroundColor: '#42A5F5',
  },
});
