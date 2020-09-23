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

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {KEPLER_GL_NAME, KEPLER_GL_VERSION, KEPLER_GL_WEBSITE} from 'constants/default-settings';

const LogoTitle = styled.div`
  display: inline-block;
  margin-left: 6px;
`;

const LogoName = styled.div`
  .logo__link {
    color: ${props => props.theme.logoColor};
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 1.17px;
  }
`;
const LogoVersion = styled.div`
  font-size: 10px;
  color: ${props => props.theme.subtextColor};
  letter-spacing: 0.83px;
  line-height: 14px;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: flex-start;
`;

const LogoSvgWrapper = styled.div`
  margin-top: 3px;
  fill: #6a7485;
`;

const LogoSvg = () => (
<svg width="50px" height="30px">

<g>
	<path class="st0" d="M4.9,0.3C4.9,0.1,5,0,5.1,0h3.1c1.2,0,1.9,0.7,1.9,1.9v3.2c0,1.2-0.7,1.9-1.9,1.9H6.7v3.3
		c0,0.1-0.1,0.2-0.2,0.2H5.1c-0.1,0-0.2-0.1-0.2-0.2C4.9,10.2,4.9,0.3,4.9,0.3z M7.8,5.2c0.3,0,0.5-0.2,0.5-0.5V2.3
		c0-0.3-0.2-0.5-0.5-0.5H6.7v3.5L7.8,5.2L7.8,5.2z"/>
	<path class="st0" d="M12,1.9C12,0.7,12.7,0,13.9,0h1.5c1.2,0,1.9,0.7,1.9,1.9v6.6c0,1.2-0.7,1.9-1.9,1.9h-1.5
		c-1.2,0-1.9-0.7-1.9-1.9C12,8.6,12,1.9,12,1.9z M15,8.7c0.3,0,0.5-0.2,0.5-0.5v-6c0-0.3-0.2-0.5-0.5-0.5h-0.8
		c-0.3,0-0.5,0.2-0.5,0.5v6c0,0.3,0.2,0.5,0.5,0.5H15z"/>
	<path class="st0" d="M20.7,0.1c0.1,0,0.2,0.1,0.2,0.2v9.9c0,0.1-0.1,0.2-0.2,0.2h-1.3c-0.2,0-0.2-0.1-0.2-0.2v-10
		c0-0.1,0.1-0.2,0.2-0.2L20.7,0.1L20.7,0.1z"/>
	<path class="st0" d="M28.2,0.1c0.1,0,0.2,0.1,0.2,0.2v9.9c0,0.1-0.1,0.2-0.2,0.2h-1.3c-0.1,0-0.2,0-0.2-0.2l-2-5.5h-0.1v5.5
		c0,0.1-0.1,0.2-0.2,0.2h-1.3c-0.1,0-0.2-0.1-0.2-0.2v-10c0-0.1,0.1-0.2,0.2-0.2h1.3c0.1,0,0.2,0,0.2,0.2l2,5.5h0.1V0.3
		c0-0.1,0.1-0.2,0.2-0.2L28.2,0.1L28.2,0.1z"/>
	<path class="st0" d="M35,0.1c0.2,0,0.2,0.1,0.2,0.2v1.3c0,0.1-0.1,0.2-0.2,0.2h-1.5v8.4c0,0.2-0.1,0.2-0.2,0.2H32
		c-0.1,0-0.2-0.1-0.2-0.2V1.8h-1.5c-0.1,0-0.2-0.1-0.2-0.2V0.3C30,0.1,30.1,0,30.3,0L35,0.1L35,0.1z"/>
	<g>
		<path class="st0" d="M1.1,14.9v-1.8h0.3v1.8H1.1z"/>
		<path class="st0" d="M4.9,14.9l-0.9-1.3v1.3H3.6v-1.8h0.3l0.9,1.2v-1.2h0.3v1.8H4.9z"/>
		<path class="st0" d="M7.7,14.9v-1.5H7.2v-0.3h1.4v0.3H8.1v1.5H7.7z"/>
		<path class="st0" d="M10.7,14.9v-1.8h1.2v0.3H11v0.5h0.9v0.3H11v0.5h0.9v0.3L10.7,14.9L10.7,14.9z"/>
		<path class="st0" d="M15,14.9l-0.4-0.7h-0.3v0.7H14v-1.8h0.8c0.3,0,0.6,0.2,0.6,0.6c0,0.3-0.2,0.5-0.4,0.5l0.4,0.7L15,14.9
			L15,14.9z M15.1,13.7c0-0.2-0.1-0.3-0.3-0.3h-0.4v0.6h0.4C14.9,13.9,15.1,13.8,15.1,13.7z"/>
		<path class="st0" d="M18.7,14.9l-0.1-0.3h-0.8l-0.1,0.3h-0.3l0.7-1.8h0.4l0.7,1.8H18.7z M18.2,13.4l-0.3,0.8h0.6L18.2,13.4z"/>
		<path class="st0" d="M20.9,14c0-0.5,0.4-0.9,0.9-0.9c0.3,0,0.6,0.2,0.7,0.4l-0.3,0.1c-0.1-0.2-0.3-0.3-0.5-0.3
			c-0.3,0-0.6,0.3-0.6,0.6c0,0.4,0.3,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.3l0.3,0.1c-0.1,0.2-0.3,0.4-0.7,0.4
			C21.3,14.9,20.9,14.5,20.9,14z"/>
		<path class="st0" d="M25,14.9v-1.5h-0.5v-0.3h1.4v0.3h-0.5v1.5H25z"/>
		<path class="st0" d="M27.9,14.9v-1.8h0.3v1.8H27.9z"/>
		<path class="st0" d="M30.9,14.9l-0.7-1.8h0.3l0.5,1.4l0.5-1.4H32l-0.7,1.8H30.9z"/>
		<path class="st0" d="M34,14.9v-1.8h1.2v0.3h-0.9v0.5h0.9v0.3h-0.9v0.5h0.9v0.3L34,14.9L34,14.9z"/>
	</g>
	<path class="st0" d="M39.8,10c-0.2,0.1-0.3,0.2-0.3,0.5v1.6c0,0.2,0.1,0.4,0.4,0.4h2v-0.8c0-0.2,0.1-0.4,0.4-0.4H44
		c0.2,0,0.4,0.1,0.4,0.4v2.9c0,0.2-0.1,0.4-0.4,0.4h-6.7c-0.2,0-0.4-0.1-0.4-0.4V9.1c0-0.3,0.1-0.5,0.5-0.7L41.8,6V3.2
		c0-0.5-0.3-0.7-0.7-0.7h-0.9c-0.5,0-0.7,0.3-0.7,0.7v1.5c0,0.2-0.1,0.3-0.3,0.3h-1.9c-0.2,0-0.3-0.1-0.3-0.3v-2
		C36.9,1,37.9,0,39.6,0h2.1c1.7,0,2.7,0.9,2.7,2.7v4.4c0,0.3-0.2,0.5-0.5,0.7L39.8,10z"/>
	<path class="st0" d="M49.7,0C49.9,0,50,0.1,50,0.3v14.3c0,0.2-0.1,0.3-0.3,0.3h-1.9c-0.2,0-0.3-0.1-0.3-0.3V2.8L46.3,3
		c-0.2,0-0.4-0.1-0.4-0.3V0.8c0-0.2,0.1-0.4,0.3-0.4L49.7,0z"/>
	<path class="st0" d="M2.6,0.1c0.1,0,0.2,0.1,0.2,0.2v9.9c0,0.1-0.1,0.2-0.2,0.2H1.3c-0.2,0-0.2-0.1-0.2-0.2V2L0.3,2.2
		C0.1,2.2,0,2.1,0,1.9V0.7c0-0.2,0.1-0.3,0.2-0.3L2.6,0.1z"/>
</g>
</svg>

);

const KeplerGlLogo = ({appName, appWebsite = KEPLER_GL_WEBSITE, version}) => (
  <LogoWrapper className="side-panel-logo">
    <LogoSvgWrapper>
      <LogoSvg />
    </LogoSvgWrapper>
    <LogoTitle className="logo__title">
      <LogoName className="logo__name">
        <a className="logo__link" target="_blank" rel="noopener noreferrer" href={appWebsite}>
          {appName}
        </a>
      </LogoName>
      {version ? <LogoVersion className="logo__version">{version}</LogoVersion> : null}
    </LogoTitle>
  </LogoWrapper>
);

KeplerGlLogo.propTypes = {
  appName: PropTypes.string,
  version: PropTypes.string,
  appWebsite: PropTypes.string
};

KeplerGlLogo.defaultProps = {
  appName: KEPLER_GL_NAME,
  version: KEPLER_GL_VERSION,
  appWebsite: KEPLER_GL_WEBSITE
};

export default KeplerGlLogo;
