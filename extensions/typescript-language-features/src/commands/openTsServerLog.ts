/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { HostFactory } from "../lazyClientHost";
import { getCurrentDocumentUri } from "../utils/getCurrentDocumentUri";
import { Command } from './commandManager';

export class OpenTsServerLogCommand implements Command {
	public readonly id = 'typescript.openTsServerLog';

	public constructor(
		private readonly hostFactory: HostFactory
	) { }

	public execute() {
		const uri = getCurrentDocumentUri();
		if (!uri) {
			return;
		}
		const host = this.hostFactory.getHostForUri(uri);
		host.serviceClient.openTsServerLogFile();
	}
}
