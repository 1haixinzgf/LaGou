function searchNotes(data, value ,aData) {
   aData = [];
    var aSearch = value.split(' ');
  var  k = 0;
  var  regStr = '';
  var  reg;
  for (var r = 0, lenR = aSearch.length; r < lenR; r++) {
    regStr += '(' + aSearch[r] + ')([\\s\\S]*)';
  }
  reg = new RegExp(regStr);
  for (var i = 0, lenI = data.length; i < lenI; i++) {
    var title = data[i].Title,
      regMatch = title.match(reg),
      searchData = {};
    k = 0;
    if (regMatch !== null) {
      var replaceReturn = "";
      for (var j = 1, lenJ = regMatch.length; j < lenJ; j++) {
        if (regMatch[j] === aSearch[k]) {
          replaceReturn += '<span style="color:#2aca97;">$' + j + '</span>';
          k++;
        } else {
          replaceReturn += '$' + j;
        }
      }
      for (var obj in data[i]) {
        if (data[i].hasOwnProperty(obj)) {
          searchData[obj] = data[i][obj];
        }
      }
      searchData.Title = searchData.Title.replace(reg, replaceReturn);//.replace(reg, replaceReturn);  
      aData.push(searchData);
    }
  }
  return aData;
}  
export default searchNotes