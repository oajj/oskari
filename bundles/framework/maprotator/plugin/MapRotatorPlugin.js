Oskari.clazz.define( 'Oskari.mapframework.bundle.maprotator.plugin.MapRotatorPlugin',
  function(instance, config, locale, mapmodule, sandbox) {
    var me = this;
    me._config = config;
    me._mapmodule = mapmodule;
    me._sandbox = sandbox;
    me._instance = instance;
    me._clazz = 'Oskari.mapframework.bundle.maprotator.plugin.MapRotatorPlugin';
    me._defaultLocation = 'top left';
    me._toolOpen = false;
    me._index = 600;
    me._currentRot = null;
    me._templates = {
      maprotatortool: jQuery('<div class="mapplugin maprotator compass"></div>')
    };
    me._log = Oskari.log('Oskari.mapframework.bundle.maprotator.plugin.MapRotatorPlugin');
  }, {
    /**
     * Creates UI for coordinate display and places it on the maps
     * div where this plugin registered.
     * @private @method _createControlElement
     *
     * @return {jQuery}
     */
    _createControlElement: function () {
        var me = this,
            compass = me._templates.maprotatortool.clone(),
            degrees,
            eventBuilder = Oskari.eventBuilder( 'MapRotationDegreesEvent' );

        compass.on( "click", function(){
          me._map.getView().setRotation( 0 );
          $(this).css({ transform:'rotate(0deg)' });
        });

        // me._locale = Oskari.getLocalization('maprotator', Oskari.getLang() || Oskari.getDefaultLanguage()).display;
        compass.attr('title', "me._locale.tooltip.tool");

        //HACK
        if( typeof ol == 'undefined' ) {

        } else {
          var DragRotate = new ol.interaction.DragRotate();
          this._map.addInteraction(DragRotate);

          this._map.on( 'pointerdrag', function( event ) {
             degrees = me._getRotation();
             compass.css({ transform:'rotate('+degrees+'deg)' });
             var event = eventBuilder( degrees );
             me._sandbox.notifyAll( event );
          });
        }
        return compass;
    },
    _createUI: function() {
      this._element = this._createControlElement();
      this.addToPluginContainer(this._element);
    },
    setRotation: function(deg) {
      //degrees to radians
      var rot = deg / 57.3;
      if( typeof deg === 'undefined'){
        rot = 0;
      }
      this._element.css({ transform:'rotate('+deg+'deg)' });
      this._map.getView().setRotation( rot );
    },
    _getRotation: function() {
      var me = this;
      var rot = this._map.getView().getRotation();
      //radians to degrees
      var deg = rot * 57.3;
      return deg;
    },
    /**
     * Create event handlers.
     * @method @private _createEventHandlers
     */
    _createEventHandlers: function () {
        return {
            /**
             * @method RPCUIEvent
             * will open/close coordinatetool's popup
             */
            RPCUIEvent: function (event) {
                var me = this;
                if(event.getBundleId()==='coordinatetool') {
                     me._toggleToolState();
                }
            }
        };
    },
    /**
     * Handle plugin UI and change it when desktop / mobile mode
     * @method  @public redrawUI
     * @param  {Boolean} mapInMobileMode is map in mobile mode
     * @param {Boolean} forced application has started and ui should be rendered with assets that are available
     */
    redrawUI: function(mapInMobileMode, forced) {
        var me = this;
        var sandbox = me.getSandbox();
        // this.teardownUI();
        this._createUI();
        this.addToPluginContainer(me.getElement());

    },
    teardownUI : function(stopping) {
    //detach old element from screen
    var me = this;
    this.removeFromPluginContainer(me._element, !stopping);
    me.getElement().detach();
    },
    /**
     * Get jQuery element.
     * @method @public getElement
     */
    getElement: function(){
        return this._element;
    }
  }, {
      'extend': ['Oskari.mapping.mapmodule.plugin.BasicMapModulePlugin'],
      /**
       * @static @property {string[]} protocol array of superclasses
       */
      'protocol': [
          "Oskari.mapframework.module.Module",
          "Oskari.mapframework.ui.module.common.mapmodule.Plugin"
      ]
  });
