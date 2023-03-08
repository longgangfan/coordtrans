// shadow the itesm when the page is loaded
document.addEventListener("DOMContentLoaded", function () {
  var ckbx = document.getElementById("wgs2cgcs_ck");
  var ckbx2 = document.getElementById("cgcs2wgs_ck");
  if (ckbx.checked) {
    shadow_cgcs();
  }
  if (ckbx2.checked) {
    shadow_wgs();
  }
  if (!ckbx.ckecked && !ckbx2.checked) {
    shadow_wgs();
    shadow_cgcs();
  }
});
// Define WGS-84 and CGCS2000 coordinate systems
proj4.defs("EPSG:4326", "+proj=longlat +datum=WGS84 +no_defs");
proj4.defs(
  "EPSG:4534",
  "+proj=tmerc +lat_0=0 +lon_0=75 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs"
);
proj4.defs(
  "EPSG:4535",
  "+proj=tmerc +lat_0=0 +lon_0=78 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs"
);
proj4.defs(
  "EPSG:4536",
  "+proj=tmerc +lat_0=0 +lon_0=81 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs"
);
proj4.defs(
  "EPSG:4537",
  "+proj=tmerc +lat_0=0 +lon_0=84 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs"
);
proj4.defs(
  "EPSG:4538",
  "+proj=tmerc +lat_0=0 +lon_0=87 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs"
);
proj4.defs(
  "EPSG:4539",
  "+proj=tmerc +lat_0=0 +lon_0=90 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs"
);
proj4.defs(
  "EPSG:4540",
  "+proj=tmerc +lat_0=0 +lon_0=93 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs"
);
proj4.defs(
  "EPSG:4541",
  "+proj=tmerc +lat_0=0 +lon_0=96 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs"
);
proj4.defs(
  "EPSG:4542",
  "+proj=tmerc +lat_0=0 +lon_0=99 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs"
);
proj4.defs(
  "EPSG:4543",
  "+proj=tmerc +lat_0=0 +lon_0=102 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs"
);
proj4.defs(
  "EPSG:4544",
  "+proj=tmerc +lat_0=0 +lon_0=105 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs"
);
proj4.defs(
  "EPSG:4545",
  "+proj=tmerc +lat_0=0 +lon_0=108 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs"
);
proj4.defs(
  "EPSG:4546",
  "+proj=tmerc +lat_0=0 +lon_0=111 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs"
);
proj4.defs(
  "EPSG:4547",
  "+proj=tmerc +lat_0=0 +lon_0=114 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs"
);
proj4.defs(
  "EPSG:4548",
  "+proj=tmerc +lat_0=0 +lon_0=117 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs"
);
proj4.defs(
  "EPSG:4549",
  "+proj=tmerc +lat_0=0 +lon_0=120 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs"
);
proj4.defs(
  "EPSG:4550",
  "+proj=tmerc +lat_0=0 +lon_0=123 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs"
);
proj4.defs(
  "EPSG:4551",
  "+proj=tmerc +lat_0=0 +lon_0=126 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs"
);
proj4.defs(
  "EPSG:4552",
  "+proj=tmerc +lat_0=0 +lon_0=129 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs"
);
proj4.defs(
  "EPSG:4553",
  "+proj=tmerc +lat_0=0 +lon_0=132 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs"
);
proj4.defs(
  "EPSG:4554",
  "+proj=tmerc +lat_0=0 +lon_0=135 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs"
);

