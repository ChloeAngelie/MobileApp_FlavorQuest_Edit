import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, Title, Paragraph, Searchbar, Chip, BottomNavigation } from 'react-native-paper';


const HomeRoute = () => ( 
  <View style={styles.scene}>
        <Card style={styles.card}>
              <Card.Content>
                  <Title style={styles.welcomeText}>Welcome to FlavorQuest</Title>
                  <Paragraph style={styles.subtitleText}>What do you want to cook today?</Paragraph>
                  <Searchbar placeholder="Search recipes"  style={{backgroundColor: '#FF914D', marginBottom: 40,}} />
              </Card.Content>
        </Card>

        <Card style={styles.card}>
              <Card.Content>     
                  <Title>Filters</Title>
                  <View style={styles.chipContainer}>
                  <Chip onPress={() => handleFilterPress('Breakfast')} style={{backgroundColor: '#FF914D'}}>Breakfast</Chip>
                  <Chip onPress={() => handleFilterPress('Lunch')} style={{backgroundColor: '#FF914D'}} >Lunch</Chip>
                  <Chip onPress={() => handleFilterPress('Dinner')}style={{backgroundColor: '#FF914D'}} >Dinner</Chip>
                  </View>
              </Card.Content>
        </Card>
</View>
);


const AddRoute = () => <Text>Add</Text>;

const FeedRoute = () => <Text>Feed</Text>;

const ProfileRoute = () => <Text>Profile</Text>;


const HomePage = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home', focusedIcon: 'home', unfocusedIcon: 'home' },
    { key: 'add', title: 'Add', focusedIcon: 'plus', unfocusedIcon: 'plus' },
    { key: 'feed', title: 'Feed', focusedIcon: 'newspaper', unfocusedIcon: 'newspaper' },
    { key: 'profile', title: 'Profile', focusedIcon: 'account', unfocusedIcon: 'account' },
  ]);
  

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    add: AddRoute,
    feed: FeedRoute,
    profile: ProfileRoute,
  });

  
  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      barStyle={styles.bottomNavigation}
      activeColor="#FF914D"/>
  );
};

const styles = StyleSheet.create({
  bottomNavigation: {
    backgroundColor: 'white',
  },

  card: {
    margin: 16,
    marginTop: 90,
  },

  welcomeText: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    marginLeft:45,
    marginTop: 28, 
    marginBottom: 8,
  },

  subtitleText: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft:66,
    fontSize: 17,
    marginTop: 10,
    marginBottom: 16,
  },

  chipContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
    marginBottom: 20,
    marginLeft: 60,
  },
});

export default HomePage;
