<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:template match="/">
		<html>
			<body>
				<h1>Ejercicio 2</h1>
				<table style="border: 1px solid ">
					<tr style="background-color:green">
						<th style="text-align:left">Nombre</th>
						<th style="text-align:left">Apellidos</th>
						<th style="text-align:left">Telefono</th>
						<th style="text-align:left">Repetidor</th>
						<th style="text-align:left">Nota Practica</th>
						<th style="text-align:left">Nota Examen</th>
						<th style="text-align:left">Nota Total</th>
					</tr>
					<xsl:for-each select="evaluacion/alumno">
						<xsl:sort select="evaluacion/alumno/apellidos" data-type="text" order="ascending"/>
						<tr >
							<th><xsl:value-of select="nombre"></xsl:value-of></th>
							<th><xsl:value-of select="apellidos"></xsl:value-of></th>
							<th><xsl:value-of select="telefono"></xsl:value-of></th>
							<th><xsl:value-of select="@repite"></xsl:value-of></th>
							<xsl:apply-templates select="notas"/>
						</tr>
					</xsl:for-each>
					
				</table>
			</body>
		</html>
	</xsl:template>
	
	<xsl:template match="notas">
		<xsl:choose>
			<xsl:when test="practicas &gt;=8" >
				<th style="background: lightblue;"><xsl:value-of select="practicas"></xsl:value-of></th>
			</xsl:when>
			<xsl:when test="practicas &lt; 5">
				
				<th style="background: red;"><xsl:value-of select="practicas"></xsl:value-of></th>
			</xsl:when>
			<xsl:otherwise>
				<th><xsl:value-of select="practicas"></xsl:value-of></th>
			</xsl:otherwise>
		</xsl:choose>
		
		<xsl:choose>
			<xsl:when test="examen &gt;=8">
				<th style="background: lightblue;"><xsl:value-of select="examen"></xsl:value-of></th>
			</xsl:when>
			<xsl:when test="examen &lt; 5">
				
				<th style="background: red;"><xsl:value-of select="examen"></xsl:value-of></th>
			</xsl:when>
			<xsl:otherwise>
				<th><xsl:value-of select="examen"></xsl:value-of></th>
			</xsl:otherwise>
		</xsl:choose>
		
		<xsl:choose>
			<xsl:when test="(examen + practicas) div 2 &gt;=8">
				<th style="background: lightblue;"><xsl:value-of select="(examen + practicas) div 2"></xsl:value-of></th>
			</xsl:when>
			<xsl:when test="(examen + practicas) div 2 &lt; 5">
				
				<th style="background: red;"><xsl:value-of select="(examen + practicas) div 2"></xsl:value-of></th>
			</xsl:when>
			<xsl:otherwise>
				<th><xsl:value-of select="(examen + practicas) div 2"></xsl:value-of></th>
			</xsl:otherwise>
		</xsl:choose>
		
	</xsl:template>
</xsl:stylesheet>