import type { BundledLanguage } from "shiki";
import { CodeBlock } from "./code-block";

interface Tab {
	id: string;
	label: string;
	code: string;
	lang: BundledLanguage;
}

interface CodeTabsProps {
	tabs: Tab[];
	activeTab?: string;
}

export const CodeTabs = async ({ tabs, activeTab }: CodeTabsProps) => {
	const currentTab = tabs.find((t) => t.id === activeTab) ?? tabs[0];

	return (
		<div className="space-y-3">
			<div className="flex gap-1 rounded-lg bg-zinc-100 p-1 dark:bg-zinc-800/50">
				{tabs.map((tab) => (
					<a
						key={tab.id}
						href={`?tab=${tab.id}`}
						className={`rounded-md px-3 py-1.5 font-medium text-sm transition-colors ${
							tab.id === currentTab.id
								? "bg-white text-zinc-950 shadow-sm dark:bg-zinc-900 dark:text-zinc-50"
								: "text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
						}`}
					>
						{tab.label}
					</a>
				))}
			</div>
			<CodeBlock code={currentTab.code} lang={currentTab.lang} />
		</div>
	);
};
