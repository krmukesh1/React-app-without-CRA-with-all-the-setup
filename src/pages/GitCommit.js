import React from 'react';

const GitCommit = () => {
	return (
		<div>
			<section>
				<h1>Git — Commit Standards</h1>
				<article>
					<h2>Commit Types</h2>
					<ul>
						<li>
							<strong>feat:</strong> Used when adding a new feature.
						</li>
						<li>
							<strong>fix:</strong> Used when fixing a bug.
						</li>
						<li>
							<strong>refactor:</strong> Used when reorganizing or restructuring
							existing code.
						</li>
						<li>
							<strong>docs:</strong> Used when making changes related to
							documentation or comments.
						</li>
						<li>
							<strong>style:</strong> Used for changes in code formatting,
							whitespace, punctuation, etc.
						</li>
						<li>
							<strong>test:</strong> Used when adding or updating test code or
							test scenarios.
						</li>
						<li>
							<strong>chore:</strong> Used for changes related to auxiliary
							tools, configuration files, or project organization.
						</li>
					</ul>
				</article>
				<article>
					<h2>Commit Comments</h2>
					<p>
						Commit comments should start with “#”. If you don’t use the “#”
						symbol in your commit messages, automated systems like “danger bot”
						can perceive these messages as incorrect or inappropriate rather
						than code changes. Therefore, it is important to use the “#” symbol
						correctly when writing your commit messages.
					</p>
				</article>
				<article>
					<h2>Scope</h2>
					<p>
						The Scope should indicate the specific feature or area of the code
						changes. If it’s not a specific feature, it should provide a broader
						context, such as ui, data, utils, ai, gameplay, shader. The Scope
						name should be written in camelCase format and ideally be a single
						word.
					</p>
				</article>
				<article>
					<h2>Branch Merge</h2>
					<p>
						When working on a branch and needing to merge the changes from the
						“develop” branch, conflicts may arise. When resolving this conflict,
						the commit message should be as follows:
					</p>
					<pre>
						<code>
							fix(conflict): Resolve conflicts # Merge develop into A branch.
							Resolve conflicts on GameManager.
						</code>
					</pre>
				</article>
				<article>
					<h2>Commonly Used Git Commands</h2>
					<ul>
						<li>
							<strong>git init:</strong> Creates a new empty Git repository in a
							directory.
						</li>
						<li>
							<strong>git clone [repository]:</strong> Copies a remote Git
							repository to a local directory.
						</li>
						<li>
							<strong>git add [file]:</strong> Adds a specific file or all
							changes to the “stage” for tracking.
						</li>
						<li>
							<strong>git commit -m “[description]”:</strong> Records the staged
							changes as a “commit.” The description should be a text that
							explains the changes made.
						</li>
						<li>
							<strong>git status:</strong> Shows the current state of the
							repository. It displays which files have been modified, staged, or
							are still unstaged.
						</li>
						<li>
							<strong>git push:</strong> Sends the commits from the local
							repository to a remote repository. It is used to share the changes
							made in the local repository.
						</li>
						<li>
							<strong>git pull:</strong> Fetches the latest changes from a
							remote repository to the local repository.
						</li>
						<li>
							<strong>git branch:</strong> Lists the current branches. It can be
							used to create a new branch or switch to an existing branch.
						</li>
						<li>
							<strong>git checkout [branch]:</strong> Switches to a specific
							branch. It can also be used to create a new branch or delete an
							existing branch.
						</li>
						<li>
							<strong>git merge [branch]:</strong> Merges the changes from a
							specific branch into the current branch.
						</li>
						<li>
							<strong>git log:</strong> Shows the commit history in the
							repository. It displays who made the commits, when they were made,
							and the changes included.
						</li>
						<li>
							<strong>git reset [commit]:</strong> Resets to a specific commit.
							It can undo commits or discard changes.
						</li>
						<li>
							<strong>git stash:</strong> Saves temporary changes in the working
							directory and reverts to a clean state. Later, these temporary
							changes can be reapplied.
						</li>
					</ul>
				</article>
			</section>
		</div>
	);
};

export default GitCommit;
