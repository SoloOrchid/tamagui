import { TextContextStyles, TextParentStyles } from '@tamagui/text';
import { FontSizeTokens, GetProps, SizeTokens, ThemeableProps } from '@tamagui/web';
import { FunctionComponent } from 'react';
export declare const ButtonContext: import("@tamagui/web").StyledContext<Partial<TextContextStyles & {
    size: SizeTokens;
    variant?: "outlined" | undefined;
}>>;
type ButtonIconProps = {
    color?: string;
    size?: number;
};
type IconProp = JSX.Element | FunctionComponent<ButtonIconProps> | null;
type ButtonExtraProps = TextParentStyles & ThemeableProps & {
    /**
     * add icon before, passes color and size automatically if Component
     */
    icon?: IconProp;
    /**
     * add icon after, passes color and size automatically if Component
     */
    iconAfter?: IconProp;
    /**
     * adjust icon relative to size
     *
     * @default 1
     */
    scaleIcon?: number;
    /**
     * make the spacing elements flex
     */
    spaceFlex?: number | boolean;
    /**
     * adjust internal space relative to icon size
     */
    scaleSpace?: number;
    /**
     * remove default styles
     */
    unstyled?: boolean;
};
type ButtonProps = ButtonExtraProps & GetProps<typeof ButtonFrame>;
declare const ButtonFrame: import("@tamagui/web").TamaguiComponent<import("@tamagui/web").StackNonStyleProps & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/web").PseudoProps<import("@tamagui/web").WithThemeAndShorthands<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/web").MediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").StackStylePropsBase>> & {
    rel?: any;
    download?: any;
    onStartShouldSetResponder?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
    onMoveShouldSetResponder?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
    onResponderEnd?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
    onResponderGrant?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
    onResponderReject?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
    onResponderMove?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
    onResponderRelease?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
    onResponderStart?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
    onResponderTerminationRequest?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
    onResponderTerminate?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
    onStartShouldSetResponderCapture?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
    onMoveShouldSetResponderCapture?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
    dataSet?: Record<string, string | number | null | undefined> | undefined;
    onScrollShouldSetResponder?: unknown;
    onScrollShouldSetResponderCapture?: unknown;
    onSelectionChangeShouldSetResponder?: unknown;
    onSelectionChangeShouldSetResponderCapture?: unknown;
    onLayout?: ((event: import("react-native").LayoutChangeEvent) => void) | undefined;
    href?: string | undefined;
    hrefAttrs?: {
        target?: "top" | "_blank" | "_self" | "_top" | "blank" | "self" | undefined;
        rel?: string | undefined;
        download?: boolean | undefined;
    } | undefined;
    elevationAndroid?: string | number | undefined;
} & import("react").RefAttributes<import("@tamagui/web").TamaguiElement> & Omit<import("@tamagui/web").StackProps, keyof import("@tamagui/web").StackStylePropsBase | `$${string}` | `$${number}` | `$theme-${string}` | `$theme-${number}` | keyof import("@tamagui/web").RNViewProps | keyof import("@tamagui/web").StackNonStyleProps | keyof import("@tamagui/web").PseudoProps<import("@tamagui/web").WithThemeAndShorthands<import("@tamagui/web").StackStylePropsBase>> | keyof import("react").RefAttributes<import("@tamagui/web").TamaguiElement>> & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackNonStyleProps & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/web").PseudoProps<import("@tamagui/web").WithThemeAndShorthands<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/web").MediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").StackStylePropsBase>> & {
    rel?: any;
    download?: any;
    onStartShouldSetResponder?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
    onMoveShouldSetResponder?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
    onResponderEnd?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
    onResponderGrant?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
    onResponderReject?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
    onResponderMove?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
    onResponderRelease?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
    onResponderStart?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
    onResponderTerminationRequest?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
    onResponderTerminate?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
    onStartShouldSetResponderCapture?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
    onMoveShouldSetResponderCapture?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
    dataSet?: Record<string, string | number | null | undefined> | undefined;
    onScrollShouldSetResponder?: unknown;
    onScrollShouldSetResponderCapture?: unknown;
    onSelectionChangeShouldSetResponder?: unknown;
    onSelectionChangeShouldSetResponderCapture?: unknown;
    onLayout?: ((event: import("react-native").LayoutChangeEvent) => void) | undefined;
    href?: string | undefined;
    hrefAttrs?: {
        target?: "top" | "_blank" | "_self" | "_top" | "blank" | "self" | undefined;
        rel?: string | undefined;
        download?: boolean | undefined;
    } | undefined;
    elevationAndroid?: string | number | undefined;
} & import("react").RefAttributes<import("@tamagui/web").TamaguiElement> & Omit<import("@tamagui/web").StackProps, keyof import("@tamagui/web").StackStylePropsBase | `$${string}` | `$${number}` | `$theme-${string}` | `$theme-${number}` | keyof import("@tamagui/web").RNViewProps | keyof import("@tamagui/web").StackNonStyleProps | keyof import("@tamagui/web").PseudoProps<import("@tamagui/web").WithThemeAndShorthands<import("@tamagui/web").StackStylePropsBase>> | keyof import("react").RefAttributes<import("@tamagui/web").TamaguiElement>> & {
    size?: SizeTokens | undefined;
    elevation?: number | SizeTokens | undefined;
    variant?: "outlined" | undefined;
    disabled?: boolean | undefined;
    unstyled?: boolean | undefined;
    transparent?: boolean | undefined;
    circular?: boolean | undefined;
    fullscreen?: boolean | undefined;
    hoverTheme?: boolean | undefined;
    pressTheme?: boolean | undefined;
    focusTheme?: boolean | undefined;
    elevate?: boolean | undefined;
    bordered?: number | boolean | undefined;
    backgrounded?: boolean | undefined;
    radiused?: boolean | undefined;
    padded?: boolean | undefined;
    chromeless?: boolean | "all" | undefined;
}> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackNonStyleProps & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/web").PseudoProps<import("@tamagui/web").WithThemeAndShorthands<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/web").MediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").StackStylePropsBase>> & {
    rel?: any;
    download?: any;
    onStartShouldSetResponder?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
    onMoveShouldSetResponder?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
    onResponderEnd?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
    onResponderGrant?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
    onResponderReject?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
    onResponderMove?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
    onResponderRelease?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
    onResponderStart?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
    onResponderTerminationRequest?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
    onResponderTerminate?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
    onStartShouldSetResponderCapture?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
    onMoveShouldSetResponderCapture?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
    dataSet?: Record<string, string | number | null | undefined> | undefined;
    onScrollShouldSetResponder?: unknown;
    onScrollShouldSetResponderCapture?: unknown;
    onSelectionChangeShouldSetResponder?: unknown;
    onSelectionChangeShouldSetResponderCapture?: unknown;
    onLayout?: ((event: import("react-native").LayoutChangeEvent) => void) | undefined;
    href?: string | undefined;
    hrefAttrs?: {
        target?: "top" | "_blank" | "_self" | "_top" | "blank" | "self" | undefined;
        rel?: string | undefined;
        download?: boolean | undefined;
    } | undefined;
    elevationAndroid?: string | number | undefined;
} & import("react").RefAttributes<import("@tamagui/web").TamaguiElement> & Omit<import("@tamagui/web").StackProps, keyof import("@tamagui/web").StackStylePropsBase | `$${string}` | `$${number}` | `$theme-${string}` | `$theme-${number}` | keyof import("@tamagui/web").RNViewProps | keyof import("@tamagui/web").StackNonStyleProps | keyof import("@tamagui/web").PseudoProps<import("@tamagui/web").WithThemeAndShorthands<import("@tamagui/web").StackStylePropsBase>> | keyof import("react").RefAttributes<import("@tamagui/web").TamaguiElement>> & {
    size?: SizeTokens | undefined;
    elevation?: number | SizeTokens | undefined;
    variant?: "outlined" | undefined;
    disabled?: boolean | undefined;
    unstyled?: boolean | undefined;
    transparent?: boolean | undefined;
    circular?: boolean | undefined;
    fullscreen?: boolean | undefined;
    hoverTheme?: boolean | undefined;
    pressTheme?: boolean | undefined;
    focusTheme?: boolean | undefined;
    elevate?: boolean | undefined;
    bordered?: number | boolean | undefined;
    backgrounded?: boolean | undefined;
    radiused?: boolean | undefined;
    padded?: boolean | undefined;
    chromeless?: boolean | "all" | undefined;
}>> & import("@tamagui/web").PseudoProps<import("@tamagui/web").WithThemeAndShorthands<import("@tamagui/web").StackNonStyleProps & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/web").PseudoProps<import("@tamagui/web").WithThemeAndShorthands<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/web").MediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").StackStylePropsBase>> & {
    rel?: any;
    download?: any;
    onStartShouldSetResponder?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
    onMoveShouldSetResponder?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
    onResponderEnd?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
    onResponderGrant?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
    onResponderReject?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
    onResponderMove?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
    onResponderRelease?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
    onResponderStart?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
    onResponderTerminationRequest?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
    onResponderTerminate?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
    onStartShouldSetResponderCapture?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
    onMoveShouldSetResponderCapture?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
    dataSet?: Record<string, string | number | null | undefined> | undefined;
    onScrollShouldSetResponder?: unknown;
    onScrollShouldSetResponderCapture?: unknown;
    onSelectionChangeShouldSetResponder?: unknown;
    onSelectionChangeShouldSetResponderCapture?: unknown;
    onLayout?: ((event: import("react-native").LayoutChangeEvent) => void) | undefined;
    href?: string | undefined;
    hrefAttrs?: {
        target?: "top" | "_blank" | "_self" | "_top" | "blank" | "self" | undefined;
        rel?: string | undefined;
        download?: boolean | undefined;
    } | undefined;
    elevationAndroid?: string | number | undefined;
} & import("react").RefAttributes<import("@tamagui/web").TamaguiElement> & Omit<import("@tamagui/web").StackProps, keyof import("@tamagui/web").StackStylePropsBase | `$${string}` | `$${number}` | `$theme-${string}` | `$theme-${number}` | keyof import("@tamagui/web").RNViewProps | keyof import("@tamagui/web").StackNonStyleProps | keyof import("@tamagui/web").PseudoProps<import("@tamagui/web").WithThemeAndShorthands<import("@tamagui/web").StackStylePropsBase>> | keyof import("react").RefAttributes<import("@tamagui/web").TamaguiElement>> & {
    size?: SizeTokens | undefined;
    elevation?: number | SizeTokens | undefined;
    variant?: "outlined" | undefined;
    disabled?: boolean | undefined;
    unstyled?: boolean | undefined;
    transparent?: boolean | undefined;
    circular?: boolean | undefined;
    fullscreen?: boolean | undefined;
    hoverTheme?: boolean | undefined;
    pressTheme?: boolean | undefined;
    focusTheme?: boolean | undefined;
    elevate?: boolean | undefined;
    bordered?: number | boolean | undefined;
    backgrounded?: boolean | undefined;
    radiused?: boolean | undefined;
    padded?: boolean | undefined;
    chromeless?: boolean | "all" | undefined;
}>> & import("@tamagui/web").MediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").StackNonStyleProps & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/web").PseudoProps<import("@tamagui/web").WithThemeAndShorthands<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/web").MediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").StackStylePropsBase>> & {
    rel?: any;
    download?: any;
    onStartShouldSetResponder?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
    onMoveShouldSetResponder?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
    onResponderEnd?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
    onResponderGrant?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
    onResponderReject?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
    onResponderMove?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
    onResponderRelease?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
    onResponderStart?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
    onResponderTerminationRequest?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
    onResponderTerminate?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
    onStartShouldSetResponderCapture?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
    onMoveShouldSetResponderCapture?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
    dataSet?: Record<string, string | number | null | undefined> | undefined;
    onScrollShouldSetResponder?: unknown;
    onScrollShouldSetResponderCapture?: unknown;
    onSelectionChangeShouldSetResponder?: unknown;
    onSelectionChangeShouldSetResponderCapture?: unknown;
    onLayout?: ((event: import("react-native").LayoutChangeEvent) => void) | undefined;
    href?: string | undefined;
    hrefAttrs?: {
        target?: "top" | "_blank" | "_self" | "_top" | "blank" | "self" | undefined;
        rel?: string | undefined;
        download?: boolean | undefined;
    } | undefined;
    elevationAndroid?: string | number | undefined;
} & import("react").RefAttributes<import("@tamagui/web").TamaguiElement> & Omit<import("@tamagui/web").StackProps, keyof import("@tamagui/web").StackStylePropsBase | `$${string}` | `$${number}` | `$theme-${string}` | `$theme-${number}` | keyof import("@tamagui/web").RNViewProps | keyof import("@tamagui/web").StackNonStyleProps | keyof import("@tamagui/web").PseudoProps<import("@tamagui/web").WithThemeAndShorthands<import("@tamagui/web").StackStylePropsBase>> | keyof import("react").RefAttributes<import("@tamagui/web").TamaguiElement>> & {
    size?: SizeTokens | undefined;
    elevation?: number | SizeTokens | undefined;
    variant?: "outlined" | undefined;
    disabled?: boolean | undefined;
    unstyled?: boolean | undefined;
    transparent?: boolean | undefined;
    circular?: boolean | undefined;
    fullscreen?: boolean | undefined;
    hoverTheme?: boolean | undefined;
    pressTheme?: boolean | undefined;
    focusTheme?: boolean | undefined;
    elevate?: boolean | undefined;
    bordered?: number | boolean | undefined;
    backgrounded?: boolean | undefined;
    radiused?: boolean | undefined;
    padded?: boolean | undefined;
    chromeless?: boolean | "all" | undefined;
}>>, import("@tamagui/web").TamaguiElement, import("@tamagui/web").StackNonStyleProps & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/web").PseudoProps<import("@tamagui/web").WithThemeAndShorthands<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/web").MediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").StackStylePropsBase>> & {
    rel?: any;
    download?: any;
    onStartShouldSetResponder?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
    onMoveShouldSetResponder?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
    onResponderEnd?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
    onResponderGrant?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
    onResponderReject?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
    onResponderMove?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
    onResponderRelease?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
    onResponderStart?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
    onResponderTerminationRequest?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
    onResponderTerminate?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
    onStartShouldSetResponderCapture?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
    onMoveShouldSetResponderCapture?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
    dataSet?: Record<string, string | number | null | undefined> | undefined;
    onScrollShouldSetResponder?: unknown;
    onScrollShouldSetResponderCapture?: unknown;
    onSelectionChangeShouldSetResponder?: unknown;
    onSelectionChangeShouldSetResponderCapture?: unknown;
    onLayout?: ((event: import("react-native").LayoutChangeEvent) => void) | undefined;
    href?: string | undefined;
    hrefAttrs?: {
        target?: "top" | "_blank" | "_self" | "_top" | "blank" | "self" | undefined;
        rel?: string | undefined;
        download?: boolean | undefined;
    } | undefined;
    elevationAndroid?: string | number | undefined;
} & import("react").RefAttributes<import("@tamagui/web").TamaguiElement> & Omit<import("@tamagui/web").StackProps, keyof import("@tamagui/web").StackStylePropsBase | `$${string}` | `$${number}` | `$theme-${string}` | `$theme-${number}` | keyof import("@tamagui/web").RNViewProps | keyof import("@tamagui/web").StackNonStyleProps | keyof import("@tamagui/web").PseudoProps<import("@tamagui/web").WithThemeAndShorthands<import("@tamagui/web").StackStylePropsBase>> | keyof import("react").RefAttributes<import("@tamagui/web").TamaguiElement>>, import("@tamagui/web").StackNonStyleProps & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/web").PseudoProps<import("@tamagui/web").WithThemeAndShorthands<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/web").MediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").StackStylePropsBase>> & {
    rel?: any;
    download?: any;
    onStartShouldSetResponder?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
    onMoveShouldSetResponder?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
    onResponderEnd?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
    onResponderGrant?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
    onResponderReject?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
    onResponderMove?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
    onResponderRelease?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
    onResponderStart?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
    onResponderTerminationRequest?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
    onResponderTerminate?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
    onStartShouldSetResponderCapture?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
    onMoveShouldSetResponderCapture?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
    dataSet?: Record<string, string | number | null | undefined> | undefined;
    onScrollShouldSetResponder?: unknown;
    onScrollShouldSetResponderCapture?: unknown;
    onSelectionChangeShouldSetResponder?: unknown;
    onSelectionChangeShouldSetResponderCapture?: unknown;
    onLayout?: ((event: import("react-native").LayoutChangeEvent) => void) | undefined;
    href?: string | undefined;
    hrefAttrs?: {
        target?: "top" | "_blank" | "_self" | "_top" | "blank" | "self" | undefined;
        rel?: string | undefined;
        download?: boolean | undefined;
    } | undefined;
    elevationAndroid?: string | number | undefined;
} & import("react").RefAttributes<import("@tamagui/web").TamaguiElement> & Omit<import("@tamagui/web").StackProps, keyof import("@tamagui/web").StackStylePropsBase | `$${string}` | `$${number}` | `$theme-${string}` | `$theme-${number}` | keyof import("@tamagui/web").RNViewProps | keyof import("@tamagui/web").StackNonStyleProps | keyof import("@tamagui/web").PseudoProps<import("@tamagui/web").WithThemeAndShorthands<import("@tamagui/web").StackStylePropsBase>> | keyof import("react").RefAttributes<import("@tamagui/web").TamaguiElement>>, {
    size?: SizeTokens | undefined;
    elevation?: number | SizeTokens | undefined;
    variant?: "outlined" | undefined;
    disabled?: boolean | undefined;
    unstyled?: boolean | undefined;
    transparent?: boolean | undefined;
    circular?: boolean | undefined;
    fullscreen?: boolean | undefined;
    hoverTheme?: boolean | undefined;
    pressTheme?: boolean | undefined;
    focusTheme?: boolean | undefined;
    elevate?: boolean | undefined;
    bordered?: number | boolean | undefined;
    backgrounded?: boolean | undefined;
    radiused?: boolean | undefined;
    padded?: boolean | undefined;
    chromeless?: boolean | "all" | undefined;
}, {
    displayName: string | undefined;
    __baseStyles: import("@tamagui/web").StackStylePropsBase & import("@tamagui/web").StackNonStyleProps & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/web").PseudoProps<import("@tamagui/web").WithThemeAndShorthands<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/web").MediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").StackStylePropsBase>> & {
        rel?: any;
        download?: any;
        onStartShouldSetResponder?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
        onMoveShouldSetResponder?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
        onResponderEnd?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onResponderGrant?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onResponderReject?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onResponderMove?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onResponderRelease?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onResponderStart?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onResponderTerminationRequest?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
        onResponderTerminate?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onStartShouldSetResponderCapture?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
        onMoveShouldSetResponderCapture?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
        dataSet?: Record<string, string | number | null | undefined> | undefined;
        onScrollShouldSetResponder?: unknown;
        onScrollShouldSetResponderCapture?: unknown;
        onSelectionChangeShouldSetResponder?: unknown;
        onSelectionChangeShouldSetResponderCapture?: unknown;
        onLayout?: ((event: import("react-native").LayoutChangeEvent) => void) | undefined;
        href?: string | undefined;
        hrefAttrs?: {
            target?: "top" | "_blank" | "_self" | "_top" | "blank" | "self" | undefined;
            rel?: string | undefined;
            download?: boolean | undefined;
        } | undefined;
        elevationAndroid?: string | number | undefined;
    } & import("react").RefAttributes<import("@tamagui/web").TamaguiElement> & Omit<import("@tamagui/web").StackProps, keyof import("@tamagui/web").StackStylePropsBase | `$${string}` | `$${number}` | `$theme-${string}` | `$theme-${number}` | keyof import("@tamagui/web").RNViewProps | keyof import("@tamagui/web").StackNonStyleProps | keyof import("@tamagui/web").PseudoProps<import("@tamagui/web").WithThemeAndShorthands<import("@tamagui/web").StackStylePropsBase>> | keyof import("react").RefAttributes<import("@tamagui/web").TamaguiElement>> & {
        rel?: any;
        download?: any;
        onStartShouldSetResponder?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
        onMoveShouldSetResponder?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
        onResponderEnd?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onResponderGrant?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onResponderReject?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onResponderMove?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onResponderRelease?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onResponderStart?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onResponderTerminationRequest?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
        onResponderTerminate?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onStartShouldSetResponderCapture?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
        onMoveShouldSetResponderCapture?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
        dataSet?: Record<string, string | number | null | undefined> | undefined;
        onScrollShouldSetResponder?: unknown;
        onScrollShouldSetResponderCapture?: unknown;
        onSelectionChangeShouldSetResponder?: unknown;
        onSelectionChangeShouldSetResponderCapture?: unknown;
        onLayout?: ((event: import("react-native").LayoutChangeEvent) => void) | undefined;
        href?: string | undefined;
        hrefAttrs?: {
            target?: "top" | "_blank" | "_self" | "_top" | "blank" | "self" | undefined;
            rel?: string | undefined;
            download?: boolean | undefined;
        } | undefined;
        elevationAndroid?: string | number | undefined;
    };
    __baseProps: import("@tamagui/web").StackNonStyleProps & {
        rel?: any;
        download?: any;
        onStartShouldSetResponder?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
        onMoveShouldSetResponder?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
        onResponderEnd?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onResponderGrant?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onResponderReject?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onResponderMove?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onResponderRelease?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onResponderStart?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onResponderTerminationRequest?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
        onResponderTerminate?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onStartShouldSetResponderCapture?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
        onMoveShouldSetResponderCapture?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
        dataSet?: Record<string, string | number | null | undefined> | undefined;
        onScrollShouldSetResponder?: unknown;
        onScrollShouldSetResponderCapture?: unknown;
        onSelectionChangeShouldSetResponder?: unknown;
        onSelectionChangeShouldSetResponderCapture?: unknown;
        onLayout?: ((event: import("react-native").LayoutChangeEvent) => void) | undefined;
        href?: string | undefined;
        hrefAttrs?: {
            target?: "top" | "_blank" | "_self" | "_top" | "blank" | "self" | undefined;
            rel?: string | undefined;
            download?: boolean | undefined;
        } | undefined;
        elevationAndroid?: string | number | undefined;
    } & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/web").PseudoProps<import("@tamagui/web").WithThemeAndShorthands<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/web").MediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").StackStylePropsBase>> & import("react").RefAttributes<import("@tamagui/web").TamaguiElement> & Omit<import("@tamagui/web").StackProps, keyof import("@tamagui/web").StackStylePropsBase | `$${string}` | `$${number}` | `$theme-${string}` | `$theme-${number}` | keyof import("@tamagui/web").RNViewProps | keyof import("@tamagui/web").StackNonStyleProps | keyof import("@tamagui/web").PseudoProps<import("@tamagui/web").WithThemeAndShorthands<import("@tamagui/web").StackStylePropsBase>> | keyof import("react").RefAttributes<import("@tamagui/web").TamaguiElement>> & {
        rel?: any;
        download?: any;
        onStartShouldSetResponder?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
        onMoveShouldSetResponder?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
        onResponderEnd?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onResponderGrant?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onResponderReject?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onResponderMove?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onResponderRelease?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onResponderStart?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onResponderTerminationRequest?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
        onResponderTerminate?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onStartShouldSetResponderCapture?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
        onMoveShouldSetResponderCapture?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
        dataSet?: Record<string, string | number | null | undefined> | undefined;
        onScrollShouldSetResponder?: unknown;
        onScrollShouldSetResponderCapture?: unknown;
        onSelectionChangeShouldSetResponder?: unknown;
        onSelectionChangeShouldSetResponderCapture?: unknown;
        onLayout?: ((event: import("react-native").LayoutChangeEvent) => void) | undefined;
        href?: string | undefined;
        hrefAttrs?: {
            target?: "top" | "_blank" | "_self" | "_top" | "blank" | "self" | undefined;
            rel?: string | undefined;
            download?: boolean | undefined;
        } | undefined;
        elevationAndroid?: string | number | undefined;
    };
    __variantProps: void & {
        readonly fullscreen?: boolean | undefined;
        readonly elevation?: number | SizeTokens | undefined;
    } & {
        elevation?: number | SizeTokens | undefined;
        transparent?: boolean | undefined;
        fullscreen?: boolean | undefined;
        circular?: boolean | undefined;
        hoverTheme?: boolean | undefined;
        pressTheme?: boolean | undefined;
        focusTheme?: boolean | undefined;
        elevate?: boolean | undefined;
        bordered?: number | boolean | undefined;
        backgrounded?: boolean | undefined;
        radiused?: boolean | undefined;
        padded?: boolean | undefined;
        chromeless?: boolean | "all" | undefined;
    };
}>;
declare const ButtonText: import("@tamagui/web").TamaguiComponent<import("@tamagui/web").TextNonStyleProps & import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase>> & import("@tamagui/web").PseudoProps<import("@tamagui/web").WithThemeAndShorthands<import("@tamagui/web").TextStylePropsBase>> & import("@tamagui/web").MediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").TextStylePropsBase>> & import("react").RefAttributes<import("@tamagui/web").TamaguiTextElement> & Omit<import("@tamagui/web").TextProps, "color" | "space" | "zIndex" | "display" | "fontFamily" | "fontSize" | "fontStyle" | "fontWeight" | "letterSpacing" | "lineHeight" | "textAlign" | "textDecorationLine" | "textDecorationStyle" | "textDecorationColor" | "textShadowColor" | "textShadowOffset" | "textShadowRadius" | "textTransform" | "testID" | "fontVariant" | "writingDirection" | "backfaceVisibility" | "backgroundColor" | "borderBlockColor" | "borderBlockEndColor" | "borderBlockStartColor" | "borderBottomColor" | "borderBottomEndRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderBottomStartRadius" | "borderColor" | "borderCurve" | "borderEndColor" | "borderEndEndRadius" | "borderEndStartRadius" | "borderLeftColor" | "borderRadius" | "borderRightColor" | "borderStartColor" | "borderStartEndRadius" | "borderStartStartRadius" | "borderStyle" | "borderTopColor" | "borderTopEndRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderTopStartRadius" | "opacity" | "elevation" | "pointerEvents" | "alignContent" | "alignItems" | "alignSelf" | "aspectRatio" | "borderBottomWidth" | "borderEndWidth" | "borderLeftWidth" | "borderRightWidth" | "borderStartWidth" | "borderTopWidth" | "borderWidth" | "bottom" | "end" | "flex" | "flexBasis" | "flexDirection" | "rowGap" | "gap" | "columnGap" | "flexGrow" | "flexShrink" | "flexWrap" | "height" | "justifyContent" | "left" | "margin" | "marginBottom" | "marginEnd" | "marginHorizontal" | "marginLeft" | "marginRight" | "marginStart" | "marginTop" | "marginVertical" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "overflow" | "padding" | "paddingBottom" | "paddingEnd" | "paddingHorizontal" | "paddingLeft" | "paddingRight" | "paddingStart" | "paddingTop" | "paddingVertical" | "position" | "right" | "start" | "top" | "width" | "direction" | "shadowColor" | "shadowOffset" | "shadowOpacity" | "shadowRadius" | "transform" | "transformMatrix" | "rotation" | "scaleX" | "scaleY" | "translateX" | "translateY" | "textAlignVertical" | "verticalAlign" | "includeFontPadding" | "ellipse" | "textDecorationDistance" | "textOverflow" | "whiteSpace" | "wordWrap" | "x" | "y" | "perspective" | "scale" | "skewX" | "skewY" | "matrix" | "rotate" | "rotateY" | "rotateX" | "rotateZ" | "contain" | "touchAction" | "cursor" | "outlineColor" | "outlineOffset" | "outlineStyle" | "outlineWidth" | "spaceDirection" | "separator" | "animation" | "animateOnly" | "userSelect" | "transformOrigin" | "key" | `$${string}` | `$${number}` | "maxFontSizeMultiplier" | `$theme-${string}` | `$theme-${number}` | "ref" | "children" | "onPress" | "onLongPress" | "onPressIn" | "onPressOut" | "onHoverIn" | "onHoverOut" | "onMouseEnter" | "onMouseLeave" | "onMouseDown" | "onMouseUp" | "onFocus" | "onBlur" | "style" | "allowFontScaling" | "ellipsizeMode" | "id" | "lineBreakMode" | "numberOfLines" | "onTextLayout" | "nativeID" | "adjustsFontSizeToFit" | "dynamicTypeRamp" | "minimumFontScale" | "suppressHighlighting" | "lineBreakStrategyIOS" | "disabled" | "selectable" | "selectionColor" | "textBreakStrategy" | "dataDetectorType" | "android_hyphenationFrequency" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "aria-label" | "accessibilityRole" | "accessibilityState" | "aria-busy" | "aria-checked" | "aria-disabled" | "aria-expanded" | "aria-selected" | "aria-labelledby" | "accessibilityHint" | "accessibilityValue" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "onAccessibilityAction" | "importantForAccessibility" | "aria-hidden" | "aria-live" | "aria-modal" | "role" | "accessibilityLiveRegion" | "accessibilityLabelledBy" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "accessibilityLanguage" | "theme" | "target" | "asChild" | "dangerouslySetInnerHTML" | "debug" | "className" | "themeShallow" | "themeInverse" | "tag" | "group" | "untilMeasured" | "componentName" | "tabIndex" | "disableOptimization" | "forceStyle" | "disableClassName" | "onScroll" | "hoverStyle" | "pressStyle" | "focusStyle" | "exitStyle" | "enterStyle"> & import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextNonStyleProps & import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase>> & import("@tamagui/web").PseudoProps<import("@tamagui/web").WithThemeAndShorthands<import("@tamagui/web").TextStylePropsBase>> & import("@tamagui/web").MediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").TextStylePropsBase>> & import("react").RefAttributes<import("@tamagui/web").TamaguiTextElement> & Omit<import("@tamagui/web").TextProps, "color" | "space" | "zIndex" | "display" | "fontFamily" | "fontSize" | "fontStyle" | "fontWeight" | "letterSpacing" | "lineHeight" | "textAlign" | "textDecorationLine" | "textDecorationStyle" | "textDecorationColor" | "textShadowColor" | "textShadowOffset" | "textShadowRadius" | "textTransform" | "testID" | "fontVariant" | "writingDirection" | "backfaceVisibility" | "backgroundColor" | "borderBlockColor" | "borderBlockEndColor" | "borderBlockStartColor" | "borderBottomColor" | "borderBottomEndRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderBottomStartRadius" | "borderColor" | "borderCurve" | "borderEndColor" | "borderEndEndRadius" | "borderEndStartRadius" | "borderLeftColor" | "borderRadius" | "borderRightColor" | "borderStartColor" | "borderStartEndRadius" | "borderStartStartRadius" | "borderStyle" | "borderTopColor" | "borderTopEndRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderTopStartRadius" | "opacity" | "elevation" | "pointerEvents" | "alignContent" | "alignItems" | "alignSelf" | "aspectRatio" | "borderBottomWidth" | "borderEndWidth" | "borderLeftWidth" | "borderRightWidth" | "borderStartWidth" | "borderTopWidth" | "borderWidth" | "bottom" | "end" | "flex" | "flexBasis" | "flexDirection" | "rowGap" | "gap" | "columnGap" | "flexGrow" | "flexShrink" | "flexWrap" | "height" | "justifyContent" | "left" | "margin" | "marginBottom" | "marginEnd" | "marginHorizontal" | "marginLeft" | "marginRight" | "marginStart" | "marginTop" | "marginVertical" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "overflow" | "padding" | "paddingBottom" | "paddingEnd" | "paddingHorizontal" | "paddingLeft" | "paddingRight" | "paddingStart" | "paddingTop" | "paddingVertical" | "position" | "right" | "start" | "top" | "width" | "direction" | "shadowColor" | "shadowOffset" | "shadowOpacity" | "shadowRadius" | "transform" | "transformMatrix" | "rotation" | "scaleX" | "scaleY" | "translateX" | "translateY" | "textAlignVertical" | "verticalAlign" | "includeFontPadding" | "ellipse" | "textDecorationDistance" | "textOverflow" | "whiteSpace" | "wordWrap" | "x" | "y" | "perspective" | "scale" | "skewX" | "skewY" | "matrix" | "rotate" | "rotateY" | "rotateX" | "rotateZ" | "contain" | "touchAction" | "cursor" | "outlineColor" | "outlineOffset" | "outlineStyle" | "outlineWidth" | "spaceDirection" | "separator" | "animation" | "animateOnly" | "userSelect" | "transformOrigin" | "key" | `$${string}` | `$${number}` | "maxFontSizeMultiplier" | `$theme-${string}` | `$theme-${number}` | "ref" | "children" | "onPress" | "onLongPress" | "onPressIn" | "onPressOut" | "onHoverIn" | "onHoverOut" | "onMouseEnter" | "onMouseLeave" | "onMouseDown" | "onMouseUp" | "onFocus" | "onBlur" | "style" | "allowFontScaling" | "ellipsizeMode" | "id" | "lineBreakMode" | "numberOfLines" | "onTextLayout" | "nativeID" | "adjustsFontSizeToFit" | "dynamicTypeRamp" | "minimumFontScale" | "suppressHighlighting" | "lineBreakStrategyIOS" | "disabled" | "selectable" | "selectionColor" | "textBreakStrategy" | "dataDetectorType" | "android_hyphenationFrequency" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "aria-label" | "accessibilityRole" | "accessibilityState" | "aria-busy" | "aria-checked" | "aria-disabled" | "aria-expanded" | "aria-selected" | "aria-labelledby" | "accessibilityHint" | "accessibilityValue" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "onAccessibilityAction" | "importantForAccessibility" | "aria-hidden" | "aria-live" | "aria-modal" | "role" | "accessibilityLiveRegion" | "accessibilityLabelledBy" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "accessibilityLanguage" | "theme" | "target" | "asChild" | "dangerouslySetInnerHTML" | "debug" | "className" | "themeShallow" | "themeInverse" | "tag" | "group" | "untilMeasured" | "componentName" | "tabIndex" | "disableOptimization" | "forceStyle" | "disableClassName" | "onScroll" | "hoverStyle" | "pressStyle" | "focusStyle" | "exitStyle" | "enterStyle"> & {
    size?: FontSizeTokens | undefined;
    unstyled?: boolean | undefined;
}> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextNonStyleProps & import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase>> & import("@tamagui/web").PseudoProps<import("@tamagui/web").WithThemeAndShorthands<import("@tamagui/web").TextStylePropsBase>> & import("@tamagui/web").MediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").TextStylePropsBase>> & import("react").RefAttributes<import("@tamagui/web").TamaguiTextElement> & Omit<import("@tamagui/web").TextProps, "color" | "space" | "zIndex" | "display" | "fontFamily" | "fontSize" | "fontStyle" | "fontWeight" | "letterSpacing" | "lineHeight" | "textAlign" | "textDecorationLine" | "textDecorationStyle" | "textDecorationColor" | "textShadowColor" | "textShadowOffset" | "textShadowRadius" | "textTransform" | "testID" | "fontVariant" | "writingDirection" | "backfaceVisibility" | "backgroundColor" | "borderBlockColor" | "borderBlockEndColor" | "borderBlockStartColor" | "borderBottomColor" | "borderBottomEndRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderBottomStartRadius" | "borderColor" | "borderCurve" | "borderEndColor" | "borderEndEndRadius" | "borderEndStartRadius" | "borderLeftColor" | "borderRadius" | "borderRightColor" | "borderStartColor" | "borderStartEndRadius" | "borderStartStartRadius" | "borderStyle" | "borderTopColor" | "borderTopEndRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderTopStartRadius" | "opacity" | "elevation" | "pointerEvents" | "alignContent" | "alignItems" | "alignSelf" | "aspectRatio" | "borderBottomWidth" | "borderEndWidth" | "borderLeftWidth" | "borderRightWidth" | "borderStartWidth" | "borderTopWidth" | "borderWidth" | "bottom" | "end" | "flex" | "flexBasis" | "flexDirection" | "rowGap" | "gap" | "columnGap" | "flexGrow" | "flexShrink" | "flexWrap" | "height" | "justifyContent" | "left" | "margin" | "marginBottom" | "marginEnd" | "marginHorizontal" | "marginLeft" | "marginRight" | "marginStart" | "marginTop" | "marginVertical" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "overflow" | "padding" | "paddingBottom" | "paddingEnd" | "paddingHorizontal" | "paddingLeft" | "paddingRight" | "paddingStart" | "paddingTop" | "paddingVertical" | "position" | "right" | "start" | "top" | "width" | "direction" | "shadowColor" | "shadowOffset" | "shadowOpacity" | "shadowRadius" | "transform" | "transformMatrix" | "rotation" | "scaleX" | "scaleY" | "translateX" | "translateY" | "textAlignVertical" | "verticalAlign" | "includeFontPadding" | "ellipse" | "textDecorationDistance" | "textOverflow" | "whiteSpace" | "wordWrap" | "x" | "y" | "perspective" | "scale" | "skewX" | "skewY" | "matrix" | "rotate" | "rotateY" | "rotateX" | "rotateZ" | "contain" | "touchAction" | "cursor" | "outlineColor" | "outlineOffset" | "outlineStyle" | "outlineWidth" | "spaceDirection" | "separator" | "animation" | "animateOnly" | "userSelect" | "transformOrigin" | "key" | `$${string}` | `$${number}` | "maxFontSizeMultiplier" | `$theme-${string}` | `$theme-${number}` | "ref" | "children" | "onPress" | "onLongPress" | "onPressIn" | "onPressOut" | "onHoverIn" | "onHoverOut" | "onMouseEnter" | "onMouseLeave" | "onMouseDown" | "onMouseUp" | "onFocus" | "onBlur" | "style" | "allowFontScaling" | "ellipsizeMode" | "id" | "lineBreakMode" | "numberOfLines" | "onTextLayout" | "nativeID" | "adjustsFontSizeToFit" | "dynamicTypeRamp" | "minimumFontScale" | "suppressHighlighting" | "lineBreakStrategyIOS" | "disabled" | "selectable" | "selectionColor" | "textBreakStrategy" | "dataDetectorType" | "android_hyphenationFrequency" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "aria-label" | "accessibilityRole" | "accessibilityState" | "aria-busy" | "aria-checked" | "aria-disabled" | "aria-expanded" | "aria-selected" | "aria-labelledby" | "accessibilityHint" | "accessibilityValue" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "onAccessibilityAction" | "importantForAccessibility" | "aria-hidden" | "aria-live" | "aria-modal" | "role" | "accessibilityLiveRegion" | "accessibilityLabelledBy" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "accessibilityLanguage" | "theme" | "target" | "asChild" | "dangerouslySetInnerHTML" | "debug" | "className" | "themeShallow" | "themeInverse" | "tag" | "group" | "untilMeasured" | "componentName" | "tabIndex" | "disableOptimization" | "forceStyle" | "disableClassName" | "onScroll" | "hoverStyle" | "pressStyle" | "focusStyle" | "exitStyle" | "enterStyle"> & {
    size?: FontSizeTokens | undefined;
    unstyled?: boolean | undefined;
}>> & import("@tamagui/web").PseudoProps<import("@tamagui/web").WithThemeAndShorthands<import("@tamagui/web").TextNonStyleProps & import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase>> & import("@tamagui/web").PseudoProps<import("@tamagui/web").WithThemeAndShorthands<import("@tamagui/web").TextStylePropsBase>> & import("@tamagui/web").MediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").TextStylePropsBase>> & import("react").RefAttributes<import("@tamagui/web").TamaguiTextElement> & Omit<import("@tamagui/web").TextProps, "color" | "space" | "zIndex" | "display" | "fontFamily" | "fontSize" | "fontStyle" | "fontWeight" | "letterSpacing" | "lineHeight" | "textAlign" | "textDecorationLine" | "textDecorationStyle" | "textDecorationColor" | "textShadowColor" | "textShadowOffset" | "textShadowRadius" | "textTransform" | "testID" | "fontVariant" | "writingDirection" | "backfaceVisibility" | "backgroundColor" | "borderBlockColor" | "borderBlockEndColor" | "borderBlockStartColor" | "borderBottomColor" | "borderBottomEndRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderBottomStartRadius" | "borderColor" | "borderCurve" | "borderEndColor" | "borderEndEndRadius" | "borderEndStartRadius" | "borderLeftColor" | "borderRadius" | "borderRightColor" | "borderStartColor" | "borderStartEndRadius" | "borderStartStartRadius" | "borderStyle" | "borderTopColor" | "borderTopEndRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderTopStartRadius" | "opacity" | "elevation" | "pointerEvents" | "alignContent" | "alignItems" | "alignSelf" | "aspectRatio" | "borderBottomWidth" | "borderEndWidth" | "borderLeftWidth" | "borderRightWidth" | "borderStartWidth" | "borderTopWidth" | "borderWidth" | "bottom" | "end" | "flex" | "flexBasis" | "flexDirection" | "rowGap" | "gap" | "columnGap" | "flexGrow" | "flexShrink" | "flexWrap" | "height" | "justifyContent" | "left" | "margin" | "marginBottom" | "marginEnd" | "marginHorizontal" | "marginLeft" | "marginRight" | "marginStart" | "marginTop" | "marginVertical" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "overflow" | "padding" | "paddingBottom" | "paddingEnd" | "paddingHorizontal" | "paddingLeft" | "paddingRight" | "paddingStart" | "paddingTop" | "paddingVertical" | "position" | "right" | "start" | "top" | "width" | "direction" | "shadowColor" | "shadowOffset" | "shadowOpacity" | "shadowRadius" | "transform" | "transformMatrix" | "rotation" | "scaleX" | "scaleY" | "translateX" | "translateY" | "textAlignVertical" | "verticalAlign" | "includeFontPadding" | "ellipse" | "textDecorationDistance" | "textOverflow" | "whiteSpace" | "wordWrap" | "x" | "y" | "perspective" | "scale" | "skewX" | "skewY" | "matrix" | "rotate" | "rotateY" | "rotateX" | "rotateZ" | "contain" | "touchAction" | "cursor" | "outlineColor" | "outlineOffset" | "outlineStyle" | "outlineWidth" | "spaceDirection" | "separator" | "animation" | "animateOnly" | "userSelect" | "transformOrigin" | "key" | `$${string}` | `$${number}` | "maxFontSizeMultiplier" | `$theme-${string}` | `$theme-${number}` | "ref" | "children" | "onPress" | "onLongPress" | "onPressIn" | "onPressOut" | "onHoverIn" | "onHoverOut" | "onMouseEnter" | "onMouseLeave" | "onMouseDown" | "onMouseUp" | "onFocus" | "onBlur" | "style" | "allowFontScaling" | "ellipsizeMode" | "id" | "lineBreakMode" | "numberOfLines" | "onTextLayout" | "nativeID" | "adjustsFontSizeToFit" | "dynamicTypeRamp" | "minimumFontScale" | "suppressHighlighting" | "lineBreakStrategyIOS" | "disabled" | "selectable" | "selectionColor" | "textBreakStrategy" | "dataDetectorType" | "android_hyphenationFrequency" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "aria-label" | "accessibilityRole" | "accessibilityState" | "aria-busy" | "aria-checked" | "aria-disabled" | "aria-expanded" | "aria-selected" | "aria-labelledby" | "accessibilityHint" | "accessibilityValue" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "onAccessibilityAction" | "importantForAccessibility" | "aria-hidden" | "aria-live" | "aria-modal" | "role" | "accessibilityLiveRegion" | "accessibilityLabelledBy" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "accessibilityLanguage" | "theme" | "target" | "asChild" | "dangerouslySetInnerHTML" | "debug" | "className" | "themeShallow" | "themeInverse" | "tag" | "group" | "untilMeasured" | "componentName" | "tabIndex" | "disableOptimization" | "forceStyle" | "disableClassName" | "onScroll" | "hoverStyle" | "pressStyle" | "focusStyle" | "exitStyle" | "enterStyle"> & {
    size?: FontSizeTokens | undefined;
    unstyled?: boolean | undefined;
}>> & import("@tamagui/web").MediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").TextNonStyleProps & import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase>> & import("@tamagui/web").PseudoProps<import("@tamagui/web").WithThemeAndShorthands<import("@tamagui/web").TextStylePropsBase>> & import("@tamagui/web").MediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").TextStylePropsBase>> & import("react").RefAttributes<import("@tamagui/web").TamaguiTextElement> & Omit<import("@tamagui/web").TextProps, "color" | "space" | "zIndex" | "display" | "fontFamily" | "fontSize" | "fontStyle" | "fontWeight" | "letterSpacing" | "lineHeight" | "textAlign" | "textDecorationLine" | "textDecorationStyle" | "textDecorationColor" | "textShadowColor" | "textShadowOffset" | "textShadowRadius" | "textTransform" | "testID" | "fontVariant" | "writingDirection" | "backfaceVisibility" | "backgroundColor" | "borderBlockColor" | "borderBlockEndColor" | "borderBlockStartColor" | "borderBottomColor" | "borderBottomEndRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderBottomStartRadius" | "borderColor" | "borderCurve" | "borderEndColor" | "borderEndEndRadius" | "borderEndStartRadius" | "borderLeftColor" | "borderRadius" | "borderRightColor" | "borderStartColor" | "borderStartEndRadius" | "borderStartStartRadius" | "borderStyle" | "borderTopColor" | "borderTopEndRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderTopStartRadius" | "opacity" | "elevation" | "pointerEvents" | "alignContent" | "alignItems" | "alignSelf" | "aspectRatio" | "borderBottomWidth" | "borderEndWidth" | "borderLeftWidth" | "borderRightWidth" | "borderStartWidth" | "borderTopWidth" | "borderWidth" | "bottom" | "end" | "flex" | "flexBasis" | "flexDirection" | "rowGap" | "gap" | "columnGap" | "flexGrow" | "flexShrink" | "flexWrap" | "height" | "justifyContent" | "left" | "margin" | "marginBottom" | "marginEnd" | "marginHorizontal" | "marginLeft" | "marginRight" | "marginStart" | "marginTop" | "marginVertical" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "overflow" | "padding" | "paddingBottom" | "paddingEnd" | "paddingHorizontal" | "paddingLeft" | "paddingRight" | "paddingStart" | "paddingTop" | "paddingVertical" | "position" | "right" | "start" | "top" | "width" | "direction" | "shadowColor" | "shadowOffset" | "shadowOpacity" | "shadowRadius" | "transform" | "transformMatrix" | "rotation" | "scaleX" | "scaleY" | "translateX" | "translateY" | "textAlignVertical" | "verticalAlign" | "includeFontPadding" | "ellipse" | "textDecorationDistance" | "textOverflow" | "whiteSpace" | "wordWrap" | "x" | "y" | "perspective" | "scale" | "skewX" | "skewY" | "matrix" | "rotate" | "rotateY" | "rotateX" | "rotateZ" | "contain" | "touchAction" | "cursor" | "outlineColor" | "outlineOffset" | "outlineStyle" | "outlineWidth" | "spaceDirection" | "separator" | "animation" | "animateOnly" | "userSelect" | "transformOrigin" | "key" | `$${string}` | `$${number}` | "maxFontSizeMultiplier" | `$theme-${string}` | `$theme-${number}` | "ref" | "children" | "onPress" | "onLongPress" | "onPressIn" | "onPressOut" | "onHoverIn" | "onHoverOut" | "onMouseEnter" | "onMouseLeave" | "onMouseDown" | "onMouseUp" | "onFocus" | "onBlur" | "style" | "allowFontScaling" | "ellipsizeMode" | "id" | "lineBreakMode" | "numberOfLines" | "onTextLayout" | "nativeID" | "adjustsFontSizeToFit" | "dynamicTypeRamp" | "minimumFontScale" | "suppressHighlighting" | "lineBreakStrategyIOS" | "disabled" | "selectable" | "selectionColor" | "textBreakStrategy" | "dataDetectorType" | "android_hyphenationFrequency" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "aria-label" | "accessibilityRole" | "accessibilityState" | "aria-busy" | "aria-checked" | "aria-disabled" | "aria-expanded" | "aria-selected" | "aria-labelledby" | "accessibilityHint" | "accessibilityValue" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "onAccessibilityAction" | "importantForAccessibility" | "aria-hidden" | "aria-live" | "aria-modal" | "role" | "accessibilityLiveRegion" | "accessibilityLabelledBy" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "accessibilityLanguage" | "theme" | "target" | "asChild" | "dangerouslySetInnerHTML" | "debug" | "className" | "themeShallow" | "themeInverse" | "tag" | "group" | "untilMeasured" | "componentName" | "tabIndex" | "disableOptimization" | "forceStyle" | "disableClassName" | "onScroll" | "hoverStyle" | "pressStyle" | "focusStyle" | "exitStyle" | "enterStyle"> & {
    size?: FontSizeTokens | undefined;
    unstyled?: boolean | undefined;
}>>, import("@tamagui/web").TamaguiTextElement, import("@tamagui/web").TextNonStyleProps & import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase>> & import("@tamagui/web").PseudoProps<import("@tamagui/web").WithThemeAndShorthands<import("@tamagui/web").TextStylePropsBase>> & import("@tamagui/web").MediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").TextStylePropsBase>> & import("react").RefAttributes<import("@tamagui/web").TamaguiTextElement> & Omit<import("@tamagui/web").TextProps, "color" | "space" | "zIndex" | "display" | "fontFamily" | "fontSize" | "fontStyle" | "fontWeight" | "letterSpacing" | "lineHeight" | "textAlign" | "textDecorationLine" | "textDecorationStyle" | "textDecorationColor" | "textShadowColor" | "textShadowOffset" | "textShadowRadius" | "textTransform" | "testID" | "fontVariant" | "writingDirection" | "backfaceVisibility" | "backgroundColor" | "borderBlockColor" | "borderBlockEndColor" | "borderBlockStartColor" | "borderBottomColor" | "borderBottomEndRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderBottomStartRadius" | "borderColor" | "borderCurve" | "borderEndColor" | "borderEndEndRadius" | "borderEndStartRadius" | "borderLeftColor" | "borderRadius" | "borderRightColor" | "borderStartColor" | "borderStartEndRadius" | "borderStartStartRadius" | "borderStyle" | "borderTopColor" | "borderTopEndRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderTopStartRadius" | "opacity" | "elevation" | "pointerEvents" | "alignContent" | "alignItems" | "alignSelf" | "aspectRatio" | "borderBottomWidth" | "borderEndWidth" | "borderLeftWidth" | "borderRightWidth" | "borderStartWidth" | "borderTopWidth" | "borderWidth" | "bottom" | "end" | "flex" | "flexBasis" | "flexDirection" | "rowGap" | "gap" | "columnGap" | "flexGrow" | "flexShrink" | "flexWrap" | "height" | "justifyContent" | "left" | "margin" | "marginBottom" | "marginEnd" | "marginHorizontal" | "marginLeft" | "marginRight" | "marginStart" | "marginTop" | "marginVertical" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "overflow" | "padding" | "paddingBottom" | "paddingEnd" | "paddingHorizontal" | "paddingLeft" | "paddingRight" | "paddingStart" | "paddingTop" | "paddingVertical" | "position" | "right" | "start" | "top" | "width" | "direction" | "shadowColor" | "shadowOffset" | "shadowOpacity" | "shadowRadius" | "transform" | "transformMatrix" | "rotation" | "scaleX" | "scaleY" | "translateX" | "translateY" | "textAlignVertical" | "verticalAlign" | "includeFontPadding" | "ellipse" | "textDecorationDistance" | "textOverflow" | "whiteSpace" | "wordWrap" | "x" | "y" | "perspective" | "scale" | "skewX" | "skewY" | "matrix" | "rotate" | "rotateY" | "rotateX" | "rotateZ" | "contain" | "touchAction" | "cursor" | "outlineColor" | "outlineOffset" | "outlineStyle" | "outlineWidth" | "spaceDirection" | "separator" | "animation" | "animateOnly" | "userSelect" | "transformOrigin" | "key" | `$${string}` | `$${number}` | "maxFontSizeMultiplier" | `$theme-${string}` | `$theme-${number}` | "ref" | "children" | "onPress" | "onLongPress" | "onPressIn" | "onPressOut" | "onHoverIn" | "onHoverOut" | "onMouseEnter" | "onMouseLeave" | "onMouseDown" | "onMouseUp" | "onFocus" | "onBlur" | "style" | "allowFontScaling" | "ellipsizeMode" | "id" | "lineBreakMode" | "numberOfLines" | "onTextLayout" | "nativeID" | "adjustsFontSizeToFit" | "dynamicTypeRamp" | "minimumFontScale" | "suppressHighlighting" | "lineBreakStrategyIOS" | "disabled" | "selectable" | "selectionColor" | "textBreakStrategy" | "dataDetectorType" | "android_hyphenationFrequency" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "aria-label" | "accessibilityRole" | "accessibilityState" | "aria-busy" | "aria-checked" | "aria-disabled" | "aria-expanded" | "aria-selected" | "aria-labelledby" | "accessibilityHint" | "accessibilityValue" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "onAccessibilityAction" | "importantForAccessibility" | "aria-hidden" | "aria-live" | "aria-modal" | "role" | "accessibilityLiveRegion" | "accessibilityLabelledBy" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "accessibilityLanguage" | "theme" | "target" | "asChild" | "dangerouslySetInnerHTML" | "debug" | "className" | "themeShallow" | "themeInverse" | "tag" | "group" | "untilMeasured" | "componentName" | "tabIndex" | "disableOptimization" | "forceStyle" | "disableClassName" | "onScroll" | "hoverStyle" | "pressStyle" | "focusStyle" | "exitStyle" | "enterStyle">, import("@tamagui/web").TextNonStyleProps & import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase>> & import("@tamagui/web").PseudoProps<import("@tamagui/web").WithThemeAndShorthands<import("@tamagui/web").TextStylePropsBase>> & import("@tamagui/web").MediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").TextStylePropsBase>> & import("react").RefAttributes<import("@tamagui/web").TamaguiTextElement> & Omit<import("@tamagui/web").TextProps, "color" | "space" | "zIndex" | "display" | "fontFamily" | "fontSize" | "fontStyle" | "fontWeight" | "letterSpacing" | "lineHeight" | "textAlign" | "textDecorationLine" | "textDecorationStyle" | "textDecorationColor" | "textShadowColor" | "textShadowOffset" | "textShadowRadius" | "textTransform" | "testID" | "fontVariant" | "writingDirection" | "backfaceVisibility" | "backgroundColor" | "borderBlockColor" | "borderBlockEndColor" | "borderBlockStartColor" | "borderBottomColor" | "borderBottomEndRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderBottomStartRadius" | "borderColor" | "borderCurve" | "borderEndColor" | "borderEndEndRadius" | "borderEndStartRadius" | "borderLeftColor" | "borderRadius" | "borderRightColor" | "borderStartColor" | "borderStartEndRadius" | "borderStartStartRadius" | "borderStyle" | "borderTopColor" | "borderTopEndRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderTopStartRadius" | "opacity" | "elevation" | "pointerEvents" | "alignContent" | "alignItems" | "alignSelf" | "aspectRatio" | "borderBottomWidth" | "borderEndWidth" | "borderLeftWidth" | "borderRightWidth" | "borderStartWidth" | "borderTopWidth" | "borderWidth" | "bottom" | "end" | "flex" | "flexBasis" | "flexDirection" | "rowGap" | "gap" | "columnGap" | "flexGrow" | "flexShrink" | "flexWrap" | "height" | "justifyContent" | "left" | "margin" | "marginBottom" | "marginEnd" | "marginHorizontal" | "marginLeft" | "marginRight" | "marginStart" | "marginTop" | "marginVertical" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "overflow" | "padding" | "paddingBottom" | "paddingEnd" | "paddingHorizontal" | "paddingLeft" | "paddingRight" | "paddingStart" | "paddingTop" | "paddingVertical" | "position" | "right" | "start" | "top" | "width" | "direction" | "shadowColor" | "shadowOffset" | "shadowOpacity" | "shadowRadius" | "transform" | "transformMatrix" | "rotation" | "scaleX" | "scaleY" | "translateX" | "translateY" | "textAlignVertical" | "verticalAlign" | "includeFontPadding" | "ellipse" | "textDecorationDistance" | "textOverflow" | "whiteSpace" | "wordWrap" | "x" | "y" | "perspective" | "scale" | "skewX" | "skewY" | "matrix" | "rotate" | "rotateY" | "rotateX" | "rotateZ" | "contain" | "touchAction" | "cursor" | "outlineColor" | "outlineOffset" | "outlineStyle" | "outlineWidth" | "spaceDirection" | "separator" | "animation" | "animateOnly" | "userSelect" | "transformOrigin" | "key" | `$${string}` | `$${number}` | "maxFontSizeMultiplier" | `$theme-${string}` | `$theme-${number}` | "ref" | "children" | "onPress" | "onLongPress" | "onPressIn" | "onPressOut" | "onHoverIn" | "onHoverOut" | "onMouseEnter" | "onMouseLeave" | "onMouseDown" | "onMouseUp" | "onFocus" | "onBlur" | "style" | "allowFontScaling" | "ellipsizeMode" | "id" | "lineBreakMode" | "numberOfLines" | "onTextLayout" | "nativeID" | "adjustsFontSizeToFit" | "dynamicTypeRamp" | "minimumFontScale" | "suppressHighlighting" | "lineBreakStrategyIOS" | "disabled" | "selectable" | "selectionColor" | "textBreakStrategy" | "dataDetectorType" | "android_hyphenationFrequency" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "aria-label" | "accessibilityRole" | "accessibilityState" | "aria-busy" | "aria-checked" | "aria-disabled" | "aria-expanded" | "aria-selected" | "aria-labelledby" | "accessibilityHint" | "accessibilityValue" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "onAccessibilityAction" | "importantForAccessibility" | "aria-hidden" | "aria-live" | "aria-modal" | "role" | "accessibilityLiveRegion" | "accessibilityLabelledBy" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "accessibilityLanguage" | "theme" | "target" | "asChild" | "dangerouslySetInnerHTML" | "debug" | "className" | "themeShallow" | "themeInverse" | "tag" | "group" | "untilMeasured" | "componentName" | "tabIndex" | "disableOptimization" | "forceStyle" | "disableClassName" | "onScroll" | "hoverStyle" | "pressStyle" | "focusStyle" | "exitStyle" | "enterStyle">, {
    size?: FontSizeTokens | undefined;
    unstyled?: boolean | undefined;
}, {
    displayName: string | undefined;
    __baseStyles: import("@tamagui/web").TextStylePropsBase & import("@tamagui/web").TextNonStyleProps & import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase>> & import("@tamagui/web").PseudoProps<import("@tamagui/web").WithThemeAndShorthands<import("@tamagui/web").TextStylePropsBase>> & import("@tamagui/web").MediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").TextStylePropsBase>> & import("react").RefAttributes<import("@tamagui/web").TamaguiTextElement> & Omit<import("@tamagui/web").TextProps, "color" | "space" | "zIndex" | "display" | "fontFamily" | "fontSize" | "fontStyle" | "fontWeight" | "letterSpacing" | "lineHeight" | "textAlign" | "textDecorationLine" | "textDecorationStyle" | "textDecorationColor" | "textShadowColor" | "textShadowOffset" | "textShadowRadius" | "textTransform" | "testID" | "fontVariant" | "writingDirection" | "backfaceVisibility" | "backgroundColor" | "borderBlockColor" | "borderBlockEndColor" | "borderBlockStartColor" | "borderBottomColor" | "borderBottomEndRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderBottomStartRadius" | "borderColor" | "borderCurve" | "borderEndColor" | "borderEndEndRadius" | "borderEndStartRadius" | "borderLeftColor" | "borderRadius" | "borderRightColor" | "borderStartColor" | "borderStartEndRadius" | "borderStartStartRadius" | "borderStyle" | "borderTopColor" | "borderTopEndRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderTopStartRadius" | "opacity" | "elevation" | "pointerEvents" | "alignContent" | "alignItems" | "alignSelf" | "aspectRatio" | "borderBottomWidth" | "borderEndWidth" | "borderLeftWidth" | "borderRightWidth" | "borderStartWidth" | "borderTopWidth" | "borderWidth" | "bottom" | "end" | "flex" | "flexBasis" | "flexDirection" | "rowGap" | "gap" | "columnGap" | "flexGrow" | "flexShrink" | "flexWrap" | "height" | "justifyContent" | "left" | "margin" | "marginBottom" | "marginEnd" | "marginHorizontal" | "marginLeft" | "marginRight" | "marginStart" | "marginTop" | "marginVertical" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "overflow" | "padding" | "paddingBottom" | "paddingEnd" | "paddingHorizontal" | "paddingLeft" | "paddingRight" | "paddingStart" | "paddingTop" | "paddingVertical" | "position" | "right" | "start" | "top" | "width" | "direction" | "shadowColor" | "shadowOffset" | "shadowOpacity" | "shadowRadius" | "transform" | "transformMatrix" | "rotation" | "scaleX" | "scaleY" | "translateX" | "translateY" | "textAlignVertical" | "verticalAlign" | "includeFontPadding" | "ellipse" | "textDecorationDistance" | "textOverflow" | "whiteSpace" | "wordWrap" | "x" | "y" | "perspective" | "scale" | "skewX" | "skewY" | "matrix" | "rotate" | "rotateY" | "rotateX" | "rotateZ" | "contain" | "touchAction" | "cursor" | "outlineColor" | "outlineOffset" | "outlineStyle" | "outlineWidth" | "spaceDirection" | "separator" | "animation" | "animateOnly" | "userSelect" | "transformOrigin" | "key" | `$${string}` | `$${number}` | "maxFontSizeMultiplier" | `$theme-${string}` | `$theme-${number}` | "ref" | "children" | "onPress" | "onLongPress" | "onPressIn" | "onPressOut" | "onHoverIn" | "onHoverOut" | "onMouseEnter" | "onMouseLeave" | "onMouseDown" | "onMouseUp" | "onFocus" | "onBlur" | "style" | "allowFontScaling" | "ellipsizeMode" | "id" | "lineBreakMode" | "numberOfLines" | "onTextLayout" | "nativeID" | "adjustsFontSizeToFit" | "dynamicTypeRamp" | "minimumFontScale" | "suppressHighlighting" | "lineBreakStrategyIOS" | "disabled" | "selectable" | "selectionColor" | "textBreakStrategy" | "dataDetectorType" | "android_hyphenationFrequency" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "aria-label" | "accessibilityRole" | "accessibilityState" | "aria-busy" | "aria-checked" | "aria-disabled" | "aria-expanded" | "aria-selected" | "aria-labelledby" | "accessibilityHint" | "accessibilityValue" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "onAccessibilityAction" | "importantForAccessibility" | "aria-hidden" | "aria-live" | "aria-modal" | "role" | "accessibilityLiveRegion" | "accessibilityLabelledBy" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "accessibilityLanguage" | "theme" | "target" | "asChild" | "dangerouslySetInnerHTML" | "debug" | "className" | "themeShallow" | "themeInverse" | "tag" | "group" | "untilMeasured" | "componentName" | "tabIndex" | "disableOptimization" | "forceStyle" | "disableClassName" | "onScroll" | "hoverStyle" | "pressStyle" | "focusStyle" | "exitStyle" | "enterStyle">;
    __baseProps: import("@tamagui/web").TextNonStyleProps & import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase>> & import("@tamagui/web").PseudoProps<import("@tamagui/web").WithThemeAndShorthands<import("@tamagui/web").TextStylePropsBase>> & import("@tamagui/web").MediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").TextStylePropsBase>> & import("react").RefAttributes<import("@tamagui/web").TamaguiTextElement> & Omit<import("@tamagui/web").TextProps, "color" | "space" | "zIndex" | "display" | "fontFamily" | "fontSize" | "fontStyle" | "fontWeight" | "letterSpacing" | "lineHeight" | "textAlign" | "textDecorationLine" | "textDecorationStyle" | "textDecorationColor" | "textShadowColor" | "textShadowOffset" | "textShadowRadius" | "textTransform" | "testID" | "fontVariant" | "writingDirection" | "backfaceVisibility" | "backgroundColor" | "borderBlockColor" | "borderBlockEndColor" | "borderBlockStartColor" | "borderBottomColor" | "borderBottomEndRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderBottomStartRadius" | "borderColor" | "borderCurve" | "borderEndColor" | "borderEndEndRadius" | "borderEndStartRadius" | "borderLeftColor" | "borderRadius" | "borderRightColor" | "borderStartColor" | "borderStartEndRadius" | "borderStartStartRadius" | "borderStyle" | "borderTopColor" | "borderTopEndRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderTopStartRadius" | "opacity" | "elevation" | "pointerEvents" | "alignContent" | "alignItems" | "alignSelf" | "aspectRatio" | "borderBottomWidth" | "borderEndWidth" | "borderLeftWidth" | "borderRightWidth" | "borderStartWidth" | "borderTopWidth" | "borderWidth" | "bottom" | "end" | "flex" | "flexBasis" | "flexDirection" | "rowGap" | "gap" | "columnGap" | "flexGrow" | "flexShrink" | "flexWrap" | "height" | "justifyContent" | "left" | "margin" | "marginBottom" | "marginEnd" | "marginHorizontal" | "marginLeft" | "marginRight" | "marginStart" | "marginTop" | "marginVertical" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "overflow" | "padding" | "paddingBottom" | "paddingEnd" | "paddingHorizontal" | "paddingLeft" | "paddingRight" | "paddingStart" | "paddingTop" | "paddingVertical" | "position" | "right" | "start" | "top" | "width" | "direction" | "shadowColor" | "shadowOffset" | "shadowOpacity" | "shadowRadius" | "transform" | "transformMatrix" | "rotation" | "scaleX" | "scaleY" | "translateX" | "translateY" | "textAlignVertical" | "verticalAlign" | "includeFontPadding" | "ellipse" | "textDecorationDistance" | "textOverflow" | "whiteSpace" | "wordWrap" | "x" | "y" | "perspective" | "scale" | "skewX" | "skewY" | "matrix" | "rotate" | "rotateY" | "rotateX" | "rotateZ" | "contain" | "touchAction" | "cursor" | "outlineColor" | "outlineOffset" | "outlineStyle" | "outlineWidth" | "spaceDirection" | "separator" | "animation" | "animateOnly" | "userSelect" | "transformOrigin" | "key" | `$${string}` | `$${number}` | "maxFontSizeMultiplier" | `$theme-${string}` | `$theme-${number}` | "ref" | "children" | "onPress" | "onLongPress" | "onPressIn" | "onPressOut" | "onHoverIn" | "onHoverOut" | "onMouseEnter" | "onMouseLeave" | "onMouseDown" | "onMouseUp" | "onFocus" | "onBlur" | "style" | "allowFontScaling" | "ellipsizeMode" | "id" | "lineBreakMode" | "numberOfLines" | "onTextLayout" | "nativeID" | "adjustsFontSizeToFit" | "dynamicTypeRamp" | "minimumFontScale" | "suppressHighlighting" | "lineBreakStrategyIOS" | "disabled" | "selectable" | "selectionColor" | "textBreakStrategy" | "dataDetectorType" | "android_hyphenationFrequency" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "aria-label" | "accessibilityRole" | "accessibilityState" | "aria-busy" | "aria-checked" | "aria-disabled" | "aria-expanded" | "aria-selected" | "aria-labelledby" | "accessibilityHint" | "accessibilityValue" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "onAccessibilityAction" | "importantForAccessibility" | "aria-hidden" | "aria-live" | "aria-modal" | "role" | "accessibilityLiveRegion" | "accessibilityLabelledBy" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "accessibilityLanguage" | "theme" | "target" | "asChild" | "dangerouslySetInnerHTML" | "debug" | "className" | "themeShallow" | "themeInverse" | "tag" | "group" | "untilMeasured" | "componentName" | "tabIndex" | "disableOptimization" | "forceStyle" | "disableClassName" | "onScroll" | "hoverStyle" | "pressStyle" | "focusStyle" | "exitStyle" | "enterStyle">;
    __variantProps: void & {
        readonly unstyled?: boolean | undefined;
        readonly size?: FontSizeTokens | undefined;
    };
}>;
declare const ButtonIcon: (props: {
    children: React.ReactNode;
    scaleIcon?: number;
}) => any;
/**
 * @deprecated Instead of useButton, see the Button docs for the newer and much improved Advanced customization pattern: https://tamagui.dev/docs/components/button
 */
