import { lightBasicColors,darkBasicColors } from './basicColors'
import * as type from './colors-type'

const lightThemeColors: { [color in type.LightSemanticColrs]: string } = {
  bgNormal: lightBasicColors.white000,
  bgElevated: lightBasicColors.white000,
  bgRecomment: lightBasicColors.gray050,
  bgSelected: lightBasicColors.gray100,
  bgPressed: lightBasicColors.gray100,
  bgNormalReserved: lightBasicColors.realBlack,
  bgElevatedReserved: lightBasicColors.realBlack,

  textPrimary: lightBasicColors.black000,
  textSecondary: lightBasicColors.gray900,
  textTertiary: lightBasicColors.gray600,
  textDisabled: lightBasicColors.gray500,
  textReserved: lightBasicColors.white000,
  textPointed: lightBasicColors.pointColor400,
  textWarned: lightBasicColors.warningRed400,

  dimNormal: lightBasicColors.gray900A30,
  dimThick: lightBasicColors.gray900A70,
  dimThickReserved: lightBasicColors.white000A70,

  borderThin: lightBasicColors.gray100,
  borderNormal: lightBasicColors.black000A10,
  borderThick: lightBasicColors.gray500,

  buttonNormal: lightBasicColors.gray700,
  buttonNormalPressed: lightBasicColors.gray600,
  buttonBG: lightBasicColors.gray200,
  buttonEmojiBG: lightBasicColors.gray100,
  buttonReserved: lightBasicColors.white000,
  buttonDisabled: lightBasicColors.gray600,
  buttonDisabledBG: lightBasicColors.gray200,
  buttonPoint: lightBasicColors.pointColor400,
  buttonPointPressed: lightBasicColors.pointColor300,
  buttonPointBG: lightBasicColors.pointColor050,
  buttonWarned: lightBasicColors.warningRed400,
  buttonWarnedPressed: lightBasicColors.warningRed300,
  buttonWarnedBG: lightBasicColors.warningRed050,

  bottomBarNormal: lightBasicColors.gray600,
  bottomBarSelected: lightBasicColors.gray800,

  inputFieldNormal: lightBasicColors.white000,
  inputFieldElevated: lightBasicColors.gray100,

  toastBG: lightBasicColors.gray800,

  pressed: lightBasicColors.black000A10,
  tooltipBG: lightBasicColors.gray700,
  tooltipPoint: lightBasicColors.pointColor400,
  shadowThin: lightBasicColors.gray400,
  shadowNormal: lightBasicColors.gray500,

  monoItemPrimary: lightBasicColors.gray700,
  monoItemBG: lightBasicColors.gray100,
  monoItemText: lightBasicColors.gray800,

  limeItemPrimary: lightBasicColors.lime300,
  limeItemBG: lightBasicColors.lime050,
  // need to make new lime
  limeItemText: '',

  greenItemPrimary: lightBasicColors.green300,
  greenItemBG: lightBasicColors.green050,
  greenItemText: lightBasicColors.green800,

  emeraldItemPrimary: lightBasicColors.emerald300,
  emeraldItemBG: lightBasicColors.emerald050,
  emeraldItemText: lightBasicColors.emerald800,

  aquaItemPrimary: lightBasicColors.aqua300,
  aquaItemBG: lightBasicColors.aqua050,
  aquaItemText: lightBasicColors.aqua700,

  blueItemPrimary: lightBasicColors.blue300,
  blueItemBG: lightBasicColors.blue050,
  blueItemText: lightBasicColors.blue700,

  indigoItemPrimary: lightBasicColors.indigo300,
  indigoItemBG: lightBasicColors.indigo050,
  indigoItemText: lightBasicColors.indigo400,

  violetItemPrimary: lightBasicColors.violet300,
  violetItemBG: lightBasicColors.violet050,
  violetItemText: lightBasicColors.violet400,

  purpleItemPrimary: lightBasicColors.purple300,
  purpleItemBG: lightBasicColors.purple050,
  purpleItemText: lightBasicColors.purple400,

  pinkItemPrimary: lightBasicColors.pink300,
  pinkItemBG: lightBasicColors.pink050,
  pinkItemText: lightBasicColors.pink600,
}

const darkThemeColors = {
  bgNormal: darkBasicColors.black000,
  bgElevated: darkBasicColors.black000,
  bgRecomment: darkBasicColors.realBlack,

  bgPressed: darkBasicColors.white000A05,
  bgSelected: darkBasicColors.white000A05,
  bgNormalDark: darkBasicColors.realBlack,
  bgElevatedDark: darkBasicColors.realBlack,
  bgDimDark: darkBasicColors.black900A30,

  textPrimary: darkBasicColors.gray900,
  textSecondary: darkBasicColors.gray800,
  textTertiary: darkBasicColors.gray600,
  textDisabled: darkBasicColors.gray400,
  textBright: darkBasicColors.white000,

  textPointed: darkBasicColors.pointColor400,
  textWarned: darkBasicColors.warningRed400,

  dimNormal: darkBasicColors.black900A30,
  dimThick: darkBasicColors.black900A70,
  dimThickReserved: darkBasicColors.white000A70,

  borderThin: darkBasicColors.gray100,
  borderNormal: darkBasicColors.white000A10,
  borderThick: darkBasicColors.gray500,

  buttonNormal: darkBasicColors.gray700,
  buttonNormalPressed: darkBasicColors.gray600,
  buttonBG: darkBasicColors.gray200,
  buttonEmojiBG: darkBasicColors.gray100,
  buttonBright: darkBasicColors.white000,
  buttonDisabled: darkBasicColors.gray500,
  buttonDisabledBG: darkBasicColors.gray200,
  buttonPoint: darkBasicColors.pointColor400,
  buttonPointPressed: darkBasicColors.pointColor300,
  buttonPointBG: darkBasicColors.pointColor050,
  buttonWarned: darkBasicColors.warningRed400,
  buttonWarnedPressed: darkBasicColors.warningRed300,
  buttonWarnedBG: darkBasicColors.warningRed050,

  bottomBarNormal: darkBasicColors.gray600,
  bottomBarSelected: darkBasicColors.gray800,

  inputFieldNormal: darkBasicColors.black000,
  inputFieldElevated: darkBasicColors.gray100,

  toastBG: darkBasicColors.gray300,

  tooltipBG: darkBasicColors.gray400,
  tooltipPoint: darkBasicColors.pointColor400,

  dimPickerReverse: darkBasicColors.white000A70,

  pressed: darkBasicColors.white000A10,
}

export { lightThemeColors, darkThemeColors }
