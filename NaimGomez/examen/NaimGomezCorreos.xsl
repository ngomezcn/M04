<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <head>
                <title>Correos</title>
                <link href="NaimGomezCorreos.css" rel="stylesheet" type="text/css" />
            </head>
            <body>
                <h2>Correos</h2>
                <xsl:apply-templates select="correos/carta" />
            </body>
        </html>
    </xsl:template>
    
    
    <xsl:template match="correos">
        <xsl:for-each select="carta">
            
            <xsl:sort select="concat(fechaExpedicion/@anyo,'-',fechaExpedicion/@mes,'-',fechaExpedicion/@dia)"  data-type="text" order="descending"/>
            <xsl:apply-templates select="." />
            
        </xsl:for-each>
    </xsl:template>
    
    <xsl:template match="carta">
        <carta>
            <xsl:attribute name='class'>
                <xsl:choose>
                    <xsl:when test="@urgente = 'SI'">
                        red-table
                    </xsl:when>
                    <xsl:otherwise>
                        black-table
                    </xsl:otherwise>
                </xsl:choose>
            </xsl:attribute>
            <table class="carta">
                <tr>
                    <th class='titulo'>Destinatario</th>
                </tr>
                <xsl:apply-templates select="destinatario" />
                <xsl:apply-templates select="fechaExpedicion" />
                
            </table> 
            <table class="carta">
                <tr>
                    <th class='titulo'>Remite</th>
                </tr>
                <xsl:apply-templates select="remite" />
                <xsl:apply-templates select="fechaEntrega" />
            </table>      
        </carta>
    </xsl:template>
    
    
    <xsl:template match="destinatario">
        <tr>
            <td>
                <p class='align-p field'>Nombre</p>
                <p class='align-p'><xsl:value-of select='nombre'/> </p>
            </td>
        </tr>
        <tr>
            <td>
                <p class='align-p field'><b>Dirección</b></p>
                <p class='align-p'><xsl:value-of select='direccion'/> 
                    <br></br><br></br><xsl:value-of select="concat(cp,', ',ciudad)"/>
                    <br></br><br></br><xsl:value-of select='provincia'/> 
                    <br></br><br></br><xsl:value-of select='pais'/> 
                </p>
            </td>
        </tr>
    </xsl:template>
    
    <xsl:template match="fechaExpedicion">
        <tr>
            <td>
                <p class='field'><b>Fecha Expedición</b></p>
                <p><xsl:value-of select="concat(@dia,'-',@mes,'-',@anyo)"/> </p>
            </td>
        </tr>
    </xsl:template>
    
    
    <xsl:template match="remite">
        <tr>
            <td>
                <p class='align-p field'><b>Nombre</b></p>
                <p class='align-p'><xsl:value-of select='nombre'/> </p>
            </td>
        </tr>
        <tr>
            <td>
                <p class='align-p field'><b>Dirección</b></p>
                <p class='align-p'><xsl:value-of select='direccion'/> 
                    <br></br><br></br><xsl:value-of select="concat(cp,', ',ciudad)"/>
                    <br></br><br></br><xsl:value-of select='provincia'/> 
                    <br></br><br></br><xsl:value-of select='pais'/> 
                </p>
            </td>
        </tr>
    </xsl:template>
    
    <xsl:template match="fechaEntrega">
        <tr>
            <td>
                <p class='field'><b>Fecha Expedición</b></p>
                <xsl:choose>
                    <xsl:when test="@anyo = 0">
                        <p>No entregado</p>
                    </xsl:when>
                    <xsl:otherwise>
                        <p><xsl:value-of select="concat(@dia,'-',@mes,'-',@anyo)"/> </p>
                    </xsl:otherwise>
                </xsl:choose>
                
            </td>
        </tr>
    </xsl:template>
</xsl:stylesheet>