'use strict';

var tslib = require('tslib');
var i0 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');

function _interopNamespaceDefault(e) {
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n.default = e;
    return Object.freeze(n);
}

var i0__namespace = /*#__PURE__*/_interopNamespaceDefault(i0);

var AddPlugin = /** @class */ (function (_super) {
    tslib.__extends(AddPlugin, _super);
    function AddPlugin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AddPlugin.prototype.addMethod = function (arg1) { return core.cordova(this, "addMethod", {}, arguments); };
    AddPlugin.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: AddPlugin, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    AddPlugin.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: AddPlugin });
    AddPlugin.pluginName = "AddPlugin";
    AddPlugin.plugin = "com.addplugin";
    AddPlugin.pluginRef = "cordova.plugins.add";
    AddPlugin.repo = "https://github.com/lokesh356/addplugin.git";
    AddPlugin.install = "";
    AddPlugin.installVariables = [];
    AddPlugin.platforms = ["Android", "Ios"];
    AddPlugin = tslib.__decorate([], AddPlugin);
    return AddPlugin;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: AddPlugin, decorators: [{
            type: i0.Injectable
        }], propDecorators: { addMethod: [] } });

exports.AddPlugin = AddPlugin;
