(() => {

  $(".nav-item").on('click', function () {
    const navTab = $(this).attr('data-tab');
    $(".nav-item").removeClass('on');
    $(".content").removeClass('on');

    $(this).addClass('on');
    $("#" + navTab).addClass('on');
  });
  $("#nav-list > li:first-child, #s1").addClass("on");


  // td:not(:last-child) li 클릭 시
  $("#empList table tbody td:not(:last-child)").on('click', function () {
    const thisTr = $(this).parents('tr');
    if (thisTr.hasClass('on') == true) {
      thisTr.removeClass('on');
      thisTr.find('input').prop('checked', false);
    } else {
      thisTr.addClass('on');
      thisTr.find('input').prop('checked', true);
    }
    if ($(".chk:checked").length == $(".chk").length) {
      $("#chkAll").prop('checked', true);
    } else {
      $("#chkAll").prop('checked', false);
    }
  });


  // All Check 클릭 시
  $("#chkAll").on('click', function () {
    if ($(this).is(':checked') == true) {
      $("input[name='empListChk']").prop('checked', true);
      $("#empList table tbody tr").addClass('on');
    } else {
      $("input[name='empListChk']").prop('checked', false);
      $("#empList table tbody tr").removeClass('on');
    }
  });

  // 각각 input 클릭 시
  $(".chk").change(function () {
    if ($(this).is(":checked") == true) {
      $(this).parents('tr').addClass('on');
    } else {
      $(this).parents('tr').removeClass('on');
    }

    if ($(".chk:checked").length == $(".chk").length) {
      $("#chkAll").prop('checked', true);
    } else {
      $("#chkAll").prop('checked', false);
    }
  });


  const checkModal = document.getElementById('nameCheckModal');

  function close() {
    checkModal.style.display = 'none';
  }

  function addEmpRow() {
    const empNum = document.getElementById('empNum').value;
    const empPosition = document.getElementById('empPosition').value;
    const empName = document.getElementById('empName').value;
    const empPhone = document.getElementById('empPhone').value;
    const empEmail = document.getElementById('empEmail').value;
    const tbody = document.getElementById('listContent'); // tbody 객체 가져오기
    const newRow = tbody.insertRow(); // row 추가하기

    var newCell0 = newRow.insertCell(0);
    var newCell1 = newRow.insertCell(1);
    var newCell2 = newRow.insertCell(2);
    var newCell3 = newRow.insertCell(3);
    var newCell4 = newRow.insertCell(4);
    var newCell5 = newRow.insertCell(5);
    var newCell6 = newRow.insertCell(6);

    newCell0.innerHTML = '<td><input type="checkbox" class="chk" name="empListChk"></td>';
    newCell1.innerHTML = '<td class="listNum">' + empNum + '</td>';
    newCell2.innerHTML = '<td class="listPosition">' + empPosition + '</td>';
    newCell3.innerHTML = '<td class="listName">' + empName + '</td>';
    newCell4.innerHTML = '<td class="listPhone">' + empPhone + '</td>';
    newCell5.innerHTML = '<td class="listEmail">' + empEmail + '</td>';
    newCell6.innerHTML = '<td><button type="button" class="btn">수정</button></td>';

    checkModal.style.display = 'none';
    alert('저장 되었습니다');
  }

  function delEmpRow() {
    const tbody = document.getElementById('listContent');
    const rowCnt = tbody.rows.length;

    for (let i = 0; i < rowCnt; i++) {
      const row = tbody.rows[i];
      const chkBox = row.cells[0].childNodes[0];
      console.log(row.cells[0].childNodes[0].checked);

      if(chkBox != null && chkBox.checked == true){
        tbody.deleteRow(i);
        // rowCnt--;
        i--;
      }
    }
  }

  const addRowBtn = document.getElementById('addRowBtn');
  const closeBtn = document.getElementById('closeBtn');
  const delRowBtn = document.getElementById('delRowBtn');

  delRowBtn.addEventListener('click', delEmpRow);
  addRowBtn.addEventListener('click', () => {
    addEmpRow();
  });
  closeBtn.addEventListener('click', close);

})();