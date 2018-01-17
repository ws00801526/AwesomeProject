var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import React, { PureComponent } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import ButtonStyle from './style/index.native';
var buttonStyles = StyleSheet.create(ButtonStyle);
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Button.prototype.render = function () {
        var _a = this.props, style = _a.style, // css style
        styles = _a.styles, // buttonStyles
        size = _a.size, // button size
        theme = _a.theme, // button theme
        shape = _a.shape, // button shape
        children = _a.children, // text children
        others = __rest(_a, ["style", "styles", "size", "theme", "shape", "children"]);
        var textStyle = [
            styles.text,
        ];
        var containerStyle = [
            styles.container,
            styles[theme + "Theme"],
            style,
        ];
        var containerProps = __assign({ style: containerStyle }, others);
        var contentStyle = [
            styles.content,
        ];
        var contentRender = (<View style={contentStyle}>
        <Text style={textStyle}>{children}</Text>
      </View>);
        return <TouchableHighlight {...containerProps}>{contentRender}</TouchableHighlight>;
    };
    Button.defaultProps = {
        size: 'md',
        theme: 'default',
        styles: buttonStyles,
        onPress: function () { }
    };
    return Button;
}(PureComponent));
export default Button;