function convert() {
  // Get input values
  var wgsCoords = document
    .getElementById("wgsCoords")
    .value.trim()
    .split("\n")
    .map((line) => line.trim().split(","));
  // var cgcsSystem = document.getElementById("cgcsSystem").value;
  // Define input and output coordinate systems
  var wgs84 = proj4.defs("EPSG:4326");

  // Convert WGS-84 to CGCS2000
  var cgcsCoords = wgsCoords
    .map((coords) => {
      var lng = parseFloat(coords[0]);
      var lat = parseFloat(coords[1]);
      var cgcsselect = document.getElementById("cgcsSystem");
      if (isNaN(lat) || !isFinite(lat) || isNaN(lng) || !isFinite(lng)) {
        return null;
      }
      NN = Math.floor((lng + 1.5) / 3);
      switch (NN) {
        case 25:
          cgcsSystem = "EPSG:4534";
          break;
        case 26:
          cgcsSystem = "EPSG:4535";
          break;
        case 27:
          cgcsSystem = "EPSG:4536";
          break;
        case 28:
          cgcsSystem = "EPSG:4537";
          break;
        case 29:
          cgcsSystem = "EPSG:4538";
          break;
        case 30:
          cgcsSystem = "EPSG:4539";
          break;
        case 31:
          cgcsSystem = "EPSG:4540";
          break;
        case 32:
          cgcsSystem = "EPSG:4541";
          break;
        case 33:
          cgcsSystem = "EPSG:4542";
          break;
        case 34:
          cgcsSystem = "EPSG:4543";
          break;
        case 35:
          cgcsSystem = "EPSG:4544";
          break;
        case 36:
          cgcsSystem = "EPSG:4545";
          break;
        case 37:
          cgcsSystem = "EPSG:4546";
          break;
        case 38:
          cgcsSystem = "EPSG:4547";
          break;
        case 39:
          cgcsSystem = "EPSG:4548";
          break;
        case 40:
          cgcsSystem = "EPSG:4549";
          break;
        case 41:
          cgcsSystem = "EPSG:4550";
          break;
        case 42:
          cgcsSystem = "EPSG:4551";
          break;
        case 43:
          cgcsSystem = "EPSG:4552";
          break;
        case 44:
          cgcsSystem = "EPSG:4553";
          break;
        case 45:
          cgcsSystem = "EPSG:4554";
          break;
        default:
          cgcsSystem = "NULL";
          window.alert("The data is out of the range of CGCS2000");
      }
      cgcsselect.readOnly = true;
      cgcsselect.value = cgcsSystem;
      var cgcs = proj4.defs(cgcsSystem);
      result = proj4(wgs84, cgcs, [lng, lat]);
      return [result[0].toFixed(6), result[1].toFixed(6), NN, NN * 3];
    })
    .filter((coords) => coords !== null)
    .map((coords) => coords.join(", "));
  // Set output values
  document.getElementById("cgcsCoords").value = cgcsCoords.join("\n");
}
function inconvert() {
  // Get input values
  var cgcsCoords = document
    .getElementById("cgcsCoords")
    .value.trim()
    .split("\n")
    .map((line) => line.trim().split(","));
  var cgcsSystem = document.getElementById("cgcsSystem").value;
  if (cgcsSystem == "NULL") {
    window.alert("Please choose the CGCS Zone!");
    return null;
  }
  // Define input and output coordinate systems
  var wgs84 = proj4.defs("EPSG:4326");
  var cgcs = proj4.defs(cgcsSystem);

  // Convert CGCS2000 to WGS-84
  var wgsCoords = cgcsCoords
    .map((coords) => {
      var east = parseFloat(coords[0]);
      var north = parseFloat(coords[1]);
      if (isNaN(east) || !isFinite(east) || isNaN(north) || !isFinite(north)) {
        return null;
      }
      var result = proj4(cgcs, wgs84, [east, north]);
      return [result[0].toFixed(6), result[1].toFixed(6)];
    })
    .filter((coords) => coords !== null)
    .map((coords) => coords.join(", "));
  // Set output values
  document.getElementById("wgsCoords").value = wgsCoords.join("\n");
}

