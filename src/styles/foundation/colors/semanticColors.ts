import basicColors from './basicColors'
import * as type from './colors-type'

const lightThemeColors: { [color in type.LightSemanticColrs]: string } = {
  bgNormal: basicColors.white000,
  bgElevated: basicColors.white000,
  bgRecomment: basicColors.gray050,
  bgSelected: basicColors.gray100,
  bgPressed: basicColors.gray100,
  bgNormalReserved: basicColors.realBlack,
  bgElevatedReserved: basicColors.realBlack,

  textPrimary: basicColors.black000,
  textSecondary: basicColors.gray900,
  textTertiary: basicColors.gray600,
  textDisabled: basicColors.gray500,
  textReserved: basicColors.white000,
  textPointed: basicColors.pointColor400,
  textWarned: basicColors.warningRed400,

  dimNormal: basicColors.gray900A30,
  dimThick: basicColors.gray900A70,
  dimThickReserved: basicColors.white000A70,

  borderThin: basicColors.gray100,
  borderNormal: basicColors.black000A10,
  borderThick: basicColors.gray500,

  buttonNormal: basicColors.gray700,
  buttonNormalPressed: basicColors.gray600,
  buttonBG: basicColors.gray200,
  buttonEmojiBG: basicColors.gray100,
  buttonReserved: basicColors.white000,
  buttonDisabled: basicColors.gray600,
  buttonDisabledBG: basicColors.gray200,
  buttonPoint: basicColors.pointColor400,
  buttonPointPressed: basicColors.pointColor300,
  buttonPointBG: basicColors.pointColor050,
  buttonWarned: basicColors.warningRed400,
  buttonWarnedPressed: basicColors.warningRed300,
  buttonWarnedBG: basicColors.warningRed050,

  bottomBarNormal: basicColors.gray600,
  bottomBarSelected: basicColors.gray800,

  inputFieldNormal: basicColors.white000,
  inputFieldElevated: basicColors.gray100,

  toastBG: basicColors.gray800,

  pressed: basicColors.black000A10,
  tooltipBG: basicColors.gray700,
  tooltipPoint: basicColors.pointColor400,
  shadowThin: basicColors.gray400,
  shadowNormal: basicColors.gray500,

  monoItemPrimary: basicColors.gray700,
  monoItemBG: basicColors.gray100,
  monoItemText: basicColors.gray800,

  limeItemPrimary: basicColors.lime300,
  limeItemBG: basicColors.lime050,
  // need to make new lime
  limeItemText: '',

  greenItemPrimary: basicColors.green300,
  greenItemBG: basicColors.green050,
  greenItemText: basicColors.green800,

  emeraldItemPrimary: basicColors.emerald300,
  emeraldItemBG: basicColors.emerald050,
  emeraldItemText: basicColors.emerald800,

  aquaItemPrimary: basicColors.aqua300,
  aquaItemBG: basicColors.aqua050,
  aquaItemText: basicColors.aqua700,

  blueItemPrimary: basicColors.blue300,
  blueItemBG: basicColors.blue050,
  blueItemText: basicColors.blue700,

  indigoItemPrimary: basicColors.indigo300,
  indigoItemBG: basicColors.indigo050,
  indigoItemText: basicColors.indigo400,

  violetItemPrimary: basicColors.violet300,
  violetItemBG: basicColors.violet050,
  violetItemText: basicColors.violet400,

  purpleItemPrimary: basicColors.purple300,
  purpleItemBG: basicColors.purple050,
  purpleItemText: basicColors.purple400,

  pinkItemPrimary: basicColors.pink300,
  pinkItemBG: basicColors.pink050,
  pinkItemText: basicColors.pink600,
}

const darkThemeColors: { [color in type.DarkSemanticColors]: string } = {
  bgNormal: basicColors.black000,
  bgElevated: basicColors.black000,
  bgRecomment: basicColors.realBlack,
  bgSelected: basicColors.gray900,
  bgPressed: basicColors.gray800,
  bgNormalReserved: basicColors.realBlack,
  bgElevatedReserved: basicColors.realBlack,

  textPrimary: basicColors.gray100,
  textSecondary: basicColors.gray200,
  textTertiary: basicColors.gray600,
  textDisabled: basicColors.gray700,
  textReserved: basicColors.white000,
  textPointed: basicColors.pointColor300,
  textWarned: basicColors.warningRed300,

  dimNormal: basicColors.gray900A30,
  dimThick: basicColors.gray900A70,
  dimThickReserved: basicColors.white000A70,

  borderThin: basicColors.gray900,
  borderNormal: basicColors.white000A10,
  borderThick: basicColors.gray500,

  buttonNormal: basicColors.gray300,
  buttonNormalPressed: basicColors.gray200,
  buttonBG: basicColors.gray800,
  buttonEmojiBG: basicColors.gray900,
  buttonReserved: basicColors.white000,
  buttonDisabled: basicColors.gray600,
  buttonDisabledBG: basicColors.gray800,
  buttonPoint: basicColors.pointColor400,
  buttonPointPressed: basicColors.pointColor300,
  buttonPointBG: basicColors.pointColor050,
  buttonWarned: basicColors.warningRed400,
  buttonWarnedPressed: basicColors.warningRed300,
  buttonWarnedBG: basicColors.warningRed050,

  bottomBarNormal: basicColors.gray600,
  bottomBarSelected: basicColors.gray200,

  inputFieldNormal: basicColors.black000,
  inputFieldElevated: basicColors.gray900,

  toastBG: basicColors.gray800,

  pressed: basicColors.black000A10,
  tooltipBG: basicColors.gray700,
  tooltipPoint: basicColors.pointColor400,

  monoItemPrimary: basicColors.gray700,
  monoItemBG: basicColors.gray100,
  monoItemText: basicColors.gray800,

  limeItemPrimary: basicColors.lime300,
  limeItemBG: basicColors.lime050,
  // need to make new lime
  limeItemText: '',

  greenItemPrimary: basicColors.green300,
  greenItemBG: basicColors.green050,
  greenItemText: basicColors.green800,

  emeraldItemPrimary: basicColors.emerald300,
  emeraldItemBG: basicColors.emerald050,
  emeraldItemText: basicColors.emerald800,

  aquaItemPrimary: basicColors.aqua300,
  aquaItemBG: basicColors.aqua050,
  aquaItemText: basicColors.aqua700,

  blueItemPrimary: basicColors.blue300,
  blueItemBG: basicColors.blue050,
  blueItemText: basicColors.blue700,

  indigoItemPrimary: basicColors.indigo300,
  indigoItemBG: basicColors.indigo050,
  indigoItemText: basicColors.indigo400,

  violetItemPrimary: basicColors.violet300,
  violetItemBG: basicColors.violet050,
  violetItemText: basicColors.violet400,

  purpleItemPrimary: basicColors.purple300,
  purpleItemBG: basicColors.purple050,
  purpleItemText: basicColors.purple400,

  pinkItemPrimary: basicColors.pink300,
  pinkItemBG: basicColors.pink050,
  pinkItemText: basicColors.pink600,
}

export { lightThemeColors, darkThemeColors }
