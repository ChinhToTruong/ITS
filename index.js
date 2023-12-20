 // Dữ liệu mẫu
 var data = [
    { hoTen: "Nguyễn Văn A", sdt: "0123456789", loaiGiayTo: "CMND", soGiayTo: "123456789", taoLuc: "2021-12-01" },
    { hoTen: "Trần Thị B", sdt: "0987654321", loaiGiayTo: "Hộ chiếu", soGiayTo: "987654321", taoLuc: "2021-12-02" },
    { hoTen: "Trần Thị C", sdt: "0987654321", loaiGiayTo: "Hộ chiếu", soGiayTo: "987654321", taoLuc: "2021-12-02" },
    { hoTen: "Trần Thị D", sdt: "0987654321", loaiGiayTo: "Hộ chiếu", soGiayTo: "987654321", taoLuc: "2021-12-02" },
    { hoTen: "Trần Thị E", sdt: "0987654321", loaiGiayTo: "Hộ chiếu", soGiayTo: "987654321", taoLuc: "2021-12-02" },
    { hoTen: "Trần Thị F", sdt: "0987654321", loaiGiayTo: "Hộ chiếu", soGiayTo: "987654321", taoLuc: "2021-12-02" },
    { hoTen: "Trần Thị G", sdt: "0987654321", loaiGiayTo: "Hộ chiếu", soGiayTo: "987654321", taoLuc: "2021-12-02" },
    { hoTen: "Trần Thị H", sdt: "0987654321", loaiGiayTo: "Hộ chiếu", soGiayTo: "987654321", taoLuc: "2021-12-02" },
    { hoTen: "Trần Thị J", sdt: "0987654321", loaiGiayTo: "Hộ chiếu", soGiayTo: "987654321", taoLuc: "2021-12-02" },
    { hoTen: "Trần Thị K", sdt: "0987654321", loaiGiayTo: "Hộ chiếu", soGiayTo: "987654321", taoLuc: "2021-12-02" },
    { hoTen: "Trần Thị L", sdt: "0987654321", loaiGiayTo: "Hộ chiếu", soGiayTo: "987654321", taoLuc: "2021-12-02" }
      // Các dữ liệu khác...
    ];
  
    // Số mục hiển thị trên mỗi trang
    var itemsPerPage = 3;
    var currentPage = 1;
  
    // Hàm hiển thị dữ liệu trên trang cụ thể
    function displayData(page) {
      var startIndex = (page - 1) * itemsPerPage;
      var endIndex = startIndex + itemsPerPage;
      var pageData = data.slice(startIndex, endIndex);
  
      var dataContainer = document.getElementById("bodyTable");
      dataContainer.innerHTML = "";
  
      for (var i = 0; i < pageData.length; i++) {
        var row = document.createElement("tr");
  
        var hoTenCell = document.createElement("td");
        hoTenCell.textContent = pageData[i].hoTen;
        row.appendChild(hoTenCell);
  
        var sdtCell = document.createElement("td");
        sdtCell.textContent = pageData[i].sdt;
        row.appendChild(sdtCell);
  
        var loaiGiayToCell = document.createElement("td");
        loaiGiayToCell.textContent = pageData[i].loaiGiayTo;
        row.appendChild(loaiGiayToCell);
  
        var soGiayToCell = document.createElement("td");
        soGiayToCell.textContent = pageData[i].soGiayTo;
        row.appendChild(soGiayToCell);
  
        var taoLucCell = document.createElement("td");
        taoLucCell.textContent = pageData[i].taoLuc;
        row.appendChild(taoLucCell);
  
        var thaoTacCell = document.createElement("td");
        var link = document.createElement("a");
        link.href = "#"; // Thay đổi URL tùy ý
        link.textContent = "Xoa";
        thaoTacCell.appendChild(link);
        row.appendChild(thaoTacCell);

  
        dataContainer.appendChild(row);
      }
    }
  
  
    // Hiển thị trang đầu tiên khi tải trang
      displayData(currentPage);
  
  
      var nextPage = document.getElementById("nextBtn")
      nextPage.addEventListener("click", function() {
          if(currentPage * itemsPerPage < data.length)
          { 
              currentPage++;
              displayData(currentPage);
          }
      });
      
      var prePage = document.getElementById("preBtn")
      prePage.addEventListener("click", function() {
          if(currentPage > 1)
          { 
              currentPage--;
              displayData(currentPage);
          }
      });
  
  
function validate(){
    var inputs = document.getElementsByClassName("input-validate");
    var check = 0;

    for(var i = 0; i < inputs.length; i++){
        if(inputs[i].value == ""){
            check++;
            
        }
    }

    if(check > 0){
        alert("Nhap day du thong tin.")
    }
    if(check == 0){
        var close = document.getElementById("close-form-btn")
        close.setAttribute("data-bs-dismiss","modal")
    }else{
        var close = document.getElementById("close-form-btn")
        close.removeAttribute("data-bs-dismiss","modal")
    }
}

  