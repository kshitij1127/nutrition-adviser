import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import Card from "@material-ui/core/Card";
import { Typography } from "@material-ui/core/";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";
import Diet from "./Diet";

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Card style={{ minWidth: 200, minHeight: 100, textAlign: "center" }}>
          <CardContent>
            <Typography variant="h5" component="h2" color="textPrimary">
              I Am Healthy
            </Typography>

            <Typography variant="h6" component="h2" color="textSecondary">
              This section will be updated soon
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              onClick={() => this.props.navigation.navigate("Diet")}
            >
              learn more
            </Button>
          </CardActions>
        </Card>

        <Card style={{ minWidth: 200, minHeight: 100, textAlign: "center" }}>
          <CardContent>
            <Typography variant="h5" component="h2" color="textPrimary">
              I Am not Healthy
            </Typography>

            <Typography variant="h6" component="h2" color="textSecondary">
              This section will be updated soon
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              onClick={() => {
                this.props.navigation.navigate("HomeScreen");
                console.log("navigate to Home");
              }}
            >
              learn more
            </Button>
          </CardActions>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
