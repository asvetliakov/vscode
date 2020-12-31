/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { HostFactory } from "../lazyClientHost";
import { Command } from './commandManager';

export class ReloadTypeScriptProjectsCommand implements Command {
	public readonly id = 'typescript.reloadProjects';

	public constructor(
		private readonly hostFactory: HostFactory,
	) { }

	public execute() {
		this.hostFactory.reloadProjects();
	}
}

export class ReloadJavaScriptProjectsCommand implements Command {
	public readonly id = 'javascript.reloadProjects';

	public constructor(
		private readonly hostFactory: HostFactory,
	) { }

	public execute() {
		this.hostFactory.reloadProjects();
	}
}
