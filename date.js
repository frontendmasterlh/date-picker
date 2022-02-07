(function (){
  let datepicker = {}
  // 获取某年某月的日期数据
  datepicker.getMonthData = function (year, month) {
    // 定义一个res数组，用来返回结果
    let res = []

    let today = new Date()
    year = year || today.getFullYear()
    month = month || today.getMonth() + 1
    
    let firstDay = new Date(year, month - 1, 1)  
    let firstDayWeekDay = firstDay.getDay() 
    if(firstDayWeekDay === 0) firstDayWeekDay = 7

    //  以当月第一天这个日期对象 获取年和月，防止处理越界
    year = firstDay.getFullYear()
    month = firstDay.getMonth() + 1

    let lastDayOfLastMonth = new Date(year, month - 1, 0)
    let lastDateOfLastMonth = lastDayOfLastMonth.getDate()

    let prevMonthDayCount = firstDayWeekDay - 1

    let lastDay = new Date(year,month,0)
    let lastDate = lastDay.getDate()

    for(let i = 0; i < 7 * 6; i++){
      let date = i + 1 - prevMonthDayCount
      let showDate = date
      let thisMonth = month

      if(date <= 0){
        showDate = lastDateOfLastMonth + date
        thisMonth = month - 1
      }else if(date > lastDate){
        showDate = date - lastDate
        thisMonth = month + 1
      }

      if(thisMonth === 0) thisMonth = 12
      if(thisMonth === 13) thisMonth = 1

      res.push({
        date: date,
        showDate: showDate,
        month: thisMonth
      })
    }
    return {
      year: year,
      month: month,
      days: res
    }
  }
  window.datepicker = datepicker
})();