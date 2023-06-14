import { StyleSheet, Text, View } from 'react-native'
import { Searchbar } from 'react-native-paper'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);
    const clearIcon = <Icon name="clear" size={20} color="black" />;    return (
      <Searchbar
        style={{width: '90%', backgroundColor: '#111', margin: 5, borderRadius: 20}}
        placeholderTextColor={'white'}
        iconColor='white'
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        clearIcon={clearIcon}

        />
    );
      }

export default SearchBar

const styles = StyleSheet.create({

})