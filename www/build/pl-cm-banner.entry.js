import { r as registerInstance, h } from './index-3db3c03a.js';

class HTTPError extends Error {
}
const CmBanner = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.apiURL = "https://business-api.parcellab.com/v3/public/campaign/contentBlocks";
    this.medium = "web";
    this.contentType = "banner_order_status_page";
    this.bannerType = "mainBannerVertical";
    this.language = undefined;
    this.trackingId = undefined;
    this._campaign = undefined;
    this.bannerSrc = undefined;
    this.targetUrl = undefined;
    this.fetchBanner().catch(console.warn);
  }
  getTrackingPropsFromURL() {
    const search = new URLSearchParams(window.location.search);
    const xid = search.get("xid");
    const trackingId = search.get("tid");
    const trackingNo = search.get("trackingNo") || search.get("tno");
    const courier = search.get("courier") || search.get("c");
    const orderNo = search.get("orderNo");
    const userId = search.get("plUserId") || search.get("u") || search.get("userId");
    return {
      xid,
      trackingId,
      trackingNo,
      courier,
      orderNo,
      userId,
    };
  }
  async fetchTrackingInfos(search) {
    return this.fetchJSON(`https://api.parcellab.com/v2/checkpoints?${new URLSearchParams(search).toString()}`);
  }
  async discoverTrackingId() {
    var _a, _b, _c, _d;
    if (!this.trackingId) {
      const urlProps = this.getTrackingPropsFromURL();
      if (urlProps.trackingId)
        return urlProps.trackingId;
      if ((urlProps.trackingNo && urlProps.courier) ||
        (urlProps.orderNo && urlProps.userId) ||
        (urlProps.xid && urlProps.userId)) {
        const trackingInfos = await this.fetchTrackingInfos(new URLSearchParams(urlProps));
        if ((_b = (_a = trackingInfos === null || trackingInfos === void 0 ? void 0 : trackingInfos.header) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.id)
          this.trackingId = (_d = (_c = trackingInfos === null || trackingInfos === void 0 ? void 0 : trackingInfos.header) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d.id;
      }
    }
  }
  async fetchJSON(url, opts) {
    const response = await fetch(url, opts);
    if (!response.ok) {
      throw new HTTPError(`Fetch error: ${response.statusText}`);
    }
    const json = (await response.json());
    return json;
  }
  async fetchBanner() {
    var _a, _b, _c, _d, _e, _f, _g;
    await this.discoverTrackingId();
    if (this.trackingId) {
      const query = Object.assign(Object.assign(Object.assign({}, (this.language && { language: this.language })), (this.medium && { medium: this.medium })), { trackingId: this.trackingId });
      const search = new URLSearchParams(Object.assign({}, query));
      const result = await this.fetchJSON(`${this.apiURL}?${search.toString()}`);
      this._campaign = result;
      if ((_c = (_b = (_a = this._campaign) === null || _a === void 0 ? void 0 : _a.values) === null || _b === void 0 ? void 0 : _b[this.contentType]) === null || _c === void 0 ? void 0 : _c[this.bannerType]) {
        const banner = (_f = (_e = (_d = this._campaign) === null || _d === void 0 ? void 0 : _d.values) === null || _e === void 0 ? void 0 : _e[this.contentType]) === null || _f === void 0 ? void 0 : _f[this.bannerType];
        this.targetUrl = banner.targetUrl || "";
        this.bannerSrc = ((_g = banner.bannerImage) === null || _g === void 0 ? void 0 : _g.url) || "";
      }
    }
  }
  render() {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return this.bannerSrc && this.targetUrl ? (h("a", { href: this.targetUrl, target: "_blank" }, h("img", { src: this.bannerSrc, style: { maxWidth: "100%" } }))) : undefined;
  }
};

export { CmBanner as pl_cm_banner };

//# sourceMappingURL=pl-cm-banner.entry.js.map