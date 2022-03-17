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

type PalettesBackground =
    'bgNormal' |
    'bgElevated' |
    'bgRecomment' |
    'bgSelected' |
    'bgPressed' |
    'bgNormalReserved' |
    'bgElevatedReserved'


type PalettesText =
    'textPrimary' |
    'textSecondary' |
    'textTertiary' |
    'textDisabled' |
    'textReserved' |
    'textPointed' |
    'textWarned'

type PalettesDim =
    "dimNormal" |
    "dimThick" |
    "dimThickReserved"

type PalettesBorder = "borderThin" |
    "borderNormal" |
    "borderThick"

type PalettesButton = "buttonNormal" |
    "buttonNormalPressed" |
    "buttonBG" |
    "buttonEmojiBG" |
    "buttonReserved" |
    "buttonDisabled" |
    "buttonDisabledBG" |
    "buttonPoint" |
    "buttonPointPressed" |
    "buttonPointBG" |
    "buttonWarned" |
    "buttonWarnedPressed" |
    "buttonWarnedBG"

type PalettesButtonBar =
    "buttonBarNormal" |
    "buttonBarSelected"

type PalettesInputField =
    'inputFieldNormal' |
    'inputFieldElevated'

type PalettesToast =
    'toastBG'


type PalettesPressed =
    'pressed'


type PalettesShadow =
    'shadowThin' |
    'shadowNormal'


type PalettesItems =
    'monoItem' |
    'limeItem' |
    'greenItem' |
    'emeraldItem' |
    'aquaItem' |
    'blueItem' |
    'indigoItem' |
    'violetItem' |
    'purpleItem' |
    'pinkItem'


type PalettesToolTip =
    'tooltipBG' |
    'tooltipPoint'


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
