import React from 'react';
import { StyleSheet, Text, View, Linking, Image, TouchableOpacity } from 'react-native';

export default function ActionCard() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>
            What's New in JavaScript 2022 - ES13
          </Text>
        </View>
        <Image
          source={{
            uri: 'https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          }}
          style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={3} style={styles.cardDescription}>
            JavaScript continues to evolve with exciting new features in ES13.
            Dive into the latest additions with practical examples.
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity
            onPress={() =>
              openWebsite(
                'https://blog.learncodeonline.in/whats-new-in-javascript-2022-es13'
              )
            }
          >
            <Text style={styles.actionButton}>Read More</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              openWebsite('https://www.instagram.com/hiteshchoudharyofficial/')
            }
          >
            <Text style={styles.actionButton}>Follow me</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  headingText: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  card: {
    width: 350,
    borderRadius: 12,
    marginVertical: 16,
    marginHorizontal: 16,
    overflow: 'hidden',
  },
  elevatedCard: {
    backgroundColor: '#FFF',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.5,
  },
  headingContainer: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E07C24',
  },
  headerText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '600',
  },
  cardImage: {
    height: 220,
  },
  bodyContainer: {
    padding: 16,
  },
  cardDescription: {
    color: '#555',
    fontSize: 14,
    lineHeight: 20,
  },
  footerContainer: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderTopWidth: 1,
    borderTopColor: '#EEE',
  },
  actionButton: {
    fontSize: 16,
    color: '#E07C24',
    fontWeight: '600',
    paddingVertical: 10,
  },
});
