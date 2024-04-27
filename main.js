function opentab(evt, tab) {
    // Declare all variables
    let i, tabcontent, tablinks
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent")
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none"
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks")
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "")
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tab).style.display = "block"
    evt.currentTarget.className += " active"
}

function inputdata() {
    // Menangkap nilai dari form
    data = [{
        nama : document.forms['datapribadi']['nama'].value.toUpperCase(),
        umur : document.forms['datapribadi']['umur'].value,
        uangsaku : document.forms['datapribadi']['uangsaku'].value,
    }]
    
    // Menyiapkan kode manipulasi isi
    let tabel = document.getElementById("dataisi")

    // Loop melalui data dan tambahkan ke dalam tbody
    data.forEach(function(item) {

        // Mengecek data sesuai kriteria
        if (item.nama.length >= 10 && item.umur >=25 && item.uangsaku >= 100000 && item.uangsaku <= 1000000) {
       
            // Buat elemen baris <tr>
            let row = document.createElement("tr")
        
            // Buat elemen sel <td> untuk setiap properti data
            let cellnama = document.createElement("td")
            cellnama.textContent = item.nama
            let cellumur = document.createElement("td")
            cellumur.textContent = item.umur
            let celluangsaku = document.createElement("td")
            celluangsaku.textContent = item.uangsaku
        
            // Sisipkan sel ke dalam baris
            row.appendChild(cellnama)
            row.appendChild(cellumur)
            row.appendChild(celluangsaku)

            // Sisipkan baris ke dalam tbody
            tabel.appendChild(row)

            // Menjalankan fungsi average umur dan uang saku
            calculateAverageAge()
            calculateAverageUangsaku()

            alert("Anda telah terdaftar.")
        }else{
            alert('Data tidak valid, toiong dicek kembali!')
        }
    })
  }

function calculateAverageAge() {
    let agecells = document.querySelectorAll('#dataisi td:nth-child(2)') // Get all cells in the second column (umur)
    let totalage = 0
    let numentries = 0

    // Loop through each age cell
    agecells.forEach(function(cell) {
        let age = parseInt(cell.textContent) // Get age value and convert to integer
        if (!isNaN(age)) {
            totalage += age // Add age to total
            numentries++ // Increment number of entries
        }
    });

    // Calculate average age
    let average = totalage / numentries

    // Display average age
    document.getElementById('averageage').textContent = average.toFixed(1) // Display average with 2 decimal places
}

function calculateAverageUangsaku() {
    let uangsakucells = document.querySelectorAll('#dataisi td:nth-child(3)') // Get all cells in the third column (uang saku)
    let totaluangsaku = 0
    let numentries = 0

    // Loop through each uangsaku cell
    uangsakucells.forEach(function(cell) {
        let uangsaku = parseInt(cell.textContent) // Get uangsaku value and convert to integer
        if (!isNaN(uangsaku)) {
            totaluangsaku += uangsaku // Add uangsaku to total
            numentries++ // Increment number of entries
        }
    });

    // Calculate average uangsaku
    let average = totaluangsaku / numentries

    // Display average uangsaku
    document.getElementById('averageuangsaku').textContent = average.toFixed(1) // Display average with 2 decimal places
}