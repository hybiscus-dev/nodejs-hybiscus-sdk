# v0.2.7
- Add support for LineChartV2 (Line.Chart) component
- Add support for Chart.Bar component
- Add support for Chart.HorizontalBar component
- Add support for webhooks
# v0.2.6
- Add support for specifying URL for logo to include at top of report
- Add support for specifying cloud storage upload link (AWS / Azure / GCS)
- Fix bug with error messages not being returned in Promises returned from `Report.buildReport` and `Report.previewReport`
- Fix bug with interval for checking task status not clearing after task status resolves to FAILED.
# v0.2.5
- Add new `DoughnutRing` component
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
