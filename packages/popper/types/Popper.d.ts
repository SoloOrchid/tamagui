import type { ScopedProps } from '@tamagui/core';
import { SizeTokens } from '@tamagui/core';
import { Coords, OffsetOptions, Placement, Strategy, UseFloatingReturn, flip, shift } from '@tamagui/floating';
import { SizableStackProps, YStackProps } from '@tamagui/stacks';
import * as React from 'react';
import { View } from 'react-native';
type ShiftProps = typeof shift extends (options: infer Opts) => void ? Opts : never;
type FlipProps = typeof flip extends (options: infer Opts) => void ? Opts : never;
export type PopperContextValue = UseFloatingReturn & {
    isMounted: boolean;
    anchorRef: any;
    size?: SizeTokens;
    placement?: Placement;
    arrowRef: any;
    onArrowSize?: (val: number) => void;
    arrowStyle?: Partial<Coords> & {
        centerOffset: number;
    };
};
export declare const PopperContext: import("@tamagui/core").StyledContext<PopperContextValue>;
export declare const usePopperContext: (scope?: string | undefined) => PopperContextValue, PopperProvider: React.ProviderExoticComponent<Partial<PopperContextValue> & {
    children?: React.ReactNode;
    scope?: string | undefined;
}>;
export type PopperProps = {
    size?: SizeTokens;
    children?: React.ReactNode;
    placement?: Placement;
    stayInFrame?: ShiftProps | boolean;
    allowFlip?: FlipProps | boolean;
    strategy?: Strategy;
    offset?: OffsetOptions;
};
type ScopedPopperProps<P> = ScopedProps<P, 'Popper'>;
export declare function Popper(props: ScopedPopperProps<PopperProps>): JSX.Element;
type PopperAnchorRef = HTMLElement | View;
export type PopperAnchorProps = YStackProps & {
    virtualRef?: React.RefObject<any>;
};
export declare const PopperAnchor: React.ForwardRefExoticComponent<import("@tamagui/core").StackNonStyleProps & {
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
} & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase & {
    readonly fullscreen?: boolean | undefined;
    readonly elevation?: number | SizeTokens | undefined;
}> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase & {
    readonly fullscreen?: boolean | undefined;
    readonly elevation?: number | SizeTokens | undefined;
}>> & import("@tamagui/core").WithPseudoProps<import("@tamagui/core").WithThemeAndShorthands<import("@tamagui/core").StackStylePropsBase & {
    readonly fullscreen?: boolean | undefined;
    readonly elevation?: number | SizeTokens | undefined;
}>> & import("@tamagui/core").WithMediaProps<import("@tamagui/core").WithThemeShorthandsAndPseudos<import("@tamagui/core").StackStylePropsBase & {
    readonly fullscreen?: boolean | undefined;
    readonly elevation?: number | SizeTokens | undefined;
}>> & {
    virtualRef?: React.RefObject<any> | undefined;
} & {
    __scopePopper?: string | undefined;
} & React.RefAttributes<PopperAnchorRef>>;
type PopperContentElement = HTMLElement | View;
export type PopperContentProps = SizableStackProps & {
    enableAnimationForPositionChange?: boolean;
};
export declare const PopperContentFrame: import("@tamagui/core").TamaguiComponent<{
    expandLater: true;
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
}, import("@tamagui/core").StackStylePropsBase, {
    size?: SizeTokens | undefined;
    elevation?: number | SizeTokens | undefined;
    fullscreen?: boolean | undefined;
    circular?: boolean | undefined;
    hoverTheme?: boolean | undefined;
    pressTheme?: boolean | undefined;
    focusTheme?: boolean | undefined;
    elevate?: boolean | undefined;
    bordered?: number | boolean | undefined;
    unstyled?: boolean | undefined;
    transparent?: boolean | undefined;
    backgrounded?: boolean | undefined;
    radiused?: boolean | undefined;
    padded?: boolean | undefined;
    chromeless?: boolean | "all" | undefined;
}, {
    displayName: string | undefined;
}>;
export declare const PopperContent: React.ForwardRefExoticComponent<import("@tamagui/core").StackNonStyleProps & {
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
} & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase & {
    size?: SizeTokens | undefined;
    elevation?: number | SizeTokens | undefined;
    fullscreen?: boolean | undefined;
    circular?: boolean | undefined;
    hoverTheme?: boolean | undefined;
    pressTheme?: boolean | undefined;
    focusTheme?: boolean | undefined;
    elevate?: boolean | undefined;
    bordered?: number | boolean | undefined;
    unstyled?: boolean | undefined;
}> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase & {
    size?: SizeTokens | undefined;
    elevation?: number | SizeTokens | undefined;
    fullscreen?: boolean | undefined;
    circular?: boolean | undefined;
    hoverTheme?: boolean | undefined;
    pressTheme?: boolean | undefined;
    focusTheme?: boolean | undefined;
    elevate?: boolean | undefined;
    bordered?: number | boolean | undefined;
    unstyled?: boolean | undefined;
}>> & import("@tamagui/core").WithPseudoProps<import("@tamagui/core").WithThemeAndShorthands<import("@tamagui/core").StackStylePropsBase & {
    size?: SizeTokens | undefined;
    elevation?: number | SizeTokens | undefined;
    fullscreen?: boolean | undefined;
    circular?: boolean | undefined;
    hoverTheme?: boolean | undefined;
    pressTheme?: boolean | undefined;
    focusTheme?: boolean | undefined;
    elevate?: boolean | undefined;
    bordered?: number | boolean | undefined;
    unstyled?: boolean | undefined;
}>> & import("@tamagui/core").WithMediaProps<import("@tamagui/core").WithThemeShorthandsAndPseudos<import("@tamagui/core").StackStylePropsBase & {
    size?: SizeTokens | undefined;
    elevation?: number | SizeTokens | undefined;
    fullscreen?: boolean | undefined;
    circular?: boolean | undefined;
    hoverTheme?: boolean | undefined;
    pressTheme?: boolean | undefined;
    focusTheme?: boolean | undefined;
    elevate?: boolean | undefined;
    bordered?: number | boolean | undefined;
    unstyled?: boolean | undefined;
}>> & {
    enableAnimationForPositionChange?: boolean | undefined;
} & {
    __scopePopper?: string | undefined;
} & React.RefAttributes<PopperContentElement>>;
export type PopperArrowProps = YStackProps & {
    offset?: number;
    size?: SizeTokens;
};
export declare const PopperArrow: import("@tamagui/core").TamaguiComponent<Omit<{
    expandLater: true;
}, "size" | `$${string}` | `$${number}` | "__scopePopper" | "offset" | `$theme-${string}` | `$theme-${number}` | "onStartShouldSetResponder" | "dataSet" | "onScrollShouldSetResponder" | "onScrollShouldSetResponderCapture" | "onSelectionChangeShouldSetResponder" | "onSelectionChangeShouldSetResponderCapture" | "onLayout" | "href" | "hrefAttrs" | "elevationAndroid" | "rel" | "download" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | keyof import("@tamagui/core").StackStylePropsBase | "fullscreen" | keyof import("@tamagui/core").StackNonStyleProps | keyof import("@tamagui/core").WithPseudoProps<import("@tamagui/core").WithThemeAndShorthands<import("@tamagui/core").StackStylePropsBase & {
    readonly fullscreen?: boolean | undefined;
    readonly elevation?: number | SizeTokens | undefined;
}>>> & import("@tamagui/core").StackNonStyleProps & {
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
} & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase & {
    readonly fullscreen?: boolean | undefined;
    readonly elevation?: number | SizeTokens | undefined;
}> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase & {
    readonly fullscreen?: boolean | undefined;
    readonly elevation?: number | SizeTokens | undefined;
}>> & import("@tamagui/core").WithPseudoProps<import("@tamagui/core").WithThemeAndShorthands<import("@tamagui/core").StackStylePropsBase & {
    readonly fullscreen?: boolean | undefined;
    readonly elevation?: number | SizeTokens | undefined;
}>> & import("@tamagui/core").WithMediaProps<import("@tamagui/core").WithThemeShorthandsAndPseudos<import("@tamagui/core").StackStylePropsBase & {
    readonly fullscreen?: boolean | undefined;
    readonly elevation?: number | SizeTokens | undefined;
}>> & {
    offset?: number | undefined;
    size?: SizeTokens | undefined;
} & {
    __scopePopper?: string | undefined;
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
} & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase & {
    readonly fullscreen?: boolean | undefined;
    readonly elevation?: number | SizeTokens | undefined;
}> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase & {
    readonly fullscreen?: boolean | undefined;
    readonly elevation?: number | SizeTokens | undefined;
}>> & import("@tamagui/core").WithPseudoProps<import("@tamagui/core").WithThemeAndShorthands<import("@tamagui/core").StackStylePropsBase & {
    readonly fullscreen?: boolean | undefined;
    readonly elevation?: number | SizeTokens | undefined;
}>> & import("@tamagui/core").WithMediaProps<import("@tamagui/core").WithThemeShorthandsAndPseudos<import("@tamagui/core").StackStylePropsBase & {
    readonly fullscreen?: boolean | undefined;
    readonly elevation?: number | SizeTokens | undefined;
}>> & {
    offset?: number | undefined;
    size?: SizeTokens | undefined;
} & {
    __scopePopper?: string | undefined;
}, import("@tamagui/core").StackStylePropsBase, {
    elevation?: number | SizeTokens | undefined;
    fullscreen?: boolean | undefined;
    unstyled?: boolean | undefined;
}, {
    displayName: string | undefined;
}>;
export {};
//# sourceMappingURL=Popper.d.ts.map