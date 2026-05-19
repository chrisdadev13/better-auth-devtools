import { cn } from "@better-auth-devtools/ui/lib/utils";
import type * as React from "react";

function Label({
	className,
	htmlFor,
	...props
}: React.ComponentProps<"label"> & { htmlFor?: string }) {
	return (
		// biome-ignore lint/a11y/noLabelWithoutControl: this is a reusable label component that should be used with htmlFor or containing an input
		<label
			data-slot="label"
			htmlFor={htmlFor}
			className={cn(
				"flex select-none items-center gap-2 text-xs leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-50 group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50",
				className,
			)}
			{...props}
		/>
	);
}

export { Label };
