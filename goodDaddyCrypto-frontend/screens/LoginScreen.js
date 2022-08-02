
import React from 'react';
// Import de librairie ui-neumorphism


import { StyleSheet, View, Text } from 'react-native';

// Import du CSS correspondant à ui-neumorphism

export default function LoginScreen() {

    return(
        // View est équivalent à div
        <View> 
            <Text>LOGIN</Text>
        </View>

    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#222121',
        alignItems: 'center',
        justifyContent: 'center'

    }
})

// PAGE FORMULAIRE 1

import React from 'react';
import {StyleSheet, Text, View, Button, Alert, SafeAreaView} from 'react-native';

// SÉPARATEUR LIGNE

const Separator = () => (
    <View style={styles.separator} />
  );

const Formulaire = () => {
    return(
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.title}>
                    Déterminiation de ton profil d'investisseur
                </Text>
                <Separator />
                <Text style={styles.title}>
                    Quel est ton profil d'investisseur ?
                </Text>
                <Separator />
            </View>
            <View>
                <Text style={styles.title}>
                    QUELQUES QUESTIONS POUR DÉTERMINER TON PROFIL !
                </Text>
                <Separator />
                <Button
                title="SUIVANT"
                onPress={() => Alert.alert('testclick')}
              />
            </View>
        </SafeAreaView>
    );
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16,
    },
      title: {
        textAlign: 'center',
        marginVertical: 8,
    },
      fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
      separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
});

export default Formulaire;