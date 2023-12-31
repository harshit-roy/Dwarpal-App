import React from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { Avatar, Button, Card } from "react-native-paper";

export default class Home extends React.Component {
  state = {
    popularSelected: true,
  };
  onTabPressed = () => {
    this.setState({ popularSelected: !this.state.popularSelected });
  };
  render() {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          height: "100%",
          backgroundColor: "#044244",
        }}
      >
        <View
          style={{
            height: 140,
            width: "100%",
            paddingHorizontal: 35,
            
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View style={{}}>
              <Image
                source={
                  "https://upload.wikimedia.org/wikipedia/en/e/ec/Birla_Institute_of_Applied_Sciences_logo.jpg"
                }
                style={{ width: 49, height: 49 ,margin:15}}
              />
            </View>
            <Text
              style={{
                alignItems: "flex-end",
                fontFamily: "Bold",
                fontSize: 18,
                color: "#FFF",
              }}
            >
              Birla Institute of Applied Sciences, Bhimtal
            </Text>
          </View>
        </View>

        <View
          style={{
            backgroundColor: "#FFF",
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            height: 1000,
            paddingHorizontal: 35,
            padding: 30,
          }}
        >
          <Text style={{ fontSize: 18, margin: 14, fontWeight: "700" }}>
            Hostel Wardens
          </Text>
          <Card
            style={{
              backgroundColor: "#FFF",
              padding: 10,
              shadow: 20,
              marginBottom: 10,
            }}
          >
            <Card.Content
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text>
                <Text style={{ fontSize: 16, fontWeight: "700"}}>
                  Sandesh Tripathi
                </Text>
                {"\n"}
                +91 9415364502
                {"\n"}
                +91 7982640940
              </Text>
              <Card.Cover
                source={require('.././Sandesh.jpg')}
                style={{ width: 120, height: 120 }}
              />
            </Card.Content>
          </Card>
          <Card
            style={{
              backgroundColor: "#FFF",
              padding: 10,
              shadow: 20,
              marginBottom: 10,
            }}
          >
            <Card.Content
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text>
                <Text style={{ fontSize: 16, fontWeight: "700" }}>
                  Abhay Sharma
                </Text>
                {"\n"}
                +91 9411199555
              </Text>
              <Card.Cover
                source={{
                  uri: "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg",
                }}
                style={{ width: 120, height: 120 }}
              />
            </Card.Content>
          </Card>
          <Card
            style={{
              backgroundColor: "#FFF",
              padding: 10,
              shadow: 20,
              marginBottom: 10,
            }}
          >
            <Card.Content
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text>
                <Text style={{ fontSize: 16, fontWeight: "700" }}>
                  Shilpi Bisht
                </Text>
                {"\n"}
                +91 9458173450
              </Text>
              <Card.Cover
                source={require('.././Shilpi.jpg')}
                style={{ width: 120, height: 120 }}
              />
            </Card.Content>
          </Card>
          <Card
            style={{
              backgroundColor: "#FFF",
              padding: 10,
              shadow: 20,
              marginBottom: 10,
            }}
          >
            <Card.Content
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text>
                <Text style={{ fontSize: 16, fontWeight: "700" }}>
                  Neeraj Bisht
                </Text>
                {"\n"}
                +91 8077851566
                {"\n"}
                +91 9415171251
              </Text>
              <Card.Cover
                source={{
                  uri: "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg",
                }}
                style={{ width: 120, height: 120 }}
              />
            </Card.Content>
          </Card>
        </View>
        
      </ScrollView>
    );
  }
}
