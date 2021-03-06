define(["oskari","jquery",
	"bundles/framework/bundle/printout/jquery.imagesLoaded",
	"bundles/framework/bundle/printout/instance",
	"bundles/framework/bundle/printout/Flyout",
	"bundles/framework/bundle/printout/Tile",
	"bundles/framework/bundle/printout/plugin/LegendPlugin",
	"bundles/framework/bundle/printout/service/PrintService",
	"bundles/framework/bundle/printout/view/StartView",
	"bundles/framework/bundle/printout/view/BasicPrintout",
	"bundles/framework/bundle/printout/request/PrintMapRequest",
	"bundles/framework/bundle/printout/request/PrintMapRequestHandler",
	"bundles/framework/bundle/printout/event/PrintableContentEvent",
	"bundles/framework/bundle/printout/event/PrintWithoutUIEvent",
	"css!resources/framework/bundle/printout/css/style.css",
	"bundles/framework/bundle/printout/locale/am",
	"bundles/framework/bundle/printout/locale/bg",
	"bundles/framework/bundle/printout/locale/cs",
	"bundles/framework/bundle/printout/locale/da",
	"bundles/framework/bundle/printout/locale/de",
	"bundles/framework/bundle/printout/locale/en",
	"bundles/framework/bundle/printout/locale/es",
	"bundles/framework/bundle/printout/locale/et",
	"bundles/framework/bundle/printout/locale/fi",
	"bundles/framework/bundle/printout/locale/gr",
	"bundles/framework/bundle/printout/locale/hr",
	"bundles/framework/bundle/printout/locale/hu",
	"bundles/framework/bundle/printout/locale/lv",
	"bundles/framework/bundle/printout/locale/nl",
	"bundles/framework/bundle/printout/locale/pl",
	"bundles/framework/bundle/printout/locale/pt",
	"bundles/framework/bundle/printout/locale/ro",
	"bundles/framework/bundle/printout/locale/rs",
	"bundles/framework/bundle/printout/locale/sl",
	"bundles/framework/bundle/printout/locale/sk",
	"bundles/framework/bundle/printout/locale/sq",
	"bundles/framework/bundle/printout/locale/sv",
	"bundles/framework/bundle/printout/locale/uk"
], function(Oskari,jQuery) {
    return Oskari.bundleCls("printout").category({create: function () {
        var me = this;
        var inst = Oskari.clazz.create("Oskari.mapframework.bundle.printout.PrintoutBundleInstance");

        return inst;

    },update: function (manager, bundle, bi, info) {

    }})
});