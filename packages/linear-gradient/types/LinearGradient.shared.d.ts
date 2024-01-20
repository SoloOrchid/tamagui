import { ColorTokens, GetProps, ThemeTokens } from '@tamagui/core';
import { LinearGradientProps as ExpoLinearGradientProps } from './linear-gradient';
export type LinearGradientExtraProps = Omit<ExpoLinearGradientProps, 'colors'> & {
    colors?: (ColorTokens | ThemeTokens | (string & {}))[];
};
export declare const LinearGradient: import("@tamagui/core").TamaguiComponent<Omit<{
    expandLater: true;
}, "colors" | keyof import("react-native").ViewProps | "locations" | "start" | "end"> & Omit<ExpoLinearGradientProps, "colors"> & {
    colors?: (ColorTokens | (string & {}))[] | undefined;
}, import("@tamagui/core").TamaguiElement, import("@tamagui/core").StackNonStyleProps & {
    onStartShouldSetResponder?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
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
    rel?: any;
    download?: any;
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
} & Omit<ExpoLinearGradientProps, "colors"> & {
    colors?: (ColorTokens | (string & {}))[] | undefined;
}, import("@tamagui/core").StackStylePropsBase, {
    readonly fullscreen?: boolean | undefined;
    readonly elevation?: number | import("@tamagui/core").SizeTokens | undefined;
}, {
    displayName: string | undefined;
}>;
export type LinearGradientProps = GetProps<typeof LinearGradient>;
//# sourceMappingURL=LinearGradient.shared.d.ts.map