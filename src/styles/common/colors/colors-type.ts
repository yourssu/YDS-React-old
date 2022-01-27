/**
 *  Basic Colors
 */

enum LogoColors {
    logoBlue = "logoBlue",
    logoYellow = "logoYellow"
}
enum SystemColor {
    pointBlue = "pointBlue",
    pointColor = "pointColor",
    warningRed = "warningRed",
    gray = "gray"
}

enum WhiteAndBlack {
    white000 = 'white000',
    black000 = 'black000',
    realBlack = 'realBlack'
}
enum WhiteAndBlackAlpha {
    white000A10 = 'white000A10',
    white000A30 = 'white000A30',
    white000A70 = 'white000A70',
    black000A10 = 'black000A10',
    gray900A30 = 'gray900A30',
    gray900A70 = 'gray900A70'
}

enum VariusColors {
    pink = 'pink',
    red = 'red',
    orange = 'orange',
    yellow = 'yellow',
    lime = 'lime',
    green = 'green',
    emerald = 'emerald',
    aqua = 'aqua',
    blue = 'blue',
    indigo = 'indigo',
    violet = 'violet',
    purple = 'purple',
    brown = 'brown'
}

type SystemColors =
    | `${SystemColor}050`
    | `${SystemColor}100`
    | `${SystemColor}200`
    | `${SystemColor}300`
    | `${SystemColor}400`
    | `${SystemColor}500`
    | `${SystemColor}600`
    | `${SystemColor}700`
    | `${SystemColor}800`
    | `${SystemColor}900`

type VariusColorsType =
    | `${VariusColors}050`
    | `${VariusColors}100`
    | `${VariusColors}200`
    | `${VariusColors}300`
    | `${VariusColors}400`
    | `${VariusColors}500`
    | `${VariusColors}600`
    | `${VariusColors}700`
    | `${VariusColors}800`

type SystemColorsType =
    SystemColors |
    LogoColors.logoBlue |
    LogoColors.logoYellow |
    WhiteAndBlack.white000 |
    WhiteAndBlack.black000 |
    WhiteAndBlack.realBlack |
    WhiteAndBlackAlpha.white000A10 |
    WhiteAndBlackAlpha.white000A30 |
    WhiteAndBlackAlpha.white000A70 |
    WhiteAndBlackAlpha.black000A10 |
    WhiteAndBlackAlpha.gray900A30 |
    WhiteAndBlackAlpha.gray900A70

export type BasicColorsType =
    SystemColorsType |
    VariusColorsType


/**
 *  Semantic Colors
 */

enum PalettesBackground {
    bgNormal = 'bgNormal',
    bgElevated = 'bgElevated',
    bgRecomment = 'bgRecomment',
    bgSelected = 'bgSelected',
    bgPressed = 'bgPressed',
    bgNormalReserved = 'bgNormalReserved',
    bgElevatedReserved = 'bgElevatedReserved'
}

enum PalettesText {
    textPrimary = 'textPrimary',
    textSecondary = 'textSecondary',
    textTertiary = 'textTertiary',
    textDisabled = 'textDisabled',
    textReserved = 'textReserved',
    textPointed = 'textPointed',
    textWarned = 'textWarned'
}

enum PalettesDim {
    dimNormal = 'dimNormal',
    dimThick = 'dimThick',
    dimThickReserved = 'dimThickReserved'
}

enum PalettesBorder {
    borderThin = 'borderThin',
    borderNormal = 'borderNormal',
    borderThick = 'borderThick'
}

enum PalettesButton {
    buttonNormal = 'buttonNormal',
    buttonNormalPressed = 'buttonNormalPressed',
    buttonBG = 'buttonBG',
    buttonEmojiBG = 'buttonEmojiBG',
    buttonReserved = 'buttonReserved',
    buttonDisabled = 'buttonDisabled',
    buttonDisabledBG = 'buttonDisabledBG',
    buttonPoint = 'buttonPoint',
    buttonPointPressed = 'buttonPointPressed',
    buttonPointBG = 'buttonPointBG',
    buttonWarned = 'buttonWarned',
    buttonWarnedPressed = 'buttonWarnedPressed',
    buttonWarnedBG = 'buttonWarnedBG'
}

enum PalettesButtonBar {
    buttonBarNormal = 'buttonBarNormal',
    buttonBarSelected = 'buttonBarSelected',
}

enum PalettesInputField {
    inputFieldNormal = 'inputFieldNormal',
    inputFieldElevated = 'inputFieldElevated',
}

enum PalettesToast {
    toastBG = 'toastBG'
}

enum PalettesPressed {
    preesed = 'pressed'
}

enum PalettesShadow {
    shadowThin = 'shadowThin',
    shadowNormal = 'shadowNormal',
}

enum PalettesItems {
    monoItem = 'monoItem',
    limeItem = 'limeItem',
    greenItem = 'greenItem',
    emeraldItem = 'emeraldItem',
    aquaItem = 'aquaItem',
    blueItem = 'blueItem',
    indigoItem = 'indigoItem',
    violetItem = 'violetItem',
    purpleItem = 'purpleItem',
    pinkItem = 'pinkItem'
}

type PalettesItemsType =
    `${PalettesItems}Primary` |
    `${PalettesItems}BG` |
    `${PalettesItems}Text`

export type SemanticColrs =
    `${PalettesBackground}` |
    `${PalettesText}` |
    `${PalettesDim}` |
    `${PalettesBorder}` |
    `${PalettesButton}` |
    `${PalettesButtonBar}` |
    `${PalettesInputField}` |
    `${PalettesToast}` |
    `${PalettesPressed}` |
    `${PalettesShadow}` |
    PalettesItemsType

