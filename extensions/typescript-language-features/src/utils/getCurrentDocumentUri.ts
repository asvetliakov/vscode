import * as vscode from "vscode";

export function getCurrentDocumentUri(): vscode.Uri | undefined {
	return vscode.window.activeTextEditor?.document.uri;
}