declare const buttonStaticConfig: {
    inlineProps: Set<string>;
};
declare const Button: import("@tamagui/web").ReactComponentWithRef<Omit<import("@tamagui/web").StackNonStyleProps & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/web").PseudoProps<import("@tamagui/web").WithThemeAndShorthands<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/web").MediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").StackStylePropsBase>> & {
    rel?: any;
    download?: any;
    onStartShouldSetResponder?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
    onMoveShouldSetResponder?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
    onResponderEnd?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
    onResponderGrant?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
    onResponderReject?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
    onResponderMove?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
    onResponderRelease?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
    onResponderStart?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
    onResponderTerminationRequest?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
    onResponderTerminate?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
    onStartShouldSetResponderCapture?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
    onMoveShouldSetResponderCapture?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
    dataSet?: Record<string, string | number | null | undefined> | undefined;
    onScrollShouldSetResponder?: unknown;
    onScrollShouldSetResponderCapture?: unknown;
    onSelectionChangeShouldSetResponder?: unknown;
    onSelectionChangeShouldSetResponderCapture?: unknown;
    onLayout?: ((event: import("react-native").LayoutChangeEvent) => void) | undefined;
    href?: string | undefined;
    hrefAttrs?: {
        target?: "top" | "_blank" | "_self" | "_top" | "blank" | "self" | undefined;
        rel?: string | undefined;
        download?: boolean | undefined;
    } | undefined;
    elevationAndroid?: string | number | undefined;
} & import("react").RefAttributes<import("@tamagui/web").TamaguiElement> & Omit<import("@tamagui/web").StackProps, keyof import("@tamagui/web").StackStylePropsBase | `$${string}` | `$${number}` | `$theme-${string}` | `$theme-${number}` | keyof import("@tamagui/web").RNViewProps | keyof import("@tamagui/web").StackNonStyleProps | keyof import("@tamagui/web").PseudoProps<import("@tamagui/web").WithThemeAndShorthands<import("@tamagui/web").StackStylePropsBase>> | keyof import("react").RefAttributes<import("@tamagui/web").TamaguiElement>> & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackNonStyleProps & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/web").PseudoProps<import("@tamagui/web").WithThemeAndShorthands<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/web").MediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").StackStylePropsBase>> & {
    rel?: any;
    download?: any;
    onStartShouldSetResponder?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
    onMoveShouldSetResponder?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
    onResponderEnd?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
    onResponderGrant?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
    onResponderReject?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
    onResponderMove?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
    onResponderRelease?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
    onResponderStart?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
    onResponderTerminationRequest?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
    onResponderTerminate?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
    onStartShouldSetResponderCapture?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
    onMoveShouldSetResponderCapture?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
    dataSet?: Record<string, string | number | null | undefined> | undefined;
    onScrollShouldSetResponder?: unknown;
    onScrollShouldSetResponderCapture?: unknown;
    onSelectionChangeShouldSetResponder?: unknown;
    onSelectionChangeShouldSetResponderCapture?: unknown;
    onLayout?: ((event: import("react-native").LayoutChangeEvent) => void) | undefined;
    href?: string | undefined;
    hrefAttrs?: {
        target?: "top" | "_blank" | "_self" | "_top" | "blank" | "self" | undefined;
        rel?: string | undefined;
        download?: boolean | undefined;
    } | undefined;
    elevationAndroid?: string | number | undefined;
} & import("react").RefAttributes<import("@tamagui/web").TamaguiElement> & Omit<import("@tamagui/web").StackProps, keyof import("@tamagui/web").StackStylePropsBase | `$${string}` | `$${number}` | `$theme-${string}` | `$theme-${number}` | keyof import("@tamagui/web").RNViewProps | keyof import("@tamagui/web").StackNonStyleProps | keyof import("@tamagui/web").PseudoProps<import("@tamagui/web").WithThemeAndShorthands<import("@tamagui/web").StackStylePropsBase>> | keyof import("react").RefAttributes<import("@tamagui/web").TamaguiElement>> & {
    size?: SizeTokens | undefined;
    elevation?: number | SizeTokens | undefined;
    variant?: "outlined" | undefined;
    disabled?: boolean | undefined;
    unstyled?: boolean | undefined;
    transparent?: boolean | undefined;
    circular?: boolean | undefined;
    fullscreen?: boolean | undefined;
    hoverTheme?: boolean | undefined;
    pressTheme?: boolean | undefined;
    focusTheme?: boolean | undefined;
    elevate?: boolean | undefined;
    bordered?: number | boolean | undefined;
    backgrounded?: boolean | undefined;
    radiused?: boolean | undefined;
    padded?: boolean | undefined;
    chromeless?: boolean | "all" | undefined;
}> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackNonStyleProps & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/web").PseudoProps<import("@tamagui/web").WithThemeAndShorthands<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/web").MediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").StackStylePropsBase>> & {
    rel?: any;
    download?: any;
    onStartShouldSetResponder?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
    onMoveShouldSetResponder?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
    onResponderEnd?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
    onResponderGrant?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
    onResponderReject?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
    onResponderMove?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
    onResponderRelease?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
    onResponderStart?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
    onResponderTerminationRequest?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
    onResponderTerminate?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
    onStartShouldSetResponderCapture?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
    onMoveShouldSetResponderCapture?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
    dataSet?: Record<string, string | number | null | undefined> | undefined;
    onScrollShouldSetResponder?: unknown;
    onScrollShouldSetResponderCapture?: unknown;
    onSelectionChangeShouldSetResponder?: unknown;
    onSelectionChangeShouldSetResponderCapture?: unknown;
    onLayout?: ((event: import("react-native").LayoutChangeEvent) => void) | undefined;
    href?: string | undefined;
    hrefAttrs?: {
        target?: "top" | "_blank" | "_self" | "_top" | "blank" | "self" | undefined;
        rel?: string | undefined;
        download?: boolean | undefined;
    } | undefined;
    elevationAndroid?: string | number | undefined;
} & import("react").RefAttributes<import("@tamagui/web").TamaguiElement> & Omit<import("@tamagui/web").StackProps, keyof import("@tamagui/web").StackStylePropsBase | `$${string}` | `$${number}` | `$theme-${string}` | `$theme-${number}` | keyof import("@tamagui/web").RNViewProps | keyof import("@tamagui/web").StackNonStyleProps | keyof import("@tamagui/web").PseudoProps<import("@tamagui/web").WithThemeAndShorthands<import("@tamagui/web").StackStylePropsBase>> | keyof import("react").RefAttributes<import("@tamagui/web").TamaguiElement>> & {
    size?: SizeTokens | undefined;
    elevation?: number | SizeTokens | undefined;
    variant?: "outlined" | undefined;
    disabled?: boolean | undefined;
    unstyled?: boolean | undefined;
    transparent?: boolean | undefined;
    circular?: boolean | undefined;
    fullscreen?: boolean | undefined;
    hoverTheme?: boolean | undefined;
    pressTheme?: boolean | undefined;
    focusTheme?: boolean | undefined;
    elevate?: boolean | undefined;
    bordered?: number | boolean | undefined;
    backgrounded?: boolean | undefined;
    radiused?: boolean | undefined;
    padded?: boolean | undefined;
    chromeless?: boolean | "all" | undefined;
}>> & import("@tamagui/web").PseudoProps<import("@tamagui/web").WithThemeAndShorthands<import("@tamagui/web").StackNonStyleProps & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/web").PseudoProps<import("@tamagui/web").WithThemeAndShorthands<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/web").MediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").StackStylePropsBase>> & {
    rel?: any;
    download?: any;
    onStartShouldSetResponder?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
    onMoveShouldSetResponder?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
    onResponderEnd?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
    onResponderGrant?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
    onResponderReject?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
    onResponderMove?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
    onResponderRelease?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
    onResponderStart?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
    onResponderTerminationRequest?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
    onResponderTerminate?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
    onStartShouldSetResponderCapture?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
    onMoveShouldSetResponderCapture?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
    dataSet?: Record<string, string | number | null | undefined> | undefined;
    onScrollShouldSetResponder?: unknown;
    onScrollShouldSetResponderCapture?: unknown;
    onSelectionChangeShouldSetResponder?: unknown;
    onSelectionChangeShouldSetResponderCapture?: unknown;
    onLayout?: ((event: import("react-native").LayoutChangeEvent) => void) | undefined;
    href?: string | undefined;
    hrefAttrs?: {
        target?: "top" | "_blank" | "_self" | "_top" | "blank" | "self" | undefined;
        rel?: string | undefined;
        download?: boolean | undefined;
    } | undefined;
    elevationAndroid?: string | number | undefined;
} & import("react").RefAttributes<import("@tamagui/web").TamaguiElement> & Omit<import("@tamagui/web").StackProps, keyof import("@tamagui/web").StackStylePropsBase | `$${string}` | `$${number}` | `$theme-${string}` | `$theme-${number}` | keyof import("@tamagui/web").RNViewProps | keyof import("@tamagui/web").StackNonStyleProps | keyof import("@tamagui/web").PseudoProps<import("@tamagui/web").WithThemeAndShorthands<import("@tamagui/web").StackStylePropsBase>> | keyof import("react").RefAttributes<import("@tamagui/web").TamaguiElement>> & {
    size?: SizeTokens | undefined;
    elevation?: number | SizeTokens | undefined;
    variant?: "outlined" | undefined;
    disabled?: boolean | undefined;
    unstyled?: boolean | undefined;
    transparent?: boolean | undefined;
    circular?: boolean | undefined;
    fullscreen?: boolean | undefined;
    hoverTheme?: boolean | undefined;
    pressTheme?: boolean | undefined;
    focusTheme?: boolean | undefined;
    elevate?: boolean | undefined;
    bordered?: number | boolean | undefined;
    backgrounded?: boolean | undefined;
    radiused?: boolean | undefined;
    padded?: boolean | undefined;
    chromeless?: boolean | "all" | undefined;
}>> & import("@tamagui/web").MediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").StackNonStyleProps & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/web").PseudoProps<import("@tamagui/web").WithThemeAndShorthands<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/web").MediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").StackStylePropsBase>> & {
    rel?: any;
    download?: any;
    onStartShouldSetResponder?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
    onMoveShouldSetResponder?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
    onResponderEnd?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
    onResponderGrant?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
    onResponderReject?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
    onResponderMove?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
    onResponderRelease?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
    onResponderStart?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
    onResponderTerminationRequest?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
    onResponderTerminate?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
    onStartShouldSetResponderCapture?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
    onMoveShouldSetResponderCapture?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
    dataSet?: Record<string, string | number | null | undefined> | undefined;
    onScrollShouldSetResponder?: unknown;
    onScrollShouldSetResponderCapture?: unknown;
    onSelectionChangeShouldSetResponder?: unknown;
    onSelectionChangeShouldSetResponderCapture?: unknown;
    onLayout?: ((event: import("react-native").LayoutChangeEvent) => void) | undefined;
    href?: string | undefined;
    hrefAttrs?: {
        target?: "top" | "_blank" | "_self" | "_top" | "blank" | "self" | undefined;
        rel?: string | undefined;
        download?: boolean | undefined;
    } | undefined;
    elevationAndroid?: string | number | undefined;
} & import("react").RefAttributes<import("@tamagui/web").TamaguiElement> & Omit<import("@tamagui/web").StackProps, keyof import("@tamagui/web").StackStylePropsBase | `$${string}` | `$${number}` | `$theme-${string}` | `$theme-${number}` | keyof import("@tamagui/web").RNViewProps | keyof import("@tamagui/web").StackNonStyleProps | keyof import("@tamagui/web").PseudoProps<import("@tamagui/web").WithThemeAndShorthands<import("@tamagui/web").StackStylePropsBase>> | keyof import("react").RefAttributes<import("@tamagui/web").TamaguiElement>> & {
    size?: SizeTokens | undefined;
    elevation?: number | SizeTokens | undefined;
    variant?: "outlined" | undefined;
    disabled?: boolean | undefined;
    unstyled?: boolean | undefined;
    transparent?: boolean | undefined;
    circular?: boolean | undefined;
    fullscreen?: boolean | undefined;
    hoverTheme?: boolean | undefined;
    pressTheme?: boolean | undefined;
    focusTheme?: boolean | undefined;
    elevate?: boolean | undefined;
    bordered?: number | boolean | undefined;
    backgrounded?: boolean | undefined;
    radiused?: boolean | undefined;
    padded?: boolean | undefined;
    chromeless?: boolean | "all" | undefined;
}>>, keyof TextContextStyles | "unstyled" | "textProps" | "noTextWrap" | keyof ThemeableProps | "icon" | "iconAfter" | "scaleIcon" | "spaceFlex" | "scaleSpace"> & TextContextStyles & {
    textProps?: Partial<import("@tamagui/web").TextNonStyleProps & import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase>> & import("@tamagui/web").PseudoProps<import("@tamagui/web").WithThemeAndShorthands<import("@tamagui/web").TextStylePropsBase>> & import("@tamagui/web").MediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").TextStylePropsBase>> & import("react").RefAttributes<import("@tamagui/web").TamaguiTextElement> & Omit<import("@tamagui/web").TextProps, "color" | "space" | "zIndex" | "display" | "fontFamily" | "fontSize" | "fontStyle" | "fontWeight" | "letterSpacing" | "lineHeight" | "textAlign" | "textDecorationLine" | "textDecorationStyle" | "textDecorationColor" | "textShadowColor" | "textShadowOffset" | "textShadowRadius" | "textTransform" | "testID" | "fontVariant" | "writingDirection" | "backfaceVisibility" | "backgroundColor" | "borderBlockColor" | "borderBlockEndColor" | "borderBlockStartColor" | "borderBottomColor" | "borderBottomEndRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderBottomStartRadius" | "borderColor" | "borderCurve" | "borderEndColor" | "borderEndEndRadius" | "borderEndStartRadius" | "borderLeftColor" | "borderRadius" | "borderRightColor" | "borderStartColor" | "borderStartEndRadius" | "borderStartStartRadius" | "borderStyle" | "borderTopColor" | "borderTopEndRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderTopStartRadius" | "opacity" | "elevation" | "pointerEvents" | "alignContent" | "alignItems" | "alignSelf" | "aspectRatio" | "borderBottomWidth" | "borderEndWidth" | "borderLeftWidth" | "borderRightWidth" | "borderStartWidth" | "borderTopWidth" | "borderWidth" | "bottom" | "end" | "flex" | "flexBasis" | "flexDirection" | "rowGap" | "gap" | "columnGap" | "flexGrow" | "flexShrink" | "flexWrap" | "height" | "justifyContent" | "left" | "margin" | "marginBottom" | "marginEnd" | "marginHorizontal" | "marginLeft" | "marginRight" | "marginStart" | "marginTop" | "marginVertical" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "overflow" | "padding" | "paddingBottom" | "paddingEnd" | "paddingHorizontal" | "paddingLeft" | "paddingRight" | "paddingStart" | "paddingTop" | "paddingVertical" | "position" | "right" | "start" | "top" | "width" | "direction" | "shadowColor" | "shadowOffset" | "shadowOpacity" | "shadowRadius" | "transform" | "transformMatrix" | "rotation" | "scaleX" | "scaleY" | "translateX" | "translateY" | "textAlignVertical" | "verticalAlign" | "includeFontPadding" | "ellipse" | "textDecorationDistance" | "textOverflow" | "whiteSpace" | "wordWrap" | "x" | "y" | "perspective" | "scale" | "skewX" | "skewY" | "matrix" | "rotate" | "rotateY" | "rotateX" | "rotateZ" | "contain" | "touchAction" | "cursor" | "outlineColor" | "outlineOffset" | "outlineStyle" | "outlineWidth" | "spaceDirection" | "separator" | "animation" | "animateOnly" | "userSelect" | "transformOrigin" | "key" | `$${string}` | `$${number}` | "maxFontSizeMultiplier" | `$theme-${string}` | `$theme-${number}` | "ref" | "children" | "onPress" | "onLongPress" | "onPressIn" | "onPressOut" | "onHoverIn" | "onHoverOut" | "onMouseEnter" | "onMouseLeave" | "onMouseDown" | "onMouseUp" | "onFocus" | "onBlur" | "style" | "allowFontScaling" | "ellipsizeMode" | "id" | "lineBreakMode" | "numberOfLines" | "onTextLayout" | "nativeID" | "adjustsFontSizeToFit" | "dynamicTypeRamp" | "minimumFontScale" | "suppressHighlighting" | "lineBreakStrategyIOS" | "disabled" | "selectable" | "selectionColor" | "textBreakStrategy" | "dataDetectorType" | "android_hyphenationFrequency" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "aria-label" | "accessibilityRole" | "accessibilityState" | "aria-busy" | "aria-checked" | "aria-disabled" | "aria-expanded" | "aria-selected" | "aria-labelledby" | "accessibilityHint" | "accessibilityValue" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "onAccessibilityAction" | "importantForAccessibility" | "aria-hidden" | "aria-live" | "aria-modal" | "role" | "accessibilityLiveRegion" | "accessibilityLabelledBy" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "accessibilityLanguage" | "theme" | "target" | "asChild" | "dangerouslySetInnerHTML" | "debug" | "className" | "themeShallow" | "themeInverse" | "tag" | "group" | "untilMeasured" | "componentName" | "tabIndex" | "disableOptimization" | "forceStyle" | "disableClassName" | "onScroll" | "hoverStyle" | "pressStyle" | "focusStyle" | "exitStyle" | "enterStyle"> & import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextNonStyleProps & import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase>> & import("@tamagui/web").PseudoProps<import("@tamagui/web").WithThemeAndShorthands<import("@tamagui/web").TextStylePropsBase>> & import("@tamagui/web").MediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").TextStylePropsBase>> & import("react").RefAttributes<import("@tamagui/web").TamaguiTextElement> & Omit<import("@tamagui/web").TextProps, "color" | "space" | "zIndex" | "display" | "fontFamily" | "fontSize" | "fontStyle" | "fontWeight" | "letterSpacing" | "lineHeight" | "textAlign" | "textDecorationLine" | "textDecorationStyle" | "textDecorationColor" | "textShadowColor" | "textShadowOffset" | "textShadowRadius" | "textTransform" | "testID" | "fontVariant" | "writingDirection" | "backfaceVisibility" | "backgroundColor" | "borderBlockColor" | "borderBlockEndColor" | "borderBlockStartColor" | "borderBottomColor" | "borderBottomEndRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderBottomStartRadius" | "borderColor" | "borderCurve" | "borderEndColor" | "borderEndEndRadius" | "borderEndStartRadius" | "borderLeftColor" | "borderRadius" | "borderRightColor" | "borderStartColor" | "borderStartEndRadius" | "borderStartStartRadius" | "borderStyle" | "borderTopColor" | "borderTopEndRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderTopStartRadius" | "opacity" | "elevation" | "pointerEvents" | "alignContent" | "alignItems" | "alignSelf" | "aspectRatio" | "borderBottomWidth" | "borderEndWidth" | "borderLeftWidth" | "borderRightWidth" | "borderStartWidth" | "borderTopWidth" | "borderWidth" | "bottom" | "end" | "flex" | "flexBasis" | "flexDirection" | "rowGap" | "gap" | "columnGap" | "flexGrow" | "flexShrink" | "flexWrap" | "height" | "justifyContent" | "left" | "margin" | "marginBottom" | "marginEnd" | "marginHorizontal" | "marginLeft" | "marginRight" | "marginStart" | "marginTop" | "marginVertical" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "overflow" | "padding" | "paddingBottom" | "paddingEnd" | "paddingHorizontal" | "paddingLeft" | "paddingRight" | "paddingStart" | "paddingTop" | "paddingVertical" | "position" | "right" | "start" | "top" | "width" | "direction" | "shadowColor" | "shadowOffset" | "shadowOpacity" | "shadowRadius" | "transform" | "transformMatrix" | "rotation" | "scaleX" | "scaleY" | "translateX" | "translateY" | "textAlignVertical" | "verticalAlign" | "includeFontPadding" | "ellipse" | "textDecorationDistance" | "textOverflow" | "whiteSpace" | "wordWrap" | "x" | "y" | "perspective" | "scale" | "skewX" | "skewY" | "matrix" | "rotate" | "rotateY" | "rotateX" | "rotateZ" | "contain" | "touchAction" | "cursor" | "outlineColor" | "outlineOffset" | "outlineStyle" | "outlineWidth" | "spaceDirection" | "separator" | "animation" | "animateOnly" | "userSelect" | "transformOrigin" | "key" | `$${string}` | `$${number}` | "maxFontSizeMultiplier" | `$theme-${string}` | `$theme-${number}` | "ref" | "children" | "onPress" | "onLongPress" | "onPressIn" | "onPressOut" | "onHoverIn" | "onHoverOut" | "onMouseEnter" | "onMouseLeave" | "onMouseDown" | "onMouseUp" | "onFocus" | "onBlur" | "style" | "allowFontScaling" | "ellipsizeMode" | "id" | "lineBreakMode" | "numberOfLines" | "onTextLayout" | "nativeID" | "adjustsFontSizeToFit" | "dynamicTypeRamp" | "minimumFontScale" | "suppressHighlighting" | "lineBreakStrategyIOS" | "disabled" | "selectable" | "selectionColor" | "textBreakStrategy" | "dataDetectorType" | "android_hyphenationFrequency" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "aria-label" | "accessibilityRole" | "accessibilityState" | "aria-busy" | "aria-checked" | "aria-disabled" | "aria-expanded" | "aria-selected" | "aria-labelledby" | "accessibilityHint" | "accessibilityValue" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "onAccessibilityAction" | "importantForAccessibility" | "aria-hidden" | "aria-live" | "aria-modal" | "role" | "accessibilityLiveRegion" | "accessibilityLabelledBy" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "accessibilityLanguage" | "theme" | "target" | "asChild" | "dangerouslySetInnerHTML" | "debug" | "className" | "themeShallow" | "themeInverse" | "tag" | "group" | "untilMeasured" | "componentName" | "tabIndex" | "disableOptimization" | "forceStyle" | "disableClassName" | "onScroll" | "hoverStyle" | "pressStyle" | "focusStyle" | "exitStyle" | "enterStyle"> & {
        readonly unstyled?: boolean | undefined;
        readonly size?: FontSizeTokens | undefined;
    }> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextNonStyleProps & import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase>> & import("@tamagui/web").PseudoProps<import("@tamagui/web").WithThemeAndShorthands<import("@tamagui/web").TextStylePropsBase>> & import("@tamagui/web").MediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").TextStylePropsBase>> & import("react").RefAttributes<import("@tamagui/web").TamaguiTextElement> & Omit<import("@tamagui/web").TextProps, "color" | "space" | "zIndex" | "display" | "fontFamily" | "fontSize" | "fontStyle" | "fontWeight" | "letterSpacing" | "lineHeight" | "textAlign" | "textDecorationLine" | "textDecorationStyle" | "textDecorationColor" | "textShadowColor" | "textShadowOffset" | "textShadowRadius" | "textTransform" | "testID" | "fontVariant" | "writingDirection" | "backfaceVisibility" | "backgroundColor" | "borderBlockColor" | "borderBlockEndColor" | "borderBlockStartColor" | "borderBottomColor" | "borderBottomEndRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderBottomStartRadius" | "borderColor" | "borderCurve" | "borderEndColor" | "borderEndEndRadius" | "borderEndStartRadius" | "borderLeftColor" | "borderRadius" | "borderRightColor" | "borderStartColor" | "borderStartEndRadius" | "borderStartStartRadius" | "borderStyle" | "borderTopColor" | "borderTopEndRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderTopStartRadius" | "opacity" | "elevation" | "pointerEvents" | "alignContent" | "alignItems" | "alignSelf" | "aspectRatio" | "borderBottomWidth" | "borderEndWidth" | "borderLeftWidth" | "borderRightWidth" | "borderStartWidth" | "borderTopWidth" | "borderWidth" | "bottom" | "end" | "flex" | "flexBasis" | "flexDirection" | "rowGap" | "gap" | "columnGap" | "flexGrow" | "flexShrink" | "flexWrap" | "height" | "justifyContent" | "left" | "margin" | "marginBottom" | "marginEnd" | "marginHorizontal" | "marginLeft" | "marginRight" | "marginStart" | "marginTop" | "marginVertical" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "overflow" | "padding" | "paddingBottom" | "paddingEnd" | "paddingHorizontal" | "paddingLeft" | "paddingRight" | "paddingStart" | "paddingTop" | "paddingVertical" | "position" | "right" | "start" | "top" | "width" | "direction" | "shadowColor" | "shadowOffset" | "shadowOpacity" | "shadowRadius" | "transform" | "transformMatrix" | "rotation" | "scaleX" | "scaleY" | "translateX" | "translateY" | "textAlignVertical" | "verticalAlign" | "includeFontPadding" | "ellipse" | "textDecorationDistance" | "textOverflow" | "whiteSpace" | "wordWrap" | "x" | "y" | "perspective" | "scale" | "skewX" | "skewY" | "matrix" | "rotate" | "rotateY" | "rotateX" | "rotateZ" | "contain" | "touchAction" | "cursor" | "outlineColor" | "outlineOffset" | "outlineStyle" | "outlineWidth" | "spaceDirection" | "separator" | "animation" | "animateOnly" | "userSelect" | "transformOrigin" | "key" | `$${string}` | `$${number}` | "maxFontSizeMultiplier" | `$theme-${string}` | `$theme-${number}` | "ref" | "children" | "onPress" | "onLongPress" | "onPressIn" | "onPressOut" | "onHoverIn" | "onHoverOut" | "onMouseEnter" | "onMouseLeave" | "onMouseDown" | "onMouseUp" | "onFocus" | "onBlur" | "style" | "allowFontScaling" | "ellipsizeMode" | "id" | "lineBreakMode" | "numberOfLines" | "onTextLayout" | "nativeID" | "adjustsFontSizeToFit" | "dynamicTypeRamp" | "minimumFontScale" | "suppressHighlighting" | "lineBreakStrategyIOS" | "disabled" | "selectable" | "selectionColor" | "textBreakStrategy" | "dataDetectorType" | "android_hyphenationFrequency" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "aria-label" | "accessibilityRole" | "accessibilityState" | "aria-busy" | "aria-checked" | "aria-disabled" | "aria-expanded" | "aria-selected" | "aria-labelledby" | "accessibilityHint" | "accessibilityValue" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "onAccessibilityAction" | "importantForAccessibility" | "aria-hidden" | "aria-live" | "aria-modal" | "role" | "accessibilityLiveRegion" | "accessibilityLabelledBy" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "accessibilityLanguage" | "theme" | "target" | "asChild" | "dangerouslySetInnerHTML" | "debug" | "className" | "themeShallow" | "themeInverse" | "tag" | "group" | "untilMeasured" | "componentName" | "tabIndex" | "disableOptimization" | "forceStyle" | "disableClassName" | "onScroll" | "hoverStyle" | "pressStyle" | "focusStyle" | "exitStyle" | "enterStyle"> & {
        readonly unstyled?: boolean | undefined;
        readonly size?: FontSizeTokens | undefined;
    }>> & import("@tamagui/web").PseudoProps<import("@tamagui/web").WithThemeAndShorthands<import("@tamagui/web").TextNonStyleProps & import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase>> & import("@tamagui/web").PseudoProps<import("@tamagui/web").WithThemeAndShorthands<import("@tamagui/web").TextStylePropsBase>> & import("@tamagui/web").MediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").TextStylePropsBase>> & import("react").RefAttributes<import("@tamagui/web").TamaguiTextElement> & Omit<import("@tamagui/web").TextProps, "color" | "space" | "zIndex" | "display" | "fontFamily" | "fontSize" | "fontStyle" | "fontWeight" | "letterSpacing" | "lineHeight" | "textAlign" | "textDecorationLine" | "textDecorationStyle" | "textDecorationColor" | "textShadowColor" | "textShadowOffset" | "textShadowRadius" | "textTransform" | "testID" | "fontVariant" | "writingDirection" | "backfaceVisibility" | "backgroundColor" | "borderBlockColor" | "borderBlockEndColor" | "borderBlockStartColor" | "borderBottomColor" | "borderBottomEndRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderBottomStartRadius" | "borderColor" | "borderCurve" | "borderEndColor" | "borderEndEndRadius" | "borderEndStartRadius" | "borderLeftColor" | "borderRadius" | "borderRightColor" | "borderStartColor" | "borderStartEndRadius" | "borderStartStartRadius" | "borderStyle" | "borderTopColor" | "borderTopEndRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderTopStartRadius" | "opacity" | "elevation" | "pointerEvents" | "alignContent" | "alignItems" | "alignSelf" | "aspectRatio" | "borderBottomWidth" | "borderEndWidth" | "borderLeftWidth" | "borderRightWidth" | "borderStartWidth" | "borderTopWidth" | "borderWidth" | "bottom" | "end" | "flex" | "flexBasis" | "flexDirection" | "rowGap" | "gap" | "columnGap" | "flexGrow" | "flexShrink" | "flexWrap" | "height" | "justifyContent" | "left" | "margin" | "marginBottom" | "marginEnd" | "marginHorizontal" | "marginLeft" | "marginRight" | "marginStart" | "marginTop" | "marginVertical" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "overflow" | "padding" | "paddingBottom" | "paddingEnd" | "paddingHorizontal" | "paddingLeft" | "paddingRight" | "paddingStart" | "paddingTop" | "paddingVertical" | "position" | "right" | "start" | "top" | "width" | "direction" | "shadowColor" | "shadowOffset" | "shadowOpacity" | "shadowRadius" | "transform" | "transformMatrix" | "rotation" | "scaleX" | "scaleY" | "translateX" | "translateY" | "textAlignVertical" | "verticalAlign" | "includeFontPadding" | "ellipse" | "textDecorationDistance" | "textOverflow" | "whiteSpace" | "wordWrap" | "x" | "y" | "perspective" | "scale" | "skewX" | "skewY" | "matrix" | "rotate" | "rotateY" | "rotateX" | "rotateZ" | "contain" | "touchAction" | "cursor" | "outlineColor" | "outlineOffset" | "outlineStyle" | "outlineWidth" | "spaceDirection" | "separator" | "animation" | "animateOnly" | "userSelect" | "transformOrigin" | "key" | `$${string}` | `$${number}` | "maxFontSizeMultiplier" | `$theme-${string}` | `$theme-${number}` | "ref" | "children" | "onPress" | "onLongPress" | "onPressIn" | "onPressOut" | "onHoverIn" | "onHoverOut" | "onMouseEnter" | "onMouseLeave" | "onMouseDown" | "onMouseUp" | "onFocus" | "onBlur" | "style" | "allowFontScaling" | "ellipsizeMode" | "id" | "lineBreakMode" | "numberOfLines" | "onTextLayout" | "nativeID" | "adjustsFontSizeToFit" | "dynamicTypeRamp" | "minimumFontScale" | "suppressHighlighting" | "lineBreakStrategyIOS" | "disabled" | "selectable" | "selectionColor" | "textBreakStrategy" | "dataDetectorType" | "android_hyphenationFrequency" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "aria-label" | "accessibilityRole" | "accessibilityState" | "aria-busy" | "aria-checked" | "aria-disabled" | "aria-expanded" | "aria-selected" | "aria-labelledby" | "accessibilityHint" | "accessibilityValue" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "onAccessibilityAction" | "importantForAccessibility" | "aria-hidden" | "aria-live" | "aria-modal" | "role" | "accessibilityLiveRegion" | "accessibilityLabelledBy" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "accessibilityLanguage" | "theme" | "target" | "asChild" | "dangerouslySetInnerHTML" | "debug" | "className" | "themeShallow" | "themeInverse" | "tag" | "group" | "untilMeasured" | "componentName" | "tabIndex" | "disableOptimization" | "forceStyle" | "disableClassName" | "onScroll" | "hoverStyle" | "pressStyle" | "focusStyle" | "exitStyle" | "enterStyle"> & {
        readonly unstyled?: boolean | undefined;
        readonly size?: FontSizeTokens | undefined;
    }>> & import("@tamagui/web").MediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").TextNonStyleProps & import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase>> & import("@tamagui/web").PseudoProps<import("@tamagui/web").WithThemeAndShorthands<import("@tamagui/web").TextStylePropsBase>> & import("@tamagui/web").MediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").TextStylePropsBase>> & import("react").RefAttributes<import("@tamagui/web").TamaguiTextElement> & Omit<import("@tamagui/web").TextProps, "color" | "space" | "zIndex" | "display" | "fontFamily" | "fontSize" | "fontStyle" | "fontWeight" | "letterSpacing" | "lineHeight" | "textAlign" | "textDecorationLine" | "textDecorationStyle" | "textDecorationColor" | "textShadowColor" | "textShadowOffset" | "textShadowRadius" | "textTransform" | "testID" | "fontVariant" | "writingDirection" | "backfaceVisibility" | "backgroundColor" | "borderBlockColor" | "borderBlockEndColor" | "borderBlockStartColor" | "borderBottomColor" | "borderBottomEndRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderBottomStartRadius" | "borderColor" | "borderCurve" | "borderEndColor" | "borderEndEndRadius" | "borderEndStartRadius" | "borderLeftColor" | "borderRadius" | "borderRightColor" | "borderStartColor" | "borderStartEndRadius" | "borderStartStartRadius" | "borderStyle" | "borderTopColor" | "borderTopEndRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderTopStartRadius" | "opacity" | "elevation" | "pointerEvents" | "alignContent" | "alignItems" | "alignSelf" | "aspectRatio" | "borderBottomWidth" | "borderEndWidth" | "borderLeftWidth" | "borderRightWidth" | "borderStartWidth" | "borderTopWidth" | "borderWidth" | "bottom" | "end" | "flex" | "flexBasis" | "flexDirection" | "rowGap" | "gap" | "columnGap" | "flexGrow" | "flexShrink" | "flexWrap" | "height" | "justifyContent" | "left" | "margin" | "marginBottom" | "marginEnd" | "marginHorizontal" | "marginLeft" | "marginRight" | "marginStart" | "marginTop" | "marginVertical" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "overflow" | "padding" | "paddingBottom" | "paddingEnd" | "paddingHorizontal" | "paddingLeft" | "paddingRight" | "paddingStart" | "paddingTop" | "paddingVertical" | "position" | "right" | "start" | "top" | "width" | "direction" | "shadowColor" | "shadowOffset" | "shadowOpacity" | "shadowRadius" | "transform" | "transformMatrix" | "rotation" | "scaleX" | "scaleY" | "translateX" | "translateY" | "textAlignVertical" | "verticalAlign" | "includeFontPadding" | "ellipse" | "textDecorationDistance" | "textOverflow" | "whiteSpace" | "wordWrap" | "x" | "y" | "perspective" | "scale" | "skewX" | "skewY" | "matrix" | "rotate" | "rotateY" | "rotateX" | "rotateZ" | "contain" | "touchAction" | "cursor" | "outlineColor" | "outlineOffset" | "outlineStyle" | "outlineWidth" | "spaceDirection" | "separator" | "animation" | "animateOnly" | "userSelect" | "transformOrigin" | "key" | `$${string}` | `$${number}` | "maxFontSizeMultiplier" | `$theme-${string}` | `$theme-${number}` | "ref" | "children" | "onPress" | "onLongPress" | "onPressIn" | "onPressOut" | "onHoverIn" | "onHoverOut" | "onMouseEnter" | "onMouseLeave" | "onMouseDown" | "onMouseUp" | "onFocus" | "onBlur" | "style" | "allowFontScaling" | "ellipsizeMode" | "id" | "lineBreakMode" | "numberOfLines" | "onTextLayout" | "nativeID" | "adjustsFontSizeToFit" | "dynamicTypeRamp" | "minimumFontScale" | "suppressHighlighting" | "lineBreakStrategyIOS" | "disabled" | "selectable" | "selectionColor" | "textBreakStrategy" | "dataDetectorType" | "android_hyphenationFrequency" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "aria-label" | "accessibilityRole" | "accessibilityState" | "aria-busy" | "aria-checked" | "aria-disabled" | "aria-expanded" | "aria-selected" | "aria-labelledby" | "accessibilityHint" | "accessibilityValue" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "onAccessibilityAction" | "importantForAccessibility" | "aria-hidden" | "aria-live" | "aria-modal" | "role" | "accessibilityLiveRegion" | "accessibilityLabelledBy" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "accessibilityLanguage" | "theme" | "target" | "asChild" | "dangerouslySetInnerHTML" | "debug" | "className" | "themeShallow" | "themeInverse" | "tag" | "group" | "untilMeasured" | "componentName" | "tabIndex" | "disableOptimization" | "forceStyle" | "disableClassName" | "onScroll" | "hoverStyle" | "pressStyle" | "focusStyle" | "exitStyle" | "enterStyle"> & {
        readonly unstyled?: boolean | undefined;
        readonly size?: FontSizeTokens | undefined;
    }>>> | undefined;
    noTextWrap?: boolean | undefined;
} & ThemeableProps & {
    /**
     * add icon before, passes color and size automatically if Component
     */
    icon?: IconProp | undefined;
    /**
     * add icon after, passes color and size automatically if Component
     */
    iconAfter?: IconProp | undefined;
    /**
     * adjust icon relative to size
     *
     * @default 1
     */
    scaleIcon?: number | undefined;
    /**
     * make the spacing elements flex
     */
    spaceFlex?: number | boolean | undefined;
    /**
     * adjust internal space relative to icon size
     */
    scaleSpace?: number | undefined;
    /**
     * remove default styles
     */
    unstyled?: boolean | undefined;
}, import("@tamagui/web").TamaguiElement> & {
    staticConfig: import("@tamagui/web").StaticConfig;
    extractable: <X>(a: X, staticConfig?: Partial<import("@tamagui/web").StaticConfig> | undefined) => X;
    styleable: import("@tamagui/web").Styleable<Omit<import("@tamagui/web").StackNonStyleProps & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/web").PseudoProps<import("@tamagui/web").WithThemeAndShorthands<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/web").MediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").StackStylePropsBase>> & {
        rel?: any;
        download?: any;
        onStartShouldSetResponder?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
        onMoveShouldSetResponder?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
        onResponderEnd?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onResponderGrant?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onResponderReject?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onResponderMove?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onResponderRelease?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onResponderStart?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onResponderTerminationRequest?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
        onResponderTerminate?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onStartShouldSetResponderCapture?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
        onMoveShouldSetResponderCapture?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
        dataSet?: Record<string, string | number | null | undefined> | undefined;
        onScrollShouldSetResponder?: unknown;
        onScrollShouldSetResponderCapture?: unknown;
        onSelectionChangeShouldSetResponder?: unknown;
        onSelectionChangeShouldSetResponderCapture?: unknown;
        onLayout?: ((event: import("react-native").LayoutChangeEvent) => void) | undefined;
        href?: string | undefined;
        hrefAttrs?: {
            target?: "top" | "_blank" | "_self" | "_top" | "blank" | "self" | undefined;
            rel?: string | undefined;
            download?: boolean | undefined;
        } | undefined;
        elevationAndroid?: string | number | undefined;
    } & import("react").RefAttributes<import("@tamagui/web").TamaguiElement> & Omit<import("@tamagui/web").StackProps, keyof import("@tamagui/web").StackStylePropsBase | `$${string}` | `$${number}` | `$theme-${string}` | `$theme-${number}` | keyof import("@tamagui/web").RNViewProps | keyof import("@tamagui/web").StackNonStyleProps | keyof import("@tamagui/web").PseudoProps<import("@tamagui/web").WithThemeAndShorthands<import("@tamagui/web").StackStylePropsBase>> | keyof import("react").RefAttributes<import("@tamagui/web").TamaguiElement>> & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackNonStyleProps & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/web").PseudoProps<import("@tamagui/web").WithThemeAndShorthands<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/web").MediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").StackStylePropsBase>> & {
        rel?: any;
        download?: any;
        onStartShouldSetResponder?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
        onMoveShouldSetResponder?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
        onResponderEnd?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onResponderGrant?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onResponderReject?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onResponderMove?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onResponderRelease?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onResponderStart?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onResponderTerminationRequest?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
        onResponderTerminate?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onStartShouldSetResponderCapture?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
        onMoveShouldSetResponderCapture?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
        dataSet?: Record<string, string | number | null | undefined> | undefined;
        onScrollShouldSetResponder?: unknown;
        onScrollShouldSetResponderCapture?: unknown;
        onSelectionChangeShouldSetResponder?: unknown;
        onSelectionChangeShouldSetResponderCapture?: unknown;
        onLayout?: ((event: import("react-native").LayoutChangeEvent) => void) | undefined;
        href?: string | undefined;
        hrefAttrs?: {
            target?: "top" | "_blank" | "_self" | "_top" | "blank" | "self" | undefined;
            rel?: string | undefined;
            download?: boolean | undefined;
        } | undefined;
        elevationAndroid?: string | number | undefined;
    } & import("react").RefAttributes<import("@tamagui/web").TamaguiElement> & Omit<import("@tamagui/web").StackProps, keyof import("@tamagui/web").StackStylePropsBase | `$${string}` | `$${number}` | `$theme-${string}` | `$theme-${number}` | keyof import("@tamagui/web").RNViewProps | keyof import("@tamagui/web").StackNonStyleProps | keyof import("@tamagui/web").PseudoProps<import("@tamagui/web").WithThemeAndShorthands<import("@tamagui/web").StackStylePropsBase>> | keyof import("react").RefAttributes<import("@tamagui/web").TamaguiElement>> & {
        size?: SizeTokens | undefined;
        elevation?: number | SizeTokens | undefined;
        variant?: "outlined" | undefined;
        disabled?: boolean | undefined;
        unstyled?: boolean | undefined;
        transparent?: boolean | undefined;
        circular?: boolean | undefined;
        fullscreen?: boolean | undefined;
        hoverTheme?: boolean | undefined;
        pressTheme?: boolean | undefined;
        focusTheme?: boolean | undefined;
        elevate?: boolean | undefined;
        bordered?: number | boolean | undefined;
        backgrounded?: boolean | undefined;
        radiused?: boolean | undefined;
        padded?: boolean | undefined;
        chromeless?: boolean | "all" | undefined;
    }> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackNonStyleProps & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/web").PseudoProps<import("@tamagui/web").WithThemeAndShorthands<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/web").MediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").StackStylePropsBase>> & {
        rel?: any;
        download?: any;
        onStartShouldSetResponder?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
        onMoveShouldSetResponder?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
        onResponderEnd?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onResponderGrant?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onResponderReject?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onResponderMove?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onResponderRelease?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onResponderStart?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onResponderTerminationRequest?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
        onResponderTerminate?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onStartShouldSetResponderCapture?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
        onMoveShouldSetResponderCapture?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
        dataSet?: Record<string, string | number | null | undefined> | undefined;
        onScrollShouldSetResponder?: unknown;
        onScrollShouldSetResponderCapture?: unknown;
        onSelectionChangeShouldSetResponder?: unknown;
        onSelectionChangeShouldSetResponderCapture?: unknown;
        onLayout?: ((event: import("react-native").LayoutChangeEvent) => void) | undefined;
        href?: string | undefined;
        hrefAttrs?: {
            target?: "top" | "_blank" | "_self" | "_top" | "blank" | "self" | undefined;
            rel?: string | undefined;
            download?: boolean | undefined;
        } | undefined;
        elevationAndroid?: string | number | undefined;
    } & import("react").RefAttributes<import("@tamagui/web").TamaguiElement> & Omit<import("@tamagui/web").StackProps, keyof import("@tamagui/web").StackStylePropsBase | `$${string}` | `$${number}` | `$theme-${string}` | `$theme-${number}` | keyof import("@tamagui/web").RNViewProps | keyof import("@tamagui/web").StackNonStyleProps | keyof import("@tamagui/web").PseudoProps<import("@tamagui/web").WithThemeAndShorthands<import("@tamagui/web").StackStylePropsBase>> | keyof import("react").RefAttributes<import("@tamagui/web").TamaguiElement>> & {
        size?: SizeTokens | undefined;
        elevation?: number | SizeTokens | undefined;
        variant?: "outlined" | undefined;
        disabled?: boolean | undefined;
        unstyled?: boolean | undefined;
        transparent?: boolean | undefined;
        circular?: boolean | undefined;
        fullscreen?: boolean | undefined;
        hoverTheme?: boolean | undefined;
        pressTheme?: boolean | undefined;
        focusTheme?: boolean | undefined;
        elevate?: boolean | undefined;
        bordered?: number | boolean | undefined;
        backgrounded?: boolean | undefined;
        radiused?: boolean | undefined;
        padded?: boolean | undefined;
        chromeless?: boolean | "all" | undefined;
    }>> & import("@tamagui/web").PseudoProps<import("@tamagui/web").WithThemeAndShorthands<import("@tamagui/web").StackNonStyleProps & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/web").PseudoProps<import("@tamagui/web").WithThemeAndShorthands<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/web").MediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").StackStylePropsBase>> & {
        rel?: any;
        download?: any;
        onStartShouldSetResponder?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
        onMoveShouldSetResponder?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
        onResponderEnd?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onResponderGrant?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onResponderReject?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onResponderMove?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onResponderRelease?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onResponderStart?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onResponderTerminationRequest?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
        onResponderTerminate?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onStartShouldSetResponderCapture?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
        onMoveShouldSetResponderCapture?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
        dataSet?: Record<string, string | number | null | undefined> | undefined;
        onScrollShouldSetResponder?: unknown;
        onScrollShouldSetResponderCapture?: unknown;
        onSelectionChangeShouldSetResponder?: unknown;
        onSelectionChangeShouldSetResponderCapture?: unknown;
        onLayout?: ((event: import("react-native").LayoutChangeEvent) => void) | undefined;
        href?: string | undefined;
        hrefAttrs?: {
            target?: "top" | "_blank" | "_self" | "_top" | "blank" | "self" | undefined;
            rel?: string | undefined;
            download?: boolean | undefined;
        } | undefined;
        elevationAndroid?: string | number | undefined;
    } & import("react").RefAttributes<import("@tamagui/web").TamaguiElement> & Omit<import("@tamagui/web").StackProps, keyof import("@tamagui/web").StackStylePropsBase | `$${string}` | `$${number}` | `$theme-${string}` | `$theme-${number}` | keyof import("@tamagui/web").RNViewProps | keyof import("@tamagui/web").StackNonStyleProps | keyof import("@tamagui/web").PseudoProps<import("@tamagui/web").WithThemeAndShorthands<import("@tamagui/web").StackStylePropsBase>> | keyof import("react").RefAttributes<import("@tamagui/web").TamaguiElement>> & {
        size?: SizeTokens | undefined;
        elevation?: number | SizeTokens | undefined;
        variant?: "outlined" | undefined;
        disabled?: boolean | undefined;
        unstyled?: boolean | undefined;
        transparent?: boolean | undefined;
        circular?: boolean | undefined;
        fullscreen?: boolean | undefined;
        hoverTheme?: boolean | undefined;
        pressTheme?: boolean | undefined;
        focusTheme?: boolean | undefined;
        elevate?: boolean | undefined;
        bordered?: number | boolean | undefined;
        backgrounded?: boolean | undefined;
        radiused?: boolean | undefined;
        padded?: boolean | undefined;
        chromeless?: boolean | "all" | undefined;
    }>> & import("@tamagui/web").MediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").StackNonStyleProps & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/web").PseudoProps<import("@tamagui/web").WithThemeAndShorthands<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/web").MediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").StackStylePropsBase>> & {
        rel?: any;
        download?: any;
        onStartShouldSetResponder?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
        onMoveShouldSetResponder?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
        onResponderEnd?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onResponderGrant?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onResponderReject?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onResponderMove?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onResponderRelease?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onResponderStart?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onResponderTerminationRequest?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
        onResponderTerminate?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onStartShouldSetResponderCapture?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
        onMoveShouldSetResponderCapture?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
        dataSet?: Record<string, string | number | null | undefined> | undefined;
        onScrollShouldSetResponder?: unknown;
        onScrollShouldSetResponderCapture?: unknown;
        onSelectionChangeShouldSetResponder?: unknown;
        onSelectionChangeShouldSetResponderCapture?: unknown;
        onLayout?: ((event: import("react-native").LayoutChangeEvent) => void) | undefined;
        href?: string | undefined;
        hrefAttrs?: {
            target?: "top" | "_blank" | "_self" | "_top" | "blank" | "self" | undefined;
            rel?: string | undefined;
            download?: boolean | undefined;
        } | undefined;
        elevationAndroid?: string | number | undefined;
    } & import("react").RefAttributes<import("@tamagui/web").TamaguiElement> & Omit<import("@tamagui/web").StackProps, keyof import("@tamagui/web").StackStylePropsBase | `$${string}` | `$${number}` | `$theme-${string}` | `$theme-${number}` | keyof import("@tamagui/web").RNViewProps | keyof import("@tamagui/web").StackNonStyleProps | keyof import("@tamagui/web").PseudoProps<import("@tamagui/web").WithThemeAndShorthands<import("@tamagui/web").StackStylePropsBase>> | keyof import("react").RefAttributes<import("@tamagui/web").TamaguiElement>> & {
        size?: SizeTokens | undefined;
        elevation?: number | SizeTokens | undefined;
        variant?: "outlined" | undefined;
        disabled?: boolean | undefined;
        unstyled?: boolean | undefined;
        transparent?: boolean | undefined;
        circular?: boolean | undefined;
        fullscreen?: boolean | undefined;
        hoverTheme?: boolean | undefined;
        pressTheme?: boolean | undefined;
        focusTheme?: boolean | undefined;
        elevate?: boolean | undefined;
        bordered?: number | boolean | undefined;
        backgrounded?: boolean | undefined;
        radiused?: boolean | undefined;
        padded?: boolean | undefined;
        chromeless?: boolean | "all" | undefined;
    }>>, keyof TextContextStyles | "unstyled" | "textProps" | "noTextWrap" | keyof ThemeableProps | "icon" | "iconAfter" | "scaleIcon" | "spaceFlex" | "scaleSpace"> & TextContextStyles & {
        textProps?: Partial<import("@tamagui/web").TextNonStyleProps & import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase>> & import("@tamagui/web").PseudoProps<import("@tamagui/web").WithThemeAndShorthands<import("@tamagui/web").TextStylePropsBase>> & import("@tamagui/web").MediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").TextStylePropsBase>> & import("react").RefAttributes<import("@tamagui/web").TamaguiTextElement> & Omit<import("@tamagui/web").TextProps, "color" | "space" | "zIndex" | "display" | "fontFamily" | "fontSize" | "fontStyle" | "fontWeight" | "letterSpacing" | "lineHeight" | "textAlign" | "textDecorationLine" | "textDecorationStyle" | "textDecorationColor" | "textShadowColor" | "textShadowOffset" | "textShadowRadius" | "textTransform" | "testID" | "fontVariant" | "writingDirection" | "backfaceVisibility" | "backgroundColor" | "borderBlockColor" | "borderBlockEndColor" | "borderBlockStartColor" | "borderBottomColor" | "borderBottomEndRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderBottomStartRadius" | "borderColor" | "borderCurve" | "borderEndColor" | "borderEndEndRadius" | "borderEndStartRadius" | "borderLeftColor" | "borderRadius" | "borderRightColor" | "borderStartColor" | "borderStartEndRadius" | "borderStartStartRadius" | "borderStyle" | "borderTopColor" | "borderTopEndRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderTopStartRadius" | "opacity" | "elevation" | "pointerEvents" | "alignContent" | "alignItems" | "alignSelf" | "aspectRatio" | "borderBottomWidth" | "borderEndWidth" | "borderLeftWidth" | "borderRightWidth" | "borderStartWidth" | "borderTopWidth" | "borderWidth" | "bottom" | "end" | "flex" | "flexBasis" | "flexDirection" | "rowGap" | "gap" | "columnGap" | "flexGrow" | "flexShrink" | "flexWrap" | "height" | "justifyContent" | "left" | "margin" | "marginBottom" | "marginEnd" | "marginHorizontal" | "marginLeft" | "marginRight" | "marginStart" | "marginTop" | "marginVertical" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "overflow" | "padding" | "paddingBottom" | "paddingEnd" | "paddingHorizontal" | "paddingLeft" | "paddingRight" | "paddingStart" | "paddingTop" | "paddingVertical" | "position" | "right" | "start" | "top" | "width" | "direction" | "shadowColor" | "shadowOffset" | "shadowOpacity" | "shadowRadius" | "transform" | "transformMatrix" | "rotation" | "scaleX" | "scaleY" | "translateX" | "translateY" | "textAlignVertical" | "verticalAlign" | "includeFontPadding" | "ellipse" | "textDecorationDistance" | "textOverflow" | "whiteSpace" | "wordWrap" | "x" | "y" | "perspective" | "scale" | "skewX" | "skewY" | "matrix" | "rotate" | "rotateY" | "rotateX" | "rotateZ" | "contain" | "touchAction" | "cursor" | "outlineColor" | "outlineOffset" | "outlineStyle" | "outlineWidth" | "spaceDirection" | "separator" | "animation" | "animateOnly" | "userSelect" | "transformOrigin" | "key" | `$${string}` | `$${number}` | "maxFontSizeMultiplier" | `$theme-${string}` | `$theme-${number}` | "ref" | "children" | "onPress" | "onLongPress" | "onPressIn" | "onPressOut" | "onHoverIn" | "onHoverOut" | "onMouseEnter" | "onMouseLeave" | "onMouseDown" | "onMouseUp" | "onFocus" | "onBlur" | "style" | "allowFontScaling" | "ellipsizeMode" | "id" | "lineBreakMode" | "numberOfLines" | "onTextLayout" | "nativeID" | "adjustsFontSizeToFit" | "dynamicTypeRamp" | "minimumFontScale" | "suppressHighlighting" | "lineBreakStrategyIOS" | "disabled" | "selectable" | "selectionColor" | "textBreakStrategy" | "dataDetectorType" | "android_hyphenationFrequency" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "aria-label" | "accessibilityRole" | "accessibilityState" | "aria-busy" | "aria-checked" | "aria-disabled" | "aria-expanded" | "aria-selected" | "aria-labelledby" | "accessibilityHint" | "accessibilityValue" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "onAccessibilityAction" | "importantForAccessibility" | "aria-hidden" | "aria-live" | "aria-modal" | "role" | "accessibilityLiveRegion" | "accessibilityLabelledBy" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "accessibilityLanguage" | "theme" | "target" | "asChild" | "dangerouslySetInnerHTML" | "debug" | "className" | "themeShallow" | "themeInverse" | "tag" | "group" | "untilMeasured" | "componentName" | "tabIndex" | "disableOptimization" | "forceStyle" | "disableClassName" | "onScroll" | "hoverStyle" | "pressStyle" | "focusStyle" | "exitStyle" | "enterStyle"> & import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextNonStyleProps & import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase>> & import("@tamagui/web").PseudoProps<import("@tamagui/web").WithThemeAndShorthands<import("@tamagui/web").TextStylePropsBase>> & import("@tamagui/web").MediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").TextStylePropsBase>> & import("react").RefAttributes<import("@tamagui/web").TamaguiTextElement> & Omit<import("@tamagui/web").TextProps, "color" | "space" | "zIndex" | "display" | "fontFamily" | "fontSize" | "fontStyle" | "fontWeight" | "letterSpacing" | "lineHeight" | "textAlign" | "textDecorationLine" | "textDecorationStyle" | "textDecorationColor" | "textShadowColor" | "textShadowOffset" | "textShadowRadius" | "textTransform" | "testID" | "fontVariant" | "writingDirection" | "backfaceVisibility" | "backgroundColor" | "borderBlockColor" | "borderBlockEndColor" | "borderBlockStartColor" | "borderBottomColor" | "borderBottomEndRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderBottomStartRadius" | "borderColor" | "borderCurve" | "borderEndColor" | "borderEndEndRadius" | "borderEndStartRadius" | "borderLeftColor" | "borderRadius" | "borderRightColor" | "borderStartColor" | "borderStartEndRadius" | "borderStartStartRadius" | "borderStyle" | "borderTopColor" | "borderTopEndRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderTopStartRadius" | "opacity" | "elevation" | "pointerEvents" | "alignContent" | "alignItems" | "alignSelf" | "aspectRatio" | "borderBottomWidth" | "borderEndWidth" | "borderLeftWidth" | "borderRightWidth" | "borderStartWidth" | "borderTopWidth" | "borderWidth" | "bottom" | "end" | "flex" | "flexBasis" | "flexDirection" | "rowGap" | "gap" | "columnGap" | "flexGrow" | "flexShrink" | "flexWrap" | "height" | "justifyContent" | "left" | "margin" | "marginBottom" | "marginEnd" | "marginHorizontal" | "marginLeft" | "marginRight" | "marginStart" | "marginTop" | "marginVertical" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "overflow" | "padding" | "paddingBottom" | "paddingEnd" | "paddingHorizontal" | "paddingLeft" | "paddingRight" | "paddingStart" | "paddingTop" | "paddingVertical" | "position" | "right" | "start" | "top" | "width" | "direction" | "shadowColor" | "shadowOffset" | "shadowOpacity" | "shadowRadius" | "transform" | "transformMatrix" | "rotation" | "scaleX" | "scaleY" | "translateX" | "translateY" | "textAlignVertical" | "verticalAlign" | "includeFontPadding" | "ellipse" | "textDecorationDistance" | "textOverflow" | "whiteSpace" | "wordWrap" | "x" | "y" | "perspective" | "scale" | "skewX" | "skewY" | "matrix" | "rotate" | "rotateY" | "rotateX" | "rotateZ" | "contain" | "touchAction" | "cursor" | "outlineColor" | "outlineOffset" | "outlineStyle" | "outlineWidth" | "spaceDirection" | "separator" | "animation" | "animateOnly" | "userSelect" | "transformOrigin" | "key" | `$${string}` | `$${number}` | "maxFontSizeMultiplier" | `$theme-${string}` | `$theme-${number}` | "ref" | "children" | "onPress" | "onLongPress" | "onPressIn" | "onPressOut" | "onHoverIn" | "onHoverOut" | "onMouseEnter" | "onMouseLeave" | "onMouseDown" | "onMouseUp" | "onFocus" | "onBlur" | "style" | "allowFontScaling" | "ellipsizeMode" | "id" | "lineBreakMode" | "numberOfLines" | "onTextLayout" | "nativeID" | "adjustsFontSizeToFit" | "dynamicTypeRamp" | "minimumFontScale" | "suppressHighlighting" | "lineBreakStrategyIOS" | "disabled" | "selectable" | "selectionColor" | "textBreakStrategy" | "dataDetectorType" | "android_hyphenationFrequency" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "aria-label" | "accessibilityRole" | "accessibilityState" | "aria-busy" | "aria-checked" | "aria-disabled" | "aria-expanded" | "aria-selected" | "aria-labelledby" | "accessibilityHint" | "accessibilityValue" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "onAccessibilityAction" | "importantForAccessibility" | "aria-hidden" | "aria-live" | "aria-modal" | "role" | "accessibilityLiveRegion" | "accessibilityLabelledBy" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "accessibilityLanguage" | "theme" | "target" | "asChild" | "dangerouslySetInnerHTML" | "debug" | "className" | "themeShallow" | "themeInverse" | "tag" | "group" | "untilMeasured" | "componentName" | "tabIndex" | "disableOptimization" | "forceStyle" | "disableClassName" | "onScroll" | "hoverStyle" | "pressStyle" | "focusStyle" | "exitStyle" | "enterStyle"> & {
            readonly unstyled?: boolean | undefined;
            readonly size?: FontSizeTokens | undefined;
        }> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextNonStyleProps & import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase>> & import("@tamagui/web").PseudoProps<import("@tamagui/web").WithThemeAndShorthands<import("@tamagui/web").TextStylePropsBase>> & import("@tamagui/web").MediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").TextStylePropsBase>> & import("react").RefAttributes<import("@tamagui/web").TamaguiTextElement> & Omit<import("@tamagui/web").TextProps, "color" | "space" | "zIndex" | "display" | "fontFamily" | "fontSize" | "fontStyle" | "fontWeight" | "letterSpacing" | "lineHeight" | "textAlign" | "textDecorationLine" | "textDecorationStyle" | "textDecorationColor" | "textShadowColor" | "textShadowOffset" | "textShadowRadius" | "textTransform" | "testID" | "fontVariant" | "writingDirection" | "backfaceVisibility" | "backgroundColor" | "borderBlockColor" | "borderBlockEndColor" | "borderBlockStartColor" | "borderBottomColor" | "borderBottomEndRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderBottomStartRadius" | "borderColor" | "borderCurve" | "borderEndColor" | "borderEndEndRadius" | "borderEndStartRadius" | "borderLeftColor" | "borderRadius" | "borderRightColor" | "borderStartColor" | "borderStartEndRadius" | "borderStartStartRadius" | "borderStyle" | "borderTopColor" | "borderTopEndRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderTopStartRadius" | "opacity" | "elevation" | "pointerEvents" | "alignContent" | "alignItems" | "alignSelf" | "aspectRatio" | "borderBottomWidth" | "borderEndWidth" | "borderLeftWidth" | "borderRightWidth" | "borderStartWidth" | "borderTopWidth" | "borderWidth" | "bottom" | "end" | "flex" | "flexBasis" | "flexDirection" | "rowGap" | "gap" | "columnGap" | "flexGrow" | "flexShrink" | "flexWrap" | "height" | "justifyContent" | "left" | "margin" | "marginBottom" | "marginEnd" | "marginHorizontal" | "marginLeft" | "marginRight" | "marginStart" | "marginTop" | "marginVertical" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "overflow" | "padding" | "paddingBottom" | "paddingEnd" | "paddingHorizontal" | "paddingLeft" | "paddingRight" | "paddingStart" | "paddingTop" | "paddingVertical" | "position" | "right" | "start" | "top" | "width" | "direction" | "shadowColor" | "shadowOffset" | "shadowOpacity" | "shadowRadius" | "transform" | "transformMatrix" | "rotation" | "scaleX" | "scaleY" | "translateX" | "translateY" | "textAlignVertical" | "verticalAlign" | "includeFontPadding" | "ellipse" | "textDecorationDistance" | "textOverflow" | "whiteSpace" | "wordWrap" | "x" | "y" | "perspective" | "scale" | "skewX" | "skewY" | "matrix" | "rotate" | "rotateY" | "rotateX" | "rotateZ" | "contain" | "touchAction" | "cursor" | "outlineColor" | "outlineOffset" | "outlineStyle" | "outlineWidth" | "spaceDirection" | "separator" | "animation" | "animateOnly" | "userSelect" | "transformOrigin" | "key" | `$${string}` | `$${number}` | "maxFontSizeMultiplier" | `$theme-${string}` | `$theme-${number}` | "ref" | "children" | "onPress" | "onLongPress" | "onPressIn" | "onPressOut" | "onHoverIn" | "onHoverOut" | "onMouseEnter" | "onMouseLeave" | "onMouseDown" | "onMouseUp" | "onFocus" | "onBlur" | "style" | "allowFontScaling" | "ellipsizeMode" | "id" | "lineBreakMode" | "numberOfLines" | "onTextLayout" | "nativeID" | "adjustsFontSizeToFit" | "dynamicTypeRamp" | "minimumFontScale" | "suppressHighlighting" | "lineBreakStrategyIOS" | "disabled" | "selectable" | "selectionColor" | "textBreakStrategy" | "dataDetectorType" | "android_hyphenationFrequency" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "aria-label" | "accessibilityRole" | "accessibilityState" | "aria-busy" | "aria-checked" | "aria-disabled" | "aria-expanded" | "aria-selected" | "aria-labelledby" | "accessibilityHint" | "accessibilityValue" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "onAccessibilityAction" | "importantForAccessibility" | "aria-hidden" | "aria-live" | "aria-modal" | "role" | "accessibilityLiveRegion" | "accessibilityLabelledBy" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "accessibilityLanguage" | "theme" | "target" | "asChild" | "dangerouslySetInnerHTML" | "debug" | "className" | "themeShallow" | "themeInverse" | "tag" | "group" | "untilMeasured" | "componentName" | "tabIndex" | "disableOptimization" | "forceStyle" | "disableClassName" | "onScroll" | "hoverStyle" | "pressStyle" | "focusStyle" | "exitStyle" | "enterStyle"> & {
            readonly unstyled?: boolean | undefined;
            readonly size?: FontSizeTokens | undefined;
        }>> & import("@tamagui/web").PseudoProps<import("@tamagui/web").WithThemeAndShorthands<import("@tamagui/web").TextNonStyleProps & import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase>> & import("@tamagui/web").PseudoProps<import("@tamagui/web").WithThemeAndShorthands<import("@tamagui/web").TextStylePropsBase>> & import("@tamagui/web").MediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").TextStylePropsBase>> & import("react").RefAttributes<import("@tamagui/web").TamaguiTextElement> & Omit<import("@tamagui/web").TextProps, "color" | "space" | "zIndex" | "display" | "fontFamily" | "fontSize" | "fontStyle" | "fontWeight" | "letterSpacing" | "lineHeight" | "textAlign" | "textDecorationLine" | "textDecorationStyle" | "textDecorationColor" | "textShadowColor" | "textShadowOffset" | "textShadowRadius" | "textTransform" | "testID" | "fontVariant" | "writingDirection" | "backfaceVisibility" | "backgroundColor" | "borderBlockColor" | "borderBlockEndColor" | "borderBlockStartColor" | "borderBottomColor" | "borderBottomEndRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderBottomStartRadius" | "borderColor" | "borderCurve" | "borderEndColor" | "borderEndEndRadius" | "borderEndStartRadius" | "borderLeftColor" | "borderRadius" | "borderRightColor" | "borderStartColor" | "borderStartEndRadius" | "borderStartStartRadius" | "borderStyle" | "borderTopColor" | "borderTopEndRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderTopStartRadius" | "opacity" | "elevation" | "pointerEvents" | "alignContent" | "alignItems" | "alignSelf" | "aspectRatio" | "borderBottomWidth" | "borderEndWidth" | "borderLeftWidth" | "borderRightWidth" | "borderStartWidth" | "borderTopWidth" | "borderWidth" | "bottom" | "end" | "flex" | "flexBasis" | "flexDirection" | "rowGap" | "gap" | "columnGap" | "flexGrow" | "flexShrink" | "flexWrap" | "height" | "justifyContent" | "left" | "margin" | "marginBottom" | "marginEnd" | "marginHorizontal" | "marginLeft" | "marginRight" | "marginStart" | "marginTop" | "marginVertical" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "overflow" | "padding" | "paddingBottom" | "paddingEnd" | "paddingHorizontal" | "paddingLeft" | "paddingRight" | "paddingStart" | "paddingTop" | "paddingVertical" | "position" | "right" | "start" | "top" | "width" | "direction" | "shadowColor" | "shadowOffset" | "shadowOpacity" | "shadowRadius" | "transform" | "transformMatrix" | "rotation" | "scaleX" | "scaleY" | "translateX" | "translateY" | "textAlignVertical" | "verticalAlign" | "includeFontPadding" | "ellipse" | "textDecorationDistance" | "textOverflow" | "whiteSpace" | "wordWrap" | "x" | "y" | "perspective" | "scale" | "skewX" | "skewY" | "matrix" | "rotate" | "rotateY" | "rotateX" | "rotateZ" | "contain" | "touchAction" | "cursor" | "outlineColor" | "outlineOffset" | "outlineStyle" | "outlineWidth" | "spaceDirection" | "separator" | "animation" | "animateOnly" | "userSelect" | "transformOrigin" | "key" | `$${string}` | `$${number}` | "maxFontSizeMultiplier" | `$theme-${string}` | `$theme-${number}` | "ref" | "children" | "onPress" | "onLongPress" | "onPressIn" | "onPressOut" | "onHoverIn" | "onHoverOut" | "onMouseEnter" | "onMouseLeave" | "onMouseDown" | "onMouseUp" | "onFocus" | "onBlur" | "style" | "allowFontScaling" | "ellipsizeMode" | "id" | "lineBreakMode" | "numberOfLines" | "onTextLayout" | "nativeID" | "adjustsFontSizeToFit" | "dynamicTypeRamp" | "minimumFontScale" | "suppressHighlighting" | "lineBreakStrategyIOS" | "disabled" | "selectable" | "selectionColor" | "textBreakStrategy" | "dataDetectorType" | "android_hyphenationFrequency" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "aria-label" | "accessibilityRole" | "accessibilityState" | "aria-busy" | "aria-checked" | "aria-disabled" | "aria-expanded" | "aria-selected" | "aria-labelledby" | "accessibilityHint" | "accessibilityValue" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "onAccessibilityAction" | "importantForAccessibility" | "aria-hidden" | "aria-live" | "aria-modal" | "role" | "accessibilityLiveRegion" | "accessibilityLabelledBy" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "accessibilityLanguage" | "theme" | "target" | "asChild" | "dangerouslySetInnerHTML" | "debug" | "className" | "themeShallow" | "themeInverse" | "tag" | "group" | "untilMeasured" | "componentName" | "tabIndex" | "disableOptimization" | "forceStyle" | "disableClassName" | "onScroll" | "hoverStyle" | "pressStyle" | "focusStyle" | "exitStyle" | "enterStyle"> & {
            readonly unstyled?: boolean | undefined;
            readonly size?: FontSizeTokens | undefined;
        }>> & import("@tamagui/web").MediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").TextNonStyleProps & import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase>> & import("@tamagui/web").PseudoProps<import("@tamagui/web").WithThemeAndShorthands<import("@tamagui/web").TextStylePropsBase>> & import("@tamagui/web").MediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").TextStylePropsBase>> & import("react").RefAttributes<import("@tamagui/web").TamaguiTextElement> & Omit<import("@tamagui/web").TextProps, "color" | "space" | "zIndex" | "display" | "fontFamily" | "fontSize" | "fontStyle" | "fontWeight" | "letterSpacing" | "lineHeight" | "textAlign" | "textDecorationLine" | "textDecorationStyle" | "textDecorationColor" | "textShadowColor" | "textShadowOffset" | "textShadowRadius" | "textTransform" | "testID" | "fontVariant" | "writingDirection" | "backfaceVisibility" | "backgroundColor" | "borderBlockColor" | "borderBlockEndColor" | "borderBlockStartColor" | "borderBottomColor" | "borderBottomEndRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderBottomStartRadius" | "borderColor" | "borderCurve" | "borderEndColor" | "borderEndEndRadius" | "borderEndStartRadius" | "borderLeftColor" | "borderRadius" | "borderRightColor" | "borderStartColor" | "borderStartEndRadius" | "borderStartStartRadius" | "borderStyle" | "borderTopColor" | "borderTopEndRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderTopStartRadius" | "opacity" | "elevation" | "pointerEvents" | "alignContent" | "alignItems" | "alignSelf" | "aspectRatio" | "borderBottomWidth" | "borderEndWidth" | "borderLeftWidth" | "borderRightWidth" | "borderStartWidth" | "borderTopWidth" | "borderWidth" | "bottom" | "end" | "flex" | "flexBasis" | "flexDirection" | "rowGap" | "gap" | "columnGap" | "flexGrow" | "flexShrink" | "flexWrap" | "height" | "justifyContent" | "left" | "margin" | "marginBottom" | "marginEnd" | "marginHorizontal" | "marginLeft" | "marginRight" | "marginStart" | "marginTop" | "marginVertical" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "overflow" | "padding" | "paddingBottom" | "paddingEnd" | "paddingHorizontal" | "paddingLeft" | "paddingRight" | "paddingStart" | "paddingTop" | "paddingVertical" | "position" | "right" | "start" | "top" | "width" | "direction" | "shadowColor" | "shadowOffset" | "shadowOpacity" | "shadowRadius" | "transform" | "transformMatrix" | "rotation" | "scaleX" | "scaleY" | "translateX" | "translateY" | "textAlignVertical" | "verticalAlign" | "includeFontPadding" | "ellipse" | "textDecorationDistance" | "textOverflow" | "whiteSpace" | "wordWrap" | "x" | "y" | "perspective" | "scale" | "skewX" | "skewY" | "matrix" | "rotate" | "rotateY" | "rotateX" | "rotateZ" | "contain" | "touchAction" | "cursor" | "outlineColor" | "outlineOffset" | "outlineStyle" | "outlineWidth" | "spaceDirection" | "separator" | "animation" | "animateOnly" | "userSelect" | "transformOrigin" | "key" | `$${string}` | `$${number}` | "maxFontSizeMultiplier" | `$theme-${string}` | `$theme-${number}` | "ref" | "children" | "onPress" | "onLongPress" | "onPressIn" | "onPressOut" | "onHoverIn" | "onHoverOut" | "onMouseEnter" | "onMouseLeave" | "onMouseDown" | "onMouseUp" | "onFocus" | "onBlur" | "style" | "allowFontScaling" | "ellipsizeMode" | "id" | "lineBreakMode" | "numberOfLines" | "onTextLayout" | "nativeID" | "adjustsFontSizeToFit" | "dynamicTypeRamp" | "minimumFontScale" | "suppressHighlighting" | "lineBreakStrategyIOS" | "disabled" | "selectable" | "selectionColor" | "textBreakStrategy" | "dataDetectorType" | "android_hyphenationFrequency" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "aria-label" | "accessibilityRole" | "accessibilityState" | "aria-busy" | "aria-checked" | "aria-disabled" | "aria-expanded" | "aria-selected" | "aria-labelledby" | "accessibilityHint" | "accessibilityValue" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "onAccessibilityAction" | "importantForAccessibility" | "aria-hidden" | "aria-live" | "aria-modal" | "role" | "accessibilityLiveRegion" | "accessibilityLabelledBy" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "accessibilityLanguage" | "theme" | "target" | "asChild" | "dangerouslySetInnerHTML" | "debug" | "className" | "themeShallow" | "themeInverse" | "tag" | "group" | "untilMeasured" | "componentName" | "tabIndex" | "disableOptimization" | "forceStyle" | "disableClassName" | "onScroll" | "hoverStyle" | "pressStyle" | "focusStyle" | "exitStyle" | "enterStyle"> & {
            readonly unstyled?: boolean | undefined;
            readonly size?: FontSizeTokens | undefined;
        }>>> | undefined;
        noTextWrap?: boolean | undefined;
    } & ThemeableProps & {
        /**
         * add icon before, passes color and size automatically if Component
         */
        icon?: IconProp | undefined;
        /**
         * add icon after, passes color and size automatically if Component
         */
        iconAfter?: IconProp | undefined;
        /**
         * adjust icon relative to size
         *
         * @default 1
         */
        scaleIcon?: number | undefined;
        /**
         * make the spacing elements flex
         */
        spaceFlex?: number | boolean | undefined;
        /**
         * adjust internal space relative to icon size
         */
        scaleSpace?: number | undefined;
        /**
         * remove default styles
         */
        unstyled?: boolean | undefined;
    }, import("@tamagui/web").TamaguiElement, import("@tamagui/web").StackNonStyleProps & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/web").PseudoProps<import("@tamagui/web").WithThemeAndShorthands<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/web").MediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").StackStylePropsBase>> & {
        rel?: any;
        download?: any;
        onStartShouldSetResponder?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
        onMoveShouldSetResponder?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
        onResponderEnd?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onResponderGrant?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onResponderReject?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onResponderMove?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onResponderRelease?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onResponderStart?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onResponderTerminationRequest?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
        onResponderTerminate?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onStartShouldSetResponderCapture?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
        onMoveShouldSetResponderCapture?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
        dataSet?: Record<string, string | number | null | undefined> | undefined;
        onScrollShouldSetResponder?: unknown;
        onScrollShouldSetResponderCapture?: unknown;
        onSelectionChangeShouldSetResponder?: unknown;
        onSelectionChangeShouldSetResponderCapture?: unknown;
        onLayout?: ((event: import("react-native").LayoutChangeEvent) => void) | undefined;
        href?: string | undefined;
        hrefAttrs?: {
            target?: "top" | "_blank" | "_self" | "_top" | "blank" | "self" | undefined;
            rel?: string | undefined;
            download?: boolean | undefined;
        } | undefined;
        elevationAndroid?: string | number | undefined;
    } & import("react").RefAttributes<import("@tamagui/web").TamaguiElement> & Omit<import("@tamagui/web").StackProps, keyof import("@tamagui/web").StackStylePropsBase | `$${string}` | `$${number}` | `$theme-${string}` | `$theme-${number}` | keyof import("@tamagui/web").RNViewProps | keyof import("@tamagui/web").StackNonStyleProps | keyof import("@tamagui/web").PseudoProps<import("@tamagui/web").WithThemeAndShorthands<import("@tamagui/web").StackStylePropsBase>> | keyof import("react").RefAttributes<import("@tamagui/web").TamaguiElement>> & TextContextStyles & {
        textProps?: Partial<import("@tamagui/web").TextNonStyleProps & import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase>> & import("@tamagui/web").PseudoProps<import("@tamagui/web").WithThemeAndShorthands<import("@tamagui/web").TextStylePropsBase>> & import("@tamagui/web").MediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").TextStylePropsBase>> & import("react").RefAttributes<import("@tamagui/web").TamaguiTextElement> & Omit<import("@tamagui/web").TextProps, "color" | "space" | "zIndex" | "display" | "fontFamily" | "fontSize" | "fontStyle" | "fontWeight" | "letterSpacing" | "lineHeight" | "textAlign" | "textDecorationLine" | "textDecorationStyle" | "textDecorationColor" | "textShadowColor" | "textShadowOffset" | "textShadowRadius" | "textTransform" | "testID" | "fontVariant" | "writingDirection" | "backfaceVisibility" | "backgroundColor" | "borderBlockColor" | "borderBlockEndColor" | "borderBlockStartColor" | "borderBottomColor" | "borderBottomEndRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderBottomStartRadius" | "borderColor" | "borderCurve" | "borderEndColor" | "borderEndEndRadius" | "borderEndStartRadius" | "borderLeftColor" | "borderRadius" | "borderRightColor" | "borderStartColor" | "borderStartEndRadius" | "borderStartStartRadius" | "borderStyle" | "borderTopColor" | "borderTopEndRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderTopStartRadius" | "opacity" | "elevation" | "pointerEvents" | "alignContent" | "alignItems" | "alignSelf" | "aspectRatio" | "borderBottomWidth" | "borderEndWidth" | "borderLeftWidth" | "borderRightWidth" | "borderStartWidth" | "borderTopWidth" | "borderWidth" | "bottom" | "end" | "flex" | "flexBasis" | "flexDirection" | "rowGap" | "gap" | "columnGap" | "flexGrow" | "flexShrink" | "flexWrap" | "height" | "justifyContent" | "left" | "margin" | "marginBottom" | "marginEnd" | "marginHorizontal" | "marginLeft" | "marginRight" | "marginStart" | "marginTop" | "marginVertical" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "overflow" | "padding" | "paddingBottom" | "paddingEnd" | "paddingHorizontal" | "paddingLeft" | "paddingRight" | "paddingStart" | "paddingTop" | "paddingVertical" | "position" | "right" | "start" | "top" | "width" | "direction" | "shadowColor" | "shadowOffset" | "shadowOpacity" | "shadowRadius" | "transform" | "transformMatrix" | "rotation" | "scaleX" | "scaleY" | "translateX" | "translateY" | "textAlignVertical" | "verticalAlign" | "includeFontPadding" | "ellipse" | "textDecorationDistance" | "textOverflow" | "whiteSpace" | "wordWrap" | "x" | "y" | "perspective" | "scale" | "skewX" | "skewY" | "matrix" | "rotate" | "rotateY" | "rotateX" | "rotateZ" | "contain" | "touchAction" | "cursor" | "outlineColor" | "outlineOffset" | "outlineStyle" | "outlineWidth" | "spaceDirection" | "separator" | "animation" | "animateOnly" | "userSelect" | "transformOrigin" | "key" | `$${string}` | `$${number}` | "maxFontSizeMultiplier" | `$theme-${string}` | `$theme-${number}` | "ref" | "children" | "onPress" | "onLongPress" | "onPressIn" | "onPressOut" | "onHoverIn" | "onHoverOut" | "onMouseEnter" | "onMouseLeave" | "onMouseDown" | "onMouseUp" | "onFocus" | "onBlur" | "style" | "allowFontScaling" | "ellipsizeMode" | "id" | "lineBreakMode" | "numberOfLines" | "onTextLayout" | "nativeID" | "adjustsFontSizeToFit" | "dynamicTypeRamp" | "minimumFontScale" | "suppressHighlighting" | "lineBreakStrategyIOS" | "disabled" | "selectable" | "selectionColor" | "textBreakStrategy" | "dataDetectorType" | "android_hyphenationFrequency" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "aria-label" | "accessibilityRole" | "accessibilityState" | "aria-busy" | "aria-checked" | "aria-disabled" | "aria-expanded" | "aria-selected" | "aria-labelledby" | "accessibilityHint" | "accessibilityValue" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "onAccessibilityAction" | "importantForAccessibility" | "aria-hidden" | "aria-live" | "aria-modal" | "role" | "accessibilityLiveRegion" | "accessibilityLabelledBy" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "accessibilityLanguage" | "theme" | "target" | "asChild" | "dangerouslySetInnerHTML" | "debug" | "className" | "themeShallow" | "themeInverse" | "tag" | "group" | "untilMeasured" | "componentName" | "tabIndex" | "disableOptimization" | "forceStyle" | "disableClassName" | "onScroll" | "hoverStyle" | "pressStyle" | "focusStyle" | "exitStyle" | "enterStyle"> & import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextNonStyleProps & import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase>> & import("@tamagui/web").PseudoProps<import("@tamagui/web").WithThemeAndShorthands<import("@tamagui/web").TextStylePropsBase>> & import("@tamagui/web").MediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").TextStylePropsBase>> & import("react").RefAttributes<import("@tamagui/web").TamaguiTextElement> & Omit<import("@tamagui/web").TextProps, "color" | "space" | "zIndex" | "display" | "fontFamily" | "fontSize" | "fontStyle" | "fontWeight" | "letterSpacing" | "lineHeight" | "textAlign" | "textDecorationLine" | "textDecorationStyle" | "textDecorationColor" | "textShadowColor" | "textShadowOffset" | "textShadowRadius" | "textTransform" | "testID" | "fontVariant" | "writingDirection" | "backfaceVisibility" | "backgroundColor" | "borderBlockColor" | "borderBlockEndColor" | "borderBlockStartColor" | "borderBottomColor" | "borderBottomEndRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderBottomStartRadius" | "borderColor" | "borderCurve" | "borderEndColor" | "borderEndEndRadius" | "borderEndStartRadius" | "borderLeftColor" | "borderRadius" | "borderRightColor" | "borderStartColor" | "borderStartEndRadius" | "borderStartStartRadius" | "borderStyle" | "borderTopColor" | "borderTopEndRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderTopStartRadius" | "opacity" | "elevation" | "pointerEvents" | "alignContent" | "alignItems" | "alignSelf" | "aspectRatio" | "borderBottomWidth" | "borderEndWidth" | "borderLeftWidth" | "borderRightWidth" | "borderStartWidth" | "borderTopWidth" | "borderWidth" | "bottom" | "end" | "flex" | "flexBasis" | "flexDirection" | "rowGap" | "gap" | "columnGap" | "flexGrow" | "flexShrink" | "flexWrap" | "height" | "justifyContent" | "left" | "margin" | "marginBottom" | "marginEnd" | "marginHorizontal" | "marginLeft" | "marginRight" | "marginStart" | "marginTop" | "marginVertical" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "overflow" | "padding" | "paddingBottom" | "paddingEnd" | "paddingHorizontal" | "paddingLeft" | "paddingRight" | "paddingStart" | "paddingTop" | "paddingVertical" | "position" | "right" | "start" | "top" | "width" | "direction" | "shadowColor" | "shadowOffset" | "shadowOpacity" | "shadowRadius" | "transform" | "transformMatrix" | "rotation" | "scaleX" | "scaleY" | "translateX" | "translateY" | "textAlignVertical" | "verticalAlign" | "includeFontPadding" | "ellipse" | "textDecorationDistance" | "textOverflow" | "whiteSpace" | "wordWrap" | "x" | "y" | "perspective" | "scale" | "skewX" | "skewY" | "matrix" | "rotate" | "rotateY" | "rotateX" | "rotateZ" | "contain" | "touchAction" | "cursor" | "outlineColor" | "outlineOffset" | "outlineStyle" | "outlineWidth" | "spaceDirection" | "separator" | "animation" | "animateOnly" | "userSelect" | "transformOrigin" | "key" | `$${string}` | `$${number}` | "maxFontSizeMultiplier" | `$theme-${string}` | `$theme-${number}` | "ref" | "children" | "onPress" | "onLongPress" | "onPressIn" | "onPressOut" | "onHoverIn" | "onHoverOut" | "onMouseEnter" | "onMouseLeave" | "onMouseDown" | "onMouseUp" | "onFocus" | "onBlur" | "style" | "allowFontScaling" | "ellipsizeMode" | "id" | "lineBreakMode" | "numberOfLines" | "onTextLayout" | "nativeID" | "adjustsFontSizeToFit" | "dynamicTypeRamp" | "minimumFontScale" | "suppressHighlighting" | "lineBreakStrategyIOS" | "disabled" | "selectable" | "selectionColor" | "textBreakStrategy" | "dataDetectorType" | "android_hyphenationFrequency" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "aria-label" | "accessibilityRole" | "accessibilityState" | "aria-busy" | "aria-checked" | "aria-disabled" | "aria-expanded" | "aria-selected" | "aria-labelledby" | "accessibilityHint" | "accessibilityValue" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "onAccessibilityAction" | "importantForAccessibility" | "aria-hidden" | "aria-live" | "aria-modal" | "role" | "accessibilityLiveRegion" | "accessibilityLabelledBy" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "accessibilityLanguage" | "theme" | "target" | "asChild" | "dangerouslySetInnerHTML" | "debug" | "className" | "themeShallow" | "themeInverse" | "tag" | "group" | "untilMeasured" | "componentName" | "tabIndex" | "disableOptimization" | "forceStyle" | "disableClassName" | "onScroll" | "hoverStyle" | "pressStyle" | "focusStyle" | "exitStyle" | "enterStyle"> & {
            readonly unstyled?: boolean | undefined;
            readonly size?: FontSizeTokens | undefined;
        }> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextNonStyleProps & import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase>> & import("@tamagui/web").PseudoProps<import("@tamagui/web").WithThemeAndShorthands<import("@tamagui/web").TextStylePropsBase>> & import("@tamagui/web").MediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").TextStylePropsBase>> & import("react").RefAttributes<import("@tamagui/web").TamaguiTextElement> & Omit<import("@tamagui/web").TextProps, "color" | "space" | "zIndex" | "display" | "fontFamily" | "fontSize" | "fontStyle" | "fontWeight" | "letterSpacing" | "lineHeight" | "textAlign" | "textDecorationLine" | "textDecorationStyle" | "textDecorationColor" | "textShadowColor" | "textShadowOffset" | "textShadowRadius" | "textTransform" | "testID" | "fontVariant" | "writingDirection" | "backfaceVisibility" | "backgroundColor" | "borderBlockColor" | "borderBlockEndColor" | "borderBlockStartColor" | "borderBottomColor" | "borderBottomEndRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderBottomStartRadius" | "borderColor" | "borderCurve" | "borderEndColor" | "borderEndEndRadius" | "borderEndStartRadius" | "borderLeftColor" | "borderRadius" | "borderRightColor" | "borderStartColor" | "borderStartEndRadius" | "borderStartStartRadius" | "borderStyle" | "borderTopColor" | "borderTopEndRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderTopStartRadius" | "opacity" | "elevation" | "pointerEvents" | "alignContent" | "alignItems" | "alignSelf" | "aspectRatio" | "borderBottomWidth" | "borderEndWidth" | "borderLeftWidth" | "borderRightWidth" | "borderStartWidth" | "borderTopWidth" | "borderWidth" | "bottom" | "end" | "flex" | "flexBasis" | "flexDirection" | "rowGap" | "gap" | "columnGap" | "flexGrow" | "flexShrink" | "flexWrap" | "height" | "justifyContent" | "left" | "margin" | "marginBottom" | "marginEnd" | "marginHorizontal" | "marginLeft" | "marginRight" | "marginStart" | "marginTop" | "marginVertical" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "overflow" | "padding" | "paddingBottom" | "paddingEnd" | "paddingHorizontal" | "paddingLeft" | "paddingRight" | "paddingStart" | "paddingTop" | "paddingVertical" | "position" | "right" | "start" | "top" | "width" | "direction" | "shadowColor" | "shadowOffset" | "shadowOpacity" | "shadowRadius" | "transform" | "transformMatrix" | "rotation" | "scaleX" | "scaleY" | "translateX" | "translateY" | "textAlignVertical" | "verticalAlign" | "includeFontPadding" | "ellipse" | "textDecorationDistance" | "textOverflow" | "whiteSpace" | "wordWrap" | "x" | "y" | "perspective" | "scale" | "skewX" | "skewY" | "matrix" | "rotate" | "rotateY" | "rotateX" | "rotateZ" | "contain" | "touchAction" | "cursor" | "outlineColor" | "outlineOffset" | "outlineStyle" | "outlineWidth" | "spaceDirection" | "separator" | "animation" | "animateOnly" | "userSelect" | "transformOrigin" | "key" | `$${string}` | `$${number}` | "maxFontSizeMultiplier" | `$theme-${string}` | `$theme-${number}` | "ref" | "children" | "onPress" | "onLongPress" | "onPressIn" | "onPressOut" | "onHoverIn" | "onHoverOut" | "onMouseEnter" | "onMouseLeave" | "onMouseDown" | "onMouseUp" | "onFocus" | "onBlur" | "style" | "allowFontScaling" | "ellipsizeMode" | "id" | "lineBreakMode" | "numberOfLines" | "onTextLayout" | "nativeID" | "adjustsFontSizeToFit" | "dynamicTypeRamp" | "minimumFontScale" | "suppressHighlighting" | "lineBreakStrategyIOS" | "disabled" | "selectable" | "selectionColor" | "textBreakStrategy" | "dataDetectorType" | "android_hyphenationFrequency" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "aria-label" | "accessibilityRole" | "accessibilityState" | "aria-busy" | "aria-checked" | "aria-disabled" | "aria-expanded" | "aria-selected" | "aria-labelledby" | "accessibilityHint" | "accessibilityValue" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "onAccessibilityAction" | "importantForAccessibility" | "aria-hidden" | "aria-live" | "aria-modal" | "role" | "accessibilityLiveRegion" | "accessibilityLabelledBy" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "accessibilityLanguage" | "theme" | "target" | "asChild" | "dangerouslySetInnerHTML" | "debug" | "className" | "themeShallow" | "themeInverse" | "tag" | "group" | "untilMeasured" | "componentName" | "tabIndex" | "disableOptimization" | "forceStyle" | "disableClassName" | "onScroll" | "hoverStyle" | "pressStyle" | "focusStyle" | "exitStyle" | "enterStyle"> & {
            readonly unstyled?: boolean | undefined;
            readonly size?: FontSizeTokens | undefined;
        }>> & import("@tamagui/web").PseudoProps<import("@tamagui/web").WithThemeAndShorthands<import("@tamagui/web").TextNonStyleProps & import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase>> & import("@tamagui/web").PseudoProps<import("@tamagui/web").WithThemeAndShorthands<import("@tamagui/web").TextStylePropsBase>> & import("@tamagui/web").MediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").TextStylePropsBase>> & import("react").RefAttributes<import("@tamagui/web").TamaguiTextElement> & Omit<import("@tamagui/web").TextProps, "color" | "space" | "zIndex" | "display" | "fontFamily" | "fontSize" | "fontStyle" | "fontWeight" | "letterSpacing" | "lineHeight" | "textAlign" | "textDecorationLine" | "textDecorationStyle" | "textDecorationColor" | "textShadowColor" | "textShadowOffset" | "textShadowRadius" | "textTransform" | "testID" | "fontVariant" | "writingDirection" | "backfaceVisibility" | "backgroundColor" | "borderBlockColor" | "borderBlockEndColor" | "borderBlockStartColor" | "borderBottomColor" | "borderBottomEndRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderBottomStartRadius" | "borderColor" | "borderCurve" | "borderEndColor" | "borderEndEndRadius" | "borderEndStartRadius" | "borderLeftColor" | "borderRadius" | "borderRightColor" | "borderStartColor" | "borderStartEndRadius" | "borderStartStartRadius" | "borderStyle" | "borderTopColor" | "borderTopEndRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderTopStartRadius" | "opacity" | "elevation" | "pointerEvents" | "alignContent" | "alignItems" | "alignSelf" | "aspectRatio" | "borderBottomWidth" | "borderEndWidth" | "borderLeftWidth" | "borderRightWidth" | "borderStartWidth" | "borderTopWidth" | "borderWidth" | "bottom" | "end" | "flex" | "flexBasis" | "flexDirection" | "rowGap" | "gap" | "columnGap" | "flexGrow" | "flexShrink" | "flexWrap" | "height" | "justifyContent" | "left" | "margin" | "marginBottom" | "marginEnd" | "marginHorizontal" | "marginLeft" | "marginRight" | "marginStart" | "marginTop" | "marginVertical" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "overflow" | "padding" | "paddingBottom" | "paddingEnd" | "paddingHorizontal" | "paddingLeft" | "paddingRight" | "paddingStart" | "paddingTop" | "paddingVertical" | "position" | "right" | "start" | "top" | "width" | "direction" | "shadowColor" | "shadowOffset" | "shadowOpacity" | "shadowRadius" | "transform" | "transformMatrix" | "rotation" | "scaleX" | "scaleY" | "translateX" | "translateY" | "textAlignVertical" | "verticalAlign" | "includeFontPadding" | "ellipse" | "textDecorationDistance" | "textOverflow" | "whiteSpace" | "wordWrap" | "x" | "y" | "perspective" | "scale" | "skewX" | "skewY" | "matrix" | "rotate" | "rotateY" | "rotateX" | "rotateZ" | "contain" | "touchAction" | "cursor" | "outlineColor" | "outlineOffset" | "outlineStyle" | "outlineWidth" | "spaceDirection" | "separator" | "animation" | "animateOnly" | "userSelect" | "transformOrigin" | "key" | `$${string}` | `$${number}` | "maxFontSizeMultiplier" | `$theme-${string}` | `$theme-${number}` | "ref" | "children" | "onPress" | "onLongPress" | "onPressIn" | "onPressOut" | "onHoverIn" | "onHoverOut" | "onMouseEnter" | "onMouseLeave" | "onMouseDown" | "onMouseUp" | "onFocus" | "onBlur" | "style" | "allowFontScaling" | "ellipsizeMode" | "id" | "lineBreakMode" | "numberOfLines" | "onTextLayout" | "nativeID" | "adjustsFontSizeToFit" | "dynamicTypeRamp" | "minimumFontScale" | "suppressHighlighting" | "lineBreakStrategyIOS" | "disabled" | "selectable" | "selectionColor" | "textBreakStrategy" | "dataDetectorType" | "android_hyphenationFrequency" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "aria-label" | "accessibilityRole" | "accessibilityState" | "aria-busy" | "aria-checked" | "aria-disabled" | "aria-expanded" | "aria-selected" | "aria-labelledby" | "accessibilityHint" | "accessibilityValue" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "onAccessibilityAction" | "importantForAccessibility" | "aria-hidden" | "aria-live" | "aria-modal" | "role" | "accessibilityLiveRegion" | "accessibilityLabelledBy" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "accessibilityLanguage" | "theme" | "target" | "asChild" | "dangerouslySetInnerHTML" | "debug" | "className" | "themeShallow" | "themeInverse" | "tag" | "group" | "untilMeasured" | "componentName" | "tabIndex" | "disableOptimization" | "forceStyle" | "disableClassName" | "onScroll" | "hoverStyle" | "pressStyle" | "focusStyle" | "exitStyle" | "enterStyle"> & {
            readonly unstyled?: boolean | undefined;
            readonly size?: FontSizeTokens | undefined;
        }>> & import("@tamagui/web").MediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").TextNonStyleProps & import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase>> & import("@tamagui/web").PseudoProps<import("@tamagui/web").WithThemeAndShorthands<import("@tamagui/web").TextStylePropsBase>> & import("@tamagui/web").MediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").TextStylePropsBase>> & import("react").RefAttributes<import("@tamagui/web").TamaguiTextElement> & Omit<import("@tamagui/web").TextProps, "color" | "space" | "zIndex" | "display" | "fontFamily" | "fontSize" | "fontStyle" | "fontWeight" | "letterSpacing" | "lineHeight" | "textAlign" | "textDecorationLine" | "textDecorationStyle" | "textDecorationColor" | "textShadowColor" | "textShadowOffset" | "textShadowRadius" | "textTransform" | "testID" | "fontVariant" | "writingDirection" | "backfaceVisibility" | "backgroundColor" | "borderBlockColor" | "borderBlockEndColor" | "borderBlockStartColor" | "borderBottomColor" | "borderBottomEndRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderBottomStartRadius" | "borderColor" | "borderCurve" | "borderEndColor" | "borderEndEndRadius" | "borderEndStartRadius" | "borderLeftColor" | "borderRadius" | "borderRightColor" | "borderStartColor" | "borderStartEndRadius" | "borderStartStartRadius" | "borderStyle" | "borderTopColor" | "borderTopEndRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderTopStartRadius" | "opacity" | "elevation" | "pointerEvents" | "alignContent" | "alignItems" | "alignSelf" | "aspectRatio" | "borderBottomWidth" | "borderEndWidth" | "borderLeftWidth" | "borderRightWidth" | "borderStartWidth" | "borderTopWidth" | "borderWidth" | "bottom" | "end" | "flex" | "flexBasis" | "flexDirection" | "rowGap" | "gap" | "columnGap" | "flexGrow" | "flexShrink" | "flexWrap" | "height" | "justifyContent" | "left" | "margin" | "marginBottom" | "marginEnd" | "marginHorizontal" | "marginLeft" | "marginRight" | "marginStart" | "marginTop" | "marginVertical" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "overflow" | "padding" | "paddingBottom" | "paddingEnd" | "paddingHorizontal" | "paddingLeft" | "paddingRight" | "paddingStart" | "paddingTop" | "paddingVertical" | "position" | "right" | "start" | "top" | "width" | "direction" | "shadowColor" | "shadowOffset" | "shadowOpacity" | "shadowRadius" | "transform" | "transformMatrix" | "rotation" | "scaleX" | "scaleY" | "translateX" | "translateY" | "textAlignVertical" | "verticalAlign" | "includeFontPadding" | "ellipse" | "textDecorationDistance" | "textOverflow" | "whiteSpace" | "wordWrap" | "x" | "y" | "perspective" | "scale" | "skewX" | "skewY" | "matrix" | "rotate" | "rotateY" | "rotateX" | "rotateZ" | "contain" | "touchAction" | "cursor" | "outlineColor" | "outlineOffset" | "outlineStyle" | "outlineWidth" | "spaceDirection" | "separator" | "animation" | "animateOnly" | "userSelect" | "transformOrigin" | "key" | `$${string}` | `$${number}` | "maxFontSizeMultiplier" | `$theme-${string}` | `$theme-${number}` | "ref" | "children" | "onPress" | "onLongPress" | "onPressIn" | "onPressOut" | "onHoverIn" | "onHoverOut" | "onMouseEnter" | "onMouseLeave" | "onMouseDown" | "onMouseUp" | "onFocus" | "onBlur" | "style" | "allowFontScaling" | "ellipsizeMode" | "id" | "lineBreakMode" | "numberOfLines" | "onTextLayout" | "nativeID" | "adjustsFontSizeToFit" | "dynamicTypeRamp" | "minimumFontScale" | "suppressHighlighting" | "lineBreakStrategyIOS" | "disabled" | "selectable" | "selectionColor" | "textBreakStrategy" | "dataDetectorType" | "android_hyphenationFrequency" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "aria-label" | "accessibilityRole" | "accessibilityState" | "aria-busy" | "aria-checked" | "aria-disabled" | "aria-expanded" | "aria-selected" | "aria-labelledby" | "accessibilityHint" | "accessibilityValue" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "onAccessibilityAction" | "importantForAccessibility" | "aria-hidden" | "aria-live" | "aria-modal" | "role" | "accessibilityLiveRegion" | "accessibilityLabelledBy" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "accessibilityLanguage" | "theme" | "target" | "asChild" | "dangerouslySetInnerHTML" | "debug" | "className" | "themeShallow" | "themeInverse" | "tag" | "group" | "untilMeasured" | "componentName" | "tabIndex" | "disableOptimization" | "forceStyle" | "disableClassName" | "onScroll" | "hoverStyle" | "pressStyle" | "focusStyle" | "exitStyle" | "enterStyle"> & {
            readonly unstyled?: boolean | undefined;
            readonly size?: FontSizeTokens | undefined;
        }>>> | undefined;
        noTextWrap?: boolean | undefined;
    } & ThemeableProps & {
        /**
         * add icon before, passes color and size automatically if Component
         */
        icon?: IconProp | undefined;
        /**
         * add icon after, passes color and size automatically if Component
         */
        iconAfter?: IconProp | undefined;
        /**
         * adjust icon relative to size
         *
         * @default 1
         */
        scaleIcon?: number | undefined;
        /**
         * make the spacing elements flex
         */
        spaceFlex?: number | boolean | undefined;
        /**
         * adjust internal space relative to icon size
         */
        scaleSpace?: number | undefined;
        /**
         * remove default styles
         */
        unstyled?: boolean | undefined;
    }, import("@tamagui/web").StackNonStyleProps & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/web").PseudoProps<import("@tamagui/web").WithThemeAndShorthands<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/web").MediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").StackStylePropsBase>> & {
        rel?: any;
        download?: any;
        onStartShouldSetResponder?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
        onMoveShouldSetResponder?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
        onResponderEnd?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onResponderGrant?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onResponderReject?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onResponderMove?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onResponderRelease?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onResponderStart?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onResponderTerminationRequest?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
        onResponderTerminate?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onStartShouldSetResponderCapture?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
        onMoveShouldSetResponderCapture?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
        dataSet?: Record<string, string | number | null | undefined> | undefined;
        onScrollShouldSetResponder?: unknown;
        onScrollShouldSetResponderCapture?: unknown;
        onSelectionChangeShouldSetResponder?: unknown;
        onSelectionChangeShouldSetResponderCapture?: unknown;
        onLayout?: ((event: import("react-native").LayoutChangeEvent) => void) | undefined;
        href?: string | undefined;
        hrefAttrs?: {
            target?: "top" | "_blank" | "_self" | "_top" | "blank" | "self" | undefined;
            rel?: string | undefined;
            download?: boolean | undefined;
        } | undefined;
        elevationAndroid?: string | number | undefined;
    } & import("react").RefAttributes<import("@tamagui/web").TamaguiElement> & Omit<import("@tamagui/web").StackProps, keyof import("@tamagui/web").StackStylePropsBase | `$${string}` | `$${number}` | `$theme-${string}` | `$theme-${number}` | keyof import("@tamagui/web").RNViewProps | keyof import("@tamagui/web").StackNonStyleProps | keyof import("@tamagui/web").PseudoProps<import("@tamagui/web").WithThemeAndShorthands<import("@tamagui/web").StackStylePropsBase>> | keyof import("react").RefAttributes<import("@tamagui/web").TamaguiElement>>, {
        size?: SizeTokens | undefined;
        elevation?: number | SizeTokens | undefined;
        variant?: "outlined" | undefined;
        disabled?: boolean | undefined;
        unstyled?: boolean | undefined;
        transparent?: boolean | undefined;
        circular?: boolean | undefined;
        fullscreen?: boolean | undefined;
        hoverTheme?: boolean | undefined;
        pressTheme?: boolean | undefined;
        focusTheme?: boolean | undefined;
        elevate?: boolean | undefined;
        bordered?: number | boolean | undefined;
        backgrounded?: boolean | undefined;
        radiused?: boolean | undefined;
        padded?: boolean | undefined;
        chromeless?: boolean | "all" | undefined;
    }, {
        displayName: string | undefined;
        __baseStyles: import("@tamagui/web").StackStylePropsBase & import("@tamagui/web").StackNonStyleProps & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/web").PseudoProps<import("@tamagui/web").WithThemeAndShorthands<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/web").MediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").StackStylePropsBase>> & {
            rel?: any;
            download?: any;
            onStartShouldSetResponder?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
            onMoveShouldSetResponder?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
            onResponderEnd?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
            onResponderGrant?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
            onResponderReject?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
            onResponderMove?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
            onResponderRelease?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
            onResponderStart?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
            onResponderTerminationRequest?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
            onResponderTerminate?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
            onStartShouldSetResponderCapture?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
            onMoveShouldSetResponderCapture?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
            dataSet?: Record<string, string | number | null | undefined> | undefined;
            onScrollShouldSetResponder?: unknown;
            onScrollShouldSetResponderCapture?: unknown;
            onSelectionChangeShouldSetResponder?: unknown;
            onSelectionChangeShouldSetResponderCapture?: unknown;
            onLayout?: ((event: import("react-native").LayoutChangeEvent) => void) | undefined;
            href?: string | undefined;
            hrefAttrs?: {
                target?: "top" | "_blank" | "_self" | "_top" | "blank" | "self" | undefined;
                rel?: string | undefined;
                download?: boolean | undefined;
            } | undefined;
            elevationAndroid?: string | number | undefined;
        } & import("react").RefAttributes<import("@tamagui/web").TamaguiElement> & Omit<import("@tamagui/web").StackProps, keyof import("@tamagui/web").StackStylePropsBase | `$${string}` | `$${number}` | `$theme-${string}` | `$theme-${number}` | keyof import("@tamagui/web").RNViewProps | keyof import("@tamagui/web").StackNonStyleProps | keyof import("@tamagui/web").PseudoProps<import("@tamagui/web").WithThemeAndShorthands<import("@tamagui/web").StackStylePropsBase>> | keyof import("react").RefAttributes<import("@tamagui/web").TamaguiElement>> & {
            rel?: any;
            download?: any;
            onStartShouldSetResponder?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
            onMoveShouldSetResponder?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
            onResponderEnd?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
            onResponderGrant?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
            onResponderReject?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
            onResponderMove?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
            onResponderRelease?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
            onResponderStart?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
            onResponderTerminationRequest?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
            onResponderTerminate?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
            onStartShouldSetResponderCapture?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
            onMoveShouldSetResponderCapture?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
            dataSet?: Record<string, string | number | null | undefined> | undefined;
            onScrollShouldSetResponder?: unknown;
            onScrollShouldSetResponderCapture?: unknown;
            onSelectionChangeShouldSetResponder?: unknown;
            onSelectionChangeShouldSetResponderCapture?: unknown;
            onLayout?: ((event: import("react-native").LayoutChangeEvent) => void) | undefined;
            href?: string | undefined;
            hrefAttrs?: {
                target?: "top" | "_blank" | "_self" | "_top" | "blank" | "self" | undefined;
                rel?: string | undefined;
                download?: boolean | undefined;
            } | undefined;
            elevationAndroid?: string | number | undefined;
        };
        __baseProps: import("@tamagui/web").StackNonStyleProps & {
            rel?: any;
            download?: any;
            onStartShouldSetResponder?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
            onMoveShouldSetResponder?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
            onResponderEnd?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
            onResponderGrant?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
            onResponderReject?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
            onResponderMove?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
            onResponderRelease?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
            onResponderStart?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
            onResponderTerminationRequest?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
            onResponderTerminate?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
            onStartShouldSetResponderCapture?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
            onMoveShouldSetResponderCapture?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
            dataSet?: Record<string, string | number | null | undefined> | undefined;
            onScrollShouldSetResponder?: unknown;
            onScrollShouldSetResponderCapture?: unknown;
            onSelectionChangeShouldSetResponder?: unknown;
            onSelectionChangeShouldSetResponderCapture?: unknown;
            onLayout?: ((event: import("react-native").LayoutChangeEvent) => void) | undefined;
            href?: string | undefined;
            hrefAttrs?: {
                target?: "top" | "_blank" | "_self" | "_top" | "blank" | "self" | undefined;
                rel?: string | undefined;
                download?: boolean | undefined;
            } | undefined;
            elevationAndroid?: string | number | undefined;
        } & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/web").PseudoProps<import("@tamagui/web").WithThemeAndShorthands<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/web").MediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").StackStylePropsBase>> & import("react").RefAttributes<import("@tamagui/web").TamaguiElement> & Omit<import("@tamagui/web").StackProps, keyof import("@tamagui/web").StackStylePropsBase | `$${string}` | `$${number}` | `$theme-${string}` | `$theme-${number}` | keyof import("@tamagui/web").RNViewProps | keyof import("@tamagui/web").StackNonStyleProps | keyof import("@tamagui/web").PseudoProps<import("@tamagui/web").WithThemeAndShorthands<import("@tamagui/web").StackStylePropsBase>> | keyof import("react").RefAttributes<import("@tamagui/web").TamaguiElement>> & {
            rel?: any;
            download?: any;
            onStartShouldSetResponder?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
            onMoveShouldSetResponder?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
            onResponderEnd?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
            onResponderGrant?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
            onResponderReject?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
            onResponderMove?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
            onResponderRelease?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
            onResponderStart?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
            onResponderTerminationRequest?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
            onResponderTerminate?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
            onStartShouldSetResponderCapture?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
            onMoveShouldSetResponderCapture?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
            dataSet?: Record<string, string | number | null | undefined> | undefined;
            onScrollShouldSetResponder?: unknown;
            onScrollShouldSetResponderCapture?: unknown;
            onSelectionChangeShouldSetResponder?: unknown;
            onSelectionChangeShouldSetResponderCapture?: unknown;
            onLayout?: ((event: import("react-native").LayoutChangeEvent) => void) | undefined;
            href?: string | undefined;
            hrefAttrs?: {
                target?: "top" | "_blank" | "_self" | "_top" | "blank" | "self" | undefined;
                rel?: string | undefined;
                download?: boolean | undefined;
            } | undefined;
            elevationAndroid?: string | number | undefined;
        };
        __variantProps: void & {
            readonly fullscreen?: boolean | undefined;
            readonly elevation?: number | SizeTokens | undefined;
        } & {
            elevation?: number | SizeTokens | undefined;
            transparent?: boolean | undefined;
            fullscreen?: boolean | undefined;
            circular?: boolean | undefined;
            hoverTheme?: boolean | undefined;
            pressTheme?: boolean | undefined;
            focusTheme?: boolean | undefined;
            elevate?: boolean | undefined;
            bordered?: number | boolean | undefined;
            backgrounded?: boolean | undefined;
            radiused?: boolean | undefined;
            padded?: boolean | undefined;
            chromeless?: boolean | "all" | undefined;
        };
    }>;
} & {
    displayName: string | undefined;
    __baseStyles: import("@tamagui/web").StackStylePropsBase & import("@tamagui/web").StackNonStyleProps & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/web").PseudoProps<import("@tamagui/web").WithThemeAndShorthands<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/web").MediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").StackStylePropsBase>> & {
        rel?: any;
        download?: any;
        onStartShouldSetResponder?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
        onMoveShouldSetResponder?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
        onResponderEnd?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onResponderGrant?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onResponderReject?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onResponderMove?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onResponderRelease?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onResponderStart?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onResponderTerminationRequest?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
        onResponderTerminate?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onStartShouldSetResponderCapture?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
        onMoveShouldSetResponderCapture?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
        dataSet?: Record<string, string | number | null | undefined> | undefined;
        onScrollShouldSetResponder?: unknown;
        onScrollShouldSetResponderCapture?: unknown;
        onSelectionChangeShouldSetResponder?: unknown;
        onSelectionChangeShouldSetResponderCapture?: unknown;
        onLayout?: ((event: import("react-native").LayoutChangeEvent) => void) | undefined;
        href?: string | undefined;
        hrefAttrs?: {
            target?: "top" | "_blank" | "_self" | "_top" | "blank" | "self" | undefined;
            rel?: string | undefined;
            download?: boolean | undefined;
        } | undefined;
        elevationAndroid?: string | number | undefined;
    } & import("react").RefAttributes<import("@tamagui/web").TamaguiElement> & Omit<import("@tamagui/web").StackProps, keyof import("@tamagui/web").StackStylePropsBase | `$${string}` | `$${number}` | `$theme-${string}` | `$theme-${number}` | keyof import("@tamagui/web").RNViewProps | keyof import("@tamagui/web").StackNonStyleProps | keyof import("@tamagui/web").PseudoProps<import("@tamagui/web").WithThemeAndShorthands<import("@tamagui/web").StackStylePropsBase>> | keyof import("react").RefAttributes<import("@tamagui/web").TamaguiElement>> & {
        rel?: any;
        download?: any;
        onStartShouldSetResponder?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
        onMoveShouldSetResponder?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
        onResponderEnd?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onResponderGrant?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onResponderReject?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onResponderMove?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onResponderRelease?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onResponderStart?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onResponderTerminationRequest?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
        onResponderTerminate?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onStartShouldSetResponderCapture?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
        onMoveShouldSetResponderCapture?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
        dataSet?: Record<string, string | number | null | undefined> | undefined;
        onScrollShouldSetResponder?: unknown;
        onScrollShouldSetResponderCapture?: unknown;
        onSelectionChangeShouldSetResponder?: unknown;
        onSelectionChangeShouldSetResponderCapture?: unknown;
        onLayout?: ((event: import("react-native").LayoutChangeEvent) => void) | undefined;
        href?: string | undefined;
        hrefAttrs?: {
            target?: "top" | "_blank" | "_self" | "_top" | "blank" | "self" | undefined;
            rel?: string | undefined;
            download?: boolean | undefined;
        } | undefined;
        elevationAndroid?: string | number | undefined;
    };
    __baseProps: import("@tamagui/web").StackNonStyleProps & {
        rel?: any;
        download?: any;
        onStartShouldSetResponder?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
        onMoveShouldSetResponder?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
        onResponderEnd?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onResponderGrant?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onResponderReject?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onResponderMove?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onResponderRelease?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onResponderStart?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onResponderTerminationRequest?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
        onResponderTerminate?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onStartShouldSetResponderCapture?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
        onMoveShouldSetResponderCapture?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
        dataSet?: Record<string, string | number | null | undefined> | undefined;
        onScrollShouldSetResponder?: unknown;
        onScrollShouldSetResponderCapture?: unknown;
        onSelectionChangeShouldSetResponder?: unknown;
        onSelectionChangeShouldSetResponderCapture?: unknown;
        onLayout?: ((event: import("react-native").LayoutChangeEvent) => void) | undefined;
        href?: string | undefined;
        hrefAttrs?: {
            target?: "top" | "_blank" | "_self" | "_top" | "blank" | "self" | undefined;
            rel?: string | undefined;
            download?: boolean | undefined;
        } | undefined;
        elevationAndroid?: string | number | undefined;
    } & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/web").PseudoProps<import("@tamagui/web").WithThemeAndShorthands<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/web").MediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").StackStylePropsBase>> & import("react").RefAttributes<import("@tamagui/web").TamaguiElement> & Omit<import("@tamagui/web").StackProps, keyof import("@tamagui/web").StackStylePropsBase | `$${string}` | `$${number}` | `$theme-${string}` | `$theme-${number}` | keyof import("@tamagui/web").RNViewProps | keyof import("@tamagui/web").StackNonStyleProps | keyof import("@tamagui/web").PseudoProps<import("@tamagui/web").WithThemeAndShorthands<import("@tamagui/web").StackStylePropsBase>> | keyof import("react").RefAttributes<import("@tamagui/web").TamaguiElement>> & {
        rel?: any;
        download?: any;
        onStartShouldSetResponder?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
        onMoveShouldSetResponder?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
        onResponderEnd?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onResponderGrant?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onResponderReject?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onResponderMove?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onResponderRelease?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onResponderStart?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onResponderTerminationRequest?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
        onResponderTerminate?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onStartShouldSetResponderCapture?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
        onMoveShouldSetResponderCapture?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
        dataSet?: Record<string, string | number | null | undefined> | undefined;
        onScrollShouldSetResponder?: unknown;
        onScrollShouldSetResponderCapture?: unknown;
        onSelectionChangeShouldSetResponder?: unknown;
        onSelectionChangeShouldSetResponderCapture?: unknown;
        onLayout?: ((event: import("react-native").LayoutChangeEvent) => void) | undefined;
        href?: string | undefined;
        hrefAttrs?: {
            target?: "top" | "_blank" | "_self" | "_top" | "blank" | "self" | undefined;
            rel?: string | undefined;
            download?: boolean | undefined;
        } | undefined;
        elevationAndroid?: string | number | undefined;
    };
    __variantProps: void & {
        readonly fullscreen?: boolean | undefined;
        readonly elevation?: number | SizeTokens | undefined;
    } & {
        elevation?: number | SizeTokens | undefined;
        transparent?: boolean | undefined;
        fullscreen?: boolean | undefined;
        circular?: boolean | undefined;
        hoverTheme?: boolean | undefined;
        pressTheme?: boolean | undefined;
        focusTheme?: boolean | undefined;
        elevate?: boolean | undefined;
        bordered?: number | boolean | undefined;
        backgrounded?: boolean | undefined;
        radiused?: boolean | undefined;
        padded?: boolean | undefined;
        chromeless?: boolean | "all" | undefined;
    };
} & {
    __baseStyles: import("@tamagui/web").StackNonStyleProps & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/web").PseudoProps<import("@tamagui/web").WithThemeAndShorthands<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/web").MediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").StackStylePropsBase>> & {
        rel?: any;
        download?: any;
        onStartShouldSetResponder?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
        onMoveShouldSetResponder?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
        onResponderEnd?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onResponderGrant?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onResponderReject?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onResponderMove?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onResponderRelease?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onResponderStart?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onResponderTerminationRequest?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
        onResponderTerminate?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onStartShouldSetResponderCapture?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
        onMoveShouldSetResponderCapture?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
        dataSet?: Record<string, string | number | null | undefined> | undefined;
        onScrollShouldSetResponder?: unknown;
        onScrollShouldSetResponderCapture?: unknown;
        onSelectionChangeShouldSetResponder?: unknown;
        onSelectionChangeShouldSetResponderCapture?: unknown;
        onLayout?: ((event: import("react-native").LayoutChangeEvent) => void) | undefined;
        href?: string | undefined;
        hrefAttrs?: {
            target?: "top" | "_blank" | "_self" | "_top" | "blank" | "self" | undefined;
            rel?: string | undefined;
            download?: boolean | undefined;
        } | undefined;
        elevationAndroid?: string | number | undefined;
    } & import("react").RefAttributes<import("@tamagui/web").TamaguiElement> & Omit<import("@tamagui/web").StackProps, keyof import("@tamagui/web").StackStylePropsBase | `$${string}` | `$${number}` | `$theme-${string}` | `$theme-${number}` | keyof import("@tamagui/web").RNViewProps | keyof import("@tamagui/web").StackNonStyleProps | keyof import("@tamagui/web").PseudoProps<import("@tamagui/web").WithThemeAndShorthands<import("@tamagui/web").StackStylePropsBase>> | keyof import("react").RefAttributes<import("@tamagui/web").TamaguiElement>>;
    __baseProps: import("@tamagui/web").StackNonStyleProps & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/web").PseudoProps<import("@tamagui/web").WithThemeAndShorthands<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/web").MediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").StackStylePropsBase>> & {
        rel?: any;
        download?: any;
        onStartShouldSetResponder?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
        onMoveShouldSetResponder?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
        onResponderEnd?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onResponderGrant?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onResponderReject?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onResponderMove?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onResponderRelease?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onResponderStart?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onResponderTerminationRequest?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
        onResponderTerminate?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onStartShouldSetResponderCapture?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
        onMoveShouldSetResponderCapture?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
        dataSet?: Record<string, string | number | null | undefined> | undefined;
        onScrollShouldSetResponder?: unknown;
        onScrollShouldSetResponderCapture?: unknown;
        onSelectionChangeShouldSetResponder?: unknown;
        onSelectionChangeShouldSetResponderCapture?: unknown;
        onLayout?: ((event: import("react-native").LayoutChangeEvent) => void) | undefined;
        href?: string | undefined;
        hrefAttrs?: {
            target?: "top" | "_blank" | "_self" | "_top" | "blank" | "self" | undefined;
            rel?: string | undefined;
            download?: boolean | undefined;
        } | undefined;
        elevationAndroid?: string | number | undefined;
    } & import("react").RefAttributes<import("@tamagui/web").TamaguiElement> & Omit<import("@tamagui/web").StackProps, keyof import("@tamagui/web").StackStylePropsBase | `$${string}` | `$${number}` | `$theme-${string}` | `$theme-${number}` | keyof import("@tamagui/web").RNViewProps | keyof import("@tamagui/web").StackNonStyleProps | keyof import("@tamagui/web").PseudoProps<import("@tamagui/web").WithThemeAndShorthands<import("@tamagui/web").StackStylePropsBase>> | keyof import("react").RefAttributes<import("@tamagui/web").TamaguiElement>> & TextContextStyles & {
        textProps?: Partial<import("@tamagui/web").TextNonStyleProps & import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase>> & import("@tamagui/web").PseudoProps<import("@tamagui/web").WithThemeAndShorthands<import("@tamagui/web").TextStylePropsBase>> & import("@tamagui/web").MediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").TextStylePropsBase>> & import("react").RefAttributes<import("@tamagui/web").TamaguiTextElement> & Omit<import("@tamagui/web").TextProps, "color" | "space" | "zIndex" | "display" | "fontFamily" | "fontSize" | "fontStyle" | "fontWeight" | "letterSpacing" | "lineHeight" | "textAlign" | "textDecorationLine" | "textDecorationStyle" | "textDecorationColor" | "textShadowColor" | "textShadowOffset" | "textShadowRadius" | "textTransform" | "testID" | "fontVariant" | "writingDirection" | "backfaceVisibility" | "backgroundColor" | "borderBlockColor" | "borderBlockEndColor" | "borderBlockStartColor" | "borderBottomColor" | "borderBottomEndRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderBottomStartRadius" | "borderColor" | "borderCurve" | "borderEndColor" | "borderEndEndRadius" | "borderEndStartRadius" | "borderLeftColor" | "borderRadius" | "borderRightColor" | "borderStartColor" | "borderStartEndRadius" | "borderStartStartRadius" | "borderStyle" | "borderTopColor" | "borderTopEndRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderTopStartRadius" | "opacity" | "elevation" | "pointerEvents" | "alignContent" | "alignItems" | "alignSelf" | "aspectRatio" | "borderBottomWidth" | "borderEndWidth" | "borderLeftWidth" | "borderRightWidth" | "borderStartWidth" | "borderTopWidth" | "borderWidth" | "bottom" | "end" | "flex" | "flexBasis" | "flexDirection" | "rowGap" | "gap" | "columnGap" | "flexGrow" | "flexShrink" | "flexWrap" | "height" | "justifyContent" | "left" | "margin" | "marginBottom" | "marginEnd" | "marginHorizontal" | "marginLeft" | "marginRight" | "marginStart" | "marginTop" | "marginVertical" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "overflow" | "padding" | "paddingBottom" | "paddingEnd" | "paddingHorizontal" | "paddingLeft" | "paddingRight" | "paddingStart" | "paddingTop" | "paddingVertical" | "position" | "right" | "start" | "top" | "width" | "direction" | "shadowColor" | "shadowOffset" | "shadowOpacity" | "shadowRadius" | "transform" | "transformMatrix" | "rotation" | "scaleX" | "scaleY" | "translateX" | "translateY" | "textAlignVertical" | "verticalAlign" | "includeFontPadding" | "ellipse" | "textDecorationDistance" | "textOverflow" | "whiteSpace" | "wordWrap" | "x" | "y" | "perspective" | "scale" | "skewX" | "skewY" | "matrix" | "rotate" | "rotateY" | "rotateX" | "rotateZ" | "contain" | "touchAction" | "cursor" | "outlineColor" | "outlineOffset" | "outlineStyle" | "outlineWidth" | "spaceDirection" | "separator" | "animation" | "animateOnly" | "userSelect" | "transformOrigin" | "key" | `$${string}` | `$${number}` | "maxFontSizeMultiplier" | `$theme-${string}` | `$theme-${number}` | "ref" | "children" | "onPress" | "onLongPress" | "onPressIn" | "onPressOut" | "onHoverIn" | "onHoverOut" | "onMouseEnter" | "onMouseLeave" | "onMouseDown" | "onMouseUp" | "onFocus" | "onBlur" | "style" | "allowFontScaling" | "ellipsizeMode" | "id" | "lineBreakMode" | "numberOfLines" | "onTextLayout" | "nativeID" | "adjustsFontSizeToFit" | "dynamicTypeRamp" | "minimumFontScale" | "suppressHighlighting" | "lineBreakStrategyIOS" | "disabled" | "selectable" | "selectionColor" | "textBreakStrategy" | "dataDetectorType" | "android_hyphenationFrequency" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "aria-label" | "accessibilityRole" | "accessibilityState" | "aria-busy" | "aria-checked" | "aria-disabled" | "aria-expanded" | "aria-selected" | "aria-labelledby" | "accessibilityHint" | "accessibilityValue" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "onAccessibilityAction" | "importantForAccessibility" | "aria-hidden" | "aria-live" | "aria-modal" | "role" | "accessibilityLiveRegion" | "accessibilityLabelledBy" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "accessibilityLanguage" | "theme" | "target" | "asChild" | "dangerouslySetInnerHTML" | "debug" | "className" | "themeShallow" | "themeInverse" | "tag" | "group" | "untilMeasured" | "componentName" | "tabIndex" | "disableOptimization" | "forceStyle" | "disableClassName" | "onScroll" | "hoverStyle" | "pressStyle" | "focusStyle" | "exitStyle" | "enterStyle"> & import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextNonStyleProps & import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase>> & import("@tamagui/web").PseudoProps<import("@tamagui/web").WithThemeAndShorthands<import("@tamagui/web").TextStylePropsBase>> & import("@tamagui/web").MediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").TextStylePropsBase>> & import("react").RefAttributes<import("@tamagui/web").TamaguiTextElement> & Omit<import("@tamagui/web").TextProps, "color" | "space" | "zIndex" | "display" | "fontFamily" | "fontSize" | "fontStyle" | "fontWeight" | "letterSpacing" | "lineHeight" | "textAlign" | "textDecorationLine" | "textDecorationStyle" | "textDecorationColor" | "textShadowColor" | "textShadowOffset" | "textShadowRadius" | "textTransform" | "testID" | "fontVariant" | "writingDirection" | "backfaceVisibility" | "backgroundColor" | "borderBlockColor" | "borderBlockEndColor" | "borderBlockStartColor" | "borderBottomColor" | "borderBottomEndRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderBottomStartRadius" | "borderColor" | "borderCurve" | "borderEndColor" | "borderEndEndRadius" | "borderEndStartRadius" | "borderLeftColor" | "borderRadius" | "borderRightColor" | "borderStartColor" | "borderStartEndRadius" | "borderStartStartRadius" | "borderStyle" | "borderTopColor" | "borderTopEndRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderTopStartRadius" | "opacity" | "elevation" | "pointerEvents" | "alignContent" | "alignItems" | "alignSelf" | "aspectRatio" | "borderBottomWidth" | "borderEndWidth" | "borderLeftWidth" | "borderRightWidth" | "borderStartWidth" | "borderTopWidth" | "borderWidth" | "bottom" | "end" | "flex" | "flexBasis" | "flexDirection" | "rowGap" | "gap" | "columnGap" | "flexGrow" | "flexShrink" | "flexWrap" | "height" | "justifyContent" | "left" | "margin" | "marginBottom" | "marginEnd" | "marginHorizontal" | "marginLeft" | "marginRight" | "marginStart" | "marginTop" | "marginVertical" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "overflow" | "padding" | "paddingBottom" | "paddingEnd" | "paddingHorizontal" | "paddingLeft" | "paddingRight" | "paddingStart" | "paddingTop" | "paddingVertical" | "position" | "right" | "start" | "top" | "width" | "direction" | "shadowColor" | "shadowOffset" | "shadowOpacity" | "shadowRadius" | "transform" | "transformMatrix" | "rotation" | "scaleX" | "scaleY" | "translateX" | "translateY" | "textAlignVertical" | "verticalAlign" | "includeFontPadding" | "ellipse" | "textDecorationDistance" | "textOverflow" | "whiteSpace" | "wordWrap" | "x" | "y" | "perspective" | "scale" | "skewX" | "skewY" | "matrix" | "rotate" | "rotateY" | "rotateX" | "rotateZ" | "contain" | "touchAction" | "cursor" | "outlineColor" | "outlineOffset" | "outlineStyle" | "outlineWidth" | "spaceDirection" | "separator" | "animation" | "animateOnly" | "userSelect" | "transformOrigin" | "key" | `$${string}` | `$${number}` | "maxFontSizeMultiplier" | `$theme-${string}` | `$theme-${number}` | "ref" | "children" | "onPress" | "onLongPress" | "onPressIn" | "onPressOut" | "onHoverIn" | "onHoverOut" | "onMouseEnter" | "onMouseLeave" | "onMouseDown" | "onMouseUp" | "onFocus" | "onBlur" | "style" | "allowFontScaling" | "ellipsizeMode" | "id" | "lineBreakMode" | "numberOfLines" | "onTextLayout" | "nativeID" | "adjustsFontSizeToFit" | "dynamicTypeRamp" | "minimumFontScale" | "suppressHighlighting" | "lineBreakStrategyIOS" | "disabled" | "selectable" | "selectionColor" | "textBreakStrategy" | "dataDetectorType" | "android_hyphenationFrequency" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "aria-label" | "accessibilityRole" | "accessibilityState" | "aria-busy" | "aria-checked" | "aria-disabled" | "aria-expanded" | "aria-selected" | "aria-labelledby" | "accessibilityHint" | "accessibilityValue" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "onAccessibilityAction" | "importantForAccessibility" | "aria-hidden" | "aria-live" | "aria-modal" | "role" | "accessibilityLiveRegion" | "accessibilityLabelledBy" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "accessibilityLanguage" | "theme" | "target" | "asChild" | "dangerouslySetInnerHTML" | "debug" | "className" | "themeShallow" | "themeInverse" | "tag" | "group" | "untilMeasured" | "componentName" | "tabIndex" | "disableOptimization" | "forceStyle" | "disableClassName" | "onScroll" | "hoverStyle" | "pressStyle" | "focusStyle" | "exitStyle" | "enterStyle"> & {
            readonly unstyled?: boolean | undefined;
            readonly size?: FontSizeTokens | undefined;
        }> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextNonStyleProps & import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase>> & import("@tamagui/web").PseudoProps<import("@tamagui/web").WithThemeAndShorthands<import("@tamagui/web").TextStylePropsBase>> & import("@tamagui/web").MediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").TextStylePropsBase>> & import("react").RefAttributes<import("@tamagui/web").TamaguiTextElement> & Omit<import("@tamagui/web").TextProps, "color" | "space" | "zIndex" | "display" | "fontFamily" | "fontSize" | "fontStyle" | "fontWeight" | "letterSpacing" | "lineHeight" | "textAlign" | "textDecorationLine" | "textDecorationStyle" | "textDecorationColor" | "textShadowColor" | "textShadowOffset" | "textShadowRadius" | "textTransform" | "testID" | "fontVariant" | "writingDirection" | "backfaceVisibility" | "backgroundColor" | "borderBlockColor" | "borderBlockEndColor" | "borderBlockStartColor" | "borderBottomColor" | "borderBottomEndRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderBottomStartRadius" | "borderColor" | "borderCurve" | "borderEndColor" | "borderEndEndRadius" | "borderEndStartRadius" | "borderLeftColor" | "borderRadius" | "borderRightColor" | "borderStartColor" | "borderStartEndRadius" | "borderStartStartRadius" | "borderStyle" | "borderTopColor" | "borderTopEndRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderTopStartRadius" | "opacity" | "elevation" | "pointerEvents" | "alignContent" | "alignItems" | "alignSelf" | "aspectRatio" | "borderBottomWidth" | "borderEndWidth" | "borderLeftWidth" | "borderRightWidth" | "borderStartWidth" | "borderTopWidth" | "borderWidth" | "bottom" | "end" | "flex" | "flexBasis" | "flexDirection" | "rowGap" | "gap" | "columnGap" | "flexGrow" | "flexShrink" | "flexWrap" | "height" | "justifyContent" | "left" | "margin" | "marginBottom" | "marginEnd" | "marginHorizontal" | "marginLeft" | "marginRight" | "marginStart" | "marginTop" | "marginVertical" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "overflow" | "padding" | "paddingBottom" | "paddingEnd" | "paddingHorizontal" | "paddingLeft" | "paddingRight" | "paddingStart" | "paddingTop" | "paddingVertical" | "position" | "right" | "start" | "top" | "width" | "direction" | "shadowColor" | "shadowOffset" | "shadowOpacity" | "shadowRadius" | "transform" | "transformMatrix" | "rotation" | "scaleX" | "scaleY" | "translateX" | "translateY" | "textAlignVertical" | "verticalAlign" | "includeFontPadding" | "ellipse" | "textDecorationDistance" | "textOverflow" | "whiteSpace" | "wordWrap" | "x" | "y" | "perspective" | "scale" | "skewX" | "skewY" | "matrix" | "rotate" | "rotateY" | "rotateX" | "rotateZ" | "contain" | "touchAction" | "cursor" | "outlineColor" | "outlineOffset" | "outlineStyle" | "outlineWidth" | "spaceDirection" | "separator" | "animation" | "animateOnly" | "userSelect" | "transformOrigin" | "key" | `$${string}` | `$${number}` | "maxFontSizeMultiplier" | `$theme-${string}` | `$theme-${number}` | "ref" | "children" | "onPress" | "onLongPress" | "onPressIn" | "onPressOut" | "onHoverIn" | "onHoverOut" | "onMouseEnter" | "onMouseLeave" | "onMouseDown" | "onMouseUp" | "onFocus" | "onBlur" | "style" | "allowFontScaling" | "ellipsizeMode" | "id" | "lineBreakMode" | "numberOfLines" | "onTextLayout" | "nativeID" | "adjustsFontSizeToFit" | "dynamicTypeRamp" | "minimumFontScale" | "suppressHighlighting" | "lineBreakStrategyIOS" | "disabled" | "selectable" | "selectionColor" | "textBreakStrategy" | "dataDetectorType" | "android_hyphenationFrequency" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "aria-label" | "accessibilityRole" | "accessibilityState" | "aria-busy" | "aria-checked" | "aria-disabled" | "aria-expanded" | "aria-selected" | "aria-labelledby" | "accessibilityHint" | "accessibilityValue" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "onAccessibilityAction" | "importantForAccessibility" | "aria-hidden" | "aria-live" | "aria-modal" | "role" | "accessibilityLiveRegion" | "accessibilityLabelledBy" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "accessibilityLanguage" | "theme" | "target" | "asChild" | "dangerouslySetInnerHTML" | "debug" | "className" | "themeShallow" | "themeInverse" | "tag" | "group" | "untilMeasured" | "componentName" | "tabIndex" | "disableOptimization" | "forceStyle" | "disableClassName" | "onScroll" | "hoverStyle" | "pressStyle" | "focusStyle" | "exitStyle" | "enterStyle"> & {
            readonly unstyled?: boolean | undefined;
            readonly size?: FontSizeTokens | undefined;
        }>> & import("@tamagui/web").PseudoProps<import("@tamagui/web").WithThemeAndShorthands<import("@tamagui/web").TextNonStyleProps & import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase>> & import("@tamagui/web").PseudoProps<import("@tamagui/web").WithThemeAndShorthands<import("@tamagui/web").TextStylePropsBase>> & import("@tamagui/web").MediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").TextStylePropsBase>> & import("react").RefAttributes<import("@tamagui/web").TamaguiTextElement> & Omit<import("@tamagui/web").TextProps, "color" | "space" | "zIndex" | "display" | "fontFamily" | "fontSize" | "fontStyle" | "fontWeight" | "letterSpacing" | "lineHeight" | "textAlign" | "textDecorationLine" | "textDecorationStyle" | "textDecorationColor" | "textShadowColor" | "textShadowOffset" | "textShadowRadius" | "textTransform" | "testID" | "fontVariant" | "writingDirection" | "backfaceVisibility" | "backgroundColor" | "borderBlockColor" | "borderBlockEndColor" | "borderBlockStartColor" | "borderBottomColor" | "borderBottomEndRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderBottomStartRadius" | "borderColor" | "borderCurve" | "borderEndColor" | "borderEndEndRadius" | "borderEndStartRadius" | "borderLeftColor" | "borderRadius" | "borderRightColor" | "borderStartColor" | "borderStartEndRadius" | "borderStartStartRadius" | "borderStyle" | "borderTopColor" | "borderTopEndRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderTopStartRadius" | "opacity" | "elevation" | "pointerEvents" | "alignContent" | "alignItems" | "alignSelf" | "aspectRatio" | "borderBottomWidth" | "borderEndWidth" | "borderLeftWidth" | "borderRightWidth" | "borderStartWidth" | "borderTopWidth" | "borderWidth" | "bottom" | "end" | "flex" | "flexBasis" | "flexDirection" | "rowGap" | "gap" | "columnGap" | "flexGrow" | "flexShrink" | "flexWrap" | "height" | "justifyContent" | "left" | "margin" | "marginBottom" | "marginEnd" | "marginHorizontal" | "marginLeft" | "marginRight" | "marginStart" | "marginTop" | "marginVertical" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "overflow" | "padding" | "paddingBottom" | "paddingEnd" | "paddingHorizontal" | "paddingLeft" | "paddingRight" | "paddingStart" | "paddingTop" | "paddingVertical" | "position" | "right" | "start" | "top" | "width" | "direction" | "shadowColor" | "shadowOffset" | "shadowOpacity" | "shadowRadius" | "transform" | "transformMatrix" | "rotation" | "scaleX" | "scaleY" | "translateX" | "translateY" | "textAlignVertical" | "verticalAlign" | "includeFontPadding" | "ellipse" | "textDecorationDistance" | "textOverflow" | "whiteSpace" | "wordWrap" | "x" | "y" | "perspective" | "scale" | "skewX" | "skewY" | "matrix" | "rotate" | "rotateY" | "rotateX" | "rotateZ" | "contain" | "touchAction" | "cursor" | "outlineColor" | "outlineOffset" | "outlineStyle" | "outlineWidth" | "spaceDirection" | "separator" | "animation" | "animateOnly" | "userSelect" | "transformOrigin" | "key" | `$${string}` | `$${number}` | "maxFontSizeMultiplier" | `$theme-${string}` | `$theme-${number}` | "ref" | "children" | "onPress" | "onLongPress" | "onPressIn" | "onPressOut" | "onHoverIn" | "onHoverOut" | "onMouseEnter" | "onMouseLeave" | "onMouseDown" | "onMouseUp" | "onFocus" | "onBlur" | "style" | "allowFontScaling" | "ellipsizeMode" | "id" | "lineBreakMode" | "numberOfLines" | "onTextLayout" | "nativeID" | "adjustsFontSizeToFit" | "dynamicTypeRamp" | "minimumFontScale" | "suppressHighlighting" | "lineBreakStrategyIOS" | "disabled" | "selectable" | "selectionColor" | "textBreakStrategy" | "dataDetectorType" | "android_hyphenationFrequency" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "aria-label" | "accessibilityRole" | "accessibilityState" | "aria-busy" | "aria-checked" | "aria-disabled" | "aria-expanded" | "aria-selected" | "aria-labelledby" | "accessibilityHint" | "accessibilityValue" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "onAccessibilityAction" | "importantForAccessibility" | "aria-hidden" | "aria-live" | "aria-modal" | "role" | "accessibilityLiveRegion" | "accessibilityLabelledBy" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "accessibilityLanguage" | "theme" | "target" | "asChild" | "dangerouslySetInnerHTML" | "debug" | "className" | "themeShallow" | "themeInverse" | "tag" | "group" | "untilMeasured" | "componentName" | "tabIndex" | "disableOptimization" | "forceStyle" | "disableClassName" | "onScroll" | "hoverStyle" | "pressStyle" | "focusStyle" | "exitStyle" | "enterStyle"> & {
            readonly unstyled?: boolean | undefined;
            readonly size?: FontSizeTokens | undefined;
        }>> & import("@tamagui/web").MediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").TextNonStyleProps & import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase>> & import("@tamagui/web").PseudoProps<import("@tamagui/web").WithThemeAndShorthands<import("@tamagui/web").TextStylePropsBase>> & import("@tamagui/web").MediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").TextStylePropsBase>> & import("react").RefAttributes<import("@tamagui/web").TamaguiTextElement> & Omit<import("@tamagui/web").TextProps, "color" | "space" | "zIndex" | "display" | "fontFamily" | "fontSize" | "fontStyle" | "fontWeight" | "letterSpacing" | "lineHeight" | "textAlign" | "textDecorationLine" | "textDecorationStyle" | "textDecorationColor" | "textShadowColor" | "textShadowOffset" | "textShadowRadius" | "textTransform" | "testID" | "fontVariant" | "writingDirection" | "backfaceVisibility" | "backgroundColor" | "borderBlockColor" | "borderBlockEndColor" | "borderBlockStartColor" | "borderBottomColor" | "borderBottomEndRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderBottomStartRadius" | "borderColor" | "borderCurve" | "borderEndColor" | "borderEndEndRadius" | "borderEndStartRadius" | "borderLeftColor" | "borderRadius" | "borderRightColor" | "borderStartColor" | "borderStartEndRadius" | "borderStartStartRadius" | "borderStyle" | "borderTopColor" | "borderTopEndRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderTopStartRadius" | "opacity" | "elevation" | "pointerEvents" | "alignContent" | "alignItems" | "alignSelf" | "aspectRatio" | "borderBottomWidth" | "borderEndWidth" | "borderLeftWidth" | "borderRightWidth" | "borderStartWidth" | "borderTopWidth" | "borderWidth" | "bottom" | "end" | "flex" | "flexBasis" | "flexDirection" | "rowGap" | "gap" | "columnGap" | "flexGrow" | "flexShrink" | "flexWrap" | "height" | "justifyContent" | "left" | "margin" | "marginBottom" | "marginEnd" | "marginHorizontal" | "marginLeft" | "marginRight" | "marginStart" | "marginTop" | "marginVertical" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "overflow" | "padding" | "paddingBottom" | "paddingEnd" | "paddingHorizontal" | "paddingLeft" | "paddingRight" | "paddingStart" | "paddingTop" | "paddingVertical" | "position" | "right" | "start" | "top" | "width" | "direction" | "shadowColor" | "shadowOffset" | "shadowOpacity" | "shadowRadius" | "transform" | "transformMatrix" | "rotation" | "scaleX" | "scaleY" | "translateX" | "translateY" | "textAlignVertical" | "verticalAlign" | "includeFontPadding" | "ellipse" | "textDecorationDistance" | "textOverflow" | "whiteSpace" | "wordWrap" | "x" | "y" | "perspective" | "scale" | "skewX" | "skewY" | "matrix" | "rotate" | "rotateY" | "rotateX" | "rotateZ" | "contain" | "touchAction" | "cursor" | "outlineColor" | "outlineOffset" | "outlineStyle" | "outlineWidth" | "spaceDirection" | "separator" | "animation" | "animateOnly" | "userSelect" | "transformOrigin" | "key" | `$${string}` | `$${number}` | "maxFontSizeMultiplier" | `$theme-${string}` | `$theme-${number}` | "ref" | "children" | "onPress" | "onLongPress" | "onPressIn" | "onPressOut" | "onHoverIn" | "onHoverOut" | "onMouseEnter" | "onMouseLeave" | "onMouseDown" | "onMouseUp" | "onFocus" | "onBlur" | "style" | "allowFontScaling" | "ellipsizeMode" | "id" | "lineBreakMode" | "numberOfLines" | "onTextLayout" | "nativeID" | "adjustsFontSizeToFit" | "dynamicTypeRamp" | "minimumFontScale" | "suppressHighlighting" | "lineBreakStrategyIOS" | "disabled" | "selectable" | "selectionColor" | "textBreakStrategy" | "dataDetectorType" | "android_hyphenationFrequency" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "aria-label" | "accessibilityRole" | "accessibilityState" | "aria-busy" | "aria-checked" | "aria-disabled" | "aria-expanded" | "aria-selected" | "aria-labelledby" | "accessibilityHint" | "accessibilityValue" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "onAccessibilityAction" | "importantForAccessibility" | "aria-hidden" | "aria-live" | "aria-modal" | "role" | "accessibilityLiveRegion" | "accessibilityLabelledBy" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "accessibilityLanguage" | "theme" | "target" | "asChild" | "dangerouslySetInnerHTML" | "debug" | "className" | "themeShallow" | "themeInverse" | "tag" | "group" | "untilMeasured" | "componentName" | "tabIndex" | "disableOptimization" | "forceStyle" | "disableClassName" | "onScroll" | "hoverStyle" | "pressStyle" | "focusStyle" | "exitStyle" | "enterStyle"> & {
            readonly unstyled?: boolean | undefined;
            readonly size?: FontSizeTokens | undefined;
        }>>> | undefined;
        noTextWrap?: boolean | undefined;
    } & ThemeableProps & {
        /**
         * add icon before, passes color and size automatically if Component
         */
        icon?: IconProp | undefined;
        /**
         * add icon after, passes color and size automatically if Component
         */
        iconAfter?: IconProp | undefined;
        /**
         * adjust icon relative to size
         *
         * @default 1
         */
        scaleIcon?: number | undefined;
        /**
         * make the spacing elements flex
         */
        spaceFlex?: number | boolean | undefined;
        /**
         * adjust internal space relative to icon size
         */
        scaleSpace?: number | undefined;
        /**
         * remove default styles
         */
        unstyled?: boolean | undefined;
    };
    __variantProps: {
        size?: SizeTokens | undefined;
        elevation?: number | SizeTokens | undefined;
        variant?: "outlined" | undefined;
        disabled?: boolean | undefined;
        unstyled?: boolean | undefined;
        transparent?: boolean | undefined;
        circular?: boolean | undefined;
        fullscreen?: boolean | undefined;
        hoverTheme?: boolean | undefined;
        pressTheme?: boolean | undefined;
        focusTheme?: boolean | undefined;
        elevate?: boolean | undefined;
        bordered?: number | boolean | undefined;
        backgrounded?: boolean | undefined;
        radiused?: boolean | undefined;
        padded?: boolean | undefined;
        chromeless?: boolean | "all" | undefined;
    };
} & {
    Text: import("@tamagui/web").TamaguiComponent<import("@tamagui/web").TextNonStyleProps & import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase>> & import("@tamagui/web").PseudoProps<import("@tamagui/web").WithThemeAndShorthands<import("@tamagui/web").TextStylePropsBase>> & import("@tamagui/web").MediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").TextStylePropsBase>> & import("react").RefAttributes<import("@tamagui/web").TamaguiTextElement> & Omit<import("@tamagui/web").TextProps, "color" | "space" | "zIndex" | "display" | "fontFamily" | "fontSize" | "fontStyle" | "fontWeight" | "letterSpacing" | "lineHeight" | "textAlign" | "textDecorationLine" | "textDecorationStyle" | "textDecorationColor" | "textShadowColor" | "textShadowOffset" | "textShadowRadius" | "textTransform" | "testID" | "fontVariant" | "writingDirection" | "backfaceVisibility" | "backgroundColor" | "borderBlockColor" | "borderBlockEndColor" | "borderBlockStartColor" | "borderBottomColor" | "borderBottomEndRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderBottomStartRadius" | "borderColor" | "borderCurve" | "borderEndColor" | "borderEndEndRadius" | "borderEndStartRadius" | "borderLeftColor" | "borderRadius" | "borderRightColor" | "borderStartColor" | "borderStartEndRadius" | "borderStartStartRadius" | "borderStyle" | "borderTopColor" | "borderTopEndRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderTopStartRadius" | "opacity" | "elevation" | "pointerEvents" | "alignContent" | "alignItems" | "alignSelf" | "aspectRatio" | "borderBottomWidth" | "borderEndWidth" | "borderLeftWidth" | "borderRightWidth" | "borderStartWidth" | "borderTopWidth" | "borderWidth" | "bottom" | "end" | "flex" | "flexBasis" | "flexDirection" | "rowGap" | "gap" | "columnGap" | "flexGrow" | "flexShrink" | "flexWrap" | "height" | "justifyContent" | "left" | "margin" | "marginBottom" | "marginEnd" | "marginHorizontal" | "marginLeft" | "marginRight" | "marginStart" | "marginTop" | "marginVertical" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "overflow" | "padding" | "paddingBottom" | "paddingEnd" | "paddingHorizontal" | "paddingLeft" | "paddingRight" | "paddingStart" | "paddingTop" | "paddingVertical" | "position" | "right" | "start" | "top" | "width" | "direction" | "shadowColor" | "shadowOffset" | "shadowOpacity" | "shadowRadius" | "transform" | "transformMatrix" | "rotation" | "scaleX" | "scaleY" | "translateX" | "translateY" | "textAlignVertical" | "verticalAlign" | "includeFontPadding" | "ellipse" | "textDecorationDistance" | "textOverflow" | "whiteSpace" | "wordWrap" | "x" | "y" | "perspective" | "scale" | "skewX" | "skewY" | "matrix" | "rotate" | "rotateY" | "rotateX" | "rotateZ" | "contain" | "touchAction" | "cursor" | "outlineColor" | "outlineOffset" | "outlineStyle" | "outlineWidth" | "spaceDirection" | "separator" | "animation" | "animateOnly" | "userSelect" | "transformOrigin" | "key" | `$${string}` | `$${number}` | "maxFontSizeMultiplier" | `$theme-${string}` | `$theme-${number}` | "ref" | "children" | "onPress" | "onLongPress" | "onPressIn" | "onPressOut" | "onHoverIn" | "onHoverOut" | "onMouseEnter" | "onMouseLeave" | "onMouseDown" | "onMouseUp" | "onFocus" | "onBlur" | "style" | "allowFontScaling" | "ellipsizeMode" | "id" | "lineBreakMode" | "numberOfLines" | "onTextLayout" | "nativeID" | "adjustsFontSizeToFit" | "dynamicTypeRamp" | "minimumFontScale" | "suppressHighlighting" | "lineBreakStrategyIOS" | "disabled" | "selectable" | "selectionColor" | "textBreakStrategy" | "dataDetectorType" | "android_hyphenationFrequency" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "aria-label" | "accessibilityRole" | "accessibilityState" | "aria-busy" | "aria-checked" | "aria-disabled" | "aria-expanded" | "aria-selected" | "aria-labelledby" | "accessibilityHint" | "accessibilityValue" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "onAccessibilityAction" | "importantForAccessibility" | "aria-hidden" | "aria-live" | "aria-modal" | "role" | "accessibilityLiveRegion" | "accessibilityLabelledBy" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "accessibilityLanguage" | "theme" | "target" | "asChild" | "dangerouslySetInnerHTML" | "debug" | "className" | "themeShallow" | "themeInverse" | "tag" | "group" | "untilMeasured" | "componentName" | "tabIndex" | "disableOptimization" | "forceStyle" | "disableClassName" | "onScroll" | "hoverStyle" | "pressStyle" | "focusStyle" | "exitStyle" | "enterStyle"> & import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextNonStyleProps & import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase>> & import("@tamagui/web").PseudoProps<import("@tamagui/web").WithThemeAndShorthands<import("@tamagui/web").TextStylePropsBase>> & import("@tamagui/web").MediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").TextStylePropsBase>> & import("react").RefAttributes<import("@tamagui/web").TamaguiTextElement> & Omit<import("@tamagui/web").TextProps, "color" | "space" | "zIndex" | "display" | "fontFamily" | "fontSize" | "fontStyle" | "fontWeight" | "letterSpacing" | "lineHeight" | "textAlign" | "textDecorationLine" | "textDecorationStyle" | "textDecorationColor" | "textShadowColor" | "textShadowOffset" | "textShadowRadius" | "textTransform" | "testID" | "fontVariant" | "writingDirection" | "backfaceVisibility" | "backgroundColor" | "borderBlockColor" | "borderBlockEndColor" | "borderBlockStartColor" | "borderBottomColor" | "borderBottomEndRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderBottomStartRadius" | "borderColor" | "borderCurve" | "borderEndColor" | "borderEndEndRadius" | "borderEndStartRadius" | "borderLeftColor" | "borderRadius" | "borderRightColor" | "borderStartColor" | "borderStartEndRadius" | "borderStartStartRadius" | "borderStyle" | "borderTopColor" | "borderTopEndRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderTopStartRadius" | "opacity" | "elevation" | "pointerEvents" | "alignContent" | "alignItems" | "alignSelf" | "aspectRatio" | "borderBottomWidth" | "borderEndWidth" | "borderLeftWidth" | "borderRightWidth" | "borderStartWidth" | "borderTopWidth" | "borderWidth" | "bottom" | "end" | "flex" | "flexBasis" | "flexDirection" | "rowGap" | "gap" | "columnGap" | "flexGrow" | "flexShrink" | "flexWrap" | "height" | "justifyContent" | "left" | "margin" | "marginBottom" | "marginEnd" | "marginHorizontal" | "marginLeft" | "marginRight" | "marginStart" | "marginTop" | "marginVertical" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "overflow" | "padding" | "paddingBottom" | "paddingEnd" | "paddingHorizontal" | "paddingLeft" | "paddingRight" | "paddingStart" | "paddingTop" | "paddingVertical" | "position" | "right" | "start" | "top" | "width" | "direction" | "shadowColor" | "shadowOffset" | "shadowOpacity" | "shadowRadius" | "transform" | "transformMatrix" | "rotation" | "scaleX" | "scaleY" | "translateX" | "translateY" | "textAlignVertical" | "verticalAlign" | "includeFontPadding" | "ellipse" | "textDecorationDistance" | "textOverflow" | "whiteSpace" | "wordWrap" | "x" | "y" | "perspective" | "scale" | "skewX" | "skewY" | "matrix" | "rotate" | "rotateY" | "rotateX" | "rotateZ" | "contain" | "touchAction" | "cursor" | "outlineColor" | "outlineOffset" | "outlineStyle" | "outlineWidth" | "spaceDirection" | "separator" | "animation" | "animateOnly" | "userSelect" | "transformOrigin" | "key" | `$${string}` | `$${number}` | "maxFontSizeMultiplier" | `$theme-${string}` | `$theme-${number}` | "ref" | "children" | "onPress" | "onLongPress" | "onPressIn" | "onPressOut" | "onHoverIn" | "onHoverOut" | "onMouseEnter" | "onMouseLeave" | "onMouseDown" | "onMouseUp" | "onFocus" | "onBlur" | "style" | "allowFontScaling" | "ellipsizeMode" | "id" | "lineBreakMode" | "numberOfLines" | "onTextLayout" | "nativeID" | "adjustsFontSizeToFit" | "dynamicTypeRamp" | "minimumFontScale" | "suppressHighlighting" | "lineBreakStrategyIOS" | "disabled" | "selectable" | "selectionColor" | "textBreakStrategy" | "dataDetectorType" | "android_hyphenationFrequency" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "aria-label" | "accessibilityRole" | "accessibilityState" | "aria-busy" | "aria-checked" | "aria-disabled" | "aria-expanded" | "aria-selected" | "aria-labelledby" | "accessibilityHint" | "accessibilityValue" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "onAccessibilityAction" | "importantForAccessibility" | "aria-hidden" | "aria-live" | "aria-modal" | "role" | "accessibilityLiveRegion" | "accessibilityLabelledBy" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "accessibilityLanguage" | "theme" | "target" | "asChild" | "dangerouslySetInnerHTML" | "debug" | "className" | "themeShallow" | "themeInverse" | "tag" | "group" | "untilMeasured" | "componentName" | "tabIndex" | "disableOptimization" | "forceStyle" | "disableClassName" | "onScroll" | "hoverStyle" | "pressStyle" | "focusStyle" | "exitStyle" | "enterStyle"> & {
        size?: FontSizeTokens | undefined;
        unstyled?: boolean | undefined;
    }> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextNonStyleProps & import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase>> & import("@tamagui/web").PseudoProps<import("@tamagui/web").WithThemeAndShorthands<import("@tamagui/web").TextStylePropsBase>> & import("@tamagui/web").MediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").TextStylePropsBase>> & import("react").RefAttributes<import("@tamagui/web").TamaguiTextElement> & Omit<import("@tamagui/web").TextProps, "color" | "space" | "zIndex" | "display" | "fontFamily" | "fontSize" | "fontStyle" | "fontWeight" | "letterSpacing" | "lineHeight" | "textAlign" | "textDecorationLine" | "textDecorationStyle" | "textDecorationColor" | "textShadowColor" | "textShadowOffset" | "textShadowRadius" | "textTransform" | "testID" | "fontVariant" | "writingDirection" | "backfaceVisibility" | "backgroundColor" | "borderBlockColor" | "borderBlockEndColor" | "borderBlockStartColor" | "borderBottomColor" | "borderBottomEndRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderBottomStartRadius" | "borderColor" | "borderCurve" | "borderEndColor" | "borderEndEndRadius" | "borderEndStartRadius" | "borderLeftColor" | "borderRadius" | "borderRightColor" | "borderStartColor" | "borderStartEndRadius" | "borderStartStartRadius" | "borderStyle" | "borderTopColor" | "borderTopEndRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderTopStartRadius" | "opacity" | "elevation" | "pointerEvents" | "alignContent" | "alignItems" | "alignSelf" | "aspectRatio" | "borderBottomWidth" | "borderEndWidth" | "borderLeftWidth" | "borderRightWidth" | "borderStartWidth" | "borderTopWidth" | "borderWidth" | "bottom" | "end" | "flex" | "flexBasis" | "flexDirection" | "rowGap" | "gap" | "columnGap" | "flexGrow" | "flexShrink" | "flexWrap" | "height" | "justifyContent" | "left" | "margin" | "marginBottom" | "marginEnd" | "marginHorizontal" | "marginLeft" | "marginRight" | "marginStart" | "marginTop" | "marginVertical" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "overflow" | "padding" | "paddingBottom" | "paddingEnd" | "paddingHorizontal" | "paddingLeft" | "paddingRight" | "paddingStart" | "paddingTop" | "paddingVertical" | "position" | "right" | "start" | "top" | "width" | "direction" | "shadowColor" | "shadowOffset" | "shadowOpacity" | "shadowRadius" | "transform" | "transformMatrix" | "rotation" | "scaleX" | "scaleY" | "translateX" | "translateY" | "textAlignVertical" | "verticalAlign" | "includeFontPadding" | "ellipse" | "textDecorationDistance" | "textOverflow" | "whiteSpace" | "wordWrap" | "x" | "y" | "perspective" | "scale" | "skewX" | "skewY" | "matrix" | "rotate" | "rotateY" | "rotateX" | "rotateZ" | "contain" | "touchAction" | "cursor" | "outlineColor" | "outlineOffset" | "outlineStyle" | "outlineWidth" | "spaceDirection" | "separator" | "animation" | "animateOnly" | "userSelect" | "transformOrigin" | "key" | `$${string}` | `$${number}` | "maxFontSizeMultiplier" | `$theme-${string}` | `$theme-${number}` | "ref" | "children" | "onPress" | "onLongPress" | "onPressIn" | "onPressOut" | "onHoverIn" | "onHoverOut" | "onMouseEnter" | "onMouseLeave" | "onMouseDown" | "onMouseUp" | "onFocus" | "onBlur" | "style" | "allowFontScaling" | "ellipsizeMode" | "id" | "lineBreakMode" | "numberOfLines" | "onTextLayout" | "nativeID" | "adjustsFontSizeToFit" | "dynamicTypeRamp" | "minimumFontScale" | "suppressHighlighting" | "lineBreakStrategyIOS" | "disabled" | "selectable" | "selectionColor" | "textBreakStrategy" | "dataDetectorType" | "android_hyphenationFrequency" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "aria-label" | "accessibilityRole" | "accessibilityState" | "aria-busy" | "aria-checked" | "aria-disabled" | "aria-expanded" | "aria-selected" | "aria-labelledby" | "accessibilityHint" | "accessibilityValue" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "onAccessibilityAction" | "importantForAccessibility" | "aria-hidden" | "aria-live" | "aria-modal" | "role" | "accessibilityLiveRegion" | "accessibilityLabelledBy" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "accessibilityLanguage" | "theme" | "target" | "asChild" | "dangerouslySetInnerHTML" | "debug" | "className" | "themeShallow" | "themeInverse" | "tag" | "group" | "untilMeasured" | "componentName" | "tabIndex" | "disableOptimization" | "forceStyle" | "disableClassName" | "onScroll" | "hoverStyle" | "pressStyle" | "focusStyle" | "exitStyle" | "enterStyle"> & {
        size?: FontSizeTokens | undefined;
        unstyled?: boolean | undefined;
    }>> & import("@tamagui/web").PseudoProps<import("@tamagui/web").WithThemeAndShorthands<import("@tamagui/web").TextNonStyleProps & import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase>> & import("@tamagui/web").PseudoProps<import("@tamagui/web").WithThemeAndShorthands<import("@tamagui/web").TextStylePropsBase>> & import("@tamagui/web").MediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").TextStylePropsBase>> & import("react").RefAttributes<import("@tamagui/web").TamaguiTextElement> & Omit<import("@tamagui/web").TextProps, "color" | "space" | "zIndex" | "display" | "fontFamily" | "fontSize" | "fontStyle" | "fontWeight" | "letterSpacing" | "lineHeight" | "textAlign" | "textDecorationLine" | "textDecorationStyle" | "textDecorationColor" | "textShadowColor" | "textShadowOffset" | "textShadowRadius" | "textTransform" | "testID" | "fontVariant" | "writingDirection" | "backfaceVisibility" | "backgroundColor" | "borderBlockColor" | "borderBlockEndColor" | "borderBlockStartColor" | "borderBottomColor" | "borderBottomEndRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderBottomStartRadius" | "borderColor" | "borderCurve" | "borderEndColor" | "borderEndEndRadius" | "borderEndStartRadius" | "borderLeftColor" | "borderRadius" | "borderRightColor" | "borderStartColor" | "borderStartEndRadius" | "borderStartStartRadius" | "borderStyle" | "borderTopColor" | "borderTopEndRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderTopStartRadius" | "opacity" | "elevation" | "pointerEvents" | "alignContent" | "alignItems" | "alignSelf" | "aspectRatio" | "borderBottomWidth" | "borderEndWidth" | "borderLeftWidth" | "borderRightWidth" | "borderStartWidth" | "borderTopWidth" | "borderWidth" | "bottom" | "end" | "flex" | "flexBasis" | "flexDirection" | "rowGap" | "gap" | "columnGap" | "flexGrow" | "flexShrink" | "flexWrap" | "height" | "justifyContent" | "left" | "margin" | "marginBottom" | "marginEnd" | "marginHorizontal" | "marginLeft" | "marginRight" | "marginStart" | "marginTop" | "marginVertical" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "overflow" | "padding" | "paddingBottom" | "paddingEnd" | "paddingHorizontal" | "paddingLeft" | "paddingRight" | "paddingStart" | "paddingTop" | "paddingVertical" | "position" | "right" | "start" | "top" | "width" | "direction" | "shadowColor" | "shadowOffset" | "shadowOpacity" | "shadowRadius" | "transform" | "transformMatrix" | "rotation" | "scaleX" | "scaleY" | "translateX" | "translateY" | "textAlignVertical" | "verticalAlign" | "includeFontPadding" | "ellipse" | "textDecorationDistance" | "textOverflow" | "whiteSpace" | "wordWrap" | "x" | "y" | "perspective" | "scale" | "skewX" | "skewY" | "matrix" | "rotate" | "rotateY" | "rotateX" | "rotateZ" | "contain" | "touchAction" | "cursor" | "outlineColor" | "outlineOffset" | "outlineStyle" | "outlineWidth" | "spaceDirection" | "separator" | "animation" | "animateOnly" | "userSelect" | "transformOrigin" | "key" | `$${string}` | `$${number}` | "maxFontSizeMultiplier" | `$theme-${string}` | `$theme-${number}` | "ref" | "children" | "onPress" | "onLongPress" | "onPressIn" | "onPressOut" | "onHoverIn" | "onHoverOut" | "onMouseEnter" | "onMouseLeave" | "onMouseDown" | "onMouseUp" | "onFocus" | "onBlur" | "style" | "allowFontScaling" | "ellipsizeMode" | "id" | "lineBreakMode" | "numberOfLines" | "onTextLayout" | "nativeID" | "adjustsFontSizeToFit" | "dynamicTypeRamp" | "minimumFontScale" | "suppressHighlighting" | "lineBreakStrategyIOS" | "disabled" | "selectable" | "selectionColor" | "textBreakStrategy" | "dataDetectorType" | "android_hyphenationFrequency" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "aria-label" | "accessibilityRole" | "accessibilityState" | "aria-busy" | "aria-checked" | "aria-disabled" | "aria-expanded" | "aria-selected" | "aria-labelledby" | "accessibilityHint" | "accessibilityValue" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "onAccessibilityAction" | "importantForAccessibility" | "aria-hidden" | "aria-live" | "aria-modal" | "role" | "accessibilityLiveRegion" | "accessibilityLabelledBy" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "accessibilityLanguage" | "theme" | "target" | "asChild" | "dangerouslySetInnerHTML" | "debug" | "className" | "themeShallow" | "themeInverse" | "tag" | "group" | "untilMeasured" | "componentName" | "tabIndex" | "disableOptimization" | "forceStyle" | "disableClassName" | "onScroll" | "hoverStyle" | "pressStyle" | "focusStyle" | "exitStyle" | "enterStyle"> & {
        size?: FontSizeTokens | undefined;
        unstyled?: boolean | undefined;
    }>> & import("@tamagui/web").MediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").TextNonStyleProps & import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase>> & import("@tamagui/web").PseudoProps<import("@tamagui/web").WithThemeAndShorthands<import("@tamagui/web").TextStylePropsBase>> & import("@tamagui/web").MediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").TextStylePropsBase>> & import("react").RefAttributes<import("@tamagui/web").TamaguiTextElement> & Omit<import("@tamagui/web").TextProps, "color" | "space" | "zIndex" | "display" | "fontFamily" | "fontSize" | "fontStyle" | "fontWeight" | "letterSpacing" | "lineHeight" | "textAlign" | "textDecorationLine" | "textDecorationStyle" | "textDecorationColor" | "textShadowColor" | "textShadowOffset" | "textShadowRadius" | "textTransform" | "testID" | "fontVariant" | "writingDirection" | "backfaceVisibility" | "backgroundColor" | "borderBlockColor" | "borderBlockEndColor" | "borderBlockStartColor" | "borderBottomColor" | "borderBottomEndRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderBottomStartRadius" | "borderColor" | "borderCurve" | "borderEndColor" | "borderEndEndRadius" | "borderEndStartRadius" | "borderLeftColor" | "borderRadius" | "borderRightColor" | "borderStartColor" | "borderStartEndRadius" | "borderStartStartRadius" | "borderStyle" | "borderTopColor" | "borderTopEndRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderTopStartRadius" | "opacity" | "elevation" | "pointerEvents" | "alignContent" | "alignItems" | "alignSelf" | "aspectRatio" | "borderBottomWidth" | "borderEndWidth" | "borderLeftWidth" | "borderRightWidth" | "borderStartWidth" | "borderTopWidth" | "borderWidth" | "bottom" | "end" | "flex" | "flexBasis" | "flexDirection" | "rowGap" | "gap" | "columnGap" | "flexGrow" | "flexShrink" | "flexWrap" | "height" | "justifyContent" | "left" | "margin" | "marginBottom" | "marginEnd" | "marginHorizontal" | "marginLeft" | "marginRight" | "marginStart" | "marginTop" | "marginVertical" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "overflow" | "padding" | "paddingBottom" | "paddingEnd" | "paddingHorizontal" | "paddingLeft" | "paddingRight" | "paddingStart" | "paddingTop" | "paddingVertical" | "position" | "right" | "start" | "top" | "width" | "direction" | "shadowColor" | "shadowOffset" | "shadowOpacity" | "shadowRadius" | "transform" | "transformMatrix" | "rotation" | "scaleX" | "scaleY" | "translateX" | "translateY" | "textAlignVertical" | "verticalAlign" | "includeFontPadding" | "ellipse" | "textDecorationDistance" | "textOverflow" | "whiteSpace" | "wordWrap" | "x" | "y" | "perspective" | "scale" | "skewX" | "skewY" | "matrix" | "rotate" | "rotateY" | "rotateX" | "rotateZ" | "contain" | "touchAction" | "cursor" | "outlineColor" | "outlineOffset" | "outlineStyle" | "outlineWidth" | "spaceDirection" | "separator" | "animation" | "animateOnly" | "userSelect" | "transformOrigin" | "key" | `$${string}` | `$${number}` | "maxFontSizeMultiplier" | `$theme-${string}` | `$theme-${number}` | "ref" | "children" | "onPress" | "onLongPress" | "onPressIn" | "onPressOut" | "onHoverIn" | "onHoverOut" | "onMouseEnter" | "onMouseLeave" | "onMouseDown" | "onMouseUp" | "onFocus" | "onBlur" | "style" | "allowFontScaling" | "ellipsizeMode" | "id" | "lineBreakMode" | "numberOfLines" | "onTextLayout" | "nativeID" | "adjustsFontSizeToFit" | "dynamicTypeRamp" | "minimumFontScale" | "suppressHighlighting" | "lineBreakStrategyIOS" | "disabled" | "selectable" | "selectionColor" | "textBreakStrategy" | "dataDetectorType" | "android_hyphenationFrequency" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "aria-label" | "accessibilityRole" | "accessibilityState" | "aria-busy" | "aria-checked" | "aria-disabled" | "aria-expanded" | "aria-selected" | "aria-labelledby" | "accessibilityHint" | "accessibilityValue" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "onAccessibilityAction" | "importantForAccessibility" | "aria-hidden" | "aria-live" | "aria-modal" | "role" | "accessibilityLiveRegion" | "accessibilityLabelledBy" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "accessibilityLanguage" | "theme" | "target" | "asChild" | "dangerouslySetInnerHTML" | "debug" | "className" | "themeShallow" | "themeInverse" | "tag" | "group" | "untilMeasured" | "componentName" | "tabIndex" | "disableOptimization" | "forceStyle" | "disableClassName" | "onScroll" | "hoverStyle" | "pressStyle" | "focusStyle" | "exitStyle" | "enterStyle"> & {
        size?: FontSizeTokens | undefined;
        unstyled?: boolean | undefined;
    }>>, import("@tamagui/web").TamaguiTextElement, import("@tamagui/web").TextNonStyleProps & import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase>> & import("@tamagui/web").PseudoProps<import("@tamagui/web").WithThemeAndShorthands<import("@tamagui/web").TextStylePropsBase>> & import("@tamagui/web").MediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").TextStylePropsBase>> & import("react").RefAttributes<import("@tamagui/web").TamaguiTextElement> & Omit<import("@tamagui/web").TextProps, "color" | "space" | "zIndex" | "display" | "fontFamily" | "fontSize" | "fontStyle" | "fontWeight" | "letterSpacing" | "lineHeight" | "textAlign" | "textDecorationLine" | "textDecorationStyle" | "textDecorationColor" | "textShadowColor" | "textShadowOffset" | "textShadowRadius" | "textTransform" | "testID" | "fontVariant" | "writingDirection" | "backfaceVisibility" | "backgroundColor" | "borderBlockColor" | "borderBlockEndColor" | "borderBlockStartColor" | "borderBottomColor" | "borderBottomEndRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderBottomStartRadius" | "borderColor" | "borderCurve" | "borderEndColor" | "borderEndEndRadius" | "borderEndStartRadius" | "borderLeftColor" | "borderRadius" | "borderRightColor" | "borderStartColor" | "borderStartEndRadius" | "borderStartStartRadius" | "borderStyle" | "borderTopColor" | "borderTopEndRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderTopStartRadius" | "opacity" | "elevation" | "pointerEvents" | "alignContent" | "alignItems" | "alignSelf" | "aspectRatio" | "borderBottomWidth" | "borderEndWidth" | "borderLeftWidth" | "borderRightWidth" | "borderStartWidth" | "borderTopWidth" | "borderWidth" | "bottom" | "end" | "flex" | "flexBasis" | "flexDirection" | "rowGap" | "gap" | "columnGap" | "flexGrow" | "flexShrink" | "flexWrap" | "height" | "justifyContent" | "left" | "margin" | "marginBottom" | "marginEnd" | "marginHorizontal" | "marginLeft" | "marginRight" | "marginStart" | "marginTop" | "marginVertical" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "overflow" | "padding" | "paddingBottom" | "paddingEnd" | "paddingHorizontal" | "paddingLeft" | "paddingRight" | "paddingStart" | "paddingTop" | "paddingVertical" | "position" | "right" | "start" | "top" | "width" | "direction" | "shadowColor" | "shadowOffset" | "shadowOpacity" | "shadowRadius" | "transform" | "transformMatrix" | "rotation" | "scaleX" | "scaleY" | "translateX" | "translateY" | "textAlignVertical" | "verticalAlign" | "includeFontPadding" | "ellipse" | "textDecorationDistance" | "textOverflow" | "whiteSpace" | "wordWrap" | "x" | "y" | "perspective" | "scale" | "skewX" | "skewY" | "matrix" | "rotate" | "rotateY" | "rotateX" | "rotateZ" | "contain" | "touchAction" | "cursor" | "outlineColor" | "outlineOffset" | "outlineStyle" | "outlineWidth" | "spaceDirection" | "separator" | "animation" | "animateOnly" | "userSelect" | "transformOrigin" | "key" | `$${string}` | `$${number}` | "maxFontSizeMultiplier" | `$theme-${string}` | `$theme-${number}` | "ref" | "children" | "onPress" | "onLongPress" | "onPressIn" | "onPressOut" | "onHoverIn" | "onHoverOut" | "onMouseEnter" | "onMouseLeave" | "onMouseDown" | "onMouseUp" | "onFocus" | "onBlur" | "style" | "allowFontScaling" | "ellipsizeMode" | "id" | "lineBreakMode" | "numberOfLines" | "onTextLayout" | "nativeID" | "adjustsFontSizeToFit" | "dynamicTypeRamp" | "minimumFontScale" | "suppressHighlighting" | "lineBreakStrategyIOS" | "disabled" | "selectable" | "selectionColor" | "textBreakStrategy" | "dataDetectorType" | "android_hyphenationFrequency" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "aria-label" | "accessibilityRole" | "accessibilityState" | "aria-busy" | "aria-checked" | "aria-disabled" | "aria-expanded" | "aria-selected" | "aria-labelledby" | "accessibilityHint" | "accessibilityValue" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "onAccessibilityAction" | "importantForAccessibility" | "aria-hidden" | "aria-live" | "aria-modal" | "role" | "accessibilityLiveRegion" | "accessibilityLabelledBy" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "accessibilityLanguage" | "theme" | "target" | "asChild" | "dangerouslySetInnerHTML" | "debug" | "className" | "themeShallow" | "themeInverse" | "tag" | "group" | "untilMeasured" | "componentName" | "tabIndex" | "disableOptimization" | "forceStyle" | "disableClassName" | "onScroll" | "hoverStyle" | "pressStyle" | "focusStyle" | "exitStyle" | "enterStyle">, import("@tamagui/web").TextNonStyleProps & import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase>> & import("@tamagui/web").PseudoProps<import("@tamagui/web").WithThemeAndShorthands<import("@tamagui/web").TextStylePropsBase>> & import("@tamagui/web").MediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").TextStylePropsBase>> & import("react").RefAttributes<import("@tamagui/web").TamaguiTextElement> & Omit<import("@tamagui/web").TextProps, "color" | "space" | "zIndex" | "display" | "fontFamily" | "fontSize" | "fontStyle" | "fontWeight" | "letterSpacing" | "lineHeight" | "textAlign" | "textDecorationLine" | "textDecorationStyle" | "textDecorationColor" | "textShadowColor" | "textShadowOffset" | "textShadowRadius" | "textTransform" | "testID" | "fontVariant" | "writingDirection" | "backfaceVisibility" | "backgroundColor" | "borderBlockColor" | "borderBlockEndColor" | "borderBlockStartColor" | "borderBottomColor" | "borderBottomEndRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderBottomStartRadius" | "borderColor" | "borderCurve" | "borderEndColor" | "borderEndEndRadius" | "borderEndStartRadius" | "borderLeftColor" | "borderRadius" | "borderRightColor" | "borderStartColor" | "borderStartEndRadius" | "borderStartStartRadius" | "borderStyle" | "borderTopColor" | "borderTopEndRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderTopStartRadius" | "opacity" | "elevation" | "pointerEvents" | "alignContent" | "alignItems" | "alignSelf" | "aspectRatio" | "borderBottomWidth" | "borderEndWidth" | "borderLeftWidth" | "borderRightWidth" | "borderStartWidth" | "borderTopWidth" | "borderWidth" | "bottom" | "end" | "flex" | "flexBasis" | "flexDirection" | "rowGap" | "gap" | "columnGap" | "flexGrow" | "flexShrink" | "flexWrap" | "height" | "justifyContent" | "left" | "margin" | "marginBottom" | "marginEnd" | "marginHorizontal" | "marginLeft" | "marginRight" | "marginStart" | "marginTop" | "marginVertical" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "overflow" | "padding" | "paddingBottom" | "paddingEnd" | "paddingHorizontal" | "paddingLeft" | "paddingRight" | "paddingStart" | "paddingTop" | "paddingVertical" | "position" | "right" | "start" | "top" | "width" | "direction" | "shadowColor" | "shadowOffset" | "shadowOpacity" | "shadowRadius" | "transform" | "transformMatrix" | "rotation" | "scaleX" | "scaleY" | "translateX" | "translateY" | "textAlignVertical" | "verticalAlign" | "includeFontPadding" | "ellipse" | "textDecorationDistance" | "textOverflow" | "whiteSpace" | "wordWrap" | "x" | "y" | "perspective" | "scale" | "skewX" | "skewY" | "matrix" | "rotate" | "rotateY" | "rotateX" | "rotateZ" | "contain" | "touchAction" | "cursor" | "outlineColor" | "outlineOffset" | "outlineStyle" | "outlineWidth" | "spaceDirection" | "separator" | "animation" | "animateOnly" | "userSelect" | "transformOrigin" | "key" | `$${string}` | `$${number}` | "maxFontSizeMultiplier" | `$theme-${string}` | `$theme-${number}` | "ref" | "children" | "onPress" | "onLongPress" | "onPressIn" | "onPressOut" | "onHoverIn" | "onHoverOut" | "onMouseEnter" | "onMouseLeave" | "onMouseDown" | "onMouseUp" | "onFocus" | "onBlur" | "style" | "allowFontScaling" | "ellipsizeMode" | "id" | "lineBreakMode" | "numberOfLines" | "onTextLayout" | "nativeID" | "adjustsFontSizeToFit" | "dynamicTypeRamp" | "minimumFontScale" | "suppressHighlighting" | "lineBreakStrategyIOS" | "disabled" | "selectable" | "selectionColor" | "textBreakStrategy" | "dataDetectorType" | "android_hyphenationFrequency" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "aria-label" | "accessibilityRole" | "accessibilityState" | "aria-busy" | "aria-checked" | "aria-disabled" | "aria-expanded" | "aria-selected" | "aria-labelledby" | "accessibilityHint" | "accessibilityValue" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "onAccessibilityAction" | "importantForAccessibility" | "aria-hidden" | "aria-live" | "aria-modal" | "role" | "accessibilityLiveRegion" | "accessibilityLabelledBy" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "accessibilityLanguage" | "theme" | "target" | "asChild" | "dangerouslySetInnerHTML" | "debug" | "className" | "themeShallow" | "themeInverse" | "tag" | "group" | "untilMeasured" | "componentName" | "tabIndex" | "disableOptimization" | "forceStyle" | "disableClassName" | "onScroll" | "hoverStyle" | "pressStyle" | "focusStyle" | "exitStyle" | "enterStyle">, {
        size?: FontSizeTokens | undefined;
        unstyled?: boolean | undefined;
    }, {
        displayName: string | undefined;
        __baseStyles: import("@tamagui/web").TextStylePropsBase & import("@tamagui/web").TextNonStyleProps & import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase>> & import("@tamagui/web").PseudoProps<import("@tamagui/web").WithThemeAndShorthands<import("@tamagui/web").TextStylePropsBase>> & import("@tamagui/web").MediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").TextStylePropsBase>> & import("react").RefAttributes<import("@tamagui/web").TamaguiTextElement> & Omit<import("@tamagui/web").TextProps, "color" | "space" | "zIndex" | "display" | "fontFamily" | "fontSize" | "fontStyle" | "fontWeight" | "letterSpacing" | "lineHeight" | "textAlign" | "textDecorationLine" | "textDecorationStyle" | "textDecorationColor" | "textShadowColor" | "textShadowOffset" | "textShadowRadius" | "textTransform" | "testID" | "fontVariant" | "writingDirection" | "backfaceVisibility" | "backgroundColor" | "borderBlockColor" | "borderBlockEndColor" | "borderBlockStartColor" | "borderBottomColor" | "borderBottomEndRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderBottomStartRadius" | "borderColor" | "borderCurve" | "borderEndColor" | "borderEndEndRadius" | "borderEndStartRadius" | "borderLeftColor" | "borderRadius" | "borderRightColor" | "borderStartColor" | "borderStartEndRadius" | "borderStartStartRadius" | "borderStyle" | "borderTopColor" | "borderTopEndRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderTopStartRadius" | "opacity" | "elevation" | "pointerEvents" | "alignContent" | "alignItems" | "alignSelf" | "aspectRatio" | "borderBottomWidth" | "borderEndWidth" | "borderLeftWidth" | "borderRightWidth" | "borderStartWidth" | "borderTopWidth" | "borderWidth" | "bottom" | "end" | "flex" | "flexBasis" | "flexDirection" | "rowGap" | "gap" | "columnGap" | "flexGrow" | "flexShrink" | "flexWrap" | "height" | "justifyContent" | "left" | "margin" | "marginBottom" | "marginEnd" | "marginHorizontal" | "marginLeft" | "marginRight" | "marginStart" | "marginTop" | "marginVertical" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "overflow" | "padding" | "paddingBottom" | "paddingEnd" | "paddingHorizontal" | "paddingLeft" | "paddingRight" | "paddingStart" | "paddingTop" | "paddingVertical" | "position" | "right" | "start" | "top" | "width" | "direction" | "shadowColor" | "shadowOffset" | "shadowOpacity" | "shadowRadius" | "transform" | "transformMatrix" | "rotation" | "scaleX" | "scaleY" | "translateX" | "translateY" | "textAlignVertical" | "verticalAlign" | "includeFontPadding" | "ellipse" | "textDecorationDistance" | "textOverflow" | "whiteSpace" | "wordWrap" | "x" | "y" | "perspective" | "scale" | "skewX" | "skewY" | "matrix" | "rotate" | "rotateY" | "rotateX" | "rotateZ" | "contain" | "touchAction" | "cursor" | "outlineColor" | "outlineOffset" | "outlineStyle" | "outlineWidth" | "spaceDirection" | "separator" | "animation" | "animateOnly" | "userSelect" | "transformOrigin" | "key" | `$${string}` | `$${number}` | "maxFontSizeMultiplier" | `$theme-${string}` | `$theme-${number}` | "ref" | "children" | "onPress" | "onLongPress" | "onPressIn" | "onPressOut" | "onHoverIn" | "onHoverOut" | "onMouseEnter" | "onMouseLeave" | "onMouseDown" | "onMouseUp" | "onFocus" | "onBlur" | "style" | "allowFontScaling" | "ellipsizeMode" | "id" | "lineBreakMode" | "numberOfLines" | "onTextLayout" | "nativeID" | "adjustsFontSizeToFit" | "dynamicTypeRamp" | "minimumFontScale" | "suppressHighlighting" | "lineBreakStrategyIOS" | "disabled" | "selectable" | "selectionColor" | "textBreakStrategy" | "dataDetectorType" | "android_hyphenationFrequency" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "aria-label" | "accessibilityRole" | "accessibilityState" | "aria-busy" | "aria-checked" | "aria-disabled" | "aria-expanded" | "aria-selected" | "aria-labelledby" | "accessibilityHint" | "accessibilityValue" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "onAccessibilityAction" | "importantForAccessibility" | "aria-hidden" | "aria-live" | "aria-modal" | "role" | "accessibilityLiveRegion" | "accessibilityLabelledBy" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "accessibilityLanguage" | "theme" | "target" | "asChild" | "dangerouslySetInnerHTML" | "debug" | "className" | "themeShallow" | "themeInverse" | "tag" | "group" | "untilMeasured" | "componentName" | "tabIndex" | "disableOptimization" | "forceStyle" | "disableClassName" | "onScroll" | "hoverStyle" | "pressStyle" | "focusStyle" | "exitStyle" | "enterStyle">;
        __baseProps: import("@tamagui/web").TextNonStyleProps & import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase>> & import("@tamagui/web").PseudoProps<import("@tamagui/web").WithThemeAndShorthands<import("@tamagui/web").TextStylePropsBase>> & import("@tamagui/web").MediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").TextStylePropsBase>> & import("react").RefAttributes<import("@tamagui/web").TamaguiTextElement> & Omit<import("@tamagui/web").TextProps, "color" | "space" | "zIndex" | "display" | "fontFamily" | "fontSize" | "fontStyle" | "fontWeight" | "letterSpacing" | "lineHeight" | "textAlign" | "textDecorationLine" | "textDecorationStyle" | "textDecorationColor" | "textShadowColor" | "textShadowOffset" | "textShadowRadius" | "textTransform" | "testID" | "fontVariant" | "writingDirection" | "backfaceVisibility" | "backgroundColor" | "borderBlockColor" | "borderBlockEndColor" | "borderBlockStartColor" | "borderBottomColor" | "borderBottomEndRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderBottomStartRadius" | "borderColor" | "borderCurve" | "borderEndColor" | "borderEndEndRadius" | "borderEndStartRadius" | "borderLeftColor" | "borderRadius" | "borderRightColor" | "borderStartColor" | "borderStartEndRadius" | "borderStartStartRadius" | "borderStyle" | "borderTopColor" | "borderTopEndRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderTopStartRadius" | "opacity" | "elevation" | "pointerEvents" | "alignContent" | "alignItems" | "alignSelf" | "aspectRatio" | "borderBottomWidth" | "borderEndWidth" | "borderLeftWidth" | "borderRightWidth" | "borderStartWidth" | "borderTopWidth" | "borderWidth" | "bottom" | "end" | "flex" | "flexBasis" | "flexDirection" | "rowGap" | "gap" | "columnGap" | "flexGrow" | "flexShrink" | "flexWrap" | "height" | "justifyContent" | "left" | "margin" | "marginBottom" | "marginEnd" | "marginHorizontal" | "marginLeft" | "marginRight" | "marginStart" | "marginTop" | "marginVertical" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "overflow" | "padding" | "paddingBottom" | "paddingEnd" | "paddingHorizontal" | "paddingLeft" | "paddingRight" | "paddingStart" | "paddingTop" | "paddingVertical" | "position" | "right" | "start" | "top" | "width" | "direction" | "shadowColor" | "shadowOffset" | "shadowOpacity" | "shadowRadius" | "transform" | "transformMatrix" | "rotation" | "scaleX" | "scaleY" | "translateX" | "translateY" | "textAlignVertical" | "verticalAlign" | "includeFontPadding" | "ellipse" | "textDecorationDistance" | "textOverflow" | "whiteSpace" | "wordWrap" | "x" | "y" | "perspective" | "scale" | "skewX" | "skewY" | "matrix" | "rotate" | "rotateY" | "rotateX" | "rotateZ" | "contain" | "touchAction" | "cursor" | "outlineColor" | "outlineOffset" | "outlineStyle" | "outlineWidth" | "spaceDirection" | "separator" | "animation" | "animateOnly" | "userSelect" | "transformOrigin" | "key" | `$${string}` | `$${number}` | "maxFontSizeMultiplier" | `$theme-${string}` | `$theme-${number}` | "ref" | "children" | "onPress" | "onLongPress" | "onPressIn" | "onPressOut" | "onHoverIn" | "onHoverOut" | "onMouseEnter" | "onMouseLeave" | "onMouseDown" | "onMouseUp" | "onFocus" | "onBlur" | "style" | "allowFontScaling" | "ellipsizeMode" | "id" | "lineBreakMode" | "numberOfLines" | "onTextLayout" | "nativeID" | "adjustsFontSizeToFit" | "dynamicTypeRamp" | "minimumFontScale" | "suppressHighlighting" | "lineBreakStrategyIOS" | "disabled" | "selectable" | "selectionColor" | "textBreakStrategy" | "dataDetectorType" | "android_hyphenationFrequency" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "aria-label" | "accessibilityRole" | "accessibilityState" | "aria-busy" | "aria-checked" | "aria-disabled" | "aria-expanded" | "aria-selected" | "aria-labelledby" | "accessibilityHint" | "accessibilityValue" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "onAccessibilityAction" | "importantForAccessibility" | "aria-hidden" | "aria-live" | "aria-modal" | "role" | "accessibilityLiveRegion" | "accessibilityLabelledBy" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "accessibilityLanguage" | "theme" | "target" | "asChild" | "dangerouslySetInnerHTML" | "debug" | "className" | "themeShallow" | "themeInverse" | "tag" | "group" | "untilMeasured" | "componentName" | "tabIndex" | "disableOptimization" | "forceStyle" | "disableClassName" | "onScroll" | "hoverStyle" | "pressStyle" | "focusStyle" | "exitStyle" | "enterStyle">;
        __variantProps: void & {
            readonly unstyled?: boolean | undefined;
            readonly size?: FontSizeTokens | undefined;
        };
    }>;
    Icon: (props: {
        children: React.ReactNode;
        scaleIcon?: number;
    }) => any;
};
/**
 * @deprecated Instead of useButton, see the Button docs for the newer and much improved Advanced customization pattern: https://tamagui.dev/docs/components/button
 */
declare function useButton<Props extends ButtonProps>({ textProps, ...propsIn }: Props, { Text }?: {
    Text: any;
}): {
    spaceSize: number | boolean | "unset" | import("@tamagui/web").UnionableString | import("@tamagui/web").Variable<any>;
    isNested: boolean;
    props: Props;
};
export { Button, ButtonFrame, ButtonIcon, ButtonText, buttonStaticConfig, useButton, };
export type { ButtonProps };
//# sourceMappingURL=Button.d.ts.map