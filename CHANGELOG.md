# v0.2.4
- Bug fix for v0.2.3 which used incorrect HTTP methods to make API calls. Closes issue #11 (PR #12)
# v0.2.3
- `axios` HTTP client replaced with `cross-fetch` client to solve issues with using SDK in Cloudflare workers. Closes issue #2 (PR #7).
- Support for overriding fetch instance with alternative HTTP client such as axios
# v0.2.2
- Add new `ScatterChart` component
- Add new `Spacer` component
- Add new `PageBreak` component
# v0.2.1
- Fix bug with `nPages` argument passed to constructor of `Report` not being
  used in `getDefinition` method of `Report`.
# v0.2.0
- Add support for using API endpoint for previewing reports via a JPEG preview
# v0.1.0
- First release with support for all components
- Support for building PDF reports
