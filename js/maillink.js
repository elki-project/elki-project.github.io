for(var V=document.getElementsByTagName("span"),W=V.length-1;W>=0;W--) {
  if(0 <= V[W].className.indexOf("maillink")) {
    var X = V[W], Y = X.firstChild.nodeValue.match(/\s*((?:.|\n)*\S)\s*[\("\[{|](?:.|\n)*[}"\)\]|]\s*((?:.|\n)*\S)\s*/), Z = Y[1].replace(/[^a-zA-Z0-9_\.\+\-]+/g, "") + "@" + Y[2].replace(/[^a-z0-9\.\-]+/g, "."), U = document.createElement("a");
    U.appendChild(document.createTextNode(Z));
    U.setAttribute("href", "mailto:" + Z);
    X.parentNode.replaceChild(U, X);
  }
}
