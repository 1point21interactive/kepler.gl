// Copyright (c) 2020 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

import {KEPLER_GL_VERSION, EXPORT_HTML_MAP_MODES} from 'constants/default-settings';

/**
 * This method is used to create an html file which will inlcude kepler and map data
 * @param {Object} options Object that collects all necessary data to  create the html file
 * @param {string} options.mapboxApiAccessToken Mapbox token used to fetch mapbox tiles
 * @param {Array<Object>} options.datasets Data to include in the map
 * @param {Object} options.config this object will contain the full kepler.gl instance configuration {mapState, mapStyle, visState}
 * @param {string} version which version of Kepler.gl to load.
 */
export const exportMapToHTML = (options, version = KEPLER_GL_VERSION) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8"/>
        <title>Kepler.gl embedded map</title>

        <!--Uber Font-->
        <link rel="stylesheet" href="https://d1a3f4spazzrp4.cloudfront.net/kepler.gl/uber-fonts/4.0.0/superfine.css">

        <!--MapBox css-->
        <link href="https://api.tiles.mapbox.com/mapbox-gl-js/v1.1.1/mapbox-gl.css" rel="stylesheet">

        <!-— facebook open graph tags -->
        <meta property="og:url" content="http://keplergl.1point21interactive.com/" />
        <meta property="og:title" content="Mapping Visualization Tool" />
        <meta property="og:description" content="Create and publish interactive maps. />
        <meta property="og:site_name" content="1point21 Maps" />
        <meta property="og:image" content="https://www.1point21interactive.com/maps/images/kepmapex.jpg" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="800" />        <!-— twitter card tags -->
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:title" content="Mapping Visualization Tool">
        <meta name="twitter:description" content="Create and publish interactive maps.
        <meta name="twitter:image" content="https://www.1point21interactive.com/maps/images/kepmapex.jpg" />

        <!-- Load React/Redux -->
        <script src="https://unpkg.com/react@16.8.4/umd/react.production.min.js" crossorigin></script>
        <script src="https://unpkg.com/react-dom@16.8.4/umd/react-dom.production.min.js" crossorigin></script>
        <script src="https://unpkg.com/redux@3.7.2/dist/redux.js" crossorigin></script>
        <script src="https://unpkg.com/react-redux@7.1.3/dist/react-redux.min.js" crossorigin></script>
        <script src="https://unpkg.com/styled-components@4.1.3/dist/styled-components.min.js" crossorigin></script>

        <!-- Load Kepler.gl -->
        <script src="https://unpkg.com/kepler.gl@${version}/umd/keplergl.min.js" crossorigin></script>

        <style type="text/css">
          body {margin: 0; padding: 0; overflow: hidden;}
        </style>

        <!--MapBox token-->
        <script>
          /**
           * Provide your MapBox Token
           **/
          const MAPBOX_TOKEN = '${options.mapboxApiAccessToken || 'PROVIDE_MAPBOX_TOKEN'}';
          const WARNING_MESSAGE = 'Please Provide a Mapbox Token in order to use Kepler.gl. Edit this file and fill out MAPBOX_TOKEN with your access key';
        </script>

        <!-- GA: Delete this as you wish, However to pat ourselves on the back, we only track anonymous pageview to understand how many people are using kepler.gl. -->
        <script>
          (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
          })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
          ga('create', 'UA-64694404-19', {
            'storage': 'none',
            'clientId': localStorage.getItem('ga:clientId')
          });
          ga(function(tracker) {
              localStorage.setItem('ga:clientId', tracker.get('clientId'));
          });
          ga('set', 'checkProtocolTask', null); // Disable file protocol checking.
          ga('set', 'checkStorageTask', null); // Disable cookie storage checking.
          ga('set', 'historyImportTask', null); // Disable history checking (requires reading from cookies).
          ga('set', 'page', 'keplergl-html');
          ga('send', 'pageview');
        </script>
      </head>
      <body>
        <!-- We will put our React component inside this div. -->
        <div id="app">
          <!-- Kepler.gl map will be placed here-->
        </div>

        <!-- Load our React component. -->
        <script>
          /* Validate Mapbox Token */
          if ((MAPBOX_TOKEN || '') === '' || MAPBOX_TOKEN === 'PROVIDE_MAPBOX_TOKEN') {
            alert(WARNING_MESSAGE);
          }

          /** STORE **/
          const reducers = (function createReducers(redux, keplerGl) {
            return redux.combineReducers({
              // mount keplerGl reducer
              keplerGl: keplerGl.keplerGlReducer.initialState({
                uiState: {
                  readOnly: ${options.mode === EXPORT_HTML_MAP_MODES.READ},
                  currentModal: null
                }
              })
            });
          }(Redux, KeplerGl));

          const middleWares = (function createMiddlewares(keplerGl) {
            return keplerGl.enhanceReduxMiddleware([
              // Add other middlewares here
            ]);
          }(KeplerGl));

          const enhancers = (function craeteEnhancers(redux, middles) {
            return redux.applyMiddleware(...middles);
          }(Redux, middleWares));

          const store = (function createStore(redux, enhancers) {
            const initialState = {};

            return redux.createStore(
              reducers,
              initialState,
              redux.compose(enhancers)
            );
          }(Redux, enhancers));
          /** END STORE **/

          /** COMPONENTS **/
          var KeplerElement = (function makeKeplerElement(react, keplerGl, mapboxToken) {

            return function App() {
              var rootElm = react.useRef(null);
              var _useState = react.useState({
                width: window.innerWidth,
                height: window.innerHeight
              });
              var windowDimension = _useState[0];
              var setDimension = _useState[1];
              react.useEffect(function sideEffect(){
                function handleResize() {
                  setDimension({width: window.innerWidth, height: window.innerHeight});
                };
                window.addEventListener('resize', handleResize);
                return function() {window.removeEventListener('resize', handleResize);};
              }, []);
              return react.createElement(
                'div',
                {style: {position: 'absolute', left: 0, width: '100vw', height: '100vh'}},
                ${options.mode === EXPORT_HTML_MAP_MODES.READ ? '' : ''}
                react.createElement(keplerGl.KeplerGl, {
                  mapboxApiAccessToken: mapboxToken,
                  id: "map",
                  width: windowDimension.width,
                  height: windowDimension.height
                })
              )
            }
          }(React, KeplerGl, MAPBOX_TOKEN));

          const app = (function createReactReduxProvider(react, reactRedux, KeplerElement) {
            return react.createElement(
              reactRedux.Provider,
              {store},
              react.createElement(KeplerElement, null)
            )
          }(React, ReactRedux, KeplerElement));
          /** END COMPONENTS **/

          /** Render **/
          (function render(react, reactDOM, app) {
            reactDOM.render(app, document.getElementById('app'));
          }(React, ReactDOM, app));
        </script>
        <!-- The next script will show how to interact directly with Kepler map store -->
        <script>
          /**
           * Customize map.
           * In the following section you can use the store object to dispatch Kepler.gl actions
           * to add new data and customize behavior
           */
          (function customize(keplerGl, store) {
            const datasets = ${JSON.stringify(options.datasets)};
            const config = ${JSON.stringify(options.config)};

            const loadedData = keplerGl.KeplerGlSchema.load(
              datasets,
              config
            );

            store.dispatch(keplerGl.addDataToMap({
              datasets: loadedData.datasets,
              config: loadedData.config,
              options: {
                centerMap: false
              }
            }));
          }(KeplerGl, store))
        </script>
      </body>
    </html>
  `;
};
