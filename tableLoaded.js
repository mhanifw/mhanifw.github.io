//tableLoaded function: To create objects on every row after loadTable

function tableLoaded(t) {
  let rows = t.getRows();
  for (let i = 0; i < rows.length; i++){

//create a runner dictionary for every rows
  let marathon = new runner(rows[i]);
  runnerList.push(marathon);
  }
  runnerCount = runnerList.length;
}
