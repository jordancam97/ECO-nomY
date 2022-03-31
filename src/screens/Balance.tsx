import {
  stylesB,
  stylesL,
  stylesM,
  stylesO,
  stylesS,
} from "./../appTheme/styles/styles";
import {
  View,
  Text,
  SafeAreaView,
  Platform,
  TouchableOpacity,
  Clipboard,
  ToastAndroid,
  Alert,
  ScrollView,
  Image,
} from "react-native";
import BarStatus from "../components/BarStatus";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import IconUser from "react-native-vector-icons/FontAwesome";
import IconCopy from "react-native-vector-icons/Ionicons";
import IconButtons from "react-native-vector-icons/Feather";

const sizeIcon = Platform.OS === "ios" ? 22 : 25;
const sizeIconButtons = Platform.OS === "ios" ? 22 : 35;

const Balance = ({ navigation }: { navigation: any }) => {
  //copy icons
  const [copy, setCopy] = useState(
    <IconCopy name="copy-outline" size={15} color="#fff" />
  );

  const [copyWallet, setCopyWallet] = useState(
    <IconCopy name="copy-outline" size={15} color="#fff" />
  );

  const CopyEmail = () => {
    Clipboard.setString("email001@gmail.com");
    if (Platform.OS === "android") {
      ToastAndroid.show("Correo copiado", ToastAndroid.SHORT);
    } else {
      Alert.alert("Correo copiado");
    }

    setTimeout(() => {
      setCopy(<IconCopy name="copy-sharp" size={15} color="#fff" />);
      setTimeout(() => {
        setCopy(<IconCopy name="copy-outline" size={15} color="#fff" />);
      }, 500);
    });
  };

  const CopyWallet = () => {
    Clipboard.setString("9zkw97JC6ENa4PuQJAJMjnj989R2XWbAxc9onLco3LZ3");
    if (Platform.OS === "android") {
      ToastAndroid.show("Dirección copiada", ToastAndroid.SHORT);
    } else {
      Alert.alert("Dirección copiada");
    }

    setTimeout(() => {
      setCopyWallet(<IconCopy name="copy-sharp" size={15} color="#fff" />);
      setTimeout(() => {
        setCopyWallet(<IconCopy name="copy-outline" size={15} color="#fff" />);
      }, 500);
    });
  };

  // Concatenate pkey.
  var str = "9zkw97JC6ENa4PuQJAJMjnj989R2XWbAxc9onLco3LZ3";
  var strFirstThree = str.substring(0, 3);
  var strLastThree = str.substring(str.length - 3, str.length);
  var concatenado = `${strFirstThree}...${strLastThree}`;

  return (
    <LinearGradient
      colors={["#38AA35", "#1F5326"]}
      style={stylesB.linear}
      start={{ x: 0, y: 1.6 }}
      end={{ x: 0, y: 0 }}
    >
      <SafeAreaView style={stylesB.body}>
        <BarStatus />
        <View style={stylesB.completo}>
          <ScrollView
            contentContainerStyle={{ bottom: 25 }}
            horizontal={false}
            showsVerticalScrollIndicator={false}
          >
            <View style={[stylesM.boxWelcome, stylesM.widthRectangle]}>
              <Text
                style={[
                  stylesM.textColorWhite,
                  stylesM.fontSizeTwentyFour,
                  stylesM.textBold,
                ]}
              >
                Bienvenido ECO-amigo.
              </Text>
            </View>
            <LinearGradient
              colors={["#225C28", "#38AA35"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1.2 }}
              style={[
                stylesM.boxInfo,
                stylesM.widthRectangle,
                stylesM.radiusFive,
                stylesL.JustifyAlign,
                stylesL.flexColumn,
              ]}
            >
              <View style={stylesM.boxUser}>
                <IconUser name="user-circle-o" size={sizeIcon} color="#fff" />
              </View>
              <View>
                <Text
                  style={[
                    stylesM.boxInfo_txt,
                    stylesM.textColorWhite,
                    stylesM.fontSizeEighteen,
                  ]}
                >
                  ECO Friend 001
                </Text>
              </View>
              <View>
                <Text
                  style={[
                    stylesM.boxInfo_txt,
                    stylesM.textColorWhite,
                    stylesM.fontSizeEighteen,
                  ]}
                >
                  email001@gmail.com
                </Text>
              </View>
              <View
                style={[
                  stylesM.widthRectangle,
                  stylesM.boxCopy,
                  stylesL.alignItemsEnd,
                ]}
              >
                <TouchableOpacity
                  activeOpacity={0.5}
                  style={[stylesM.copyButton, stylesL.JustifyAlign]}
                  onPress={() => CopyEmail()}
                >
                  {copy}
                </TouchableOpacity>
              </View>
              <View>
                <Text
                  style={[
                    stylesM.boxInfo_txt,
                    stylesM.textColorWhite,
                    stylesM.fontSizeEighteen,
                  ]}
                >
                  Billetera: {concatenado}
                </Text>
              </View>
              <View
                style={[
                  stylesM.widthRectangle,
                  stylesM.boxCopy,
                  stylesO.boxCopy__top,
                  stylesL.alignItemsEnd,
                ]}
              >
                <TouchableOpacity
                  activeOpacity={0.5}
                  style={[stylesM.copyButton, stylesL.JustifyAlign]}
                  onPress={() => CopyWallet()}
                >
                  {copyWallet}
                </TouchableOpacity>
              </View>
            </LinearGradient>

            <View
              style={[
                stylesM.boxEcoPoint,
                stylesM.radiusSeven,
                stylesM.widthRectangle,
                stylesM.backgroundDarkGreen,
                stylesL.JustifyAlign,
              ]}
            >
              <Text
                style={[stylesM.textColorWhite, stylesM.fontSizeTwentyFour]}
              >
                1200
              </Text>
            </View>

            <View
              style={[
                stylesM.boxEcoAffiliates,
                stylesM.radiusSeven,
                stylesM.widthRectangle,
                stylesM.backgroundDarkGreen,
              ]}
            ></View>

            <TouchableOpacity
              activeOpacity={0.5}
              style={[
                stylesM.botonGeneral,
                stylesM.widthRectangle,
                stylesM.backgroundDarkGreen,
                stylesL.flexRow,
                stylesM.balanceButtons,
              ]}
              // onPress={() => navigation.navigate("Balance")}
            >
              <View style={[stylesM.balanceButtons_icon, stylesL.JustifyAlign]}>
                <Image
                  source={require("./../../assets/img/send.png")}
                  style={stylesM.balanceButtons_icon_image}
                />
              </View>
              <View style={[stylesM.balanceButtons_txt, stylesL.Justify]}>
                <Text
                  style={[
                    stylesM.textColorWhite,
                    stylesM.fontSizeTwentyTwo,
                    stylesM.textBold,
                  ]}
                >
                  Enviar
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.5}
              style={[
                stylesM.botonGeneral,
                stylesM.widthRectangle,
                stylesM.backgroundDarkGreen,
                stylesL.flexRow,
                stylesM.balanceButtons,
              ]}
              // onPress={() => navigation.navigate("Balance")}
            >
              <View style={[stylesM.balanceButtons_icon, stylesL.JustifyAlign]}>
                <Image
                  source={require("./../../assets/img/receive.png")}
                  style={stylesM.balanceButtons_icon_image}
                />
              </View>
              <View style={[stylesM.balanceButtons_txt, stylesL.Justify]}>
                <Text
                  style={[
                    stylesM.textColorWhite,
                    stylesM.fontSizeTwentyTwo,
                    stylesM.textBold,
                  ]}
                >
                  Recibir
                </Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Balance;
