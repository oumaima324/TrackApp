import React, { Component } from 'react';
import { AppRegistry, SectionList, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import HeaderComponent from '../components/HeaderComponent';
import ButtonComponent from '../components/ButtonComponent';

export default class Testside extends Component {
    render() {
        return (
          <SafeAreaView style={styles.container}>

                <SectionList 
                    sections={[
                        {title: 'A', data: ['ALTERED','ABBY','ACTION U.S.A.','AMUCK','ANGUISH']},
                        {title: 'B', data: ['BEST MEN','BEYOND JUSTICE','BLACK GUNN','BLOOD RANCH','BEASTIES']},
                        {title: 'C', data: ['CARTEL', 'CASTLE OF EVIL', 'CHANCE', 'COP GAME', 'CROSS FIRE',]},
                        {title: 'd', data: ['ALTERED','ABBY','ACTION U.S.A.','AMUCK','ANGUISH']},
                        {title: 'E', data: ['BEST MEN','BEYOND JUSTICE','BLACK GUNN','BLOOD RANCH','BEASTIES']},
                        {title: 'F', data: ['CARTEL', 'CASTLE OF EVIL', 'CHANCE', 'COP GAME', 'CROSS FIRE',]},
                        {title: 'G', data: ['ALTERED','ABBY','ACTION U.S.A.','AMUCK','ANGUISH']},
                        {title: 'H', data: ['BEST MEN','BEYOND JUSTICE','BLACK GUNN','BLOOD RANCH','BEASTIES']},
                        {title: 'i', data: ['CARTEL', 'CASTLE OF EVIL', 'CHANCE', 'COP GAME', 'CROSS FIRE',]},
                    ]}
                    renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
                    renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                    keyExtractor={(item, index) => index}
                />
                <ButtonComponent
                  label={'Deverouillé'}
                  style={{
                     backgroundColor:'#A71F3C',
                     }}
                />

            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#5ead97",
        flexDirection:'column'
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 22,
        fontWeight: 'bold',
        color: "#fff",
        backgroundColor: '#8fb1aa',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    }
})
