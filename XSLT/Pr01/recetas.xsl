<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:template match="/">
		<html>
			<head>
				<meta charset="utf-8" />
				
				<link rel="preconnect" href="https://fonts.googleapis.com"></link>
				<link rel="preconnect" href="https://fonts.gstatic.com" > </link>
				<!--<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap" rel="stylesheet"></link>-->
				<link rel="stylesheet" href="css/index.css" ></link>
				<link rel="stylesheet" href="css/menu.css" ></link>
				<link rel="stylesheet" href="css/aside.css" ></link>
				<link rel="stylesheet" href="css/footer.css" ></link>
				
				<title>XSL Delicias Kitchen</title>
			</head>
			
		</html>
		<body>
			<section class="content">
				<xsl:apply-templates select="receptes/recepta[@id='1']" />
			</section>
		</body>
	</xsl:template>
	
	<xsl:template match="receptes/recepta[@id='1']">
		<section class="receta">
			<img class="main-img" src="../{informacio_general/foto}"></img>
			<h1><xsl:value-of select='nom'/> (<xsl:value-of select='categoria'/>)</h1>
			<p class="timestamp"><xsl:value-of select='@fecha'/> por ngomez</p>
			<p><xsl:value-of select='informacio_general/resum'/></p>
			
			<xsl:value-of select='ingredients'/>
			
			
		</section>
	</xsl:template>
	
	<xsl:template match="ingredients">
		<h4>Ingredientes:</h4>
		<div class="ingredients">
			<ul>
				<xsl:for-each select="ingredients">
					<li>
						<p>1 taza de arroz arbóreo</p>
					</li>
				</xsl:for-each>
			</ul>
		</div>
	</xsl:template>
	
</xsl:stylesheet>