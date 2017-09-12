function queryReports(VIEW_ID, startDate, endDate, pagePath) {
    gapi.client.request({
        path: '/v4/reports:batchGet',
        root: 'https://analyticsreporting.googleapis.com/',
        method: 'POST',
        body: {
            reportRequests: [
                {
                    viewId: VIEW_ID,
                    dateRanges: [
                        {
                            startDate: startDate,
                            endDate: endDate                        }
                    ],
                    metrics: [
                        {
                            expression: 'ga:pageviews'
                        }
                    ],
                    dimensionFilterClauses: [{
                        filters: [{
                            dimension_name: 'ga:pagePath',
                            operator: 'EXACT',
                            expressions: pagePath
                        }]
                    }]
                }
            ]
        }
    }).then(displayResults, console.error.bind(console));
}

function displayResults(response) {

    var formattedJson = JSON.stringify(response.result, null, 2);
    var viewsCount = response.result.reports[0].data.totals[0].values[0];
    var y = parseInt(viewsCount);
    console.log(formattedJson);
    return y;
}