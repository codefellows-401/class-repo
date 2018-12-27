import React from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import * as Expo from 'expo';

export default class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      permission: null,
    };
  }
  
  async componentDidMount() {
    await this.checkPermissionAsync();
  }
  
  checkPermissionAsync = async () => {
    const {status} = await Expo.Permissions.askAsync(Expo.Permissions.CONTACTS);
    this.setState({ permission: status === 'granted'})
  };
  
  showContacts = () => {
   Expo.Contacts.getContactsAsync({
     fields: [Expo.Contacts.PHONE_NUMBERS]
   }) 
    .then( rawContacts => {
      let contacts = rawContacts.data.map(contact => {
        contact.key = contact.id;
        return contact;
      });
      
      this.setState({contacts});
    })
    .catch( console.error );
  };
  
  render() {
    return (
      <View style={styles.container}>
        <Button 
          onPress={this.showContacts}
          title="Show Contacts"
          />
        
        <View>
          <FlatList
            data={this.state.contacts}
            renderItem = { ({item}) => <Text>{item.name}</Text> }
            />
        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:100,
  },
});
