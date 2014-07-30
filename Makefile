all:
	@cp lib/kramed.js kramed.js
	@uglifyjs --comments '/\*[^\0]+?Copyright[^\0]+?\*/' -o kramed.min.js lib/kramed.js

clean:
	@rm kramed.js
	@rm kramed.min.js

bench:
	@node test --bench

.PHONY: clean all
