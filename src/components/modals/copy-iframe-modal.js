import {Component} from 'react';

// what the fuck is this?
const nop = () => {};

export default function CopyIframeModalFactory() {
  class CopyIframeModal extends Component {
    static defaultProps = {
      isProviderLoading: false,
      onExport: nop,
      cloudProviders: [],
      currentProvider: null,
      providerError: null,
      successInfo: {},
      onSetCloudProvider: nop,
      onUpdateImageSetting: nop
    };

    render() {
      const {
        isProviderLoading,
        isReady,
        onExport,
        cloudProviders,
        currentProvider,
        providerError,
        successInfo,
        onSetCloudProvider,
        onUpdateImageSetting
      } = this.props;
      const {shareUrl, folderLink} = successInfo;

      return <div class="code">&lt; iframe src="{shareUrl}">&lt;/iframe></div>;
    }
  }
}
