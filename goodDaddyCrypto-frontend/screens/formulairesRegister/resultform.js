import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
// React Redux
import { connect } from "react-redux";

const resultform = (props) => {
  const [profilInvestor, setProfilInvestor] = useState("");

  const submitTypeInvestor = async () => {
    console.log(props.userToken)
    var rawResult = await fetch(
      "https://gooddaddybackend.herokuapp.com/users/setTypeInvestor",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `userToken=${props.userToken}&typeInvestor=${profilInvestor}`,
      }
    );
    var result = await rawResult.json();
    console.log(result);
  };

  useEffect(() => {
    // var answersTab = props.answers;
    var answersTab = props.answers;
    var note = 0;
    for (let i = 0; i < answersTab.length; i++) {
      note += answersTab[i];
    }
    note = note / 4;
    if (Math.round(note) == 1) {
      setProfilInvestor("INVESTISSEUR DEBUTANT");
    }
    if (Math.round(note) == 2) {
      setProfilInvestor("INVESTISSEUR DEBUTANT PLUS");
    }
    if (Math.round(note) == 3) {
      setProfilInvestor("INVESTISSEUR MODERE");
    }
    if (Math.round(note) == 4) {
      setProfilInvestor("INVESTISSEUR CONFIRME");
    }
  }, []);

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
          onPress={() => props.navigation.navigate("FifthForm")}
        >
          <Icon name="chevron-left" size={20} />
          <Text> RETOUR </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.page}>
        <View>
          <Text style={styles.profilRisque}>Ton profil correspond à :</Text>
        </View>

        <View style={{ marginTop: 80 }}>
          <Text style={styles.title}>{profilInvestor}</Text>
        </View>
        <View style={{ marginTop: 50 }}>
          <Button
            onPress={() => {
              props.navigation.navigate("StrategyProposal");
              submitTypeInvestor();
            }}
            title="CE PROFIL ME CONVIENT"
          ></Button>
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
  buttonReturn: {
    flex: 2,
    justifyContent: "center",
  },
  page: {
    flex: 4,
  },
});

function mapStateToProps(state) {
  return { userToken: state.token, answers: state.answers };
}
export default connect(mapStateToProps, null)(resultform);
