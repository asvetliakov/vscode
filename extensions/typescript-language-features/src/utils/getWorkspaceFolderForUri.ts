import * as vscode from "vscode";

export function getWorkspaceFolderForUri(uri: vscode.Uri): vscode.WorkspaceFolder | undefined {
	let folder = vscode.workspace.getWorkspaceFolder(uri);
	if (!folder) {
		folder = vscode.workspace.workspaceFolders?.find(f => uri.fsPath.includes(f.uri.fsPath));
	}
	return folder;
}