import { GetProps } from '@tamagui/core';
export type YStackProps = GetProps<typeof YStack>;
export type XStackProps = YStackProps;
export type ZStackProps = YStackProps;
export declare const fullscreenStyle: {
    readonly position: "absolute";
    readonly top: 0;
    readonly left: 0;
    readonly right: 0;
    readonly bottom: 0;
};
export declare const YStack: import("@tamagui/core").TamaguiComponent<{
    expandLater: true;
}, import("@tamagui/core").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStylePropsBase, {
    readonly fullscreen?: boolean | undefined;
    readonly elevation?: number | import("@tamagui/core").SizeTokens | undefined;
}, {
    displayName: string | undefined;
}>;
export declare const XStack: import("@tamagui/core").TamaguiComponent<{
    expandLater: true;
}, import("@tamagui/core").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStylePropsBase, {
    readonly fullscreen?: boolean | undefined;
    readonly elevation?: number | import("@tamagui/core").SizeTokens | undefined;
}, {
    displayName: string | undefined;
}>;
export declare const ZStack: import("@tamagui/core").TamaguiComponent<{
    expandLater: true;
}, import("@tamagui/core").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStylePropsBase, {
    readonly fullscreen?: boolean | undefined;
    readonly elevation?: number | import("@tamagui/core").SizeTokens | undefined;
}, {
    displayName: string | undefined;
}>;
//# sourceMappingURL=Stacks.d.ts.map