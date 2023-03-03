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
      if (isNaN(lat) || !isFinite(lat) || isNaN(lng) || !isFinite(lng)) {
        return null;
      }
      switch (Math.floor((lng + 1.5) / 3)) {
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
      }

      var cgcs = proj4.defs(cgcsSystem);
      return proj4(wgs84, cgcs, [lng, lat]);
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
    window.alert("Please choose the CGCS band!");
    return null;
  }
  // Define input and output coordinate systems
  var wgs84 = proj4.defs("EPSG:4326");
  var cgcs = proj4.defs(cgcsSystem);

  // Convert WGS-84 to CGCS2000
  var wgsCoords = cgcsCoords
    .map((coords) => {
      var east = parseFloat(coords[0]);
      var north = parseFloat(coords[1]);
      if (isNaN(east) || !isFinite(east) || isNaN(north) || !isFinite(north)) {
        return null;
      }
      return proj4(cgcs, wgs84, [east, north]);
    })
    .filter((coords) => coords !== null)
    .map((coords) => coords.join(", "));
  // Set output values
  document.getElementById("wgsCoords").value = wgsCoords.join("\n");
}

function shadow_cgcs() {
  var ckbx = document.getElementById("wgs2cgcs_ck");
  var textarea = document.getElementById("cgcsCoords");
  var ckbk2 = document.getElementById("cgcs2wgs_ck");
  if (ckbx.checked == true) {
    textarea.readOnly = true;
    textarea.style.backgroundColor = "gray";
    ckbk2.checked = false;
    shadow_wgs();
  } else {
    textarea.readOnly = false;
    textarea.style.backgroundColor = "#eee";
  }
}
function shadow_wgs() {
  var ckbx = document.getElementById("cgcs2wgs_ck");
  var textarea = document.getElementById("wgsCoords");
  var ckbk2 = document.getElementById("wgs2cgcs_ck");
  if (ckbx.checked == true) {
    textarea.readOnly = true;
    textarea.style.backgroundColor = "gray";
    ckbk2.checked = false;
    shadow_cgcs();
  } else {
    textarea.readOnly = false;
    textarea.style.backgroundColor = "#eee";
  }
}
