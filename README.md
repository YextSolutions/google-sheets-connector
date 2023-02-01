# google-sheets-connector

Use this to use Google Sheets as your data source. Each row/column can be transferred from Google Sheets into the Yext platform as a unique entity. This connector will require the following data pieces:

- Google Spreadsheet ID
  - This is found in the URL of your spreadsheet. For example, if the spreadsheet URL is https://docs.google.com/spreadsheets/d/111/edit, then the     spreadsheet ID would = 111.
- Google Linked Account
  - This is found in the Yext platform under Configuration > Linked Accounts > Google. Note down the linkedAccountId to use as your GooglelinkedAccount.
- majorDimension
  - This can be either ROWS or COLUMNS. If each row should be registered as an individual entity, then input ROWS. If each column should be registered as an individual entity, then input COLUMNS.
- dataRange
  - Use A1 or R1C1 notation to indicate which cells to include in the data connector.
