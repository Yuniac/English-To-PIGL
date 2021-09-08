function UsageNotes() {
	return (
		<div className="usage-notes">
			<h4 className="usage-notes-heading">Usage Notes:</h4>
			<ul className="usage-note-list">
				<li>
					Use English Only, it might and might not work with other languages, Latin languages that is... it won't work with
					non-Latin languages.
				</li>
				<li>Use space-separated words, otherwise, it won't work.</li>
				<li>Words ending in a dot (.) or comma-separated words are fine.</li>
				<li>Don't use numbers. For now, they aren't supported.</li>
			</ul>
		</div>
	);
}

export default UsageNotes;
