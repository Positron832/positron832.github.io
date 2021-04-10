<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="https://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
  <html>
  <body>
    <h2>COPIED FROM W3SCHOOLS.COM!</h2>
    <table border="1">
      <tr bgcolor="#9acd32">
        <th>Title</th>
        <th>Author</th>
      </tr>
      <tr>
        <td><xsl:value-of select="root/bookshelf/bookName"/></td>
        <td><xsl:value-of select="root/bookshelf/author"/></td>
      </tr>
    </table>
  </body>
  </html>
