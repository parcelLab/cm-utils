import { Component, h, Prop, State } from "@stencil/core";

class HTTPError extends Error {}

type Campaign = {
	campaignId: string;
	openTrackingUrl: string;
	analyticsBaseUrl: string;
	values: {
		[contentType: string]: {
			[bannerType: string]: {
				targetUrl: string;
				bannerImage: {
					url: string;
				};
			};
		};
	};
};

type TrackingInfo = {
	header: { id: string; [key: string]: string }[];
	body: {
		[key: string]: string;
	};
};

@Component({
	tag: "pl-cm-banner",
	shadow: false,
})
export class CmBanner {
	@Prop() apiURL: string =
		"https://business-api.parcellab.com/v3/public/campaign/contentBlocks";
	@Prop() medium: string = "web";
	@Prop() contentType: string = "banner_order_status_page";
	@Prop() bannerType: string = "mainBannerVertical";
	@Prop() language: string;
	@Prop({ mutable: true }) trackingId: string;

	// eslint-disable-next-line @typescript-eslint/naming-convention
	@State() _campaign: Campaign;
	@State() bannerSrc: string;
	@State() targetUrl: string;

	constructor() {
		this.fetchBanner().catch(console.warn);
	}

	getTrackingPropsFromURL() {
		const search = new URLSearchParams(window.location.search);
		const xid = search.get("xid");
		const trackingId = search.get("tid");
		const trackingNo = search.get("trackingNo") || search.get("tno");
		const courier = search.get("courier") || search.get("c");
		const orderNo = search.get("orderNo");
		const userId =
			search.get("plUserId") || search.get("u") || search.get("userId");

		if (xid && userId) return { xid, u: userId };
		if (trackingId) return { tid: trackingId };
		if (trackingNo && courier) return { tno: trackingNo, courier };
		if (orderNo && userId) return { orderNo, u: userId };
		return null;
	}

	async fetchTrackingInfos(search: URLSearchParams): Promise<TrackingInfo> {
		return this.fetchJSON<TrackingInfo>(
			`https://api.parcellab.com/v2/checkpoints?${new URLSearchParams(
				search
			).toString()}`
		);
	}

	async discoverTrackingId() {
		if (!this.trackingId) {
			const urlProps = this.getTrackingPropsFromURL();

			if (urlProps?.tid) return urlProps.tid;

			if (urlProps) {
				const trackingInfos = await this.fetchTrackingInfos(
					new URLSearchParams(urlProps)
				);
				if (trackingInfos?.header?.[0]?.id)
					this.trackingId = trackingInfos?.header?.[0]?.id;
			}
		}
	}

	async fetchJSON<T>(url: RequestInfo, opts?: RequestInit): Promise<T> {
		const response = await fetch(url, opts);

		if (!response.ok) {
			throw new HTTPError(`Fetch error: ${response.statusText}`);
		}

		const json = (await response.json()) as T;
		return json;
	}

	async fetchBanner() {
		await this.discoverTrackingId();
		if (this.trackingId) {
			const query = {
				...(this.language && { language: this.language }),
				...(this.medium && { medium: this.medium }),
				trackingId: this.trackingId,
			};
			const search = new URLSearchParams({
				...query,
			});
			const result = await this.fetchJSON<Campaign>(
				`${this.apiURL}?${search.toString()}`
			);
			this._campaign = result;
			if (this._campaign?.values?.[this.contentType]?.[this.bannerType]) {
				const banner =
					this._campaign?.values?.[this.contentType]?.[
						this.bannerType
					];
				this.targetUrl = banner.targetUrl || "";
				this.bannerSrc = banner.bannerImage?.url || "";
			}
		}
	}

	render() {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-return
		return this.bannerSrc && this.targetUrl ? (
			<a href={this.targetUrl} target="_blank">
				<img src={this.bannerSrc} style={{ maxWidth: "100%" }} />
			</a>
		) : undefined;
	}
}
