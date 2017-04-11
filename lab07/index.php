<!DOCTYPE html>
<html>
<head>
  <title>Export</title>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css"/>
  <script type="text/javascript" src="tableExport-jquery-plugin-code/tableExport.js"></script>
  <script type="text/javascript" src="tableExport-jquery-plugin-code/jquery.base64.js"></script>
  <script type="text/javascript" src="tableExport-jquery-plugin-code/html2canvas.js"></script>
  <script type="text/javascript" src="tableExport-jquery-plugin-code/jspdf/libs/sprintf.js"></script>
  <script type="text/javascript" src="tableExport-jquery-plugin-code/jspdf/jspdf.js"></script>
  <script type="text/javascript" src="tableExport-jquery-plugin-code/jspdf/libs/base64.js"></script>
  <script type="text/javascript" src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
  
</head>
<body>
  <div id="header">
    <h1>Export data.</h1>
  </div>
  <div id="main">
    <?php include 'getData.php'; ?>
    <div class="dropdown">
      <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
        <span class="glyphicon glyphicon-th-list"></span> Exports

      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
        <li><a href="#" onclick="$('#table').tableExport({type:'json',escape:'false'});"> <img src="tableExport-jquery-plugin-code/images/json.jpg" width="24px"> JSON</a></li>
        <li><a href="#" onclick="$('#table').tableExport({type:'json',escape:'false',ignoreColumn:'[2,3]'});"><img src="tableExport-jquery-plugin-code/images/json.jpg" width="24px">JSON (ignoreColumn)</a></li>
        <li><a href="#" onclick="$('#table').tableExport({type:'json',escape:'true'});"> <img src="tableExport-jquery-plugin-code/images/json.jpg" width="24px"> JSON (with Escape)</a></li>
        <li class="divider"></li>
        <li><a href="#" onclick="$('#table').tableExport({type:'xml',escape:'false'});"> <img src="tableExport-jquery-plugin-code/images/xml.png" width="24px"> XML</a></li>
        <li><a href="#" onclick="$('#table').tableExport({type:'sql'});"> <img src="tableExport-jquery-plugin-code/images/sql.png" width="24px"> SQL</a></li>
        <li class="divider"></li>
        <li><a href="#" onclick="$('#table').tableExport({type:'csv',escape:'false'});"> <img src="tableExport-jquery-plugin-code/images/csv.png" width="24px"> CSV</a></li>
        <li><a href="#" onclick="$('#table').tableExport({type:'txt',escape:'false'});"> <img src="tableExport-jquery-plugin-code/images/txt.png" width="24px"> TXT</a></li>
        <li class="divider"></li>

        <li><a href="#" onclick="$('#table').tableExport({type:'excel',escape:'false'});"> <img src="tableExport-jquery-plugin-code/images/xls.png" width="24px"> XLS</a></li>
        <li><a href="#" onclick="$('#table').tableExport({type:'doc',escape:'false'});"> <img src="tableExport-jquery-plugin-code/images/word.png" width="24px"> Word</a></li>
        <li><a href="#" onclick="$('#table').tableExport({type:'powerpoint',escape:'false'});"> <img src="tableExport-jquery-plugin-code/images/ppt.png" width="24px"> PowerPoint</a></li>
        <li class="divider"></li>
        <li><a href="#" onclick="$('#table').tableExport({type:'png',escape:'false'});"> <img src="tableExport-jquery-plugin-code/images/png.png" width="24px"> PNG</a></li>
        <li><a href="#" onclick="$('#table').tableExport({type:'pdf',pdfFontSize:'7',escape:'false'});"> <img src="tableExport-jquery-plugin-code/images/pdf.png" width="24px"> PDF</a></li>

</ul>
</div>
  </div>


</body>
</html>
<script type="text/javascript">
$(function(){
	$('#table').DataTable();
      });
</script>
