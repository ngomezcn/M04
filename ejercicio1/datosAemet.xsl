<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <body>
                <h1>Ejercicio 1</h1>
                <table style="border: 1px solid blue">
                    <tr style="background-color:lightblue">
                        <th style="text-align:left">Fecha</th>
                        <th style="text-align:left">Maxima</th>
                        <th style="text-align:left">Minima</th>
                        <th style="text-align:left">Prediccion</th>
                    </tr>
                    <xsl:for-each select="/root/prediccion/dia">
                        <xsl:sort select="temperatura/maxima" order = "descending"/>
                        <tr>
                            <th><xsl:value-of select="@fecha"></xsl:value-of></th>
                            <th><xsl:value-of select="temperatura/maxima"></xsl:value-of></th>
                            <th><xsl:value-of select="temperatura/minima"></xsl:value-of></th>
                            <th> 
                                <img src="{concat('./imagenes/',estado_cielo/@descripcion)}.jpg" style="width: 100px"/> 
                            </th>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>