function shadow_cgcs() {
  var ckbx = document.getElementById("wgs2cgcs_ck");
  var textarea = document.getElementById("cgcsCoords");
  var textarea2 = document.getElementById("wgsCoords");
  var cgcsselect = document.getElementById("cgcsSystem");
  var ckbx2 = document.getElementById("cgcs2wgs_ck");
  var bt1 = document.getElementById("wgs2cgcs_bt");
  var bt2 = document.getElementById("cgcs2wgs_bt");
  if (ckbx.checked == true) {
    textarea.readOnly = true;
    textarea.style.backgroundColor = "#eee";
    textarea.placeholder = "Output Easting, Northing";
    textarea2.readOnly = false;
    textarea2.style.backgroundColor = "#eef";
    textarea2.placeholder = "Enter coordinates in  longitude, latitude,format";
    ckbx2.checked = false;
    cgcsselect.disabled = true;
    bt1.disabled = false;
    bt1.style.backgroundColor = "#4caf50";
    bt2.disabled = true;
    bt2.style.backgroundColor = "#eee";
  } else {
    textarea.readOnly = true;
    textarea.style.backgroundColor = "#eee";
    textarea.placeholder = "";
    textarea2.readOnly = true;
    textarea2.style.backgroundColor = "#eee";
    textarea2.placeholder = "";
    cgcsselect.disabled = true;
    bt1.disabled = true;
    bt1.style.backgroundColor = "#eee";
  }
}
function shadow_wgs() {
  var ckbx = document.getElementById("cgcs2wgs_ck");
  var textarea = document.getElementById("wgsCoords");
  var textarea2 = document.getElementById("cgcsCoords");
  var ckbx2 = document.getElementById("wgs2cgcs_ck");
  var cgcsselect = document.getElementById("cgcsSystem");
  var bt1 = document.getElementById("cgcs2wgs_bt");
  var bt2 = document.getElementById("wgs2cgcs_bt");
  var cgcsselect = document.getElementById("cgcsSystem");
  if (ckbx.checked == true) {
    textarea.readOnly = true;
    textarea.style.backgroundColor = "#eee";
    textarea.placeholder = "Output long, lat";
    textarea2.readOnly = false;
    textarea2.placeholder = "Enter coordinates in  Easting, Northing,format";
    textarea2.style.backgroundColor = "#eef";
    ckbx2.checked = false;
    cgcsselect.disabled = false;
    bt1.disabled = false;
    bt1.style.backgroundColor = "#4caf50";
    bt2.disabled = true;
    bt2.style.backgroundColor = "#eee";
    cgcsselect.value = "NULL";
  } else {
    textarea.readOnly = true;
    textarea.style.backgroundColor = "#eee";
    textarea.placeholder = "";
    textarea2.readOnly = true;
    textarea2.placeholder = "";
    textarea2.style.backgroundColor = "#eee";
    cgcsselect.disabled = true;
    bt1.disabled = false;
    bt1.style.backgroundColor = "#eee";
    cgcsselect.value = "NULL";
  }
}

function cleartext() {
  var textarea = document.getElementById("wgsCoords");
  var textarea2 = document.getElementById("cgcsCoords");
  textarea.value = "";
  textarea2.value = "";
}

function formatinput() {
  // Get input values
  var ckbx = document.getElementById("cgcs2wgs_ck");
  var ckbx2 = document.getElementById("wgs2cgcs_ck");
  var sep = document.getElementById("seperator").value;
  var exc = document.getElementById("exchangecol");
  if (ckbx.checked == true && ckbx2.checked == false) {
    var inputbox = "cgcsCoords";
  }
  if (ckbx.checked == false && ckbx2.checked == true) {
    var inputbox = "wgsCoords";
  }
  var inputextall = document
    .getElementById(inputbox)
    .value.trim()
    .split("\n")
    .map((line) => line.trim().split(sep,2));

  var formatedtext = inputextall
    .map((coords) => {
      var XX = parseFloat(coords[0]);
      var YY = parseFloat(coords[1]);
      if (isNaN(XX) || !isFinite(XX) || isNaN(YY) || !isFinite(YY)) {
        return null;
      }
      if (exc.checked) {
        return [YY.toFixed(6), XX.toFixed(6)];
      } else {
        return [XX.toFixed(6), YY.toFixed(6)];
      }
    })
    .filter((coords) => coords !== null)
    .map((coords) => coords.join(", "));
  // Set output values
  document.getElementById(inputbox).value = formatedtext.join("\n");
}
