import { Config } from "@stencil/core";

export const config: Config = {
	namespace: "cm-utils",
	outputTargets: [
		{
			type: "dist-custom-elements",
			externalRuntime: false,
		},
	],
};
