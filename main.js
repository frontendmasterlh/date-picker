(function () {
  let datepicker = window.datepicker;
  let monthData;

  // 构建渲染到页面上的字符数据
  datepicker.buildUI = function (year, month) {
    monthData = datepicker.getMonthData(year, month)
    let html = `
    <div class="ui-datepicker-header">
      <a href="#" class="ui-datepicker-btn ui-datepicker-prev-btn">&lt;</a>
      <a href="#" class="ui-datepicker-btn ui-datepicker-next-btn">&gt;</a>
      <span class="ui-datepicker-curr-month">${monthData.year}-${monthData.month}</span>
    </div>
    <div class="ui-datepicker-body">
      <table>
        <thead>
          <tr>
            <th>一</th>
            <th>二</th>
            <th>三</th>
            <th>四</th>
            <th>五</th>
            <th>六</th>
            <th>日</th>
          </tr>
        </thead>
        <tbody>`;

    for (let i = 0; i < monthData.days.length; i++) {
      let date = monthData.days[i];
      if (i % 7 === 0) html += "<tr>";
      html += `<td>${date.showDate}</td>`;
      if (i % 7 === 6) html += "</tr>";
    }
    html += `</tbody></table></div>`;
    return html;
  };

  datepicker.render = function () {
    let year = monthData ? monthData.year : undefined;
    let month = monthData ? monthData.month : undefined;

    let html = datepicker.buildUI(year, month)
    $wrapper = document.querySelector('.ui-datepicker-wrapper')
    if(!$wrapper){
      $wrapper = document.createElement('div')
      document.body.appendChild($wrapper)
      $wrapper.classList.add('ui-datepicker-wrapper')
    }
    $wrapper.innerHTML = html
  }

  datepicker.init = function () {
    datepicker.render()
  }
})();
