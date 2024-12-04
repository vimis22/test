import React from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars, faPlus, faSyncAlt, faCheck, faUsers, faChevronRight } from '@fortawesome/free-solid-svg-icons';

type Room = {
  index: string;
  name: string;
  description: string;
};

export default function RoomListScreen() {
  const rooms: Room[] = [
    { index: '1', name: 'Room 1', description: 'Conference meetings' },
    { index: '2', name: 'Room 2', description: 'Conference meetings' },
    { index: '3', name: 'Room 3', description: 'Conference meetings' },
    { index: '4', name: 'Room 4', description: 'Conference meetings' },
  ];

  const renderRoomItem = ({ item }: { item: Room }) => (
    <View style={styles.roomContainer}>
      <View style={styles.roomIconContainer}>
        <FontAwesomeIcon icon={faUsers} size={24} color="white" />
      </View>
      <View style={styles.roomDetails}>
        <Text style={styles.roomName}>{item.name}</Text>
        <Text style={styles.roomDescription}>{item.description}</Text>
      </View>
      <FontAwesomeIcon icon={faChevronRight} size={24} color="black" />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <FontAwesomeIcon icon={faBars} size={24} color="white" />
        <Text style={styles.splashNavbarText}>Chentia</Text>
        <FontAwesomeIcon icon={faPlus} size={24} color="white" />
      </View>

      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} placeholder="Search..." placeholderTextColor="#999" />
        <FontAwesomeIcon icon={faCheck} size={24} color="white" />
      </View>

      <View style={styles.recentContainer}>
        <Text style={styles.recentText}>Recent:</Text>
        <TouchableOpacity>
          <FontAwesomeIcon icon={faSyncAlt} size={24} color="black" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={rooms}
        renderItem={renderRoomItem}
        keyExtractor={(item) => item.index}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#0000FF',
    padding: 10,
  },
  splashNavbarText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
  },
  searchInput: {
    flex: 1,
    backgroundColor: 'white',
    height: 40,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  searchIcon: {
    backgroundColor: '#0000FF',
    padding: 5,
    borderRadius: 5,
  },
  recentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  recentText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  roomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5,
    margin: 10,
    padding: 10,
  },
  roomIconContainer: {
    backgroundColor: '#0000FF',
    borderRadius: 25,
    padding: 10,
    marginRight: 10,
  },
  roomDetails: {
    flex: 1,
  },
  roomName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  roomDescription: {
    fontSize: 14,
    color: '#666',
  },
  groupIconSizeContainer: {
    height: 24,
  },
});
