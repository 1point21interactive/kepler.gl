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

import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {FileType} from 'components/common/icons';
import {StyledModalContent, StyledType} from 'components/common/styled-components';
import {EXPORT_MAP_FORMATS, EXPORT_MAP_FORMAT_OPTIONS} from 'constants/default-settings';
import {StyledExportMapSection} from './components';
import ExportHtmlMapFactory from './export-html-map';
import ExportJsonMapFactory from './export-json-map';
import {FormattedMessage} from 'react-intl';
import {
  EXPORT_IMG_RATIO_OPTIONS,
  EXPORT_IMG_RESOLUTION_OPTIONS,
  EXPORT_IMG_RATIOS
} from 'constants/default-settings';

const propTypes = {
  options: PropTypes.object,
  onEditUserMapboxAccessToken: PropTypes.func.isRequired,
  onEditMaptitle: PropTypes.func,
  onEditMapDescription: PropTypes.func,
  onChangeExportData: PropTypes.func,
  onChangeExportMapType: PropTypes.func,
  mapFormat: PropTypes.string,
  mapW: PropTypes.number.isRequired,
  mapH: PropTypes.number.isRequired,
  exportImage: PropTypes.object.isRequired,
  // callbacks
  onUpdateSetting: PropTypes.func.isRequired
};

const style = {width: '100%'};

const NO_OP = () => {};

// ExportMapModalFactory.deps = [ExportHtmlMapFactory, ExportJsonMapFactory];
const ExportHtmlMap = ExportHtmlMapFactory();
const ExportJsonMap = ExportJsonMapFactory();
const ExportMapModalFactory = () => {
  class ExportMapModal extends Component {
    static propTypes = {
      options: PropTypes.object,
      onEditUserMapboxAccessToken: PropTypes.func.isRequired,
      onEditMaptitle: PropTypes.func,
      onEditMapDescription: PropTypes.func,
      onChangeExportData: PropTypes.func,
      onChangeExportMapType: PropTypes.func,
      mapFormat: PropTypes.string,
      mapW: PropTypes.number.isRequired,
      mapH: PropTypes.number.isRequired,
      exportImage: PropTypes.object.isRequired,
      // callbacks
      onUpdateSetting: PropTypes.func.isRequired
    };

    componentDidMount() {
      this._updateMapDim();
    }

    componentDidUpdate() {
      this._updateMapDim();
    }

    _updateMapDim() {
      const {exportImage, mapH, mapW} = this.props;
      if (mapH !== exportImage.mapH || mapW !== exportImage.mapW) {
        this.props.onUpdateSetting({
          mapH,
          mapW,
          ratio: EXPORT_IMG_RATIOS.CUSTOM,
          legend: false
        });
      }
    }

    render() {
      const {
        options,
        onChangeExportMapHTMLMode,
        onEditUserMapboxAccessToken,
        onEditMapTitle,
        onEditMapDescription,
        config,
        onChangeExportData
      } = this.props;
      return (
        <StyledModalContent className="export-map-modal">
          <div style={style}>
            <StyledExportMapSection>
              <div className="description">
                <div className="title">
                  <FormattedMessage id={'modal.exportMap.formatTitle'} />
                </div>
                <div className="subtitle">
                  <FormattedMessage id={'modal.exportMap.formatSubtitle'} />
                </div>
              </div>
              <div className="selection">
                {EXPORT_MAP_FORMAT_OPTIONS.map(op => (
                  <StyledType
                    key={op.id}
                    selected={options.format === op.id}
                    available={op.available}
                    onClick={() => op.available && onChangeExportMapFormat(op.id)}
                  >
                    <FileType ext={op.label} height="80px" fontSize="11px" />
                  </StyledType>
                ))}
              </div>
            </StyledExportMapSection>
            {
              {
                [EXPORT_MAP_FORMATS.HTML]: (
                  <ExportHtmlMap
                    onChangeExportMapHTMLMode={onChangeExportMapHTMLMode}
                    onEditUserMapboxAccessToken={onEditUserMapboxAccessToken}
                    onEditMapTitle={onEditMapTitle}
                    onEditMapDescription={onEditMapDescription}
                    options={options[options.format]}
                  />
                ),
                [EXPORT_MAP_FORMATS.JSON]: (
                  <ExportJsonMap
                    config={config}
                    onChangeExportData={onChangeExportData}
                    options={options[options.format]}
                  />
                )
              }[options.format]
            }
          </div>
        </StyledModalContent>
      );
    }
  }

  return ExportMapModal;
};

// function ExportMapModalFactory(ExportHtmlMap, ExportJsonMap) {
//   const ExportMapModal = React.memo(
//     ({
//       config = {},
//       onChangeExportData = NO_OP,
//       onChangeExportMapFormat = NO_OP,
//       onChangeExportMapHTMLMode = NO_OP,
//       onEditUserMapboxAccessToken = NO_OP,
//       onEditMapTitle = NO_OP,
//       onEditMapDescription = NO_OP,
//       options = {}
//     }) => (
//       <StyledModalContent className="export-map-modal">
//         <div style={style}>
//           <StyledExportMapSection>
//             <div className="description">
//               <div className="title">
//                 <FormattedMessage id={'modal.exportMap.formatTitle'} />
//               </div>
//               <div className="subtitle">
//                 <FormattedMessage id={'modal.exportMap.formatSubtitle'} />
//               </div>
//             </div>
//             <div className="selection">
//               {EXPORT_MAP_FORMAT_OPTIONS.map(op => (
//                 <StyledType
//                   key={op.id}
//                   selected={options.format === op.id}
//                   available={op.available}
//                   onClick={() => op.available && onChangeExportMapFormat(op.id)}
//                 >
//                   <FileType ext={op.label} height="80px" fontSize="11px" />
//                 </StyledType>
//               ))}
//             </div>
//           </StyledExportMapSection>
//           {
//             {
//               [EXPORT_MAP_FORMATS.HTML]: (
//                 <ExportHtmlMap
//                   onChangeExportMapHTMLMode={onChangeExportMapHTMLMode}
//                   onEditUserMapboxAccessToken={onEditUserMapboxAccessToken}
//                   onEditMapTitle={onEditMapTitle}
//                   onEditMapDescription={onEditMapDescription}
//                   options={options[options.format]}
//                 />
//               ),
//               [EXPORT_MAP_FORMATS.JSON]: (
//                 <ExportJsonMap
//                   config={config}
//                   onChangeExportData={onChangeExportData}
//                   options={options[options.format]}
//                 />
//               )
//             }[options.format]
//           }
//         </div>
//       </StyledModalContent>
//     )
//   );

//   return ExportMapModal;
// }

export default ExportMapModalFactory;
