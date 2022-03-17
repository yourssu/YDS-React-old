/**
 *  Basic Colors
 */

type SystemColor = "pointBlue" | "pointColor" | "warningRed" | "gray"

type VariusColors =
    'pink' |
    'red' |
    'orange' |
    'yellow' |
    'lime' |
    'green' |
    'emerald' |
    'aqua' |
    'blue' |
    'indigo' |
    'violet' |
    'purple' |
    'brown'

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
    "logoBlue" |
    "logoYellow" |
    "white000" |
    "black000" |
    "realBlack" |
    "white000A10" |
    "white000A30" |
    "white000A70" |
    "black000A10" |
    "gray900A30" |
    "gray900A70"

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

enum PalettesToolTip {
    tooltipBG = 'tooltipBG',
    tooltipPoint = 'tooltipPoint',
}

type PalettesItemsType =
    `${PalettesItems}Primary` |
    `${PalettesItems}BG` |
    `${PalettesItems}Text`

export type LightSemanticColrs =
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
    `${PalettesToolTip}` |
    PalettesItemsType

export type DarkSemanticColors =
    `${PalettesBackground}` |
    `${PalettesText}` |
    `${PalettesDim}` |
    `${PalettesBorder}` |
    `${PalettesButton}` |
    `${PalettesButtonBar}` |
    `${PalettesInputField}` |
    `${PalettesToast}` |
    `${PalettesPressed}` |
    `${PalettesToolTip}` |
    PalettesItemsType
