// PAGE 222222222

// PAGE FORMULAIRE 1

import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
// React Redux
import { connect } from "react-redux";

// SÉPARATEUR LIGNE

const Separator = () => <View style={styles.separator} />;

const secondform = (props) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonReturn}>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            height: 50,
            width: 120,
            alignItems: "center",
          }}
          onPress={() => props.navigation.navigate("FirstForm")}
        >
          <Icon name="chevron-left" size={20} />
          <Text> RETOUR </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.page}>
        <View>
          <Text style={styles.profilRisque}>
            Détermination de ton profil de risque
          </Text>
          <Separator />
          <Text style={styles.title}>
            Es-tu prêt à accepter des pertes de ton investissement initial ?
          </Text>
          <Separator />
        </View>
        <View>
          <TouchableOpacity>
            <Text style={styles.answer}
              onPress={() => {
                props.addAnswer(1, 2);
                props.navigation.navigate("ThirdForm");
              }}>Je suis OK avec cela</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.answer}
              onPress={() => {
                props.addAnswer(2, 2);
                props.navigation.navigate("ThirdForm");
              }}>Pas sure</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.answer}
              onPress={() => {
                props.addAnswer(3, 2);
                props.navigation.navigate("ThirdForm");
              }}>Je suis pas à l'aise avec cela</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 16,
  },
  profilRisque: {
    fontSize: 28,
    textAlign: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    marginVertical: 8,
  },
  answer: {
    textAlign: "center",
    marginVertical: 8,
    fontSize: 16,
    backgroundColor: "yellow",
    borderRadius: 12,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  buttonReturn: {
    flex: 2,
    justifyContent: "center",
  },
  page: {
    flex: 4,
  },
});

function mapDispatchToProps(dispatch) {
  return {
    addAnswer: function (answer, questionNumber) {
      dispatch({
        type: "addAnswer",
        answer: answer,
        questionNumber: questionNumber,
      });
    },
  };
}

export default connect(null, mapDispatchToProps)(secondform);