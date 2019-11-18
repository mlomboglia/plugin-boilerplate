import React from "react";

import CustomTaskListContainer from "./CustomTaskList.Container"

export function loadCustomTaskList(flex, manager) {

	const options = { sortOrder: -1 };
	flex.AgentDesktopView
		.Panel1
		.Content
		.add(<CustomTaskListContainer key="demo-component" />, options);

}